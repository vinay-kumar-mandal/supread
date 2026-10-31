const T = [
    {
        g: "Basics", 
        id: "intro", 
        t: "Introduction to C++", 
        lead: "C++ is a cross-platform language that can be used to create high-performance applications. It is an extension of the C language.",
        s: [
            [
                "Hello World", 
                "Every C++ program must have a main() function. The #include <iostream> statement allows us to perform standard input/output operations.", 
                `#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to Supread C++ Docs!" << endl;
    return 0;
}`
            ],
            [
                "Variables & Data Types", 
                "In C++, you must specify the type of variable you want to create (e.g., int, string, double).", 
                `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 19;
    string name = "Vinay";
    double score = 98.5;
    
    cout << name << " is " << age << " years old." << endl;
    return 0;
}`
            ]
        ]
    },
    {
        g: "Control Flow", 
        id: "conditions", 
        t: "Conditionals", 
        lead: "C++ uses standard logical mathematics to evaluate conditions.",
        s: [
            [
                "If / Else Statements", 
                "Use if to specify a block of code to be executed, if a specified condition is true.", 
                `#include <iostream>
using namespace std;

int main() {
    int time = 20;
    if (time < 18) {
        cout << "Good day." << endl;
    } else {
        cout << "Good evening." << endl;
    }
    return 0;
}`
            ]
        ]
    },
    {
        g: "Object Oriented", 
        id: "classes", 
        t: "Classes & Objects", 
        lead: "C++ is an object-oriented programming language. Everything in C++ is associated with classes and objects.",
        s: [
            [
                "Creating a Class", 
                "Use the class keyword to create a class. Access specifiers like 'public' determine who can access the variables and functions.", 
                `#include <iostream>
using namespace std;

class Car {
  public:
    string brand;
    void honk() {
        cout << "Beep beep!" << endl;
    }
};

int main() {
    Car myCar;
    myCar.brand = "Ford";
    
    cout << "My car is a " << myCar.brand << endl;
    myCar.honk();
    return 0;
}`
            ]
        ]
    }
];

const $ = s => document.querySelector(s);
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const side = $("#sidebar"), content = $("#content"), code = $("#code"), out = $("#out"), status = $("#status"), runBtn = $("#runBtn");

function buildNav(q = "") {
    let h = "", last = "";
    T.filter(x => x.t.toLowerCase().includes(q.toLowerCase())).forEach(x => {
        if (x.g !== last) {
            if (last !== "") h += `</details>`;
            h += `<details open><summary>${x.g}</summary>`;
            last = x.g;
        }
        h += `<a href="#${x.id}" data-id="${x.id}">${x.t}</a>`;
    });
    if (last !== "") h += `</details>`;
    side.innerHTML = h || "<h4>No match</h4>";
    mark();
}
function mark() { const id = cur(); side.querySelectorAll("a").forEach(a => a.classList.toggle("on", a.dataset.id === id)) }
function cur() { const id = location.hash.slice(1); return T.some(x => x.id === id) ? id : T[0].id }

function render() {
    const i = T.findIndex(x => x.id === cur()), x = T[i];
    let h = `<h1>${x.t}</h1><p class="lead">${x.lead}</p>`;
    x.s.forEach(([title, txt, c], n) => {
        h += `<h2>${title}</h2>${txt ? `<p>${txt}</p>` : ""}<div class="ex"><div class="ex-head"><span>C++</span><button data-run="${i}-${n}">Try it</button></div><pre><code>${esc(c)}</code></pre></div>`;
    });
    h += `<div class="pager">${i > 0 ? `<a href="#${T[i - 1].id}">← ${T[i - 1].t}</a>` : "<span></span>"}${i < T.length - 1 ? `<a href="#${T[i + 1].id}">${T[i + 1].t} →</a>` : "<span></span>"}</div>`;
    
    const dateObj = new Date(document.lastModified);
    const formattedDate = dateObj.toLocaleDateString('en-GB');
    h += `<div style="text-align: center; margin-top: 50px; padding-top: 20px; border-top: 1px solid var(--line); font-size: 13px; color: var(--muted);">Last update at ${formattedDate}</div>`;
    
    content.innerHTML = h; content.scrollIntoView(); window.scrollTo(0, 0);
    code.value = x.s[0][2]; mark(); side.classList.remove("open");
    document.title = x.t + " – C++ Docs";
}

content.addEventListener("click", e => {
    const b = e.target.closest("[data-run]"); if (!b) return;
    const [i, n] = b.dataset.run.split("-"); code.value = T[i].s[n][2]; run();
});
$("#search").addEventListener("input", e => buildNav(e.target.value));
$("#menuBtn").onclick = () => side.classList.toggle("open");
addEventListener("hashchange", render);

const themes = [["light", "☀ Light"], ["dark", "🌙 Dark"], ["eye", "👁 Eye care"]];
function setTheme(t) {
    document.documentElement.dataset.theme = t;
    $("#themeBtn").textContent = themes.find(x => x[0] === t)[1];
    try { localStorage.setItem("pydocs-theme", t) } catch (e) { }
}
$("#themeBtn").onclick = () => {
    const i = themes.findIndex(x => x[0] === document.documentElement.dataset.theme);
    setTheme(themes[(i + 1) % 3][0]);
};
let saved = null; try { saved = localStorage.getItem("pydocs-theme") } catch (e) { }
setTheme(saved || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"));

// --- Hide/Unhide Editor Logic ---
const editorBtn = $("#editorBtn");
function setEditorState(hide) {
    document.body.classList.toggle("hide-editor", hide);
    editorBtn.style.opacity = hide ? "0.5" : "1";
    try { localStorage.setItem("pydocs-editor", hide ? "hidden" : "visible") } catch (e) { }
}
editorBtn.onclick = () => setEditorState(!document.body.classList.contains("hide-editor"));
let savedEditor = false; try { savedEditor = localStorage.getItem("pydocs-editor") === "hidden" } catch (e) { }
setEditorState(savedEditor);

// --- Live C++ Execution using Piston API ---
async function run() {
    runBtn.disabled = true; out.className = ""; out.textContent = "Compiling C++ code...";
    try {
        const response = await fetch("https://emacs.piston.rs/api/v2/execute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                language: "cpp",
                version: "10.2.0",
                files: [{ content: code.value }]
            })
        });
        const data = await response.json();
        
        if (data.compile && data.compile.code !== 0) {
            out.className = "err";
            out.textContent = data.compile.output;
        } else {
            out.textContent = data.run.output || "(no output)";
        }
    } catch (e) { 
        out.className = "err"; 
        out.textContent = "Compilation failed. Check your internet connection."; 
    }
    runBtn.disabled = false;
}

runBtn.onclick = run;
$("#clearBtn").onclick = () => { out.className = ""; out.textContent = "" };
code.addEventListener("keydown", e => {
    if (e.key === "Tab") { e.preventDefault(); const s = code.selectionStart; code.setRangeText("    ", s, code.selectionEnd, "end") }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); run() }
});

buildNav(); render();