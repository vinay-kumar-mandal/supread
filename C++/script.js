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

  /* ---------- EXHAUSTIVE C++ DOCUMENTATION DATA ---------- */
  const T = [
    // --- GETTING STARTED ---
    {
        g: "Getting Started", id: "intro", t: "Introduction & Architecture", 
        icon: ICONS.book,
        lead: "C++ is a high-performance, compiled, statically typed language designed for systems programming, game engines, and embedded software where maximum hardware control is mandatory.",
        s: [
            ["Compilation & The Preprocessor", "Unlike interpreted languages, C++ code goes through a strict build pipeline: the preprocessor handles # directives, the compiler translates source code into object files (.o), and the linker merges them into a final executable binary.", `// The preprocessor replaces this line with the actual iostream library contents before compilation
#include <iostream>

int main() {
    // std::cout represents the standard output stream
    std::cout << "Compilation Pipeline Initialized." << std::endl;
    return 0; // Return code 0 indicates successful execution to the OS
}`],
            ["Static Typing & Paradigm", "C++ enforces robust static typing and supports multiple paradigms (Procedural, Object-Oriented, and Generic programming). Memory is managed explicitly, offering deterministic performance with zero garbage collection overhead.", `#include <iostream>
#include <string>

int main() {
    // Explicit static typing
    const int coreCount = 8;
    std::string architecture = "x86_64";
    
    std::cout << "System initialized with " << coreCount 
              << " cores on " << architecture << " architecture." << std::endl;
    return 0;
}`]
        ]
    },
    
    // --- CORE CONCEPTS ---
    {
        g: "Core Concepts", id: "pointers-refs", t: "Pointers & References", 
        icon: ICONS.code,
        lead: "Direct memory manipulation is the hallmark of C++. Pointers store memory addresses, while references act as immutable aliases to existing variables.",
        s: [
            ["Raw Pointers", "A pointer holds the physical memory address of a variable. They allow dynamic memory allocation on the heap, but require explicit deletion to prevent memory leaks.", `#include <iostream>

int main() {
    int data = 100;
    int* ptr = &data; // ptr stores the memory address of 'data'
    
    std::cout << "Value: " << data << std::endl;
    std::cout << "Memory Address: " << ptr << std::endl;
    
    *ptr = 200; // Dereferencing the pointer mutates the original memory location
    std::cout << "Mutated Value: " << data << std::endl;
    return 0;
}`],
            ["References", "A reference is an alias for an existing variable. Unlike pointers, references cannot be null and cannot be reassigned to point to another variable once initialized.", `#include <iostream>
#include <string>

// Passing by reference avoids copying the large string object
void updateStatus(std::string& statusRef) {
    statusRef = "System Online";
}

int main() {
    std::string status = "System Offline";
    updateStatus(status);
    std::cout << "Current Status: " << status << std::endl;
    return 0;
}`]
        ]
    },
    {
        g: "Core Concepts", id: "oop", t: "Object-Oriented Design (RAII)", 
        icon: ICONS.shield,
        lead: "C++ implements Object-Oriented Programming tightly coupled with RAII (Resource Acquisition Is Initialization), ensuring deterministic resource cleanup.",
        s: [
            ["Classes & Constructors", "Classes encapsulate state and behavior. The constructor initializes the object, and the destructor is deterministically called when the object goes out of scope.", `#include <iostream>

class Engine {
private:
    bool isRunning;

public:
    // Constructor
    Engine() : isRunning(false) {
        std::cout << "Engine allocated." << std::endl;
    }
    
    // Destructor (invoked automatically upon scope exit)
    ~Engine() {
        std::cout << "Engine deallocated and resources freed." << std::endl;
    }

    void start() {
        isRunning = true;
        std::cout << "Engine started." << std::endl;
    }
};

int main() {
    { // Block scope forces deterministic destruction
        Engine v8;
        v8.start();
    } // ~Engine() is called exactly here
    
    std::cout << "Scope exited." << std::endl;
    return 0;
}`]
        ]
    },

    // --- MODERN C++ (11/14/17/20) ---
    {
        g: "Modern C++", id: "smart-pointers", t: "Smart Pointers (C++11)", 
        icon: ICONS.zap,
        lead: "Modern C++ strongly discourages raw pointers (new/delete). Smart pointers automate heap memory management through RAII, eliminating memory leaks.",
        s: [
            ["std::unique_ptr", "A unique_ptr expresses exclusive ownership of a dynamically allocated object. The memory is automatically freed when the unique_ptr goes out of scope.", `#include <iostream>
#include <memory>

class Sensor {
public:
    Sensor() { std::cout << "Sensor online." << std::endl; }
    ~Sensor() { std::cout << "Sensor offline." << std::endl; }
    void read() { std::cout << "Reading data..." << std::endl; }
};

int main() {
    // C++14 std::make_unique is the safest way to allocate heap memory
    std::unique_ptr<Sensor> radar = std::make_unique<Sensor>();
    radar->read();
    
    // No 'delete' keyword needed; memory is freed automatically here
    return 0;
}`],
            ["std::shared_ptr", "A shared_ptr implements reference counting. Multiple shared_ptrs can own the same object. The memory is deallocated only when the last shared_ptr pointing to it is destroyed.", `#include <iostream>
#include <memory>

int main() {
    std::shared_ptr<int> ptr1 = std::make_shared<int>(42);
    std::cout << "Reference Count: " << ptr1.use_count() << std::endl; // 1
    
    {
        std::shared_ptr<int> ptr2 = ptr1; // Shared ownership
        std::cout << "Reference Count: " << ptr1.use_count() << std::endl; // 2
    } // ptr2 goes out of scope
    
    std::cout << "Reference Count: " << ptr1.use_count() << std::endl; // 1
    // Memory is freed when ptr1 goes out of scope
    return 0;
}`]
        ]
    },
    {
        g: "Modern C++", id: "move-semantics", t: "Move Semantics & R-Values", 
        icon: ICONS.zap,
        lead: "Introduced in C++11, move semantics eliminate expensive deep copies by transferring ownership of resources from temporary objects (r-values) to permanent ones.",
        s: [
            ["std::move", "std::move casts an l-value (a named variable) into an r-value reference (&&), telling the compiler that it is safe to 'steal' its resources rather than copying them.", `#include <iostream>
#include <vector>
#include <string>
#include <utility> // for std::move

int main() {
    std::string original = "Massive Payload Data";
    std::vector<std::string> storage;
    
    // Using std::move prevents the engine from copying the string characters
    // It simply points the vector to the original's memory buffer
    storage.push_back(std::move(original));
    
    std::cout << "Vector contents: " << storage[0] << std::endl;
    // 'original' is now in a valid but unspecified (usually empty) state
    std::cout << "Original length: " << original.length() << std::endl;
    
    return 0;
}`]
        ]
    },
    {
        g: "Modern C++", id: "auto-lambdas", t: "Auto & Lambdas", 
        icon: ICONS.zap,
        lead: "C++11 introduced type deduction and functional programming constructs, significantly reducing code verbosity.",
        s: [
            ["The 'auto' Keyword", "The compiler deduces the exact type at compile time. This does not make C++ dynamically typed; the type remains static and immutable after deduction.", `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {10, 20, 30};
    
    // 'auto' prevents writing out 'std::vector<int>::iterator'
    for (auto it = numbers.begin(); it != numbers.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;
    
    // Even cleaner using range-based for loops (C++11)
    for (const auto& num : numbers) {
        std::cout << num << " ";
    }
    
    return 0;
}`],
            ["Lambda Expressions", "Lambdas are anonymous, inline functions. The capture block '[]' defines which variables from the surrounding scope are accessible inside the lambda.", `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> data = {5, 2, 8, 1, 9};
    int threshold = 4;
    
    // [threshold] captures the local variable by value
    auto count = std::count_if(data.begin(), data.end(), [threshold](int x) {
        return x > threshold;
    });
    
    std::cout << "Elements strictly greater than " << threshold << ": " << count << std::endl;
    return 0;
}`]
        ]
    },

    // --- ADVANCED TOPICS ---
    {
        g: "Advanced Architecture", id: "templates", t: "Templates & Metaprogramming", 
        icon: ICONS.globe,
        lead: "Templates are the foundation of C++ generic programming. They allow writing code that works with any data type, resolved at compile-time.",
        s: [
            ["Function Templates", "The compiler generates a specific version of the function for every data type it is called with. This provides generic abstraction with zero runtime penalty.", `#include <iostream>
#include <string>

// Generic Template Definition
template <typename T>
T getMaximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    int maxInt = getMaximum(10, 20); // Compiler generates getMaximum<int>
    double maxDouble = getMaximum(3.14, 2.71); // Generates getMaximum<double>
    
    std::cout << "Max Int: " << maxInt << std::endl;
    std::cout << "Max Double: " << maxDouble << std::endl;
    
    return 0;
}`]
        ]
    },
    {
        g: "Advanced Architecture", id: "concurrency", t: "Concurrency (std::thread)", 
        icon: ICONS.shield,
        lead: "C++11 introduced a standard threading library, providing low-level, deterministic control over OS threads, mutexes, and atomic operations.",
        s: [
            ["Threads and Mutexes", "std::thread spawns a true OS thread. Because multiple threads can access shared memory simultaneously, a std::mutex (Mutual Exclusion) is required to prevent race conditions and memory corruption.", `#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx;
int sharedCounter = 0;

void incrementCounter() {
    for (int i = 0; i < 100; i++) {
        // std::lock_guard provides RAII-style mutex locking.
        // It automatically releases the lock when going out of scope.
        std::lock_guard<std::mutex> lock(mtx);
        sharedCounter++;
    }
}

int main() {
    std::thread t1(incrementCounter);
    std::thread t2(incrementCounter);
    
    t1.join(); // Block main thread until t1 finishes
    t2.join(); // Block main thread until t2 finishes
    
    std::cout << "Final Counter Value (Should be 200): " << sharedCounter << std::endl;
    return 0;
}`]
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
            <span class="h-8 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-indigo-600 shadow-[0_0_14px_#60a5fa]"></span>
            <h2 class="text-[28px] font-bold tracking-tight text-white">${x.t}</h2>
          </div>
          <p class="reveal mt-2 text-[13px] text-slate-300">${x.lead}</p>
          ${ideHTML}`;
    }

    // Generate Content Theory Blocks and TOC
    let mainHtml = '';
    let tocHtml = `<a href="#top" class="toc flex items-center gap-3 py-[5px] text-[12.5px] font-medium text-blue-400" data-t="top"><span class="dot h-2 w-2 flex-none rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>Overview</a>
    <div class="ml-[5px] border-l border-white/10 pl-[17px]">`;

    x.s.forEach((sec, idx) => {
      const slug = "sec-" + idx;
      mainHtml += `<div id="${slug}" class="hl reveal scroll-mt-24">
        <h3 class="text-xl font-semibold text-white">${sec[0]}</h3>
        ${sec[1] ? `<p class="mt-2 text-[13.5px] leading-relaxed text-slate-300">${sec[1]}</p>` : ''}
        <div class="mt-4 overflow-hidden rounded-xl border border-white/[.07] bg-[#05071a]/80">
          <div class="flex items-center justify-between border-b border-white/[.07] bg-white/[.03] px-3 py-2">
            <span class="text-[12px] font-medium text-slate-300">C++</span>
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
            a.classList.toggle('text-blue-400', on);
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

  /* ---------- 4. C++ EXECUTION ENGINE (PISTON API) ---------- */
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
        runLabel.textContent = 'Compiling...';
        out.classList.add('loading');
        ide.classList.remove('flash');
        void ide.offsetWidth;
        ide.classList.add('flash');

        try {
            // Using Piston API to compile and run C++
            const response = await fetch("https://emacs.piston.rs/api/v2/execute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    language: "cpp",
                    version: "10.2.0",
                    files: [{ content: codeEditor.value }]
                })
            });
            const data = await response.json();
            
            if (data.compile && data.compile.code !== 0) {
                outBody.textContent = data.compile.output;
                outBody.style.color = "#ff7b72"; // Error color
            } else if (data.run && data.run.code !== 0) {
                outBody.textContent = data.run.output;
                outBody.style.color = "#ff7b72"; // Runtime Error color
            } else {
                outBody.textContent = data.run.output || "(Execution complete. No output.)";
                outBody.style.color = ""; // Success color
            }
        } catch (e) { 
            outBody.textContent = "Compilation failed. Check your internet connection or API status."; 
            outBody.style.color = "#ff7b72";
        }
        
        setTimeout(() => {
          out.classList.remove('loading');
          runBtn.classList.remove('running');
          runLabel.textContent = 'Run';
          running = false;
        }, 300);
      });
  }

  /* ---------- 5. UX & ACCESSIBILITY SHORTCUTS ---------- */
  if(codeEditor) {
    codeEditor.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        e.preventDefault();
        const s = codeEditor.selectionStart;
        codeEditor.setRangeText("    ", s, codeEditor.selectionEnd, "end"); // C++ typically prefers 4-space tab
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
