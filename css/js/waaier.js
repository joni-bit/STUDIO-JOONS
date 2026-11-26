/* Emblemen-waaier: een hand die een waaier patches vasthoudt (Patches-pagina).
   Wordt op project.html aangemaakt door het blok { type: "fan" } in projects.js
   en daarna gestart met window.initWaaier().
   Markup:
     <div data-waaier-caption aria-live="polite"></div>
     <div class="waaier" data-waaier data-bleed="right" data-shift="0.2"
          data-hand="…/hand.svg" data-emblemen="…/emblemen.json"></div>

   hand.svg   = Illustrator-export met de groepen id="Hand" en id="Duim".
   emblemen.json = lijst van emblemen, van ACHTER naar VOOR (zie voorbeeld).
   Werkt alleen via een webserver (http/https), niet door het bestand
   rechtstreeks te openen (file://), omdat de bestanden met fetch worden geladen.
*/
(() => {
  /* ---------- instellingen (in de coördinaten van hand.svg) ---------- */
  const SLOTS = [                 // posities van de waaier, links/achter → rechts/voor
    { x: -21, y:   6, a: -19 },
    { x:  64, y: -39, a:  -8 },
    { x: 159, y: -69, a:   0 },
    { x: 274, y: -39, a:  10 },
  ];
  const BREEDTE    = 200;         // standaardbreedte van een embleem (per embleem te overschrijven)
  const PIVOT      = { x: 84, y: 51 };      // waar duim en vingers de stapel vastknijpen
  const DUIM_DRAAI = '494px 226px';         // draaipunt van de duim
  const HOVER_UIT  = 26;
  const LIFT_UIT   = 150;
  const LIFT_MS    = 260;
  const SHIFT_MS   = 450;
  const DUIM_LOS   = 2;           // graden omhoog bij klikken
  const DUIM_HOVER = 0.4;         // graden omhoog bij hover
  const INTRO_DREMPEL = 0.35;     // deel van de sectie dat zichtbaar moet zijn voor de intro start
  const VIEWBOX   = '-160 -230 877.77 784.69';  // ruimte boven/links voor de emblemen
  /* ------------------------------------------------------------------ */

  const NS = 'http://www.w3.org/2000/svg';
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Slot k van n: verdeelt n emblemen gelijkmatig over de getekende waaier.
  function slotAt(k, n) {
    if (n === 1) return SLOTS[SLOTS.length - 1];
    const t = k / (n - 1) * (SLOTS.length - 1);
    const i = Math.min(Math.floor(t), SLOTS.length - 2), f = t - i;
    const A = SLOTS[i], B = SLOTS[i + 1];
    return { x: A.x + (B.x - A.x) * f, y: A.y + (B.y - A.y) * f, a: A.a + (B.a - A.a) * f };
  }

  async function init(root) {
    if (root.dataset.waaierReady) return;
    root.dataset.waaierReady = '1';
    const base = new URL(root.dataset.emblemen, location.href);
    const [handTxt, data] = await Promise.all([
      fetch(root.dataset.hand).then(r => r.text()),
      fetch(base).then(r => r.json()),
    ]);
    root.innerHTML = handTxt;
    const svg = root.querySelector('svg');
    // data-shift="0.2" schuift de hand 20% naar rechts (de arm loopt verder het scherm uit)
    const vb = VIEWBOX.split(/\s+/).map(Number);
    if (innerWidth > 800) vb[0] -= vb[2] * (parseFloat(root.dataset.shift) || 0);   // niet op telefoon
    svg.setAttribute('viewBox', vb.join(' '));
    svg.removeAttribute('width'); svg.removeAttribute('height');
    svg.setAttribute('aria-hidden', 'true');

    const hand  = svg.querySelector('#Hand');
    const thumb = svg.querySelector('#Duim');
    thumb.classList.add('waaier-duim');
    thumb.style.transformOrigin = DUIM_DRAAI;

    const caption = root.parentElement.querySelector('[data-waaier-caption]')
                 || document.querySelector('[data-waaier-caption]');
    const lijst = data.emblemen || data;
    const n = lijst.length;
    const slots = lijst.map((_, k) => slotAt(k, n));

    // Emblemen als losse <image>-lagen tussen hand en duim, rechtop rond (0,0) getekend.
    const cards = lijst.map(info => {
      const w = info.breedte || BREEDTE;
      const h = info.hoogte || w;
      const g = document.createElementNS(NS, 'g');
      g.classList.add('waaier-kaart');
      const img = document.createElementNS(NS, 'image');
      img.setAttribute('href', new URL(info.src, base).href);
      img.setAttribute('x', -w / 2); img.setAttribute('y', -h / 2);
      img.setAttribute('width', w);  img.setAttribute('height', h);
      g.appendChild(img);
      g._info = info;
      thumb.parentNode.insertBefore(g, thumb);
      return g;
    });

    let order = [...cards], hovered = null, busy = false, thumbRest = 0;

    const outward = (s, d) => {
      const vx = s.x - PIVOT.x, vy = s.y - PIVOT.y, l = Math.hypot(vx, vy) || 1;
      return { x: vx / l * d, y: vy / l * d };
    };
    const place = (el, s, p = { x: 0, y: 0 }) =>
      el.style.transform = `translate(${s.x + p.x}px, ${s.y + p.y}px) rotate(${s.a}deg)`;
    const layout = () => order.forEach((el, k) => {
      place(el, slots[k], el === hovered ? outward(slots[k], HOVER_UIT) : undefined);
      el.classList.toggle('is-hover', el === hovered);
    });
    // Alle bijschriften staan op dezelfde plek op elkaar (CSS-grid), alleen de actieve is zichtbaar.
    // Zo is het bijschrift altijd zo hoog als het langste, en verspringen hand en pagina niet.
    const live = document.createElement('div');
    live.className = 'waaier-sr'; live.setAttribute('aria-live', 'polite');
    if (caption) {
      caption.removeAttribute('aria-live');
      caption.setAttribute('aria-hidden', 'true');
      caption.classList.add('waaier-caption');
      caption.innerHTML = '';
      cards.forEach(c => {
        const item = document.createElement('div');
        item.className = 'waaier-cap';
        const t = document.createElement('strong'); t.textContent = c._info.titel || '';
        const p = document.createElement('span');   p.textContent = c._info.tekst || '';
        item.append(t, p);
        c._cap = item;
        caption.append(item);
      });
      caption.after(live);
    }
    const showCaption = () => {
      const active = hovered ?? order.at(-1);
      cards.forEach(c => c._cap && c._cap.classList.toggle('is-actief', c === active));
      const { titel = '', tekst = '' } = active._info;
      if (live.textContent !== `${titel}. ${tekst}`) live.textContent = `${titel}. ${tekst}`;
      root.setAttribute('aria-label', `Patch: ${titel}. Activate to show the next patch.`);
    };
    const duim = (frames, ms, easing = 'cubic-bezier(.3,.7,.3,1)') => !reduce &&
      thumb.animate(frames, { duration: ms, easing, fill: 'forwards' });

    function duimHover(on) {
      if (busy) return;
      const to = on ? DUIM_HOVER : 0;      // positief = duimtop omhoog
      duim([{ transform: `rotate(${thumbRest}deg)` }, { transform: `rotate(${to}deg)` }], 300);
      thumbRest = to;
    }

    async function volgende() {
      if (busy || n < 2) return;
      busy = true; hovered = null;
      const top = order.at(-1);
      // Vingerflik: duimtop snel omhoog (positief = omhoog), heel even vasthouden terwijl
      // de patch wegschiet, dan snel terug naar beneden met een klein naveren.
      duim([
        { transform: `rotate(${thumbRest}deg)`, offset: 0, easing: 'cubic-bezier(.2,.8,.3,1)' },
        { transform: `rotate(${DUIM_LOS}deg) translate(0px, -2px)`, offset: .2 },
        { transform: `rotate(${DUIM_LOS}deg) translate(0px, -2px)`, offset: .4, easing: 'cubic-bezier(.6,0,1,1)' },
        { transform: 'rotate(-0.4deg)', offset: .6, easing: 'cubic-bezier(.2,.8,.3,1)' },
        { transform: 'rotate(0deg)', offset: 1 },
      ], 560, 'linear');
      thumbRest = 0;

      layout();
      place(top, slots.at(-1), outward(slots.at(-1), LIFT_UIT));
      await wait(reduce ? 0 : LIFT_MS);
      top.parentNode.insertBefore(top, order[0]);     // achteraan in de stapel
      order = [top, ...order.slice(0, -1)];
      top.getBoundingClientRect();
      layout(); showCaption();
      await wait(reduce ? 0 : SHIFT_MS);
      busy = false;
    }

    cards.forEach(el => {
      el.addEventListener('pointerenter', e => {
        if (busy || e.pointerType === 'touch') return;
        hovered = el; layout(); showCaption(); duimHover(true);
      });
      el.addEventListener('pointerleave', () => {
        if (hovered !== el) return;
        hovered = null; if (!busy) layout(); showCaption(); duimHover(false);
      });
    });
    root.setAttribute('role', 'button');
    root.tabIndex = 0;
    root.addEventListener('click', volgende);
    root.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); volgende(); }
    });

    // Eerst zonder animatie op hun plek zetten.
    cards.forEach(c => c.style.transition = 'none');
    layout(); showCaption();
    svg.getBoundingClientRect();
    cards.forEach(c => c.style.transition = '');

    // Tot de rechterrand van het scherm doorlopen (data-bleed="right"),
    // ongeacht de marges/padding van de pagina eromheen.
    if (root.dataset.bleed === 'right') {
      const col = root.parentElement;
      const bleed = () => {
        const gap = document.documentElement.clientWidth - col.getBoundingClientRect().right;
        root.style.marginRight = `${-Math.max(0, gap)}px`;
      };
      bleed();
      addEventListener('resize', bleed);
    }

    // Intro: hand schuift van rechts in beeld zodra de sectie voor ~35% zichtbaar is (één keer).
    if (!reduce && 'IntersectionObserver' in window) {
      root.classList.add('waaier--intro');
      root.getBoundingClientRect();
      const io = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) { root.classList.add('is-in'); io.disconnect(); }
      }, { threshold: INTRO_DREMPEL });
      io.observe(root.closest('.waaier-sectie, .patches-intro') || root.parentElement);
    }

    // Alt-teksten als verborgen lijst voor schermlezers / zoekmachines.
    const ul = document.createElement('ul');
    ul.className = 'waaier-sr';
    lijst.forEach(i => { const li = document.createElement('li'); li.textContent = i.alt || i.titel || ''; ul.append(li); });
    root.after(ul);
  }

  const start = () => document.querySelectorAll('[data-waaier]').forEach(r =>
    init(r).catch(err => console.error('Emblemen-waaier kon niet laden:', err)));
  window.initWaaier = start;   // project.html roept dit aan nadat de blokken zijn gerenderd
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
