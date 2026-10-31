(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- PYTHON DATA ---------- */
  const T = [
    {
        g: "Basics", id: "intro", t: "Introduction to Python", 
        lead: "Python is a powerful, high-level, interpreted programming language renowned for its elegant syntax and dynamic typing.",
        s: [
            ["Why Python?", "Created by Guido van Rossum in 1991, Python emphasizes code readability. It allows developers to express concepts in fewer lines of code.", `# Python's elegant syntax in action\nprint("Welcome to Python Docs!")\n\nversion = 3.12\nlanguage = "Python"\nprint(f"We are learning {language} version {version}")`],
            ["Interpreted & Interactive", "Python is an interpreted language. The interpreter executes code line by line, making debugging easier.", `# Code executes line by line\nprint("Step 1: Initializing...")\nscore = 100\nif score == 100:\n    print("Perfect Score!")`],
            ["The Zen of Python", "Python has a core philosophy guiding its design, promoting simplicity and readability.", `import this`]
        ]
    },
    {
        g: "Basics", id: "variables", t: "Variables & Data Types", 
        lead: "Variables are named references to objects in memory. Python is dynamically typed.",
        s: [
            ["Variable Assignment", "Variables are created the moment you assign a value to them using the '=' operator.", `user_age = 20\nuser_name = "Vinay"\nprint(f"{user_name} is {user_age} years old.")`],
            ["Type Casting", "Convert types explicitly using functions like int(), float(), and str().", `string_num = "42"\ninteger_num = 10\ntotal = int(string_num) + integer_num\nprint("Total sum:", total)`]
        ]
    },
    {
        g: "Basics", id: "operators", t: "Python Operators", 
        lead: "Operators are special symbols or keywords that perform calculations or comparisons.",
        s: [
            ["Arithmetic Operators", "Python allows standard math operations and exponentiation.", `addition = 10 + 5\nexponent = 3 ** 2\nremainder = 10 % 3\nprint(f"Add: {addition}, Exponent: {exponent}")`],
            ["Logical Operators", "The 'and' and 'or' keywords check multiple conditions.", `age = 22\nis_adult = (age >= 18) and (age < 60)\nprint(f"Is working adult? {is_adult}")`]
        ]
    },
    {
        g: "Data Types", id: "strings", t: "Strings", 
        lead: "A string is an immutable sequence of characters enclosed in quotes.",
        s: [
            ["Immutability", "Strings cannot be changed. String methods always return a new string.", `lang = "Python"\nupper_lang = lang.upper()\nprint(f"Original: {lang} | Modified: {upper_lang}")`],
            ["f-strings", "Combine variables and text cleanly using f-strings.", `first = "Ada"\nlast = "Lovelace"\nprint(f"Welcome, {first} {last}!")`]
        ]
    },
    {
        g: "Data Types", id: "lists", t: "Lists", 
        lead: "A list is a dynamic, ordered collection of items.",
        s: [
            ["List Operations", "Lists are zero-indexed and support dynamic modifications.", `stack = ['a', 'b']\nstack.append('c')\nlast = stack.pop()\nprint(f"Stack: {stack}, Removed: {last}")`],
            ["List Comprehensions", "Generate lists efficiently in a single line.", `squares = [val**2 for val in range(1, 6)]\nprint(f"Squares: {squares}")`]
        ]
    },
    {
        g: "Data Types", id: "tuples-sets", t: "Tuples & Sets", 
        lead: "Tuples are immutable lists. Sets are collections of unique items.",
        s: [
            ["Immutability & Uniqueness", "Tuples use parentheses, sets use braces and automatically remove duplicates.", `dimensions = (200, 50)\nlanguages = {'python', 'ruby', 'python', 'c'}\nprint(f"Tuple: {dimensions}\\nSet: {languages}")`]
        ]
    },
    {
        g: "Data Types", id: "dicts", t: "Dictionaries", 
        lead: "A dictionary is a dynamic collection of key-value pairs.",
        s: [
            ["Key-Value Mapping", "Access values using their specific keys.", `alien = {'color': 'green', 'points': 5}\nprint(f"Alien color: {alien['color']}")`],
            ["Safe Access with get()", "Prevent KeyErrors using the get() method.", `alien = {'color': 'green'}\npoints = alien.get('points', 'No points')\nprint(f"Points: {points}")`]
        ]
    },
    {
        g: "Control Flow", id: "conditions", t: "Conditionals", 
        lead: "The if statement evaluates Boolean expressions to direct execution flow.",
        s: [
            ["if-elif-else", "Execute specific blocks based on dynamic conditions.", `age = 19\nif age < 18:\n    print("Minor")\nelif age >= 18:\n    print("Adult")`]
        ]
    },
    {
        g: "Control Flow", id: "loops", t: "Loops", 
        lead: "Automate repetitive tasks using 'for' and 'while' loops.",
        s: [
            ["Flags & Iteration", "Use flags to cleanly exit while loops.", `active = True\ncount = 0\nwhile active:\n    count += 1\n    if count >= 3: active = False\nprint(f"Ran {count} times")`],
            ["break & continue", "Control flow dynamically.", `for i in range(1, 10):\n    if i == 3: break\n    print(f"Demo: {i}")`]
        ]
    },
    {
        g: "Functions & OOP", id: "functions", t: "Functions", 
        lead: "Functions are reusable blocks of code.",
        s: [
            ["Scope & Packing", "Use *args for variable positional arguments.", `def build_profile(first, **kwargs):\n    kwargs['name'] = first\n    return kwargs\nprint(build_profile('Albert', field='Physics'))`]
        ]
    },
    {
        g: "Functions & OOP", id: "classes", t: "Classes & OOP", 
        lead: "Classes are blueprints for creating objects.",
        s: [
            ["Instantiation", "The __init__ method initializes object attributes.", `class Dog:\n    def __init__(self, name):\n        self.name = name\n    def sit(self):\n        print(f"{self.name} is sitting.")\n\nmy_dog = Dog('Willie')\nmy_dog.sit()`]
        ]
    },
    {
        g: "Advanced", id: "errors", t: "Exceptions", 
        lead: "Handle runtime errors gracefully using try-except blocks.",
        s: [
            ["The Exception Stack", "Catch errors before they crash your program.", `try:\n    ans = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`]
        ]
    },
    {
        g: "Advanced", id: "modules", t: "Modules & Imports", 
        lead: "Organize code and reuse external libraries.",
        s: [
            ["Aliasing", "Give imported modules short aliases.", `import random as rnd\nfrom datetime import datetime as dt\nprint(f"Random: {rnd.randint(1, 10)}\\nYear: {dt.now().year}")`]
        ]
    }
  ];

  /* ---------- DOM ELEMENTS ---------- */
  const sidebarNav = $('#sidebar-nav');
  const docContent = $('#doc-content');
  const tocNav = $('#toc');
  const codeEditor = $('#code-editor');
  const searchInput = $('#searchInput');

  /* ---------- 1. BUILD SIDEBAR ---------- */
  function buildSidebar() {
    let html = '';
    let lastGroup = '';
    T.forEach(x => {
      if (x.g !== lastGroup) {
        if (lastGroup !== '') html += '</div></div>';
        html += `<div class="grp open">
          <button class="grp-btn flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-semibold text-slate-100 transition-colors hover:bg-white/5" aria-expanded="true">
            <span class="flex-1">${x.g}</span>
            <svg class="chev h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="sub ml-[19px] border-l border-white/10 pl-2">`;
        lastGroup = x.g;
      }
      html += `<a href="#${x.id}" class="block rounded-md py-[7px] pl-3 pr-2 text-[12.5px] text-slate-400 transition-colors hover:bg-white/5 hover:text-white">${x.t}</a>`;
    });
    if (lastGroup !== '') html += '</div></div>';
    
    if(sidebarNav) sidebarNav.innerHTML = html;
    
    // Attach Sidebar Expand/Collapse
    $$('.grp').forEach(grp => {
      const sub = $('.sub', grp);
      if(sub) sub.style.maxHeight = sub.scrollHeight + 'px'; // open by default
      const btn = $('.grp-btn', grp);
      if(btn) {
          btn.addEventListener('click', (e) => {
            const open = !grp.classList.contains('open');
            grp.classList.toggle('open', open);
            e.currentTarget.setAttribute('aria-expanded', open);
            if(sub) sub.style.maxHeight = open ? sub.scrollHeight + 'px' : '0px';
          });
      }
    });
  }

  /* ---------- 2. RENDER MAIN CONTENT ---------- */
  let scrollSpy = null;
  
  function renderContent() {
    const hash = location.hash.slice(1);
    let i = T.findIndex(x => x.id === hash);
    if (i === -1) i = 0;
    const x = T[i];

    // Update active state in sidebar
    $$('#sidebar-nav .sub a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${x.id}`);
    });
    closeSidebar();

    // Hero title & lead (replaces `#getting-started` dynamic part)
    const topHero = $('#getting-started');
    if (topHero) {
        topHero.innerHTML = `<div class="reveal flex items-center gap-3 hl" id="top">
            <span class="h-8 w-1.5 rounded-full bg-gradient-to-b from-fuchsia-400 to-violet-600 shadow-[0_0_14px_#a855f7]"></span>
            <h2 class="text-[28px] font-bold tracking-tight text-white">${x.t}</h2>
          </div>
          <p class="reveal mt-2 text-[13px] text-slate-300">${x.lead}</p>` + topHero.innerHTML.substring(topHero.innerHTML.indexOf('<!-- IDE -->'));
    }

    // Dynamic document sections
    let mainHtml = '';
    let tocHtml = `<a href="#top" class="toc flex items-center gap-3 py-[5px] text-[12.5px] font-medium text-violet-300" data-t="top"><span class="dot h-2 w-2 flex-none rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]"></span>Overview</a>
    <div class="ml-[5px] border-l border-white/10 pl-[17px]">`;

    x.s.forEach((sec, idx) => {
      const slug = "sec-" + idx;
      mainHtml += `<div id="${slug}" class="hl reveal scroll-mt-24">
        <h3 class="text-xl font-semibold text-white">${sec[0]}</h3>
        ${sec[1] ? `<p class="mt-2 text-[13.5px] leading-relaxed text-slate-300">${sec[1]}</p>` : ''}
        <div class="mt-4 overflow-hidden rounded-xl border border-white/[.07] bg-[#05071a]/80">
          <div class="flex items-center justify-between border-b border-white/[.07] bg-white/[.03] px-3 py-2">
            <span class="text-[12px] font-medium text-slate-300">Python</span>
            <button data-idx="${idx}" class="try-btn flex items-center gap-1.5 rounded-lg bg-white/[.05] px-3 py-1 text-[11px] font-medium transition-colors hover:bg-white/10 text-white">Try it <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
          </div>
          <pre class="overflow-x-auto p-4 font-mono text-[12.5px] leading-[20px] text-slate-200"><code>${sec[2].replace(/</g, '&lt;')}</code></pre>
        </div>
      </div>`;
      tocHtml += `<a href="#${slug}" class="toc block py-[5px] text-[12.5px] text-slate-400 hover:text-white" data-t="${slug}">${sec[0]}</a>`;
    });
    
    tocHtml += `</div>`;
    
    if(docContent) docContent.innerHTML = mainHtml;
    if(tocNav) tocNav.innerHTML = tocHtml;
    
    // Reset IDE text to first section's code
    const actualEditor = $('#code-editor');
    if(actualEditor && x.s.length > 0) {
        actualEditor.value = x.s[0][2];
    }
    
    // Bind Try It buttons
    $$('.try-btn').forEach(b => {
      b.addEventListener('click', () => {
        if(actualEditor) {
            actualEditor.value = x.s[parseInt(b.dataset.idx)][2];
            window.scrollTo({ top: document.getElementById('getting-started').offsetTop - 80, behavior: 'smooth' });
        }
      });
    });

    initScrollReveal();
    initScrollSpy();
  }

  /* ---------- 3. UI HELPERS & SPY ---------- */
  function initScrollReveal() {
    const reveals = $$('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('show');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 50, 300)}ms`;
      io.observe(el);
    });
    setTimeout(() => reveals.forEach((el) => (el.style.transitionDelay = '')), 1000);
  }

  function initScrollSpy() {
    if (scrollSpy) scrollSpy.disconnect();
    const tocLinks = $$('.toc');
    scrollSpy = new IntersectionObserver((entries) => {
      const vis = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis.length) {
        const id = vis[0].target.id;
        tocLinks.forEach(a => {
          const on = a.dataset.t === id;
          if (a.dataset.t === 'top') {
            a.classList.toggle('text-violet-300', on);
            const dot = $('.dot', a);
            if (dot) dot.style.opacity = on ? 1 : 0;
          } else {
            a.classList.toggle('text-white', on);
            a.classList.toggle('text-slate-400', !on);
          }
        });
      }
    }, { rootMargin: '-90px 0px -60% 0px' });
    $$('.hl').forEach(el => scrollSpy.observe(el));
  }

  /* ---------- 4. PYODIDE LOGIC ---------- */
  let py = null, loadingPy = null;
  async function loadPy() {
    if (loadingPy) return loadingPy;
    loadingPy = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
      s.onload = async () => { try { py = await loadPyodide(); res(py); } catch(e) { rej(e); } };
      document.head.appendChild(s);
    });
    return loadingPy;
  }

  const runBtn = $('#runBtn');
  const runLabel = $('#runLabel');
  const out = $('#out');
  const outBody = $('#outBody');
  const ide = $('#ide');
  let running = false;
  
  if(runBtn) {
      runBtn.addEventListener('click', async () => {
        if (running) return;
        running = true;
        runBtn.classList.add('running');
        runLabel.textContent = 'Running';
        out.classList.add('loading');
        ide.classList.remove('flash');
        void ide.offsetWidth;
        ide.classList.add('flash');

        try {
          const p = await loadPy();
          let buf = "";
          p.setStdout({ batched: s => buf += s + "\n" });
          p.setStderr({ batched: s => buf += s + "\n" });
          await p.runPythonAsync(codeEditor.value);
          outBody.textContent = buf || "(no output)";
          outBody.style.color = "";
        } catch (err) {
          outBody.textContent = String(err).split("\n").slice(-6).join("\n");
          outBody.style.color = "#ff7b72"; // soft red
        }
        
        setTimeout(() => {
          out.classList.remove('loading');
          runBtn.classList.remove('running');
          runLabel.textContent = 'Run';
          running = false;
        }, 300);
      });
  }

  // Editor formatting (Tab & Ctrl+Enter)
  if(codeEditor) {
    codeEditor.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        e.preventDefault();
        const s = codeEditor.selectionStart;
        codeEditor.setRangeText("    ", s, codeEditor.selectionEnd, "end");
      }
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runBtn.click();
      }
    });
  }

  // Copy Button
  const copyBtn = $('#copyBtn');
  const copyLabel = $('#copyLabel');
  if(copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const text = codeEditor ? codeEditor.value : '';
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
  }

  // Global Keyboard Shortcuts (Ctrl+K)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if(searchInput) { searchInput.focus(); searchInput.select(); }
    } else if (e.key === 'Escape') {
      if(searchInput) searchInput.blur();
      closeSidebar();
      closeVer();
    }
  });

  // Mobile Sidebar & Version Dropdown
  const sidebar = $('#sidebar');
  const overlay = $('#overlay');
  const menuBtn = $('#menuBtn');
  function openSidebar() { sidebar.classList.remove('-translate-x-full'); overlay.classList.remove('hidden'); menuBtn.classList.add('open'); }
  function closeSidebar() { if (matchMedia('(min-width:1024px)').matches) return; sidebar.classList.add('-translate-x-full'); overlay.classList.add('hidden'); menuBtn.classList.remove('open'); }
  if(menuBtn) menuBtn.addEventListener('click', () => sidebar.classList.contains('-translate-x-full') ? openSidebar() : closeSidebar());
  if(overlay) overlay.addEventListener('click', closeSidebar);

  const verBtn = $('#verBtn');
  const verMenu = $('#verMenu');
  function closeVer() { if(verMenu) verMenu.classList.add('hidden'); }
  if(verBtn) verBtn.addEventListener('click', (e) => { e.stopPropagation(); verMenu.classList.toggle('hidden'); });
  $$('#verMenu li').forEach((li) => li.addEventListener('click', () => { $('#verLabel').textContent = li.textContent; closeVer(); }));
  document.addEventListener('click', closeVer);
  window.addEventListener('hashchange', renderContent);

  // Initialize
  buildSidebar();
  renderContent();
})();
