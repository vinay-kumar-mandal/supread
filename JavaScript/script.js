(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- SVG ASSETS ---------- */
  const ICONS = {
    book: `<svg class="h-4 w-4 text-violet-200" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>`,
    code: `<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.500 20.500 7v10L12 21.500 3.500 17V7z"/><path d="M12 12 3.500 7M12 12l8.500-5M12 12v9.500"/></svg>`,
    zap: `<svg class="h-4 w-4 flex-none text-amber-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2.500 2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300l-5.900 3.200 1.200-6.500L2.500 9.400l6.600-.9z"/></svg>`,
    globe: `<svg class="h-4 w-4 flex-none text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
    shield: `<svg class="h-4 w-4 flex-none text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  };

  /* ---------- EXHAUSTIVE JAVASCRIPT DOCUMENTATION DATA ---------- */
  const T = [
    // --- GETTING STARTED ---
    {
        g: "Getting Started", id: "intro", t: "Introduction & Execution", 
        icon: ICONS.book,
        lead: "JavaScript is a high-level, JIT-compiled, multi-paradigm language. It serves as the definitive execution engine of the modern web, running seamlessly across browsers and server environments.",
        s: [
            ["The Execution Environment", "Unlike traditional compiled languages, JavaScript is processed by browser engines like Google's V8 or Mozilla's SpiderMonkey. These engines parse the source code into an Abstract Syntax Tree (AST), compile it to bytecode, and aggressively optimize it into machine code at runtime.", `// Outputting data to the console
console.log("Welcome to the Ultimate JavaScript Engine.");

// Execution context is established immediately
const engine = "V8 Runtime";
console.log(\`Powered by the \${engine}.\`);`],
            ["The DOM Interface", "JavaScript acts as the bridge between static HTML and dynamic user interfaces. Through the Document Object Model (DOM) API, developers can utilize methods like querySelector and addEventListener to manipulate nodes and intercept hardware events dynamically.", `// Safe DOM Execution
if (typeof document !== "undefined") {
    console.log("DOM is accessible. Ready to manipulate nodes.");
} else {
    console.log("Executing in a Node.js or headless environment.");
}`]
        ]
    },
    
    // --- CORE CONCEPTS ---
    {
        g: "Core Concepts", id: "variables", t: "Variables & Lexical Scoping", 
        icon: ICONS.code,
        lead: "Variables represent memory references. Modern JavaScript strictly utilizes block-scoped declarations to maintain predictable memory states and avoid namespace collisions.",
        s: [
            ["The Temporal Dead Zone (TDZ)", "Declarations using 'let' and 'const' are hoisted to the top of their block scope, but remain uninitialized in a state called the Temporal Dead Zone. Accessing them before initialization results in a ReferenceError, forcing developers to write predictable, top-down code.", `// var is hoisted and initialized as undefined
console.log("var hoisting:", myVar); 
var myVar = "Legacy scoping";

// let and const reside in the TDZ until execution reaches them
try {
    console.log(myConst);
} catch (e) {
    console.error("TDZ Error Caught:", e.message);
}
const myConst = "Modern block scoping";`],
            ["Immutability via Const", "The 'const' keyword guarantees that the memory reference assigned to an identifier cannot be reassigned. However, if the reference points to a complex object on the heap, the object's internal properties remain entirely mutable.", `const serverConfig = {
    port: 8080,
    secure: true
};

// Valid: Mutating the internal state of the object
serverConfig.port = 443;
console.log("Updated Port:", serverConfig.port);

// Invalid: Reassigning the memory reference
try {
    serverConfig = {}; 
} catch (e) {
    console.error("Assignment Error:", e.message);
}`]
        ]
    },
    {
        g: "Core Concepts", id: "data-types", t: "Data Types & Coercion", 
        icon: ICONS.code,
        lead: "JavaScript differentiates between primitive values (stored on the stack) and reference types (stored on the heap).",
        s: [
            ["Primitives vs. References", "Primitives (String, Number, Boolean, BigInt, Symbol, Undefined, Null) are immutable and passed by value. Objects, Arrays, and Functions are stored on the heap and passed by reference.", `let a = 10;
let b = a; // Pass by value
b = 20;
console.log(\`a: \${a}, b: \${b}\`); // 'a' remains 10

const obj1 = { role: "admin" };
const obj2 = obj1; // Pass by reference (pointer copy)
obj2.role = "user";
console.log(\`obj1 role mutated: \${obj1.role}\`);`],
            ["Type Coercion & Strict Equality", "JavaScript engines attempt to convert mismatched types during evaluation (Implicit Coercion). To prevent catastrophic bugs, strictly use the identity operator (===) which prevents type casting, as recommended by MDN.", `const numeric = 42;
const stringified = "42";

console.log("Loose Equality (==):", numeric == stringified); // true
console.log("Strict Equality (===):", numeric === stringified); // false

// Falsy evaluation
const values = [0, "", null, undefined, NaN, false];
console.log("All falsy values resolve to false in conditionals.");`]
        ]
    },
    {
        g: "Core Concepts", id: "functions", t: "Functions & Closures", 
        icon: ICONS.code,
        lead: "Functions are first-class citizens in JavaScript. A closure is a function bundled together with references to its surrounding lexical environment.",
        s: [
            ["Lexical Environments & Closures", "When a function returns an inner function, the inner function maintains access to the variables of the outer function, even after the outer function has completed execution. The engine preserves this lexical scope on the heap. This enables data encapsulation and currying.", `function createRateLimiter(limit) {
    let requests = 0; // Private state protected by closure
    
    return function() {
        requests++;
        if (requests > limit) {
            return "Rate limit exceeded. Request blocked.";
        }
        return \`Request \${requests} processed successfully.\`;
    };
}

const apiLimiter = createRateLimiter(2);
console.log(apiLimiter());
console.log(apiLimiter());
console.log(apiLimiter()); // Fails due to closure state`],
            ["Generators & Iterators", "Generators, defined with function*, allow execution to be paused and resumed using the 'yield' keyword. This provides a mechanism for customizing iteration behavior and managing infinite data sequences.", `function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const gen = idGenerator();
console.log("Generated ID:", gen.next().value);
console.log("Generated ID:", gen.next().value);`]
        ]
    },
    {
        g: "Modern JavaScript", id: "es2024-data", t: "ES2024: Advanced Data Operations", 
        icon: ICONS.zap,
        lead: "Recent ECMAScript specifications (ES2024-ES2025) have radically streamlined data manipulation, providing native grouping and relational operations.",
        s: [
            ["Object.groupBy() (ES2024)", "The ES2024 specification introduced native grouping capabilities. Object.groupBy() categorizes array elements into an object based on a provided callback logic, eliminating the need for complex reduce() implementations.", `const infrastructure = [
    { type: "server", status: "active", name: "Alpha" },
    { type: "database", status: "inactive", name: "Beta" },
    { type: "server", status: "maintenance", name: "Gamma" }
];

try {
    // Native grouping (Available in modern ES2024+ environments)
    const grouped = Object.groupBy(infrastructure, item => item.type);
    console.log("Servers grouped natively:", grouped.server);
} catch (e) {
    console.log("Object.groupBy requires an ES2024 compliant runtime.");
}`],
            ["Native Set Operations (ES2025)", "ES2025 standardizes mathematical set operations, embedding high-speed union, intersection, and difference computations directly into the native Set prototype.", `const currentRoles = new Set(["read", "write"]);
const requiredRoles = new Set(["write", "delete"]);

try {
    // Native ES2025 Relational Logic
    const overlapping = currentRoles.intersection(requiredRoles);
    const combined = currentRoles.union(requiredRoles);
    
    console.log("Overlapping Roles:", Array.from(overlapping));
    console.log("Total Roles:", Array.from(combined));
} catch (e) {
    console.log("Set.intersection requires an ES2025 compliant runtime.");
}`]
        ]
    },
    
    // --- ADVANCED TOPICS ---
    {
        g: "Advanced Architecture", id: "event-loop", t: "The Event Loop & Concurrency", 
        icon: ICONS.zap,
        lead: "JavaScript handles asynchronous operations without blocking the main thread by utilizing the Event Loop, distinguishing precisely between Microtasks and Macrotasks.",
        s: [
            ["Call Stack vs. Task Queues", "Synchronous code executes immediately on the Call Stack. When an async API completes, its callback queues. The Event Loop prioritizes the Microtask Queue (Promises, queueMicrotask) strictly over the Macrotask Queue (setTimeout, setInterval).", `console.log("1. Synchronous Execution");

setTimeout(() => {
    console.log("4. Macrotask (setTimeout) executed");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Microtask (Promise) executed");
});

console.log("2. Main Thread Completion");`],
            ["Avoiding Main Thread Blocking", "Heavy synchronous computations block UI rendering because rendering never occurs while a task is executing. To prevent 'Page Unresponsive' errors, large tasks must be split using zero-delay Macrotasks.", `function nonBlockingProcess() {
    console.log("Processing heavy chunk...");
    // Defers execution, allowing the browser to breathe and render DOM
    setTimeout(() => {
        console.log("Processing next chunk safely after yielding.");
    }, 0);
}
nonBlockingProcess();`]
        ]
    },
    {
        g: "Advanced Architecture", id: "promises", t: "Promises & Network Controls", 
        icon: ICONS.zap,
        lead: "Modern async JavaScript relies on Promises. Advanced APIs provide granular control over resolution flow and network request lifetimes.",
        s: [
            ["Promise.withResolvers() (ES2024)", "Introduced in ES2024, this method returns a plain object containing a new Promise along with its resolve and reject functions. It drastically reduces boilerplate for event-driven flows outside the promise constructor.", `const { promise, resolve, reject } = Promise.withResolvers();

// External asynchronous trigger resolving the promise
setTimeout(() => {
    resolve("External event resolved successfully.");
}, 500);

promise.then(result => console.log("Settled via withResolvers:", result));`],
            ["AbortController & Fetch Timeouts", "The AbortController API allows you to abort web requests. Using AbortSignal.timeout(ms) provides a clean, native way to enforce strict fetch timeouts without custom wrapper logic.", `const controller = new AbortController();

console.log("Initializing strict 50ms timeout request...");
// Simulating a native fetch timeout setup:
// fetch('/api/data', { signal: AbortSignal.timeout(50) })
//   .catch(err => console.error("Request aborted:", err.name));

setTimeout(() => {
    controller.abort("Manual abort triggered.");
    console.log("Operation aborted via AbortController.");
}, 100);`]
        ]
    },
    {
        g: "Advanced Architecture", id: "memory-management", t: "Garbage Collection & Memory", 
        icon: ICONS.shield,
        lead: "The V8 engine automates memory management via a generational 'Mark-and-Sweep' garbage collector, identifying and sweeping unreachable object graphs.",
        s: [
            ["Mark-and-Sweep Execution", "The collector establishes 'roots' (global variables, active stacks) and traces all connected references. Any object disjointed from the roots is marked as garbage and swept from the heap. V8 separates memory into a Nursery (Minor GC) and Old Generation (Major GC).", `let config = { active: true }; // Allocated on Heap
let reference = config;        // Second pointer to same memory

config = null; 
// Memory is NOT cleared yet; 'reference' still points to it

reference = null;
// The object is now unreachable from any root. 
// It will be swept during the next Garbage Collection cycle.
console.log("Memory successfully orphaned for GC.");`],
            ["WeakMaps & Cache Optimization", "WeakMaps hold 'weak' references to object keys. If no other strong references to the key exist, the garbage collector will delete the object and its entry in the WeakMap, preventing catastrophic memory leaks in caches.", `let domNode = { id: "button_01" };
const cache = new WeakMap();

// Associate metadata without preventing Garbage Collection
cache.set(domNode, { clicks: 0 });

domNode = null; 
// The dictionary entry in the WeakMap is automatically purged by the engine.
console.log("WeakMap safely manages the memory lifecycle.");`]
        ]
    },
    {
        g: "Advanced Architecture", id: "metaprogramming", t: "Proxies & Reflect API", 
        icon: ICONS.shield,
        lead: "The Proxy object enables metaprogramming by intercepting and redefining fundamental object operations. It is the core engine behind modern reactivity systems like Vue 3.",
        s: [
            ["Intercepting Object Mutations", "By defining 'traps' (e.g., get, set), Proxies enforce strict validation protocols. The Reflect API is used internally to invoke the default object behavior safely.", `const targetDatabase = { 
    adminUser: "root",
    status: "active" 
};

const secureProxy = new Proxy(targetDatabase, {
    set(target, property, value, receiver) {
        if (property === "adminUser") {
            throw new Error("Security Violation: Cannot mutate admin identity.");
        }
        // Using Reflect preserves default assignment mechanics
        return Reflect.set(target, property, value, receiver);
    }
});

try {
    secureProxy.adminUser = "hacker";
} catch(e) {
    console.log("Intercepted Trap:", e.message);
}`]
        ]
    },

    // --- DOM & BROWSER APIs ---
    {
        g: "Browser APIs", id: "observers", t: "High-Performance Observers", 
        icon: ICONS.globe,
        lead: "Modern UI architecture relies on asynchronous observer APIs to track element intersections and resize events, bypassing the severe performance overhead of synchronous event listeners.",
        s: [
            ["IntersectionObserver Mechanics", "IntersectionObserver calculates element visibility asynchronously on a separate thread. It accepts a threshold and rootMargin, making it the gold standard for lazy-loading media and infinite scrolling without querying getBoundingClientRect().", `// Conceptual setup for IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element entered the viewport threshold.");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5, rootMargin: "100px" });

console.log("IntersectionObserver instantiated for high-performance tracking.");`],
            ["ResizeObserver Safeguards", "ResizeObserver tracks precise DOM dimension changes. To prevent 'ResizeObserver loop limit exceeded' exceptions, dimensional mutations inside the callback must be deferred using requestAnimationFrame.", `const resizeObserver = new ResizeObserver(entries => {
    // Defers execution to prevent layout thrashing and infinite loops
    requestAnimationFrame(() => {
        entries.forEach(entry => {
            const width = entry.contentBoxSize ? entry.contentBoxSize[0].inlineSize : entry.contentRect.width;
            console.log(\`Observed element resized to width: \${width}px\`);
        });
    });
});

console.log("ResizeObserver configured with frame-syncing safeguards.");`]
        ]
    }
  ];

  /* ---------- DOM SELECTION ---------- */
  const sidebarNav = $('#sidebar-nav');
  const docContent = $('#doc-content');
  const tocNav = $('#toc');
  const codeEditor = $('#code-editor');
  const searchInput = $('#searchInput');

  /* ---------- 1. BUILD DYNAMIC SIDEBAR ---------- */
  function buildSidebar() {
    let html = '';
    let lastGroup = '';
    
    T.forEach(x => {
      if (x.g !== lastGroup) {
        if (lastGroup !== '') html += '</div></div>';
        html += `<div class="grp open">
          <button class="grp-btn flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-semibold text-slate-100 transition-colors hover:bg-white/5" aria-expanded="true">
            ${x.icon}
            <span class="flex-1">${x.g}</span>
            <svg class="chev h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="sub ml-[19px] border-l border-white/10 pl-2">`;
        lastGroup = x.g;
      }
      html += `<a href="#${x.id}" class="block rounded-md py-[7px] pl-3 pr-2 text-[12.5px] text-slate-400 transition-colors hover:bg-white/5 hover:text-white" data-target="${x.id}">${x.t}</a>`;
    });
    
    if (lastGroup !== '') html += '</div></div>';
    
    if (sidebarNav) sidebarNav.innerHTML = html;
    
    // Accordion Logic
    $$('.grp').forEach(grp => {
      const sub = $('.sub', grp);
      if (sub) sub.style.maxHeight = sub.scrollHeight + 'px';
      const btn = $('.grp-btn', grp);
      if (btn) {
          btn.addEventListener('click', (e) => {
            const open = !grp.classList.contains('open');
            grp.classList.toggle('open', open);
            e.currentTarget.setAttribute('aria-expanded', open);
            if (sub) sub.style.maxHeight = open ? sub.scrollHeight + 'px' : '0px';
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

    // Highlight active state in sidebar
    $$('#sidebar-nav .sub a').forEach(a => {
      a.classList.toggle('active', a.dataset.target === x.id);
    });
    
    closeSidebar();

    // Inject Hero Information
    const topHero = $('#getting-started');
    if (topHero) {
        // Strip previous dynamic content but preserve the IDE div
        const ideHTML = topHero.innerHTML.substring(topHero.innerHTML.indexOf('<!-- IDE -->'));
        topHero.innerHTML = `
          <div class="reveal flex items-center gap-3 hl" id="top">
            <span class="h-8 w-1.5 rounded-full bg-gradient-to-b from-yellow-300 to-amber-500 shadow-[0_0_14px_#fbbf24]"></span>
            <h2 class="text-[28px] font-bold tracking-tight text-white">${x.t}</h2>
          </div>
          <p class="reveal mt-2 text-[13px] text-slate-300">${x.lead}</p>
          ${ideHTML}`;
    }

    // Generate Content Theory Blocks and TOC
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
    
    // Inject generated HTML
    if(docContent) docContent.innerHTML = mainHtml;
    if(tocNav) tocNav.innerHTML = tocHtml;
    
    // Load the first snippet of this topic into the main IDE
    const actualEditor = $('#code-editor');
    if(actualEditor && x.s.length > 0) {
        actualEditor.value = x.s[0][2];
    }
    
    // Bind "Try It" buttons dynamically
    $$('.try-btn').forEach(b => {
      b.addEventListener('click', () => {
        if(actualEditor) {
            actualEditor.value = x.s[parseInt(b.dataset.idx)][2];
            window.scrollTo({ top: document.getElementById('getting-started').offsetTop - 80, behavior: 'smooth' });
        }
      });
    });

    // Re-initialize Observers for the newly injected HTML
    initScrollReveal();
    initScrollSpy();
  }

  /* ---------- 3. UI ANIMATION HELPERS ---------- */
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

  /* ---------- 4. JAVASCRIPT NATIVE JIT EXECUTION ENGINE ---------- */
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

        // Capture console.log output dynamically from the JIT engine
        let outputBuffer = [];
        const originalLog = console.log;
        const originalError = console.error;
        
        console.log = function(...args) {
            outputBuffer.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : a).join(' '));
            originalLog.apply(console, args);
        };
        
        console.error = function(...args) {
            outputBuffer.push("ERROR: " + args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : a).join(' '));
            originalError.apply(console, args);
        };

        try {
            // Evaluate JS Code natively with top-level await support mapping
            const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
            const executableCode = new AsyncFunction(codeEditor.value);
            
            executableCode().then(() => {
                outBody.textContent = outputBuffer.join('\n') || "(Execution complete. No output.)";
                outBody.style.color = "";
            }).catch(err => {
                outBody.textContent = String(err);
                outBody.style.color = "#ff7b72";
            }).finally(() => {
                console.log = originalLog; 
                console.error = originalError;
                finishRun();
            });
            
        } catch (err) {
            console.log = originalLog;
            console.error = originalError;
            outBody.textContent = String(err);
            outBody.style.color = "#ff7b72"; 
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

  /* ---------- 5. UX & ACCESSIBILITY SHORTCUTS ---------- */
  if(codeEditor) {
    codeEditor.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        e.preventDefault();
        const s = codeEditor.selectionStart;
        codeEditor.setRangeText("  ", s, codeEditor.selectionEnd, "end"); 
      }
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runBtn.click();
      }
    });
  }

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
  if (verMenu) {
      $$('li', verMenu).forEach((li) => li.addEventListener('click', () => { $('#verLabel').textContent = li.textContent; closeVer(); }));
  }
  document.addEventListener('click', closeVer);

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

  window.addEventListener('hashchange', renderContent);

  // Application Bootstrap
  buildSidebar();
  renderContent();
})();