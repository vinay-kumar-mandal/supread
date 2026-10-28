const T = [
    {
        g: "Basics", 
        id: "intro", 
        t: "Introduction to Python", 
        lead: "Python is a powerful, high-level, interpreted programming language renowned for its elegant syntax, dynamic typing, and immense versatility across web development, data science, and automation.",
        s: [
            [
                "Why Python?", 
                "Created by Guido van Rossum in 1991, Python emphasizes code readability. Its English-like syntax allows developers to express complex concepts in fewer lines of code compared to C++ or Java. It is dynamically typed, meaning variable types are determined at runtime.", 
                `# Python's elegant syntax in action\nprint("Welcome to Supread Docs!")\n\n# Variables are dynamically typed (no need to declare int/str)\nversion = 3.11\nlanguage = "Python"\n\nprint(f"We are learning {language} version {version}")`
            ],
            [
                "Interpreted & Interactive", 
                "Python is an interpreted language. The Python interpreter executes code line by line without needing a separate compilation step. This makes debugging easier and allows for highly interactive programming.", 
                `# Code executes line by line\nprint("Step 1: Initializing...")\nscore = 100\nprint("Step 2: Score loaded.")\n\nif score == 100:\n    print("Step 3: Perfect Score!")`
            ],
            [
                "The Zen of Python", 
                "Python has a core philosophy guiding its design, which promotes simplicity, readability, and explicitness. You can actually read these guiding principles by importing a special built-in module.", 
                `# Run this code to reveal Python's philosophy\nimport this`
            ]
        ]
    },
    {
        g: "Basics", 
        id: "variables", 
        t: "Variables & Data Types", 
        lead: "Variables are named references to objects in memory. Python is dynamically typed, meaning you don't declare types explicitly; the interpreter infers the type automatically at runtime based on the assigned value.",
        s: [
            [
                "Variable Assignment & Rules", 
                "Variables are created the moment you assign a value to them using the <code>=</code> operator. Variable names must start with a letter or underscore, can contain alphanumeric characters, and are strictly case-sensitive.", 
                `# Assigning values to variables
user_age = 20
user_name = "Vinay"
is_developer = True

# Variable names are case-sensitive
Age = 25 
print(f"{user_name} is {user_age} years old.")
print(f"Developer status: {is_developer}")
print(f"Note: age ({user_age}) and Age ({Age}) are different variables.")`
            ],
            [
                "Primitive Data Types", 
                "Python's core primitive types include <code>int</code> (integers), <code>float</code> (decimal numbers), <code>str</code> (text strings), and <code>bool</code> (True/False). You can check a variable's exact type using the built-in <code>type()</code> function.", 
                `items_count = 10         # int
temperature = 98.6       # float
status_msg = "Success"   # str
is_active = True         # bool
empty_val = None         # NoneType

# Checking types dynamically
for val in (items_count, temperature, status_msg, is_active, empty_val):
    print(f"{repr(val):<10} -> {type(val).__name__}")`
            ],
            [
                "Type Casting (Conversion)", 
                "Python is strongly typed, meaning it won't automatically mix incompatible types (like adding a string to an integer). You must explicitly convert types using functions like <code>int()</code>, <code>float()</code>, and <code>str()</code>.", 
                `string_num = "42"
integer_num = 10

# Convert string to integer for mathematical operations
total = int(string_num) + integer_num
print("Total sum:", total)

# Convert integer to string for text concatenation
message = "The final total is " + str(total)
print(message)

# String to float
print("Float value:", float("3.14159"))`
            ],
            [
                "Multiple Assignment", 
                "Python allows assigning values to multiple variables in a single elegant line. You can unpack sequences or assign the exact same value to multiple variables simultaneously.", 
                `# Unpacking multiple values in one line
x, y, z = 10, 20, 30
print(f"x: {x}, y: {y}, z: {z}")

# Chained assignment for the same value
a = b = c = 100
print(f"a: {a}, b: {b}, c: {c}")

# Swapping variables easily without a temporary variable
x, y = y, x
print(f"After swap -> x: {x}, y: {y}")`
            ]
        ]
    },
    {
        g: "Basics", 
        id: "operators", 
        t: "Python Operators", 
        lead: "Operators are special symbols or keywords that perform calculations, comparisons, or logical evaluations on variables and values.",
        s: [
            [
                "Arithmetic Operators", 
                "Python allows addition (+), subtraction (-), multiplication (*), and division (/)[cite: 81]. Python uses two multiplication symbols (**) to represent exponents[cite: 81]. The modulo operator (%) divides one number by another number and returns the remainder[cite: 34].", 
                `# Basic arithmetic operations
addition = 10 + 5
subtraction = 10 - 5
multiplication = 10 * 5
division = 10 / 5

# Exponents and Modulo
exponent = 3 ** 2  # 3 squared is 9
remainder = 10 % 3 # Returns 1

print(f"Add: {addition}, Multiply: {multiplication}")
print(f"Exponent: {exponent}, Modulo: {remainder}")`
            ],
            [
                "Comparison Operators", 
                "You can test if two values are equal (==) or not equal using the inequality operator (!=)[cite: 34]. You can also use mathematical comparisons such as less than (<), less than or equal to (<=), greater than (>), and greater than or equal to (>=)[cite: 130].", 
                `age = 19

# Checking conditions
is_adult = (age >= 18)
is_teen = (age < 20)
is_not_twenty = (age != 20)

print(f"Is adult? {is_adult}")
print(f"Is teenager? {is_teen}")
print(f"Is exactly 20? {age == 20}")`
            ],
            [
                "Logical Operators", 
                "The keyword 'and' checks if two conditions are both True simultaneously[cite: 130]. The keyword 'or' passes when either or both of the individual tests pass[cite: 131].", 
                `age_0 = 22
age_1 = 18

# Using 'and' - both conditions must be True
both_adults = (age_0 >= 18) and (age_1 >= 18)

# Using 'or' - at least one condition must be True
one_older_than_21 = (age_0 > 21) or (age_1 > 21)

print(f"Are both 18 or older? {both_adults}")
print(f"Is at least one person older than 21? {one_older_than_21}")`
            ]
        ]
    },
    {
        g: "Data types", id: "strings", t: "Strings", lead: "Immutable sequences of characters.",
        s: [["Common methods", "Strings support slicing and many methods.", `s = "  Python Docs  "\nprint(s.strip().upper())\nprint(s.strip()[0:6])\nprint("-".join(["a", "b", "c"]))\nprint("Python".replace("P", "J"))`]]
    },
    {
        g: "Data types", id: "lists", t: "Lists", lead: "Ordered, mutable collections.",
        s: [["Basic use", "Add with <code>append()</code>, remove with <code>pop()</code>, sort with <code>sorted()</code>.", `nums = [3, 1, 2]\nnums.append(4)\nprint(nums, len(nums))\nprint(sorted(nums, reverse=True))\nprint(nums[1:3])`]]
    },
    {
        g: "Data types", id: "tuples-sets", t: "Tuples & Sets", lead: "Tuples are immutable; sets hold unique values.",
        s: [["Examples", "", `pt = (3, 4)\nx, y = pt\nprint(x, y)\nunique = set([1, 2, 2, 3])\nprint(unique, unique | {9})`]]
    },
    {
        g: "Data types", id: "dicts", t: "Dictionaries", lead: "Key–value mappings.",
        s: [["Basic use", "Use <code>.get()</code> to avoid <code>KeyError</code>.", `user = {"name": "Vinay", "lang": "Python"}\nuser["age"] = 21\nprint(user.get("city", "unknown"))\nfor k, v in user.items():\n    print(k, "=", v)`]]
    },
    {
        g: "Control flow", id: "conditions", t: "Conditionals", lead: "Branch with <code>if</code>, <code>elif</code>, <code>else</code>.",
        s: [["Example", "", `score = 72\nif score >= 90:\n    print("A")\nelif score >= 60:\n    print("B")\nelse:\n    print("C")`]]
    },
    {
        g: "Control flow", id: "loops", t: "Loops", lead: "Repeat with <code>for</code> and <code>while</code>.",
        s: [["for and while", "Use <code>range()</code>, <code>break</code>, <code>continue</code>.", `for i in range(3):\n    print("for", i)\nn = 3\nwhile n > 0:\n    print("while", n)\n    n -= 1`],
        ["Comprehensions", "Compact way to build lists.", `squares = [i * i for i in range(6) if i % 2 == 0]\nprint(squares)`]]
    },
    {
        g: "Functions & OOP", id: "functions", t: "Functions", lead: "Reusable blocks defined with <code>def</code>.",
        s: [["Defaults and *args", "", `def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\ndef total(*nums):\n    return sum(nums)\n\nprint(greet("Vinay"))\nprint(total(1, 2, 3))\nprint((lambda x: x * 2)(5))`]]
    },
    {
        g: "Functions & OOP", id: "classes", t: "Classes", lead: "Bundle data and behavior.",
        s: [["Example", "<code>__init__</code> runs on creation; <code>self</code> is the instance.", `class Dog:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f"{self.name} says woof"\n\nclass Puppy(Dog):\n    def speak(self):\n        return super().speak() + " (squeaky)"\n\nprint(Puppy("Rex").speak())`]]
    },
    {
        g: "Advanced", id: "errors", t: "Exceptions", lead: "Handle runtime errors with <code>try</code>/<code>except</code>.",
        s: [["Example", "<code>finally</code> always runs.", `try:\n    print(10 / 0)\nexcept ZeroDivisionError as e:\n    print("Error:", e)\nfinally:\n    print("done")`]]
    },
    {
        g: "Advanced", id: "modules", t: "Modules & Imports", lead: "Reuse code from the standard library and packages.",
        s: [["Example", "Install third-party packages with <code>pip install name</code>.", `import math, random\nfrom datetime import date\nprint(math.sqrt(16), math.pi)\nprint(random.randint(1, 6))\nprint(date.today().year)`]]
    }
];
const $ = s => document.querySelector(s);
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const side = $("#sidebar"), content = $("#content"), code = $("#code"), out = $("#out"), status = $("#status"), runBtn = $("#runBtn");
function buildNav(q = "") {
    let h = "", last = "";
    T.filter(x => x.t.toLowerCase().includes(q.toLowerCase())).forEach(x => {
        if (x.g !== last) {
            // Agar pehle se koi group open hai, toh use close karein
            if (last !== "") h += `</details>`;
            
            // Naya dropdown group banayein ('open' attribute se by default open rahega)
            h += `<details open><summary>${x.g}</summary>`;
            last = x.g;
        }
        h += `<a href="#${x.id}" data-id="${x.id}">${x.t}</a>`;
    });
    
    // Last group ko close karein
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
        h += `<h2>${title}</h2>${txt ? `<p>${txt}</p>` : ""}<div class="ex"><div class="ex-head"><span>Python</span><button data-run="${i}-${n}">Try it</button></div><pre><code>${esc(c)}</code></pre></div>`;
    });
    h += `<div class="pager">${i > 0 ? `<a href="#${T[i - 1].id}">← ${T[i - 1].t}</a>` : "<span></span>"}${i < T.length - 1 ? `<a href="#${T[i + 1].id}">${T[i + 1].t} →</a>` : "<span></span>"}</div>`;
    content.innerHTML = h; content.scrollIntoView(); window.scrollTo(0, 0);
    code.value = x.s[0][2]; mark(); side.classList.remove("open");
    document.title = x.t + " – Python Docs";
}
content.addEventListener("click", e => {
    const b = e.target.closest("[data-run]"); if (!b) return;
    const [i, n] = b.dataset.run.split("-"); code.value = T[i].s[n][2]; run();
});
$("#search").addEventListener("input", e => buildNav(e.target.value));
$("#menuBtn").onclick = () => side.classList.toggle("open");
addEventListener("hashchange", render);

