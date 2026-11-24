/*
  HTML5 banner sets — each campaign shown in a sketch of a web page, banners in their real slots.
  Content lives in banners-data.js. Used by the { type: "banners" } block in projects.js.
*/
(function () {
  const PAGE = 1120;   // design width of the page sketch, in px — banners sit in it at their real size

  const parse = (size) => { const [w, h] = String(size).toLowerCase().split('x').map(Number); return { w, h }; };
  const shape = ({ w, h }) => (w / h >= 3 ? 'wide' : h / w >= 1.5 ? 'tall' : 'box');

  // One banner at its real size. With src: an iframe that loads once the set comes into view.
  const slot = (b, i) => {
    const { w, h } = parse(b.size);
    const inner = b.src
      ? `<iframe data-src="${b.src}" width="${w}" height="${h}" title="Banner ${w} × ${h}" scrolling="no" loading="lazy"
           sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`
      : `<div class="bn-empty" style="--i:${i}"><span class="bn-wipe"></span><span class="bn-size">${w} × ${h}</span></div>`;
    return `<div class="bn-fit" data-w="${w}" data-h="${h}"><div class="bn-slot" style="width:${w}px;height:${h}px">${inner}</div></div>`;
  };

  // Grey stand-ins for the page's own content
  const lines = (n, last = 60) => Array.from({ length: n }, (_, k) => `<i class="bn-line"${k === n - 1 ? ` style="width:${last}%"` : ''}></i>`).join('');

  const setHTML = (s, n) => {
    const byShape = { wide: [], box: [], tall: [] };
    const PLACE = { top: 'wide', inline: 'box', side: 'tall' };
    s.set.forEach((b, i) => byShape[PLACE[b.place] || shape(parse(b.size))].push(slot(b, i)));
    const more = s.more || [];
    return `
      <div class="bn-set" data-tint="${s.tint || 'blue'}" data-n="${n}">
        <div class="bn-browser" aria-hidden="false">
          <div class="bn-bar"><i></i><i></i><i></i><span class="bn-url"></span></div>
          <div class="bn-viewport">
            <div class="bn-page" style="width:${PAGE}px">
              <header class="bn-site"><i class="bn-logo"></i><span class="bn-nav">${lines(5)}</span></header>
              ${byShape.wide.length ? `<div class="bn-top">${byShape.wide.join('')}</div>` : ''}
              <div class="bn-cols">
                <article class="bn-article">
                  <i class="bn-kicker"></i>
                  <i class="bn-title"></i><i class="bn-title" style="width:55%"></i>
                  <div class="bn-photo"></div>
                  <div class="bn-text">${lines(4, 70)}</div>
                  ${byShape.box.length ? `<div class="bn-inline">${byShape.box.join('')}</div>` : ''}
                  <div class="bn-text">${lines(5, 40)}</div>
                </article>
                <aside class="bn-side">
                  ${byShape.tall.join('')}
                  <div class="bn-teaser"><div class="bn-thumb"></div>${lines(2, 70)}</div>
                  <div class="bn-teaser"><div class="bn-thumb"></div>${lines(2, 50)}</div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div class="bn-foot">
          <p class="bn-label"><strong>${s.title || ''}</strong>${s.caption ? `<span>${s.caption}</span>` : ''}</p>
          <div class="bn-actions">
            <button type="button" class="bn-btn" data-act="replay">Replay</button>
            ${more.length ? `<button type="button" class="bn-btn" data-act="more" aria-expanded="false">All formats (${s.set.length + more.length})</button>` : ''}
          </div>
        </div>
        ${more.length ? `<div class="bn-more" hidden>${more.map((b, i) => `<figure>${slot(b, i)}<figcaption>${b.size.replace('x', ' × ')}</figcaption></figure>`).join('')}</div>` : ''}
      </div>`;
  };

  // Scale the page sketch (and any banner too wide for its spot) to the space available
  function fit(set) {
    const vp = set.querySelector('.bn-viewport');
    const page = set.querySelector('.bn-page');
    const stacked = set.clientWidth < 720;
    set.classList.toggle('is-stacked', stacked);
    if (stacked) { page.style.transform = ''; page.style.width = ''; vp.style.height = ''; }
    else {
      const s = Math.min(1, vp.clientWidth / PAGE);
      page.style.width = `${Math.max(PAGE, vp.clientWidth)}px`;   // wider screens: the sketch fills the window, banners stay real size
      page.style.transform = s < 1 ? `scale(${s})` : '';
      vp.style.height = `${page.offsetHeight * s}px`;
    }
    set.querySelectorAll(stacked ? '.bn-fit' : '.bn-more .bn-fit').forEach(f => {
      const w = +f.dataset.w, h = +f.dataset.h;
      const room = f.parentElement.clientWidth || w;
      const s = Math.min(1, room / w);
      f.style.width = `${w * s}px`; f.style.height = `${h * s}px`;
      f.firstElementChild.style.transform = s < 1 ? `scale(${s})` : '';
    });
    if (!stacked) set.querySelectorAll('.bn-page .bn-fit').forEach(f => { f.style.width = f.style.height = ''; f.firstElementChild.style.transform = ''; });
  }

  // Start every banner of the set at the same moment
  function play(scope) {
    scope.querySelectorAll('iframe[data-src]').forEach(f => { f.src = f.dataset.src; });
    scope.querySelectorAll('.bn-empty').forEach(e => { e.classList.remove('is-playing'); void e.offsetWidth; e.classList.add('is-playing'); });
  }

  window.initBanners = function () {
    document.querySelectorAll('.bn-wall').forEach(wall => {
      if (wall.dataset.ready || typeof bannerSets === 'undefined') return;
      wall.dataset.ready = '1';
      wall.innerHTML = bannerSets.map(setHTML).join('');
      const sets = [...wall.querySelectorAll('.bn-set')];

      const ro = new ResizeObserver(entries => entries.forEach(e => fit(e.target)));
      sets.forEach(s => { fit(s); ro.observe(s); });

      const io = new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.played) { e.target.dataset.played = '1'; play(e.target.querySelector('.bn-browser')); }
      }), { threshold: 0.35 });
      sets.forEach(s => io.observe(s));

      wall.addEventListener('click', e => {
        const btn = e.target.closest('.bn-btn'); if (!btn) return;
        const set = btn.closest('.bn-set');
        if (btn.dataset.act === 'replay') {
          play(set.querySelector('.bn-browser'));
          const more = set.querySelector('.bn-more'); if (more && !more.hidden) play(more);
        } else {
          const more = set.querySelector('.bn-more');
          more.hidden = !more.hidden;
          btn.setAttribute('aria-expanded', String(!more.hidden));
          btn.textContent = more.hidden ? `All formats (${set.querySelectorAll('.bn-fit').length})` : 'Fewer formats';
          if (!more.hidden) { fit(set); play(more); }
        }
      });
    });
  };

  if (document.readyState !== 'loading') initBanners(); else document.addEventListener('DOMContentLoaded', initBanners);
})();
