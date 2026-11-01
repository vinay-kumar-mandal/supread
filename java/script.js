(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Ctrl/Cmd + K ---------- */
  const searchInput = $('#searchInput');
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === 'Escape') {
      searchInput.blur();
      closeSidebar();
      closeVer();
    }
  });

  /* ---------- Sidebar collapsible groups ---------- */
  const setHeight = (grp, open) => {
    const sub = $('.sub', grp);
    sub.style.maxHeight = open ? sub.scrollHeight + 'px' : '0px';
  };
  $$('.grp').forEach((grp) => {
    setHeight(grp, true); // all open by default
    $('.grp-btn', grp).addEventListener('click', (e) => {
      const open = !grp.classList.contains('open');
      grp.classList.toggle('open', open);
      e.currentTarget.setAttribute('aria-expanded', open);
      setHeight(grp, open);
    });
  });
  window.addEventListener('resize', () =>
    $$('.grp.open').forEach((g) => setHeight(g, true))
  );

  // active child link
  $$('.sub a').forEach((a) =>
    a.addEventListener('click', () => {
      $$('.sub a').forEach((x) => x.classList.remove('active'));
      a.classList.add('active');
      closeSidebar();
    })
  );

  /* ---------- Mobile drawer ---------- */
  const sidebar = $('#sidebar');
  const overlay = $('#overlay');
  const menuBtn = $('#menuBtn');
  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    menuBtn.classList.add('open');
  }
  function closeSidebar() {
    if (matchMedia('(min-width:1024px)').matches) return;
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    menuBtn.classList.remove('open');
  }
  menuBtn.addEventListener('click', () =>
    sidebar.classList.contains('-translate-x-full') ? openSidebar() : closeSidebar()
  );
  overlay.addEventListener('click', closeSidebar);

  /* ---------- Version dropdown ---------- */
  const verBtn = $('#verBtn');
  const verMenu = $('#verMenu');
  function closeVer() { verMenu.classList.add('hidden'); }
  verBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    verMenu.classList.toggle('hidden');
  });
  $$('li', verMenu).forEach((li) =>
    li.addEventListener('click', () => {
      $('#verLabel').textContent = li.textContent;
      closeVer();
    })
  );
  document.addEventListener('click', closeVer);

  /* ---------- Copy ---------- */
  const copyBtn = $('#copyBtn');
  const copyLabel = $('#copyLabel');
  copyBtn.addEventListener('click', async () => {
    const text = $$('#code .t').map((t) => t.textContent).join('\n');
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    copyLabel.textContent = 'Copied!';
    setTimeout(() => (copyLabel.textContent = 'Copy'), 1600);
  });

  /* ---------- Run (terminal mimicry) ---------- */
  const runBtn = $('#runBtn');
  const runLabel = $('#runLabel');
  const out = $('#out');
  const ide = $('#ide');
  let running = false;
  runBtn.addEventListener('click', () => {
    if (running) return;
    running = true;
    runBtn.classList.add('running');
    runLabel.textContent = 'Running';
    out.classList.add('loading'); // fade current output away, show "Running..."
    ide.classList.remove('flash');
    void ide.offsetWidth;
    ide.classList.add('flash'); // brief loading flash
    setTimeout(() => {
      out.classList.remove('loading'); // output fades back in
      runBtn.classList.remove('running');
      runLabel.textContent = 'Run';
      running = false;
    }, 900);
  });

  /* ---------- Scroll reveal ---------- */
  const reveals = $$('.reveal');
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('show');
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.1 }
  );
  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 70, 350)}ms`;
    io.observe(el);
  });
  setTimeout(() => reveals.forEach((el) => (el.style.transitionDelay = '')), 2000);

  /* ---------- "On this page" scroll-spy ---------- */
  const tocLinks = $$('.toc');
  const map = new Map(tocLinks.map((a) => [a.dataset.t, a]));
  const setActive = (id) => {
    tocLinks.forEach((a) => {
      const on = a.dataset.t === id;
      const top = a.classList.contains('flex'); // top-level entries
      a.classList.toggle('text-violet-300', on && top);
      a.classList.toggle('text-white', on && !top);
      a.classList.toggle('text-slate-400', !on && !top);
      a.classList.toggle('text-slate-300', !on && top);
      const dot = $('.dot', a);
      if (dot) dot.style.opacity = on ? 1 : 0;
    });
  };
  const spy = new IntersectionObserver(
    (entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis.length) setActive(vis[0].target.id);
    },
    { rootMargin: '-80px 0px -60% 0px' }
  );
  [...map.keys()].forEach((id) => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });
})();
