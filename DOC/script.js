(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- logos (inline SVG, 48x48) ---------- */
  const hex = (fill, label, size = 15) =>
    `<svg viewBox="0 0 48 48"><polygon points="24,2 43,13 43,35 24,46 5,35 5,13" fill="${fill}"/><polygon points="24,2 43,13 43,35 24,46" fill="#fff" opacity=".1"/><text x="24" y="30" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-size="${size}" fill="#fff">${label}</text></svg>`;
  const shield = (c1, c2, n) =>
    `<svg viewBox="0 0 48 48"><polygon points="6,4 42,4 38.5,40 24,45 9.5,40" fill="${c1}"/><polygon points="24,7 39.5,7 36.500,38 24,42" fill="${c2}"/><text x="24" y="31" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-size="22" fill="#fff">${n}</text></svg>`;

  const ICONS = {
    python: `<svg viewBox="0 0 48 48"><path d="M23.800 4C15 4 15.500 7.800 15.500 7.800v4H24v1.200H11.700S6 12.400 6 21.500s5 8.700 5 8.700h3v-4.200s-.200-5 4.900-5h8.400s4.700.100 4.700-4.600V9.200S32.700 4 23.800 4z" fill="#3E7CB8"/><path d="M24.200 44c8.800 0 8.300-3.800 8.300-3.800v-4H24v-1.200h12.300S42 35.600 42 26.500s-5-8.700-5-8.700h-3v4.200s.2 5-4.900 5h-8.400s-4.700-.1-4.700 4.600v7.200S15.300 44 24.200 44z" fill="#FFD43B"/><circle cx="19.500" cy="9" r="1.700" fill="#fff"/><circle cx="28.500" cy="39" r="1.700" fill="#fff"/></svg>`,
    javascript: `<svg viewBox="0 0 48 48"><rect x="3" y="3" width="42" height="42" rx="3" fill="#F7DF1E"/><text x="42" y="41" text-anchor="end" font-family="Inter,Arial" font-weight="800" font-size="22" fill="#111">JS</text></svg>`,
    java: `<svg viewBox="0 0 48 48"><path d="M26 3c4 5-6 8-2 14M30 9c3 4-4 6-2 10" stroke="#F0612B" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M10 26h24v4a9 9 0 0 1-9 9h-6a9 9 0 0 1-9-9z" fill="#5B8FD6"/><path d="M34 28c6-1 7 7-1 8" stroke="#5B8FD6" stroke-width="2.4" fill="none"/><path d="M8 43h28" stroke="#F0612B" stroke-width="2.4" stroke-linecap="round"/></svg>`,
    cpp: hex("#1F6FD1", "C++", 14),
    c: hex("#2F6FD8", "C", 22),
    typescript: `<svg viewBox="0 0 48 48"><rect x="3" y="3" width="42" height="42" rx="4" fill="#3178C6"/><text x="42" y="41" text-anchor="end" font-family="Inter,Arial" font-weight="800" font-size="21" fill="#fff">TS</text></svg>`,
    php: `<svg viewBox="0 0 48 48"><ellipse cx="24" cy="24" rx="22" ry="13" fill="#777BB4"/><text x="24" y="29" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-style="italic" font-size="16" fill="#111">php</text></svg>`,
    go: `<svg viewBox="0 0 48 48"><g stroke="#5DC9E2" stroke-width="2.4" stroke-linecap="round"><path d="M2 19h9M0 25h10M4 31h8"/></g><text x="14" y="32" font-family="Inter,Arial" font-weight="800" font-style="italic" font-size="22" fill="#5DC9E2">GO</text></svg>`,
    rust: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18.500" fill="none" stroke="#e6e6ee" stroke-width="5" stroke-dasharray="3.200 2.500"/><circle cx="24" cy="24" r="15" fill="#161a3a" stroke="#e6e6ee" stroke-width="3"/><text x="24" y="31" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-size="20" fill="#e6e6ee">R</text></svg>`,
    kotlin: `<svg viewBox="0 0 48 48"><defs><linearGradient id="kg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#E44857"/><stop offset=".5" stop-color="#C711E1"/><stop offset="1" stop-color="#7F52FF"/></linearGradient></defs><path d="M5 5h38L24 24l19 19H5z" fill="url(#kg)"/></svg>`,
    swift: `<svg viewBox="0 0 48 48"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF9F43"/><stop offset="1" stop-color="#F0432B"/></linearGradient></defs><rect x="3" y="3" width="42" height="42" rx="10" fill="url(#sg)"/><path d="M34 13c5 5 6 12 3 17 1 1 2 3 3 5-3-1-5-1-7 0-6 3-15 2-20-6 5 3 11 3 14 1-6-3-10-9-11-14 4 4 8 7 12 8-3-3-6-7-7-12 5 5 9 8 13 8z" fill="#fff"/></svg>`,
    dart: `<svg viewBox="0 0 48 48"><path d="M5 22 22 5h19L14 32z" fill="#2CB7F6"/><path d="M5 22l19 19h17V27L27 41z" fill="#0A68B5"/><path d="M14 32 41 5v22L27 41z" fill="#1585D6"/></svg>`,
    ruby: `<svg viewBox="0 0 48 48"><polygon points="12,8 36,8 45,20 24,45 3,20" fill="#D52A2A"/><polygon points="12,8 36,8 33,20 15,20" fill="#F26A6A"/><polygon points="3,20 15,20 24,45" fill="#A81515"/><polygon points="45,20 33,20 24,45" fill="#B91C1C"/><path d="M15 20h18L24 45z" fill="#E03A3A"/></svg>`,
    r: `<svg viewBox="0 0 48 48"><ellipse cx="24" cy="24" rx="22" ry="17" fill="#B8BFCC"/><ellipse cx="24" cy="24" rx="13" ry="9" fill="#0b0e2b" opacity=".35"/><text x="24" y="34" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-size="30" fill="#2B6CC4">R</text></svg>`,
    sql: `<svg viewBox="0 0 48 48"><defs><linearGradient id="dg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60A5FA"/><stop offset="1" stop-color="#2563EB"/></linearGradient></defs><path d="M6 10v10c0 3 8 5 18 5s18-2 18-5V10zM6 24v10c0 3 8 5 18 5s18-2 18-5V24zM6 24c0 3 8 5 18 5s18-2 18-5" fill="url(#dg)"/><ellipse cx="24" cy="10" rx="18" ry="5.500" fill="#93C5FD"/><path d="M6 22c0 3 8 5 18 5s18-2 18-5M6 34c0 3 8 5 18 5s18-2 18-5" stroke="#0b0e2b" stroke-width="1.500" fill="none"/></svg>`,
    html: shield("#E44D26", "#F16529", "5"),
    css: shield("#1572B6", "#33A9DC", "3"),
    bash: `<svg viewBox="0 0 48 48"><rect x="4" y="6" width="40" height="36" rx="5" fill="#0b0e22" stroke="#e5e7ff" stroke-width="2"/><path d="m12 18 7 6-7 6" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 32h12" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,
  };

  /* ---------- data ---------- */
  const LANGS = [
    ["Python", "python", "Simple. Powerful. Versatile.", ["popular", "data", "scripting"], true],
    ["JavaScript", "javascript", "Bring your ideas to life on the web.", ["popular", "web", "scripting"]],
    ["Java", "java", "Write Once, Run Anywhere.", ["popular", "mobile"]],
    ["C++", "cpp", "High Performance. Maximum Control.", ["popular", "systems"]],
    ["C", "c", "The Foundation of Programming.", ["systems", "popular"]],
    ["TypeScript", "typescript", "JavaScript with static types.", ["popular", "web"]],
    ["PHP", "php", "Build dynamic web applications.", ["web", "scripting"]],
    ["Go", "go", "Simple, Fast, Reliable.", ["systems"]],
    ["Rust", "rust", "Safe. Fast. Productive.", ["systems", "functional"]],
    ["Kotlin", "kotlin", "Modern. Concise. Powerful.", ["mobile", "functional"]],
    ["Swift", "swift", "Build apps for Apple platforms.", ["mobile", "functional"]],
    ["Dart", "dart", "Build fast, beautiful apps.", ["mobile", "web"]],
    ["Ruby", "ruby", "Elegant. Productive. Fun.", ["web", "scripting"]],
    ["R", "r", "Statistical Computing Made Easy.", ["data", "functional"]],
    ["SQL", "sql", "Manage and query data efficiently.", ["data", "other"]],
    ["HTML", "html", "Structure the web.", ["web", "other"]],
    ["CSS", "css", "Style the web.", ["web", "other"]],
    ["Bash", "bash", "The Unix Shell for Power Users.", ["scripting", "other"]],
  ];

  const I = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const CATS = [
    ["all", "All Languages", I('<rect x="4" y="4" width="6.5" height="6.5" rx="1.2"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2"/>')],
    ["popular", "Popular", '<svg viewBox="0 0 24 24" fill="#FBBF24"><path d="m12 2.500 2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300 6.100 20.500l1.200-6.500L2.500 9.400l6.600-.9z"/></svg>'],
    ["web", "Web Development", I('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>')],
    ["data", "Data Science", I('<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.700 3 3 7 3s7-1.300 7-3V6M5 12v6c0 1.700 3 3 7 3s7-1.300 7-3v-6"/>')],
    ["mobile", "Mobile Development", I('<rect x="7" y="2.500" width="10" height="19" rx="2.500"/><path d="M11 18.500h2"/>')],
    ["systems", "Systems Programming", I('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>')],
    ["scripting", "Scripting", I('<path d="m5 8 5 4-5 4M13 17h6"/>')],
    ["functional", "Functional", '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 4l12 16M6 20l5-9"/></svg>'],
    ["other", "Other", I('<rect x="4" y="4" width="6.500" height="6.500" rx="1.200"/><rect x="13.500" y="4" width="6.500" height="6.500" rx="1.200"/><rect x="4" y="13.500" width="6.500" height="6.500" rx="1.200"/><rect x="13.500" y="13.500" width="6.500" height="6.500" rx="1.200"/>')],
  ];

  /* ---------- render ---------- */
  const grid = $('#grid');
  const filters = $('#filters');
  const empty = $('#empty');
  let activeCat = 'all';
  let query = '';

  filters.innerHTML = CATS.map(
    ([id, label, icon]) => `<button class="chip${id === 'all' ? ' active' : ''}" data-cat="${id}">${icon}${label}</button>`
  ).join('');

  grid.innerHTML = LANGS.map(
    ([name, icon, desc, cats, hot], i) => `
    <article class="lang" data-name="${name.toLowerCase()}" data-cats="${cats.join(' ')}" style="animation-delay:${0.35 + i * 0.045}s">
      ${hot ? '<span class="badge">🔥 Most Popular</span>' : ''}
      <div class="l-top"><div class="l-ico">${ICONS[icon]}</div><div class="l-txt"><h4>${name}</h4><p>${desc}</p></div></div>
      <a href="#" class="docs">View Docs <span>→</span></a>
    </article>`
  ).join('');

  $$('[data-icon]').forEach((el) => (el.innerHTML = ICONS[el.dataset.icon]));

  const cards = $$('.lang');
  function apply() {
    const q = query.trim().toLowerCase();
    let shown = 0;
    cards.forEach((c) => {
      const okCat = activeCat === 'all' || c.dataset.cats.split(' ').includes(activeCat);
      const okQ = !q || c.dataset.name.includes(q);
      const ok = okCat && okQ;
      c.classList.toggle('hide', !ok);
      if (ok) {
        // replay entrance animation for visible cards
        c.style.animation = 'none';
        void c.offsetWidth;
        c.style.animation = `pop .5s cubic-bezier(.2,.7,.2,1) ${shown * 0.03}s forwards`;
        shown++;
      }
    });
    empty.hidden = shown !== 0;
  }

  filters.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    activeCat = b.dataset.cat;
    $$('.chip').forEach((c) => c.classList.toggle('active', c === b));
    apply();
  });

  /* ---------- search (hero + nav stay in sync) ---------- */
  const heroIn = $('#heroSearch');
  const navIn = $('#navSearch');
  const onType = (src, other) => () => {
    query = src.value;
    other.value = src.value;
    apply();
  };
  heroIn.addEventListener('input', onType(heroIn, navIn));
  navIn.addEventListener('input', onType(navIn, heroIn));
  $('#heroForm').addEventListener('submit', (e) => {
    e.preventDefault();
    apply();
    filters.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      navIn.focus();
      navIn.select();
    } else if (e.key === 'Escape') {
      navIn.blur();
      heroIn.blur();
    }
  });

  /* ---------- browse all ---------- */
  $('#browseAll').addEventListener('click', (e) => {
    e.preventDefault();
    activeCat = 'all';
    query = heroIn.value = navIn.value = '';
    $$('.chip').forEach((c) => c.classList.toggle('active', c.dataset.cat === 'all'));
    apply();
    filters.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* ---------- mobile menu ---------- */
  const burger = $('#burger');
  const links = $('#links');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
  });

  /* ---------- hero parallax ---------- */
  const art = $('.hero-right');
  const ide = $('.ide');
  if (matchMedia('(min-width:901px)').matches) {
    art.addEventListener('mousemove', (e) => {
      const r = art.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 8;
      ide.style.transform = `rotateY(${-18 + x}deg) rotateX(${6 - y}deg) rotateZ(7deg)`;
    });
    art.addEventListener('mouseleave', () => (ide.style.transform = ''));
  }
})();
