(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Ctrl/Cmd + K focuses search, Esc blurs
  const searchInput = $('#searchInput');
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === 'Escape') {
      searchInput.blur();
    }
  });

  // Mobile menu
  const burger = $('#burger');
  const links = $('#links');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
  });
  $$('#links a').forEach((a) =>
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      links.classList.remove('open');
    })
  );

  // Scroll reveal
  const targets = $$('.reveal');
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * 60, 500)}ms`;
  });
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('show');
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.15 }
  );
  targets.forEach((t) => io.observe(t));
  // clear delay after reveal so hover transitions stay snappy
  setTimeout(() => targets.forEach((t) => (t.style.transitionDelay = '')), 1800);

  // Subtle parallax tilt on card container (desktop only)
  const cards = $('.cards');
  const base = 'rotateY(-6deg) rotateX(3deg) rotateZ(-2.5deg)';
  if (window.matchMedia('(min-width: 901px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      cards.style.transform = `rotateY(${-6 + x}deg) rotateX(${3 - y}deg) rotateZ(-2.5deg)`;
    });
    document.addEventListener('mouseleave', () => (cards.style.transform = base));
  }

  // Card light follows cursor
  $$('.gcard').forEach((c) => {
    c.addEventListener('mousemove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
      c.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  });
})();
