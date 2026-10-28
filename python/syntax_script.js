const T = [
{g:"Basics",id:"intro",t:"Introduction",lead:"Python is a readable, general-purpose language used for web, data, automation and AI.",
 s:[["Hello, world","Use <code>print()</code> to show output. Indentation (4 spaces) defines blocks — no braces.",`print("Hello, Python!")\nname = "Vinay"\nprint(f"Welcome, {name}")`]]},
{g:"Basics",id:"variables",t:"Variables & Types",lead:"Variables hold values. Types are inferred at runtime.",
 s:[["Core types","<code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>, <code>None</code>. Check with <code>type()</code>.",`age = 21\nprice = 9.99\nok = True\nnothing = None\nfor v in (age, price, ok, nothing):\n    print(v, type(v).__name__)`],
 ["Conversion","Use <code>int()</code>, <code>float()</code>, <code>str()</code> to convert.",`print(int("42") + 1)\nprint(str(3.5) + " kg")`]]},
{g:"Basics",id:"operators",t:"Operators",lead:"Arithmetic, comparison, logical and membership operators.",
 s:[["Examples","<code>//</code> is floor division, <code>**</code> is power, <code>in</code> tests membership.",`print(7 / 2, 7 // 2, 7 % 2, 2 ** 10)\nprint(3 < 5 and not 2 > 4)\nprint("a" in "cat")`]]},
{g:"Data types",id:"strings",t:"Strings",lead:"Immutable sequences of characters.",
 s:[["Common methods","Strings support slicing and many methods.",`s = "  Python Docs  "\nprint(s.strip().upper())\nprint(s.strip()[0:6])\nprint("-".join(["a", "b", "c"]))\nprint("Python".replace("P", "J"))`]]},
{g:"Data types",id:"lists",t:"Lists",lead:"Ordered, mutable collections.",
 s:[["Basic use","Add with <code>append()</code>, remove with <code>pop()</code>, sort with <code>sorted()</code>.",`nums = [3, 1, 2]\nnums.append(4)\nprint(nums, len(nums))\nprint(sorted(nums, reverse=True))\nprint(nums[1:3])`]]},
{g:"Data types",id:"tuples-sets",t:"Tuples & Sets",lead:"Tuples are immutable; sets hold unique values.",
 s:[["Examples","",`pt = (3, 4)\nx, y = pt\nprint(x, y)\nunique = set([1, 2, 2, 3])\nprint(unique, unique | {9})`]]},
{g:"Data types",id:"dicts",t:"Dictionaries",lead:"Key–value mappings.",
 s:[["Basic use","Use <code>.get()</code> to avoid <code>KeyError</code>.",`user = {"name": "Vinay", "lang": "Python"}\nuser["age"] = 21\nprint(user.get("city", "unknown"))\nfor k, v in user.items():\n    print(k, "=", v)`]]},
{g:"Control flow",id:"conditions",t:"Conditionals",lead:"Branch with <code>if</code>, <code>elif</code>, <code>else</code>.",
 s:[["Example","",`score = 72\nif score >= 90:\n    print("A")\nelif score >= 60:\n    print("B")\nelse:\n    print("C")`]]},
{g:"Control flow",id:"loops",t:"Loops",lead:"Repeat with <code>for</code> and <code>while</code>.",
 s:[["for and while","Use <code>range()</code>, <code>break</code>, <code>continue</code>.",`for i in range(3):\n    print("for", i)\nn = 3\nwhile n > 0:\n    print("while", n)\n    n -= 1`],
 ["Comprehensions","Compact way to build lists.",`squares = [i * i for i in range(6) if i % 2 == 0]\nprint(squares)`]]},
{g:"Functions & OOP",id:"functions",t:"Functions",lead:"Reusable blocks defined with <code>def</code>.",
 s:[["Defaults and *args","",`def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\ndef total(*nums):\n    return sum(nums)\n\nprint(greet("Vinay"))\nprint(total(1, 2, 3))\nprint((lambda x: x * 2)(5))`]]},
{g:"Functions & OOP",id:"classes",t:"Classes",lead:"Bundle data and behavior.",
 s:[["Example","<code>__init__</code> runs on creation; <code>self</code> is the instance.",`class Dog:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f"{self.name} says woof"\n\nclass Puppy(Dog):\n    def speak(self):\n        return super().speak() + " (squeaky)"\n\nprint(Puppy("Rex").speak())`]]},
{g:"Advanced",id:"errors",t:"Exceptions",lead:"Handle runtime errors with <code>try</code>/<code>except</code>.",
 s:[["Example","<code>finally</code> always runs.",`try:\n    print(10 / 0)\nexcept ZeroDivisionError as e:\n    print("Error:", e)\nfinally:\n    print("done")`]]},
{g:"Advanced",id:"modules",t:"Modules & Imports",lead:"Reuse code from the standard library and packages.",
 s:[["Example","Install third-party packages with <code>pip install name</code>.",`import math, random\nfrom datetime import date\nprint(math.sqrt(16), math.pi)\nprint(random.randint(1, 6))\nprint(date.today().year)`]]}
];
const $ = s => document.querySelector(s);
const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const side=$("#sidebar"), content=$("#content"), code=$("#code"), out=$("#out"), status=$("#status"), runBtn=$("#runBtn");
function buildNav(q=""){
  let h="", last="";
  T.filter(x=>x.t.toLowerCase().includes(q.toLowerCase())).forEach(x=>{
    if(x.g!==last){h+=`<h4>${x.g}</h4>`;last=x.g}
    h+=`<a href="#${x.id}" data-id="${x.id}">${x.t}</a>`;
  });
  side.innerHTML=h||"<h4>No match</h4>";
  mark();
}
function mark(){const id=cur();side.querySelectorAll("a").forEach(a=>a.classList.toggle("on",a.dataset.id===id))}
function cur(){const id=location.hash.slice(1);return T.some(x=>x.id===id)?id:T[0].id}
function render(){
  const i=T.findIndex(x=>x.id===cur()), x=T[i];
  let h=`<h1>${x.t}</h1><p class="lead">${x.lead}</p>`;
  x.s.forEach(([title,txt,c],n)=>{
    h+=`<h2>${title}</h2>${txt?`<p>${txt}</p>`:""}<div class="ex"><div class="ex-head"><span>Python</span><button data-run="${i}-${n}">Try it</button></div><pre><code>${esc(c)}</code></pre></div>`;
  });
  h+=`<div class="pager">${i>0?`<a href="#${T[i-1].id}">← ${T[i-1].t}</a>`:"<span></span>"}${i<T.length-1?`<a href="#${T[i+1].id}">${T[i+1].t} →</a>`:"<span></span>"}</div>`;
  content.innerHTML=h; content.scrollIntoView(); window.scrollTo(0,0);
  code.value=x.s[0][2]; mark(); side.classList.remove("open");
  document.title=x.t+" – Python Docs";
}
content.addEventListener("click",e=>{
  const b=e.target.closest("[data-run]"); if(!b) return;
  const [i,n]=b.dataset.run.split("-"); code.value=T[i].s[n][2]; run();
});
$("#search").addEventListener("input",e=>buildNav(e.target.value));
$("#menuBtn").onclick=()=>side.classList.toggle("open");
addEventListener("hashchange",render);

