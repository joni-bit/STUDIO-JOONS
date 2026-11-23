// Brand in daily use — rolodex scroll (prototype)
(function () {
  const body = document.body;
  const brands = [...document.querySelectorAll('.bs-brand')];
  const colourBlocks = [...document.querySelectorAll('[data-bg]')];
  const radio = document.querySelector('.bs-radio');
  const stations = [...radio.querySelectorAll('.bs-station')];
  const knob = radio.querySelector('.bs-knob');
  const ANGLES = stations.map(b => parseFloat(b.style.getPropertyValue('--a')));
  const pop = document.querySelector('.bs-pop');
  const popImg = pop.querySelector('img');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  const STEP = 24;      // degrees between cards on the wheel
  const VISIBLE = 4;    // how many cards you still see on each side

  function setColours() {
    const mid = window.innerHeight * 0.5;
    let active = colourBlocks[0];
    colourBlocks.forEach(el => { const r = el.getBoundingClientRect(); if (r.top <= mid && r.bottom > mid) active = el; });
    body.style.setProperty('--bg', active.dataset.bg);
    body.style.setProperty('--ink', active.dataset.ink);
    const i = brands.indexOf(active);
    radio.classList.toggle('is-on', i >= 0);
    stations.forEach(b => b.setAttribute('aria-current', i >= 0 && b.dataset.target === active.id ? 'true' : 'false'));
    if (i >= 0) {
      // Knob points at the station, drifting a little while you scroll through it (like fine-tuning)
      const r = active.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - window.innerHeight), 0, 1);
      knob.style.setProperty('--knob', `${ANGLES[i] + (p - 0.5) * 16}deg`);
    }
  }

  function frame() {
    setColours();
    if (reduce) return;
    const vh = window.innerHeight;
    brands.forEach(sec => {
      const r = sec.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - vh), 0, 1);       // 0 → 1 while this brand is pinned
      const cards = sec.querySelectorAll('.bs-card');
      const f = p * (cards.length - 1);                        // which card faces you right now
      cards.forEach((card, i) => {
        const d = i - f;                                       // + = still coming, – = already flipped past
        const angle = d * STEP;
        const fade = 1 - clamp((Math.abs(d) - 1) / VISIBLE, 0, 1);
        card.style.transform = `rotateX(${angle}deg) translateZ(var(--radius))`;
        card.style.opacity = String(0.25 + 0.75 * fade);
        card.style.pointerEvents = Math.abs(d) < 2.5 ? 'auto' : 'none';
        card.tabIndex = Math.abs(d) < 0.5 ? 0 : -1;
        card.style.zIndex = String(100 - Math.round(Math.abs(d) * 10));
      });
    });
  }

  let ticking = false;
  const onScroll = () => {
    if (pop.classList.contains('is-open')) closePop();
    if (!ticking) { ticking = true; requestAnimationFrame(() => { frame(); ticking = false; }); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  frame();

  // ---- Radio: click a station (or the knob for the next one) to tune in ----
  const tuneTo = (id) => {
    const sec = document.getElementById(id);
    const i = brands.indexOf(sec);
    knob.style.setProperty('--knob', `${ANGLES[i]}deg`);
    window.scrollTo({ top: sec.offsetTop + 2, behavior: reduce ? 'auto' : 'smooth' });
  };
  stations.forEach(b => b.addEventListener('click', () => tuneTo(b.dataset.target)));
  knob.addEventListener('click', () => {
    const cur = stations.findIndex(b => b.getAttribute('aria-current') === 'true');
    tuneTo(stations[(cur + 1) % stations.length].dataset.target);
  });

  // ---- Pull a card out: hover 1 second, or click / Enter ----
  let timer = null;
  function openPop(card) {
    const img = card.querySelector('img');
    popImg.src = img.currentSrc || img.src;
    popImg.alt = img.alt;
    pop.classList.add('is-open');
    pop.setAttribute('aria-hidden', 'false');
  }
  function closePop() {
    pop.classList.remove('is-open');
    pop.setAttribute('aria-hidden', 'true');
  }
  document.querySelectorAll('.bs-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-arming');
      timer = setTimeout(() => { card.classList.remove('is-arming'); openPop(card); }, 1000);
    });
    card.addEventListener('mouseleave', () => { clearTimeout(timer); card.classList.remove('is-arming'); });
    card.addEventListener('click', () => { clearTimeout(timer); card.classList.remove('is-arming'); openPop(card); });
  });
  pop.addEventListener('click', closePop);
  pop.addEventListener('mouseleave', closePop);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePop(); });
})();