// theme: light -> dark -> eye
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

// editor + Pyodide (loads on first Run)
let py = null, loading = null;
function loadPy() {
    if (loading) return loading;
    status.textContent = "Loading Python…";
    loading = new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
        s.onload = async () => { try { py = await loadPyodide(); status.textContent = "Python ready"; res(py) } catch (e) { rej(e) } };
        s.onerror = () => rej(new Error("Cannot load Python runtime. Check internet connection."));
        document.head.appendChild(s);
    });
    loading.catch(() => { loading = null; status.textContent = "Load failed" });
    return loading;
}
async function run() {
    runBtn.disabled = true; out.className = ""; out.textContent = "";
    try {
        const p = await loadPy(); let buf = "";
        p.setStdout({ batched: s => { buf += s + "\n"; out.textContent = buf } });
        p.setStderr({ batched: s => { buf += s + "\n"; out.textContent = buf } });
        await p.runPythonAsync(code.value);
        if (!buf) out.textContent = "(no output)";
    } catch (e) { out.className = "err"; out.textContent = String(e.message || e).split("\n").slice(-6).join("\n") }
    runBtn.disabled = false;
}
runBtn.onclick = run;
$("#clearBtn").onclick = () => { out.className = ""; out.textContent = "" };
code.addEventListener("keydown", e => {
    if (e.key === "Tab") { e.preventDefault(); const s = code.selectionStart; code.setRangeText("    ", s, code.selectionEnd, "end") }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); run() }
});
buildNav(); render();