// theme: light -> dark -> eye
const themes=[["light","☀ Light"],["dark","🌙 Dark"],["eye","👁 Eye care"]];
function setTheme(t){
  document.documentElement.dataset.theme=t;
  $("#themeBtn").textContent=themes.find(x=>x[0]===t)[1];
  try{localStorage.setItem("pydocs-theme",t)}catch(e){}
}
$("#themeBtn").onclick=()=>{
  const i=themes.findIndex(x=>x[0]===document.documentElement.dataset.theme);
  setTheme(themes[(i+1)%3][0]);
};
let saved=null; try{saved=localStorage.getItem("pydocs-theme")}catch(e){}
setTheme(saved||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));

// editor + Pyodide (loads on first Run)
let py=null, loading=null;
function loadPy(){
  if(loading) return loading;
  status.textContent="Loading Python…";
  loading=new Promise((res,rej)=>{
    const s=document.createElement("script");
    s.src="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
    s.onload=async()=>{try{py=await loadPyodide();status.textContent="Python ready";res(py)}catch(e){rej(e)}};
    s.onerror=()=>rej(new Error("Cannot load Python runtime. Check internet connection."));
    document.head.appendChild(s);
  });
  loading.catch(()=>{loading=null;status.textContent="Load failed"});
  return loading;
}
async function run(){
  runBtn.disabled=true; out.className=""; out.textContent="";
  try{
    const p=await loadPy(); let buf="";
    p.setStdout({batched:s=>{buf+=s+"\n";out.textContent=buf}});
    p.setStderr({batched:s=>{buf+=s+"\n";out.textContent=buf}});
    await p.runPythonAsync(code.value);
    if(!buf) out.textContent="(no output)";
  }catch(e){out.className="err";out.textContent=String(e.message||e).split("\n").slice(-6).join("\n")}
  runBtn.disabled=false;
}
runBtn.onclick=run;
$("#clearBtn").onclick=()=>{out.className="";out.textContent=""};
code.addEventListener("keydown",e=>{
  if(e.key==="Tab"){e.preventDefault();const s=code.selectionStart;code.setRangeText("    ",s,code.selectionEnd,"end")}
  if(e.key==="Enter"&&(e.ctrlKey||e.metaKey)){e.preventDefault();run()}
});
buildNav(); render();
