(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- FULL JAVASCRIPT DATA ---------- */
  const T = [
    // --- GETTING STARTED ---
    {
        g: "Getting Started", id: "installation", t: "Installation", 
        icon: '<svg class="h-4 w-4 text-violet-200" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
        lead: "JavaScript runs natively in every modern web browser, so you don't need to install anything to start learning.",
        s: [
            ["Browser Environment", "Every modern browser has a built-in JavaScript engine (like V8 in Chrome). You can run JS right now by pressing F12 and opening the Console.", `// Try this in your browser console or run it here\nconsole.log("JavaScript is already installed!");`],
            ["Node.js (Server-side)", "To run JavaScript outside the browser (for backend development), you need to install Node.js from nodejs.org.", `// Run this using 'node filename.js' in your terminal\nconst environment = typeof window === 'undefined' ? 'Node.js' : 'Browser';\nconsole.log(\`Running in: \${environment}\`);`]
        ]
    },
    {
        g: "Getting Started", id: "first-program", t: "Your First Program", 
        icon: '<svg class="h-4 w-4 text-violet-200" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
        lead: "The tradition of programming starts with printing 'Hello, World!' to the screen.",
        s: [
            ["Hello World", "In JavaScript, we use the console.log() function to print messages to the developer console.", `// This prints a message to the output console\nconsole.log("Hello, World!");\n\nconst language = "JavaScript";\nconsole.log(\`Welcome to \${language}!\`);`]
        ]
    },
    {
        g: "Getting Started", id: "basic-syntax", t: "Basic Syntax", 
        icon: '<svg class="h-4 w-4 text-violet-200" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
        lead: "JavaScript syntax is the set of rules that defines a correctly structured JavaScript program.",
        s: [
            ["Statements and Semicolons", "A computer program is a list of 'instructions' to be executed by a computer. In JS, these instructions are called statements, usually separated by semicolons.", `let x = 5; // Statement 1\nlet y = 6; // Statement 2\nlet z = x + y; // Statement 3\nconsole.log("Result:", z);`],
            ["Comments", "Comments are used to explain code and make it more readable. They are ignored by the JavaScript engine.", `// This is a single-line comment\n\n/*\nThis is a multi-line comment.\nIt can span across several lines.\n*/\nconsole.log("Comments are invisible to the engine.");`],
            ["Case Sensitivity", "JavaScript is strictly case-sensitive. The variables 'myVar' and 'myvar' are treated as two completely different variables.", `let lastName = "Doe";\nlet lastname = "Smith";\n\nconsole.log(lastName); // Outputs "Doe"\nconsole.log(lastname); // Outputs "Smith"`]
        ]
    },

    // --- CORE CONCEPTS ---
    {
        g: "Core Concepts", id: "variables", t: "Variables and Data Types", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.500 20.500 7v10L12 21.500 3.500 17V7z"/><path d="M12 12 3.500 7M12 12l8.500-5M12 12v9.500"/></svg>',
        lead: "Variables store data values. JavaScript provides multiple data types to handle different kinds of information.",
        s: [
            ["let, const, and var", "Use 'const' for values that won't change, and 'let' for variables that will. Avoid 'var' due to its confusing scoping rules.", `const maxUsers = 100;\nlet currentUsers = 50;\n\ncurrentUsers += 5; // Valid update for let\n// maxUsers = 150; // Error: Assignment to constant variable.\n\nconsole.log(\`Active users: \${currentUsers} / \${maxUsers}\`);`],
            ["Primitive Data Types", "The main primitive types are String, Number, Boolean, Undefined, and Null.", `const title = "DocuNova";   // String\nconst price = 49.99;        // Number\nconst isActive = true;      // Boolean\nlet noValueAssigned;        // Undefined\nconst emptyValue = null;    // Null\n\nconsole.log(typeof title, typeof price, typeof isActive);`]
        ]
    },
    {
        g: "Core Concepts", id: "control-flow", t: "Control Flow", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.500 20.500 7v10L12 21.500 3.500 17V7z"/><path d="M12 12 3.500 7M12 12l8.500-5M12 12v9.500"/></svg>',
        lead: "Control flow statements dictate the path your code takes based on conditions and loops.",
        s: [
            ["If / Else Statements", "Execute blocks of code conditionally.", `const hour = 14;\n\nif (hour < 12) {\n  console.log("Good morning!");\n} else if (hour < 18) {\n  console.log("Good afternoon!");\n} else {\n  console.log("Good evening!");\n}`],
            ["Switch Statement", "The switch statement evaluates an expression and executes code matching a case clause.", `const role = "admin";\n\nswitch (role) {\n  case "admin":\n    console.log("Full access granted.");\n    break;\n  case "editor":\n    console.log("Edit access granted.");\n    break;\n  default:\n    console.log("Read-only access.");\n}`],
            ["Loops (For & While)", "Loops are handy if you want to run the same code over and over again, each time with a different value.", `// For Loop\nfor (let i = 1; i <= 3; i++) {\n  console.log(\`Iteration \${i}\`);\n}\n\n// While Loop\nlet count = 3;\nwhile (count > 0) {\n  console.log(count + "...");\n  count--;\n}\nconsole.log("Liftoff!");`]
        ]
    },
    {
        g: "Core Concepts", id: "functions", t: "Functions", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.500 20.500 7v10L12 21.500 3.500 17V7z"/><path d="M12 12 3.500 7M12 12l8.500-5M12 12v9.500"/></svg>',
        lead: "Functions are blocks of code designed to perform a particular task when invoked.",
        s: [
            ["Function Declarations", "A standard function declaration is hoisted, meaning it can be called before it is defined.", `console.log(multiply(4, 5)); // Works due to hoisting\n\nfunction multiply(a, b) {\n  return a * b;\n}`],
            ["Arrow Functions", "Introduced in ES6, arrow functions provide a shorter syntax and do not bind their own 'this' context.", `const add = (a, b) => a + b;\n\n// Multi-line arrow function\nconst greet = name => {\n  const message = \`Hello, \${name}\`;\n  return message;\n};\n\nconsole.log(add(10, 20));\nconsole.log(greet("Alice"));`]
        ]
    },
    {
        g: "Core Concepts", id: "objects-arrays", t: "Objects and Arrays", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.500 20.500 7v10L12 21.500 3.500 17V7z"/><path d="M12 12 3.500 7M12 12l8.500-5M12 12v9.500"/></svg>',
        lead: "Complex data structures in JavaScript are built using Objects (key-value pairs) and Arrays (ordered lists).",
        s: [
            ["Working with Objects", "Objects are variables that can contain many values represented as properties.", `const car = {\n  brand: "Tesla",\n  model: "Model 3",\n  start: function() {\n    return "Engine started!";\n  }\n};\n\nconsole.log(car.brand);\nconsole.log(car.start());`],
            ["Working with Arrays", "Arrays are special objects used to store multiple values in a single variable.", `const fruits = ["Apple", "Banana", "Cherry"];\n\nfruits.push("Mango"); // Add item\n\nfruits.forEach((fruit, index) => {\n  console.log(\`\${index + 1}. \${fruit}\`);\n});`],
            ["Destructuring", "A syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.", `// Object Destructuring\nconst user = { id: 42, username: "johndoe" };\nconst { id, username } = user;\n\n// Array Destructuring\nconst rgb = [255, 100, 50];\nconst [r, g, b] = rgb;\n\nconsole.log(\`User \${username} has ID \${id}\`);\nconsole.log(\`Red: \${r}\`);`]
        ]
    },
    {
        g: "Core Concepts", id: "modules", t: "Modules", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.500 20.500 7v10L12 21.500 3.500 17V7z"/><path d="M12 12 3.500 7M12 12l8.500-5M12 12v9.500"/></svg>',
        lead: "Modules allow you to break up your code into separate files, making it easier to maintain and reuse.",
        s: [
            ["Export and Import", "Use 'export' to make functions or variables available, and 'import' to use them in another file. (Note: Imports require a module environment, so they are simulated here).", `// In math.js: \n// export const add = (a, b) => a + b;\n\n// In main.js:\n// import { add } from './math.js';\n\nconsole.log("Modules keep code organized across multiple files!");`]
        ]
    },

    // --- ADVANCED TOPICS ---
    {
        g: "Advanced Topics", id: "closures", t: "Closures", 
        icon: '<svg class="h-4 w-4 flex-none text-amber-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2.500 2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300l-5.900 3.200 1.200-6.500L2.500 9.400l6.600-.9z"/></svg>',
        lead: "A closure is a feature where an inner function has access to the outer (enclosing) function's variables.",
        s: [
            ["Lexical Scoping", "Even after the outer function has finished executing, the inner function retains access to the scope it was created in.", `function createCounter() {\n  let count = 0; // Private variable\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3`]
        ]
    },
    {
        g: "Advanced Topics", id: "promises-async", t: "Promises and Async", 
        icon: '<svg class="h-4 w-4 flex-none text-amber-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2.500 2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300l-5.900 3.200 1.200-6.500L2.500 9.400l6.600-.9z"/></svg>',
        lead: "JavaScript handles asynchronous operations (like network requests) using Promises and the async/await syntax.",
        s: [
            ["Promises", "A Promise represents the eventual completion (or failure) of an asynchronous operation.", `const checkWeather = new Promise((resolve, reject) => {\n  const isSunny = true;\n  if (isSunny) resolve("Go outside!");\n  else reject("Stay home.");\n});\n\ncheckWeather\n  .then(msg => console.log(msg))\n  .catch(err => console.error(err));`],
            ["Async / Await", "Syntactic sugar over Promises, making asynchronous code look synchronous.", `const fetchUserData = async () => {\n  console.log("Fetching...");\n  // Simulate network delay\n  await new Promise(r => setTimeout(r, 1000));\n  return { user: "Vinay", role: "Admin" };\n};\n\nconst data = await fetchUserData();\nconsole.log("Data loaded:", data);`]
        ]
    },
    {
        g: "Advanced Topics", id: "event-loop", t: "Event Loop", 
        icon: '<svg class="h-4 w-4 flex-none text-amber-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2.500 2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300l-5.900 3.200 1.200-6.500L2.500 9.400l6.600-.9z"/></svg>',
        lead: "The Event Loop is the secret behind JavaScript's asynchronous, non-blocking behavior.",
        s: [
            ["Call Stack and Queues", "Microtasks (Promises) always run before Macrotasks (setTimeout).", `console.log("1. Script Start");\n\nsetTimeout(() => {\n  console.log("4. Macrotask (setTimeout)");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log("3. Microtask (Promise)");\n});\n\nconsole.log("2. Script End");\n// Notice the order of execution!`]
        ]
    },
    {
        g: "Advanced Topics", id: "error-handling", t: "Error Handling", 
        icon: '<svg class="h-4 w-4 flex-none text-amber-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2.500 2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300l-5.900 3.200 1.200-6.500L2.500 9.400l6.600-.9z"/></svg>',
        lead: "Proper error handling prevents your application from crashing unexpectedly.",
        s: [
            ["Try...Catch", "Wrap risky code in a try block, and handle the error in the catch block.", `try {\n  const num = 10;\n  // Attempting to call a non-existent function\n  num.toUpperCase(); \n} catch (error) {\n  console.log("Caught an error:");\n  console.log(error.message);\n} finally {\n  console.log("Cleanup: This runs no matter what.");\n}`]
        ]
    },

    // --- LIBRARIES ---
    {
        g: "Libraries", id: "react", t: "React", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12.500 9 5 9-5M3 16.500l9 5 9-5"/></svg>',
        lead: "A popular library for building user interfaces using a component-based architecture.",
        s: [
            ["JSX and Components", "React uses JSX, a syntax extension that looks like HTML inside JavaScript.", `// Conceptual React Component Example\nfunction Welcome(props) {\n  return \`<h1>Hello, \${props.name}</h1>\`;\n}\n\nconsole.log(Welcome({ name: "DocuNova User" }));`]
        ]
    },
    {
        g: "Libraries", id: "nodejs", t: "Node.js & Express", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12.500 9 5 9-5M3 16.500l9 5 9-5"/></svg>',
        lead: "Node.js allows JS to run on the server, and Express is its most popular web framework.",
        s: [
            ["Express Server Concept", "Express makes setting up a backend API incredibly simple.", `// Conceptual Express Server\nconst expressApp = {\n  get: (route, callback) => console.log(\`Route \${route} registered.\`),\n  listen: (port) => console.log(\`Server running on port \${port}\`)\n};\n\nexpressApp.get('/api/users', (req, res) => {});\nexpressApp.listen(3000);`]
        ]
    },
    {
        g: "Libraries", id: "lodash", t: "Lodash", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12.500 9 5 9-5M3 16.500l9 5 9-5"/></svg>',
        lead: "A modern JavaScript utility library delivering modularity, performance & extras.",
        s: [
            ["Utility Functions", "Lodash makes working with arrays, numbers, and objects much easier.", `// Conceptual Lodash cloneDeep\nconst original = { a: 1, b: { c: 2 } };\nconst clone = JSON.parse(JSON.stringify(original)); // Native deep clone trick\n\nclone.b.c = 99;\nconsole.log("Original:", original.b.c); // 2\nconsole.log("Clone:", clone.b.c); // 99`]
        ]
    },

    // --- RESOURCES ---
    {
        g: "Resources", id: "cheatsheet", t: "Cheatsheet", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
        lead: "A quick reference guide for common JavaScript operations.",
        s: [
            ["Array Methods Cheatsheet", "Quick reference for transforming arrays.", `const arr = [1, 2, 3, 4, 5];\n\n// .map() - Transform every item\nconsole.log("Map:", arr.map(x => x * 10));\n\n// .filter() - Keep specific items\nconsole.log("Filter:", arr.filter(x => x % 2 === 0));\n\n// .reduce() - Accumulate to a single value\nconsole.log("Reduce:", arr.reduce((acc, curr) => acc + curr, 0));`]
        ]
    },
    {
        g: "Resources", id: "examples", t: "Examples", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
        lead: "Real-world snippets to solve common programming challenges.",
        s: [
            ["Debounce Function", "Ensure a function is not called too frequently (e.g., search input typing).", `function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func.apply(this, args), delay);\n  };\n}\n\nconst log = debounce(() => console.log("Fired!"), 500);\nlog(); log(); log(); \n// Only fires once after 500ms`]
        ]
    },
    {
        g: "Resources", id: "faq", t: "FAQ", 
        icon: '<svg class="h-4 w-4 flex-none text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
        lead: "Frequently asked questions by JavaScript learners.",
        s: [
            ["null vs undefined", "What is the difference between null and undefined?", `let a; // Declared but not assigned\nlet b = null; // Explicitly set to 'no value'\n\nconsole.log("a is:", typeof a); // undefined\nconsole.log("b is:", typeof b); // object (a known bug in JS!)\nconsole.log(a === b); // false`]
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
    
    // Step 1: Create a grouped structure
    const groups = {};
    T.forEach(x => {
        if (!groups[x.g]) groups[x.g] = { icon: x.icon, items: [] };
        groups[x.g].items.push(x);
    });

    // Step 2: Render sidebar HTML based on grouped structure
    for (const [groupName, groupData] of Object.entries(groups)) {
        html += `<div class="grp open">
          <button class="grp-btn flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-semibold text-slate-100 transition-colors hover:bg-white/5" aria-expanded="true">
            ${groupData.icon || '<span class="w-4"></span>'}
            <span class="flex-1">${groupName}</span>
            <svg class="chev h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="sub ml-[19px] border-l border-white/10 pl-2">`;
          
        groupData.items.forEach(item => {
            html += `<a href="#${item.id}" class="block rounded-md py-[7px] pl-3 pr-2 text-[12.5px] text-slate-400 transition-colors hover:bg-white/5 hover:text-white">${item.t}</a>`;
        });
        
        html += `</div></div>`;
    }
    
    // Temporary override to ensure the exact structure from previous templates if needed, but dynamically generating is better.
    // The issue with the user's screenshot was that the HTML had hardcoded stub sections instead of dynamically generating them from the T array.
    if(sidebarNav) {
        // Fallback to hardcoded structure if elements exist but we want dynamic content
        sidebarNav.innerHTML = html;
    }
    
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
    
    // Find the current active topic, or default to the first one in the array
    let i = T.findIndex(x => x.id === hash);
    if (i === -1) i = 0;
    const x = T[i];

    // Highlight sidebar
    if(sidebarNav) {
        $$('#sidebar-nav .sub a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${x.id}`);
        });
    }
    closeSidebar();

    // 2.1 Update Hero Section (Title & Lead)
    const topHero = $('#getting-started');
    if (topHero) {
        // Keep the IDE part, replace only the top header part
        const ideHTML = topHero.innerHTML.substring(topHero.innerHTML.indexOf('<!-- IDE -->'));
        topHero.innerHTML = `
          <div class="reveal flex items-center gap-3 hl" id="top">
            <span class="h-8 w-1.5 rounded-full bg-gradient-to-b from-yellow-300 to-amber-500 shadow-[0_0_14px_#fbbf24]"></span>
            <h2 class="text-[28px] font-bold tracking-tight text-white">${x.t}</h2>
          </div>
          <p class="reveal mt-2 text-[13px] text-slate-300">${x.lead}</p>
          ${ideHTML}
        `;
    }

    // 2.2 Generate Main Theory Sections & Right Sidebar TOC
    let mainHtml = '';
    let tocHtml = `<a href="#top" class="toc flex items-center gap-3 py-[5px] text-[12.5px] font-medium text-amber-300" data-t="top"><span class="dot h-2 w-2 flex-none rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]"></span>Overview</a>
    <div class="ml-[5px] border-l border-white/10 pl-[17px]">`;

    x.s.forEach((sec, idx) => {
      const slug = "sec-" + idx;
      
      // Main Body Section
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
      
      // TOC Entry
      tocHtml += `<a href="#${slug}" class="toc block py-[5px] text-[12.5px] text-slate-400 hover:text-white" data-t="${slug}">${sec[0]}</a>`;
    });
    
    tocHtml += `</div>`;
    
    // Inject generated HTML
    if(docContent) docContent.innerHTML = mainHtml;
    if(tocNav) tocNav.innerHTML = tocHtml;
    
    // 2.3 Load the first snippet of this topic into the main IDE
    const actualEditor = $('#code-editor');
    if(actualEditor && x.s.length > 0) {
        actualEditor.value = x.s[0][2];
    }
    
    // 2.4 Bind "Try It" buttons dynamically
    // When clicked, it loads that specific snippet into the IDE and scrolls up
    $$('.try-btn').forEach(b => {
      b.addEventListener('click', () => {
        if(actualEditor) {
            actualEditor.value = x.s[parseInt(b.dataset.idx)][2];
            window.scrollTo({ top: document.getElementById('getting-started').offsetTop - 80, behavior: 'smooth' });
        }
      });
    });

    // Re-initialize UI scripts for the newly injected HTML
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
  const codeEditorEl = $('#code-editor');
  if(codeEditorEl) {
    codeEditorEl.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        e.preventDefault();
        const s = codeEditorEl.selectionStart;
        codeEditorEl.setRangeText("  ", s, codeEditorEl.selectionEnd, "end"); // JS prefers 2-space tab
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
        const text = codeEditorEl ? codeEditorEl.value : '';
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

  // VERY IMPORTANT: When the hash changes (user clicks sidebar link), re-render content
  window.addEventListener('hashchange', renderContent);

  // Initialize
  buildSidebar();
  renderContent();
})();
