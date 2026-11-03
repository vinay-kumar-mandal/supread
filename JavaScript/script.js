(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- JAVASCRIPT DATA ---------- */
  const T = [
    {
        g: "Basics", id: "intro", t: "Introduction to JavaScript", 
        lead: "JavaScript is the versatile, dynamic programming language of the web, enabling interactive and complex features.",
        s: [
            ["What is JavaScript?", "Created in 1995 by Brendan Eich, JavaScript is a high-level, just-in-time compiled language. It is a core technology of the World Wide Web, alongside HTML and CSS.", `// A simple JavaScript greeting\nfunction greet(name) {\n  return \`Hello, \${name}! Welcome to JS.\`;\n}\n\nconsole.log(greet("Developer"));`],
            ["Client-Side Execution", "JS runs directly in the user's browser, allowing for immediate feedback and DOM manipulation without reloading the page.", `// Manipulating the browser console\nconsole.log("Step 1: Script loaded");\nlet status = "Active";\nif (status === "Active") {\n  console.log("System is ready!");\n}`]
        ]
    },
    {
        g: "Basics", id: "variables", t: "Variables & Data Types", 
        lead: "JavaScript is dynamically typed and uses var, let, and const to declare variables.",
        s: [
            ["let and const", "Always use 'const' for values that won't change, and 'let' for variables that will. Avoid using the outdated 'var' keyword.", `const siteName = "DocuNova";\nlet visitorCount = 100;\n\n// We can update a 'let' variable\nvisitorCount += 1;\nconsole.log(\`\${siteName} has \${visitorCount} visitors.\`);`],
            ["Data Types", "JS primitives include String, Number, Boolean, Null, Undefined, Symbol, and BigInt.", `const price = 49.99; // Number\nconst isActive = true; // Boolean\nconst user = null; // Null\n\nconsole.log(typeof price);\nconsole.log(typeof isActive);`]
        ]
    },
    {
        g: "Basics", id: "operators", t: "Operators & Logic", 
        lead: "Operators perform tests, math, and assignments on variables.",
        s: [
            ["Strict Equality (===)", "Always use '===' (strict equality) instead of '==' to avoid unexpected type coercion bugs.", `const num = 5;\nconst str = "5";\n\nconsole.log(num == str);  // true (type coerced)\nconsole.log(num === str); // false (strict type check)`],
            ["Logical Operators", "Use && (AND), || (OR), and ! (NOT) for logic evaluation.", `const hasAccount = true;\nconst isLoggedIn = false;\n\nif (hasAccount && !isLoggedIn) {\n  console.log("Please log in to continue.");\n}`]
        ]
    },
    {
        g: "Data Types", id: "strings", t: "Strings & Templates", 
        lead: "Strings represent text and provide numerous methods for manipulation.",
        s: [
            ["Template Literals", "Template literals (using backticks) allow embedded expressions and multi-line strings.", `const item = "Coffee";\nconst price = 3.50;\n\n// Embedded variables\nconst msg = \`One \${item} costs $\${price}.\`;\nconsole.log(msg);`],
            ["String Methods", "Strings have built-in methods like .toUpperCase(), .slice(), and .includes().", `const text = "JavaScript is awesome";\nconsole.log(text.toUpperCase());\nconsole.log(text.includes("Script"));`]
        ]
    },
    {
        g: "Data Types", id: "arrays", t: "Arrays", 
        lead: "Arrays are list-like objects used to store multiple values in a single variable.",
        s: [
            ["Array Methods", "Arrays come with powerful methods like .push(), .map(), and .filter().", `const numbers = [1, 2, 3, 4];\nnumbers.push(5); // Adds to end\n\n// Using .map() to double values\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);`],
            ["Destructuring", "Extract array values directly into distinct variables.", `const colors = ["Red", "Green", "Blue"];\nconst [firstColor, secondColor] = colors;\n\nconsole.log(firstColor); // Red`]
        ]
    },
    {
        g: "Data Types", id: "objects", t: "Objects", 
        lead: "Objects are collections of key-value pairs, crucial for structuring data.",
        s: [
            ["Object Creation", "Create objects using curly braces '{}' with property names and values.", `const user = {\n  name: "Alice",\n  role: "Admin",\n  age: 28\n};\n\nconsole.log(user.name);\nconsole.log(user["role"]);`],
            ["Object Destructuring", "Extract properties from objects into variables easily.", `const settings = {\n  theme: "dark",\n  notifications: true\n};\n\nconst { theme, notifications } = settings;\nconsole.log(\`Theme is \${theme}\`);`]
        ]
    },
    {
        g: "Control Flow", id: "conditions", t: "Conditionals", 
        lead: "Use if-else and switch statements to control the flow of your program.",
        s: [
            ["Ternary Operator", "A concise way to write simple if-else statements in one line.", `const age = 20;\nconst status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status);`]
        ]
    },
    {
        g: "Functions", id: "functions", t: "Functions & Scope", 
        lead: "Functions encapsulate reusable logic.",
        s: [
            ["Arrow Functions", "ES6 introduced arrow functions for shorter syntax and lexical 'this' binding.", `// Standard Function\nfunction add(a, b) { return a + b; }\n\n// Arrow Function\nconst multiply = (a, b) => a * b;\n\nconsole.log(add(5, 5));\nconsole.log(multiply(5, 5));`]
        ]
    },
    {
        g: "Advanced", id: "async", t: "Promises & Async/Await", 
        lead: "Handle asynchronous operations like API fetches without blocking the main thread.",
        s: [
            ["Async / Await", "Write asynchronous code that looks and behaves like synchronous code.", `const fetchUser = async () => {\n  console.log("Fetching data...");\n  // Simulating network delay\n  await new Promise(r => setTimeout(r, 1000));\n  return { id: 1, name: "John Doe" };\n};\n\nfetchUser().then(user => console.log("Fetched:", user));`]
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
    
    $$('.grp').forEach(grp => {
      const sub = $('.sub', grp);
      if(sub) sub.style.maxHeight = sub.scrollHeight + 'px';
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

    $$('#sidebar-nav .sub a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${x.id}`);
    });
    closeSidebar();

    const topHero = $('#getting-started');
    if (topHero) {
        topHero.innerHTML = `<div class="reveal flex items-center gap-3 hl" id="top">
            <span class="h-8 w-1.5 rounded-full bg-gradient-to-b from-yellow-300 to-amber-500 shadow-[0_0_14px_#fbbf24]"></span>
            <h2 class="text-[28px] font-bold tracking-tight text-white">${x.t}</h2>
          </div>
          <p class="reveal mt-2 text-[13px] text-slate-300">${x.lead}</p>` + topHero.innerHTML.substring(topHero.innerHTML.indexOf('<!-- IDE -->'));
    }

    let mainHtml = '';
    let tocHtml = `<a href="#top" class="toc flex items-center gap-3 py-[5px] text-[12.5px] font-medium text-amber-300" data-t="top"><span class="dot h-2 w-2 flex-none rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]"></span>Overview</a>
    <div class="ml-[5px] border-l border-white/10 pl-[17px]">`;

    x.s.forEach((sec, idx) => {
      const slug = "sec-" + idx;
      mainHtml += `<div id="${slug}" class="hl reveal scroll-mt-24">
        <h3 class="text-xl font-semibold text-white">${sec[0]}</h3>
        ${sec[1] ? `<p class="mt-2 text-[13.5px] leading-relaxed text-slate-300">${sec[1]}</p>` : ''}
        <div class="mt-4 overflow-hidden rounded-xl border border-white/[.07] bg-[#05071a]/80">
          <div class="flex items-center justify-between border-b border-white/[.07] bg-white/[.03] px-3 py-2">
            <span class="text-[12px] font-medium text-slate-300">JavaScript</span>
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
    
    if(codeEditor && x.s.length > 0) {
        codeEditor.value = x.s[0][2];
    }
    
    $$('.try-btn').forEach(b => {
      b.addEventListener('click', () => {
        if(codeEditor) {
            codeEditor.value = x.s[parseInt(b.dataset.idx)][2];
            window.scrollTo({ top: document.getElementById('getting-started').offsetTop - 80, behavior: 'smooth' });
        }
      });
    });

    initScrollReveal();
    initScrollSpy();
  }

  function initScrollReveal() {
    const reveals = $$('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('show'); io.unobserve(en.target); } });
    }, { threshold: 0.1 });
    reveals.forEach((el, i) => { el.style.transitionDelay = `${Math.min(i * 50, 300)}ms`; io.observe(el); });
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
            a.classList.toggle('text-amber-300', on);
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

  /* ---------- 4. JAVASCRIPT NATIVE EXECUTION ---------- */
  const runBtn = $('#runBtn');
  const runLabel = $('#runLabel');
  const out = $('#out');
  const outBody = $('#outBody');
  const ide = $('#ide');
  let running = false;
  
  if(runBtn) {
      runBtn.addEventListener('click', () => {
        if (running) return;
        running = true;
        runBtn.classList.add('running');
        runLabel.textContent = 'Running';
        out.classList.add('loading');
        ide.classList.remove('flash');
        void ide.offsetWidth;
        ide.classList.add('flash');

        // Capture console.log output dynamically
        let outputBuffer = [];
        const originalLog = console.log;
        console.log = function(...args) {
            outputBuffer.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : a).join(' '));
            originalLog.apply(console, args);
        };

        try {
            // Evaluate JS Code natively
            // Wrapping in async function to support top-level await in editor
            const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
            const executableCode = new AsyncFunction(codeEditor.value);
            
            executableCode().then(() => {
                outBody.textContent = outputBuffer.join('\n') || "(no output)";
                outBody.style.color = "";
            }).catch(err => {
                outBody.textContent = String(err);
                outBody.style.color = "#ff7b72";
            }).finally(() => {
                console.log = originalLog; // Restore console
                finishRun();
            });
            
        } catch (err) {
            console.log = originalLog;
            outBody.textContent = String(err);
            outBody.style.color = "#ff7b72"; // Error color
            finishRun();
        }
      });
  }

  function finishRun() {
      setTimeout(() => {
          out.classList.remove('loading');
          runBtn.classList.remove('running');
          runLabel.textContent = 'Run';
          running = false;
      }, 300);
  }

  // Keyboard Shortcuts
  if(codeEditor) {
    codeEditor.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        e.preventDefault();
        const s = codeEditor.selectionStart;
        codeEditor.setRangeText("  ", s, codeEditor.selectionEnd, "end"); // JS prefers 2-space tab
      }
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runBtn.click();
      }
    });
  }

  /* ---------- Sidebar & Modals ---------- */
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
