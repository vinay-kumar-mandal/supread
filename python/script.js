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
        g: "Data types", 
        id: "strings", 
        t: "Strings", 
        lead: "A string is a sequence of characters. In Python, anything inside single or double quotes is considered a string. They are immutable, meaning they cannot be changed after creation.",
        s: [
            [
                "Under the Hood: Immutability", 
                "Strings in Python are immutable. When you use methods like lower() or upper(), Python does not change the original string in memory. Instead, the interpreter creates an entirely new string object and returns it, while variables act merely as labels pointing to these objects.", 
                `language = "Python"
# This creates a NEW string object in memory
uppercase_lang = language.upper()

print(f"Original: {language}")
print(f"Modified: {uppercase_lang}")`
            ],
            [
                "Common Pitfalls: Syntax Errors with Quotes", 
                "A frequent beginner mistake is using an apostrophe inside single quotes. The Python interpreter gets confused about where the string actually ends, resulting in a SyntaxError. Always use double quotes if your text contains apostrophes.", 
                `# CORRECT: Using double quotes for strings with apostrophes
message = "One of Python's strengths is its community."
print(message)

# INCORRECT (Will cause SyntaxError):
# bad_message = 'One of Python's strengths...'`
            ],
            [
                "Best Practices: f-strings & Whitespace Sanitization", 
                "For combining variables and text, always use f-strings (introduced in Python 3.6) as they are cleaner and faster than old concatenation (+). When accepting user input, proactively use the strip() method to remove accidental whitespace from the left and right sides.", 
                `# f-strings for clean variable injection
first_name = "ada"
last_name = "lovelace"
full_name = f"{first_name} {last_name}"

# Sanitizing input with strip()
user_input = "   admin_user   "
clean_input = user_input.strip()

print(f"Welcome, {full_name.title()}!")
print(f"Cleaned Username: '{clean_input}'")`
            ]
        ]
    },
    {
        g: "Data types", 
        id: "lists", 
        t: "Lists", 
        lead: "A list is a dynamic, ordered collection of items[cite: 74, 75]. In Python, lists are incredibly flexible, indicated by square brackets, and allow you to store and manipulate collections of data efficiently[cite: 75].",
        s: [
            [
                "Under the Hood: Zero-Indexing & Access", 
                "Python lists are zero-indexed, meaning the first item is at position 0, which stems from how list operations are implemented at a lower level in memory[cite: 76]. Python also provides negative indexing, where -1 accesses the very last element, acting as a dynamic pointer regardless of the list's total length[cite: 76, 88].", 
                `bicycles = ['trek', 'cannondale', 'redline']

# Zero-indexed access
print(f"First item: {bicycles[0]}")

# Negative indexing for dynamic tail access
print(f"Last item: {bicycles[-1]}")`
            ],
            [
                "Common Pitfalls: IndexErrors & Assignment Copies", 
                "A frequent beginner mistake is the 'off-by-one' IndexError, caused by requesting the Nth item using index N instead of N-1[cite: 87, 88]. Another major pitfall is copying lists by standard assignment (list2 = list1)[cite: 105]. This merely creates two variable labels pointing to the same memory location, so changes to one affect the other[cite: 105]. Always use slicing ([:]) to create true independent copies[cite: 104].", 
                `my_foods = ['pizza', 'falafel']

# INCORRECT COPY: Both point to the exact same memory!
# friend_foods = my_foods 

# CORRECT COPY: Creates an independent copy using a slice
friend_foods = my_foods[:]
my_foods.append('cannoli')

print(f"My foods: {my_foods}")
print(f"Friend's foods (unaffected): {friend_foods}")`
            ],
            [
                "Best Practices: Modification & Comprehensions", 
                "Lists are dynamic structures[cite: 77]. Use append() to add elements efficiently to the end[cite: 78], and pop() to simultaneously remove and use an item[cite: 80]. When generating lists programmatically, always prefer 'List Comprehensions'[cite: 100]. They combine a for-loop and element creation into a single, highly optimized line of code[cite: 100, 101].", 
                `# Dynamic modification
stack = ['a', 'b']
stack.append('c')
last_item = stack.pop() # Removes and returns 'c'

# BEST PRACTICE: List Comprehension
# Generates squares of numbers 1 through 5 in one clean line
squares = [val**2 for val in range(1, 6)]

print(f"Stack after pop: {stack}")
print(f"Optimized Squares: {squares}")`
            ]
        ]
    },
    {
        g: "Data types", 
        id: "tuples-sets", 
        t: "Tuples & Sets", 
        lead: "Tuples are immutable lists, useful for data that shouldn't change[cite: 106]. Sets are collections of unique items, ideal for removing duplicates and performing mathematical set operations[cite: 145].",
        s: [
            [
                "Under the Hood: Immutability & Uniqueness", 
                "A tuple looks just like a list but uses parentheses[cite: 107]. Its core feature is immutability—once defined, its elements cannot be altered[cite: 106]. Sets, on the other hand, are wrapped in braces like dictionaries but lack key-value pairs[cite: 146]. Sets automatically filter out duplicate data and do not retain items in any specific order[cite: 145, 146].", 
                `# Tuple: Fixed coordinates
dimensions = (200, 50)
print(f"Tuple: {dimensions}")

# Set: Unique items only
languages = {'python', 'ruby', 'python', 'c'}
print(f"Set (duplicates removed): {languages}")`
            ],
            [
                "Common Pitfalls: TypeErrors & Empty Sets", 
                "Trying to modify an item inside a tuple will immediately crash your program with a TypeError[cite: 107]. For sets, a major pitfall is trying to create an empty set using empty braces '{}'. Python interprets '{}' as an empty dictionary, not a set[cite: 135]. You must use 'set()' to create an empty set.", 
                `dimensions = (200, 50)

# INCORRECT (Will cause TypeError):
# dimensions[0] = 250 

# CORRECT: Redefining the entire tuple is allowed
dimensions = (400, 100)

# Creating an empty set safely
empty_set = set()
print(f"Empty set type: {type(empty_set).__name__}")`
            ],
            [
                "Best Practices: Fast Deduplication", 
                "Use tuples when you want to store a set of values that should absolutely not be changed throughout the life of a program[cite: 108]. Use sets to instantly pull out unique items from a massive list with 'set(my_list)'[cite: 145]. Sets are highly optimized for membership testing (checking if an item exists) compared to lists.", 
                `poll_responses = ['python', 'c', 'python', 'ruby', 'c']

# BEST PRACTICE: Fast deduplication using set()
unique_responses = set(poll_responses)

print(f"Original List: {poll_responses}")
print(f"Unique Set: {unique_responses}")`
            ]
        ]
    },
    {
        g: "Data types", 
        id: "dicts", 
        t: "Dictionaries", 
        lead: "A dictionary is a dynamic collection of key-value pairs wrapped in braces[cite: 133]. It allows you to connect related pieces of information and access them rapidly using their keys[cite: 132, 133].",
        s: [
            [
                "Under the Hood: Key-Value Mapping & Order", 
                "Every key is connected to its value by a colon, and you use the key to fetch the value[cite: 133]. A key's value can be a string, a number, a list, or even another dictionary[cite: 133]. As of Python 3.7, dictionaries retain the exact order in which elements were added[cite: 135].", 
                `alien = {'color': 'green', 'points': 5}

# Accessing values via keys
alien_color = alien['color']
print(f"Alien color is {alien_color}")

# Adding new key-value pairs dynamically
alien['x_position'] = 0
print(f"Updated Dict: {alien}")`
            ],
            [
                "Common Pitfalls: The dreaded KeyError", 
                "The most common mistake with dictionaries is asking for a key that does not exist. Using standard bracket notation (e.g., dict['missing_key']) for a non-existent key results in a fatal KeyError traceback[cite: 139].", 
                `alien = {'color': 'green'}

# INCORRECT (Will cause KeyError):
# print(alien['points'])

# CORRECT (Using 'in' keyword to check first)
if 'points' in alien:
    print(alien['points'])
else:
    print("Points key not found!")`
            ],
            [
                "Best Practices: The get() Method & Looping", 
                "To safely access values without risk of KeyErrors, always use the get() method, which returns a clean default value if the key doesn't exist[cite: 139]. When analyzing data, use .items() to loop through keys and values simultaneously, .keys() for just keys, and .values() for just values[cite: 140, 141, 144].", 
                `alien = {'color': 'green'}

# BEST PRACTICE: Using get() with a fallback value
points = alien.get('points', 'No points assigned')
print(f"Safe fetch: {points}")

# BEST PRACTICE: Looping through key-value pairs
user = {'username': 'efermi', 'first': 'enrico'}
for key, value in user.items():
    print(f"Key: {key} | Value: {value}")`
            ]
        ]
    },
    {
        g: "Control flow", 
        id: "conditions", 
        t: "Conditionals (if-elif-else)", 
        lead: "Python's if statement allows you to examine the current state of a program and respond appropriately[cite: 112]. It evaluates Boolean expressions (True/False) to direct the execution flow[cite: 113, 118].",
        s: [
            [
                "Under the Hood: Boolean Evaluation", 
                "At the heart of every if statement is an expression evaluated as True or False (a conditional test)[cite: 113]. Python executes the indented code block following the statement only if the test passes (evaluates to True)[cite: 113, 120]. As soon as Python finds one test that passes in an if-elif-else chain, it skips the rest of the tests[cite: 121, 124].", 
                `age = 19
# Python evaluates the expression (age >= 18) as True
if age >= 18:
    print("You are old enough to vote!")`
            ],
            [
                "Common Pitfalls: Catchall 'else' block vulnerabilities", 
                "The 'else' block is a catchall statement that matches any condition not caught by preceding tests[cite: 124]. A major pitfall is that it can sometimes catch invalid or malicious data[cite: 124]. It is often safer to omit the 'else' block and use a specific 'elif' statement to catch the exact final condition you expect[cite: 124].", 
                `age = 65

# INCORRECT (Catchall might accept invalid negative ages):
# if age < 18: price = 25
# else: price = 20

# CORRECT: Testing the specific final condition
if age < 18:
    price = 25
elif age >= 18:
    price = 20
print(f"Price: ${price}")`
            ],
            [
                "Best Practices: Independent 'if' vs 'if-elif'", 
                "If you want only one block of code to run, use an if-elif-else chain[cite: 125]. However, if more than one condition could be True, and you want to act on every true condition (like adding multiple requested toppings to a pizza), you must use a series of independent 'if' statements without 'elif' or 'else' blocks[cite: 124, 125].", 
                `requested_toppings = ['mushrooms', 'extra cheese']

# BEST PRACTICE: Independent 'if' statements for multiple valid conditions
if 'mushrooms' in requested_toppings:
    print("Adding mushrooms.")
if 'extra cheese' in requested_toppings:
    print("Adding extra cheese.")`
            ]
        ]
    },
    {
        g: "Control flow", 
        id: "loops", 
        t: "Loops (for & while)", 
        lead: "Loops automate repetitive tasks. A 'for' loop executes a block of code once for each item in a collection[cite: 90, 118], while a 'while' loop runs as long as a certain condition remains true[cite: 112, 118].",
        s: [
            [
                "Under the Hood: Flags & Iteration", 
                "A 'while' loop continually reevaluates its condition before each pass[cite: 119]. For complex programs like games, evaluating many conditions in one while statement becomes difficult[cite: 161]. Instead, programs use a Boolean variable called a 'flag' to act as a master signal[cite: 161]. The while loop simply checks this flag, leaving the complex logic inside the loop[cite: 161, 162].", 
                `# Using a flag to control loop execution
active = True
count = 0

while active:
    count += 1
    if count >= 3:
        active = False  # The flag is switched, stopping the loop next pass
print(f"Loop ran {count} times.")`
            ],
            [
                "Common Pitfalls: Infinite Loops & Indentation", 
                "Accidentally omitting the increment step (e.g., x += 1) in a while loop will cause an infinite loop that runs forever and crashes your program[cite: 163, 164]. In 'for' loops, logical errors frequently occur due to improper indentation—indenting code unnecessarily after the loop causes it to repeat, while forgetting to indent code causes it to execute only once[cite: 95, 96].", 
                `# INCORRECT (Infinite loop):
# x = 1
# while x <= 5: print(x)

# CORRECT: Always ensure a path to exit the loop
x = 1
while x <= 3:
    print(f"Counter: {x}")
    x += 1  # Crucial increment step`
            ],
            [
                "Best Practices: break & continue", 
                "To control loop flow efficiently without running unnecessary code, use the 'break' and 'continue' statements[cite: 162, 163]. 'break' instantly exits the loop entirely regardless of conditional tests[cite: 162], whereas 'continue' ignores the rest of the current loop iteration and immediately returns to the beginning to reevaluate the condition[cite: 163].", 
                `# Using continue to print only odd numbers
current_number = 0
while current_number < 5:
    current_number += 1
    if current_number % 2 == 0:
        continue # Skips the print statement for even numbers
    print(current_number)

# Using break to exit instantly
for i in range(1, 10):
    if i == 3:
        break # Stops entirely at 3
    print(f"Break demo: {i}")`
            ]
        ]
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
