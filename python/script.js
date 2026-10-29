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
                `# Python's elegant syntax in action
print("Welcome to Supread Docs!")

# Variables are dynamically typed (no need to declare int/str)
version = 3.11
language = "Python"

print(f"We are learning {language} version {version}")`
            ],
            [
                "Interpreted & Interactive", 
                "Python is an interpreted language. The Python interpreter executes code line by line without needing a separate compilation step. This makes debugging easier and allows for highly interactive programming.", 
                `# Code executes line by line
print("Step 1: Initializing...")
score = 100
print("Step 2: Score loaded.")

if score == 100:
    print("Step 3: Perfect Score!")`
            ],
            [
                "The Zen of Python", 
                "Python has a core philosophy guiding its design, which promotes simplicity, readability, and explicitness. You can actually read these guiding principles by importing a special built-in module.", 
                `# Run this code to reveal Python's philosophy
import this`
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
                "Python allows addition (+), subtraction (-), multiplication (*), and division (/). Python uses two multiplication symbols (**) to represent exponents. The modulo operator (%) divides one number by another number and returns the remainder.", 
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
                "You can test if two values are equal (==) or not equal using the inequality operator (!=). You can also use mathematical comparisons such as less than (<), less than or equal to (<=), greater than (>), and greater than or equal to (>=).", 
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
                "The keyword 'and' checks if two conditions are both True simultaneously. The keyword 'or' passes when either or both of the individual tests pass.", 
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
        lead: "A list is a dynamic, ordered collection of items. In Python, lists are incredibly flexible, indicated by square brackets, and allow you to store and manipulate collections of data efficiently.",
        s: [
            [
                "Under the Hood: Zero-Indexing & Access", 
                "Python lists are zero-indexed, meaning the first item is at position 0, which stems from how list operations are implemented at a lower level in memory. Python also provides negative indexing, where -1 accesses the very last element, acting as a dynamic pointer regardless of the list's total length.", 
                `bicycles = ['trek', 'cannondale', 'redline']

# Zero-indexed access
print(f"First item: {bicycles[0]}")

# Negative indexing for dynamic tail access
print(f"Last item: {bicycles[-1]}")`
            ],
            [
                "Common Pitfalls: IndexErrors & Assignment Copies", 
                "A frequent beginner mistake is the 'off-by-one' IndexError, caused by requesting the Nth item using index N instead of N-1. Another major pitfall is copying lists by standard assignment (list2 = list1). This merely creates two variable labels pointing to the same memory location, so changes to one affect the other. Always use slicing ([:]) to create true independent copies.", 
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
                "Lists are dynamic structures. Use append() to add elements efficiently to the end, and pop() to simultaneously remove and use an item. When generating lists programmatically, always prefer 'List Comprehensions'. They combine a for-loop and element creation into a single, highly optimized line of code.", 
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
        lead: "Tuples are immutable lists, useful for data that shouldn't change. Sets are collections of unique items, ideal for removing duplicates and performing mathematical set operations.",
        s: [
            [
                "Under the Hood: Immutability & Uniqueness", 
                "A tuple looks just like a list but uses parentheses. Its core feature is immutability—once defined, its elements cannot be altered. Sets, on the other hand, are wrapped in braces like dictionaries but lack key-value pairs. Sets automatically filter out duplicate data and do not retain items in any specific order.", 
                `# Tuple: Fixed coordinates
dimensions = (200, 50)
print(f"Tuple: {dimensions}")

# Set: Unique items only
languages = {'python', 'ruby', 'python', 'c'}
print(f"Set (duplicates removed): {languages}")`
            ],
            [
                "Common Pitfalls: TypeErrors & Empty Sets", 
                "Trying to modify an item inside a tuple will immediately crash your program with a TypeError. For sets, a major pitfall is trying to create an empty set using empty braces '{}'. Python interprets '{}' as an empty dictionary, not a set. You must use 'set()' to create an empty set.", 
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
                "Use tuples when you want to store a set of values that should absolutely not be changed throughout the life of a program. Use sets to instantly pull out unique items from a massive list with 'set(my_list)'. Sets are highly optimized for membership testing (checking if an item exists) compared to lists.", 
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
        lead: "A dictionary is a dynamic collection of key-value pairs wrapped in braces. It allows you to connect related pieces of information and access them rapidly using their keys.",
        s: [
            [
                "Under the Hood: Key-Value Mapping & Order", 
                "Every key is connected to its value by a colon, and you use the key to fetch the value. A key's value can be a string, a number, a list, or even another dictionary. As of Python 3.7, dictionaries retain the exact order in which elements were added.", 
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
                "The most common mistake with dictionaries is asking for a key that does not exist. Using standard bracket notation (e.g., dict['missing_key']) for a non-existent key results in a fatal KeyError traceback.", 
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
                "To safely access values without risk of KeyErrors, always use the get() method, which returns a clean default value if the key doesn't exist. When analyzing data, use .items() to loop through keys and values simultaneously, .keys() for just keys, and .values() for just values.", 
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
        lead: "Python's if statement allows you to examine the current state of a program and respond appropriately. It evaluates Boolean expressions (True/False) to direct the execution flow.",
        s: [
            [
                "Under the Hood: Boolean Evaluation", 
                "At the heart of every if statement is an expression evaluated as True or False (a conditional test). Python executes the indented code block following the statement only if the test passes (evaluates to True). As soon as Python finds one test that passes in an if-elif-else chain, it skips the rest of the tests.", 
                `age = 19
# Python evaluates the expression (age >= 18) as True
if age >= 18:
    print("You are old enough to vote!")`
            ],
            [
                "Common Pitfalls: Catchall 'else' block vulnerabilities", 
                "The 'else' block is a catchall statement that matches any condition not caught by preceding tests. A major pitfall is that it can sometimes catch invalid or malicious data. It is often safer to omit the 'else' block and use a specific 'elif' statement to catch the exact final condition you expect.", 
                `age = 65

# INCORRECT (Catchall might accept invalid negative ages):
# if age < 18: price = 25
# else: price = 20

# CORRECT: Testing the specific final condition
if age < 18:
    price = 25
elif age >= 18:
    price = 20
print(f"Price: \\$\\{price}")`
            ],
            [
                "Best Practices: Independent 'if' vs 'if-elif'", 
                "If you want only one block of code to run, use an if-elif-else chain. However, if more than one condition could be True, and you want to act on every true condition (like adding multiple requested toppings to a pizza), you must use a series of independent 'if' statements without 'elif' or 'else' blocks.", 
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
        lead: "Loops automate repetitive tasks. A 'for' loop executes a block of code once for each item in a collection, while a 'while' loop runs as long as a certain condition remains true.",
        s: [
            [
                "Under the Hood: Flags & Iteration", 
                "A 'while' loop continually reevaluates its condition before each pass. For complex programs like games, evaluating many conditions in one while statement becomes difficult. Instead, programs use a Boolean variable called a 'flag' to act as a master signal. The while loop simply checks this flag, leaving the complex logic inside the loop.", 
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
                "Accidentally omitting the increment step (e.g., x += 1) in a while loop will cause an infinite loop that runs forever and crashes your program. In 'for' loops, logical errors frequently occur due to improper indentation—indenting code unnecessarily after the loop causes it to repeat, while forgetting to indent code causes it to execute only once.", 
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
                "To control loop flow efficiently without running unnecessary code, use the 'break' and 'continue' statements. 'break' instantly exits the loop entirely regardless of conditional tests, whereas 'continue' ignores the rest of the current loop iteration and immediately returns to the beginning to reevaluate the condition.", 
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
        g: "Functions & OOP", 
        id: "functions", 
        t: "Functions", 
        lead: "Functions are reusable blocks of code designed to do one specific job. Defined with the 'def' keyword, they allow you to pass data in and return results, making your code modular.",
        s: [
            [
                "Under the Hood: Scope & Argument Packing", 
                "When a function executes, Python creates a temporary local namespace. Variables defined inside cannot be accessed outside. Python also allows dynamic argument handling using *args (which packs extra positional arguments into a tuple) and **kwargs (which packs keyword arguments into a dictionary).", 
                `def build_profile(first, last, **kwargs):
    # kwargs becomes a dictionary under the hood
    kwargs['first_name'] = first
    kwargs['last_name'] = last
    return kwargs

user_profile = build_profile('albert', 'einstein', location='princeton', field='physics')
print(user_profile)`
            ],
            [
                "Common Pitfalls: Mutable Default Arguments", 
                "A dangerous pitfall is using a mutable object (like an empty list '[]' or dict '{}') as a default argument. Python evaluates default arguments only ONCE when the function is defined, not every time it's called. This means the same list is shared across all function calls.", 
                `# INCORRECT (Shared list across calls):
# def add_item(item, box=[]):

# CORRECT (Using None as a placeholder):
def add_item(item, box=None):
    if box is None:
        box = []
    box.append(item)
    return box

print(add_item("Apple"))
print(add_item("Banana")) # Fresh list created`
            ],
            [
                "Best Practices: Return Values & Docstrings", 
                "Functions should process data and 'return' a value rather than printing directly. This makes them reusable in different contexts. Always include a Docstring (triple quotes) right after the definition to explain what the function does.", 
                `def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = f"{first_name} {last_name}"
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix')
print(f"Musician: {musician}")`
            ]
        ]
    },
    {
        g: "Functions & OOP", 
        id: "classes", 
        t: "Classes & OOP", 
        lead: "Object-Oriented Programming (OOP) allows you to represent real-world situations. A class is a blueprint, and the object created from it is an 'instance'.",
        s: [
            [
                "Under the Hood: Instantiation & The 'self' Parameter", 
                "When you create an instance, Python automatically runs the special '__init__()' method to set up initial attributes. The 'self' parameter is mandatory in all methods; it is a reference to the specific instance itself, allowing Python to know which object's data to access or modify.", 
                `class Dog:
    def __init__(self, name, age):
        """Initialize name and age attributes."""
        self.name = name  # Instance attribute
        self.age = age

    def sit(self):
        print(f"{self.name} is now sitting.")

my_dog = Dog('Willie', 6)
my_dog.sit()`
            ],
            [
                "Common Pitfalls: Forgetting super() in Inheritance", 
                "When creating a child class (inheritance), you must initialize the parent class's attributes. Forgetting to call 'super().__init__()' inside the child's '__init__' method will break the object and lead to missing attribute errors.", 
                `class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

class ElectricCar(Car):
    def __init__(self, make, model, battery_size=75):
        # CORRECT: Initialize parent attributes
        super().__init__(make, model)
        self.battery_size = battery_size

my_tesla = ElectricCar('tesla', 'model s')
print(f"My {my_tesla.make} has a {my_tesla.battery_size}kWh battery.")`
            ],
            [
                "Best Practices: Encapsulation", 
                "Avoid modifying an object's attributes directly from outside the class (e.g., 'my_car.odometer = 50'). Instead, create specific methods (getters/setters) to update values safely. This protects the internal data logic.", 
                `class User:
    def __init__(self, name):
        self.name = name
        self.login_attempts = 0
        
    def increment_login_attempts(self):
        """Safely update the attribute."""
        self.login_attempts += 1

user = User('alice')
user.increment_login_attempts()
print(f"Logins: {user.login_attempts}")`
            ]
        ]
    },
    {
        g: "Advanced", 
        id: "errors", 
        t: "Exceptions (Error Handling)", 
        lead: "Python uses special objects called exceptions to manage runtime errors. Using try-except blocks allows your program to handle unexpected situations gracefully instead of crashing entirely.",
        s: [
            [
                "Under the Hood: The Exception Stack", 
                "When Python encounters an error, it creates an exception object. If you don't catch it, it bubbles up the call stack, stops the program, and prints a traceback. By wrapping code in a 'try' block, you intercept this object before it crashes the system.", 
                `print("Give me two numbers to divide.")

try:
    answer = 10 / 0
except ZeroDivisionError:
    print("Error: You can't divide by zero!")`
            ],
            [
                "Common Pitfalls: Bare Except Clauses", 
                "Using a 'bare except' (just 'except:') catches EVERYTHING, including SystemExit (when you try to close the app) or KeyboardInterrupt (Ctrl+C). This hides real bugs. Always specify the exact error you are anticipating, like FileNotFoundError.", 
                `filename = 'alice.txt'

# CORRECT: Catching a specific error
try:
    with open(filename, encoding='utf-8') as f:
        contents = f.read()
except FileNotFoundError:
    print(f"Sorry, the file {filename} does not exist.")`
            ],
            [
                "Best Practices: else & finally Blocks", 
                "Use the 'else' block for code that should run ONLY if the try block was successful. Use the 'finally' block for teardown operations (like closing network connections), because 'finally' is guaranteed to run whether an exception occurred or not.", 
                `try:
    result = 10 / 2
except ZeroDivisionError:
    print("Can't divide by zero!")
else:
    # Runs only if no error occurred
    print(f"Division successful: {result}")
finally:
    # Always runs
    print("Execution complete. Cleaning up...")`
            ]
        ]
    },
    {
        g: "Advanced", 
        id: "modules", 
        t: "Modules & Imports", 
        lead: "Modules allow you to organize your code into separate files. You can import Python's standard library, third-party packages installed via pip, or your own custom files.",
        s: [
            [
                "Under the Hood: sys.path & Compilation", 
                "When you import a module, Python searches through a list of directories defined in 'sys.path'. To speed up future imports, it compiles the script into bytecode (.pyc files) and stores them in a hidden '__pycache__' directory.", 
                `import sys
import math

print(f"Pi is {math.pi}")
# Looking at the first search path
print(f"Python looks here first: {sys.path[0]}")`
            ],
            [
                "Common Pitfalls: Namespace Pollution", 
                "Using wildcard imports (from module import *) is dangerous. It dumps every function and variable from the module into your current file's namespace. This can silently overwrite your own variables if they share the same name.", 
                `# INCORRECT (Pollutes namespace):
# from math import *

# CORRECT (Explicit imports):
from math import sqrt, pow

# Using the explicitly imported functions
print(sqrt(16))`
            ],
            [
                "Best Practices: Aliasing", 
                "If an imported function or module name is too long, or conflicts with an existing variable in your code, use the 'as' keyword to give it a short, clear alias. This keeps your code readable.", 
                `# BEST PRACTICE: Module aliasing
import random as rnd

# Function aliasing
from datetime import datetime as dt

print(f"Random number: {rnd.randint(1, 100)}")
print(f"Current Year: {dt.now().year}")`
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

// --- Toggle Editor Logic ---
const editorBtn = $("#editorBtn");
function setEditorState(hide) {
    document.body.classList.toggle("hide-editor", hide);
    // Button का लुक थोड़ा चेंज करने के लिए (Optional)
    if(hide) {
        editorBtn.style.opacity = "0.5";
    } else {
        editorBtn.style.opacity = "1";
    }
    // सेटिंग को लोकल स्टोरेज में सेव करें
    try { localStorage.setItem("pydocs-editor", hide ? "hidden" : "visible") } catch (e) { }
}

editorBtn.onclick = () => {
    const isHidden = document.body.classList.contains("hide-editor");
    setEditorState(!isHidden);
};

// पेज लोड होने पर पुरानी सेटिंग चेक करें
let savedEditor = false;
try { savedEditor = localStorage.getItem("pydocs-editor") === "hidden" } catch (e) { }
setEditorState(savedEditor);