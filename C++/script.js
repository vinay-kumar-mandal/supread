const T = [
{g:"Basics",id:"intro",t:"Introduction",lead:"C++ is a fast, compiled language for systems, games, embedded and performance-critical apps.",
 s:[["Hello, world","Every program starts at <code>main()</code>. <code>std::cout</code> prints; <code>#include</code> pulls in headers.",`#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++!" << std::endl;\n    return 0;\n}`]]},
{g:"Basics",id:"variables",t:"Variables & Types",lead:"C++ is statically typed. Type is fixed at compile time.",
 s:[["Core types","<code>int</code>, <code>double</code>, <code>char</code>, <code>bool</code>. Use <code>auto</code> to let compiler deduce, <code>const</code> for fixed values.",`#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 21;\n    double price = 9.99;\n    char grade = 'A';\n    bool ok = true;\n    const double PI = 3.14159;\n    auto x = 42;\n    cout << age << " " << price << " " << grade << " " << ok << endl;\n    cout << "sizeof(int) = " << sizeof(int) << endl;\n    return 0;\n}`]]},
{g:"Basics",id:"operators",t:"Operators",lead:"Arithmetic, comparison, logical, bitwise.",
 s:[["Examples","Integer division truncates. <code>%</code> gives remainder.",`#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << 7 / 2 << " " << 7 % 2 << " " << 7 / 2.0 << endl;\n    cout << (3 < 5 && !(2 > 4)) << endl;\n    cout << (5 & 3) << " " << (5 | 3) << " " << (1 << 4) << endl;\n    return 0;\n}`]]},
{g:"Data",id:"strings",t:"Strings",lead:"Use <code>std::string</code>, not raw char arrays.",
 s:[["Common methods","",`#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s = "Hello";\n    s += " World";\n    cout << s << " (" << s.size() << ")" << endl;\n    cout << s.substr(0, 5) << endl;\n    cout << s.find("World") << endl;\n    return 0;\n}`]]},
{g:"Data",id:"arrays",t:"Arrays & Vectors",lead:"Prefer <code>std::vector</code>: resizable and safe.",
 s:[["vector","<code>push_back</code> adds, <code>size()</code> counts. Range-for loops over items.",`#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 1, 2};\n    v.push_back(4);\n    for (int n : v) cout << n << " ";\n    cout << endl << "size: " << v.size() << endl;\n    return 0;\n}`]]},
{g:"Data",id:"maps",t:"Maps & Sets",lead:"<code>map</code> stores key–value pairs sorted by key; <code>set</code> stores unique values.",
 s:[["Example","",`#include <iostream>\n#include <map>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> age = {{"Vinay", 21}, {"Amit", 25}};\n    age["Ravi"] = 30;\n    for (auto& [name, a] : age) cout << name << ": " << a << endl;\n    set<int> s = {3, 1, 3, 2};\n    cout << "unique: " << s.size() << endl;\n    return 0;\n}`]]},
{g:"Control flow",id:"conditions",t:"Conditionals",lead:"Branch with <code>if</code>, <code>else if</code>, <code>switch</code>.",
 s:[["Example","",`#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 72;\n    if (score >= 90) cout << "A" << endl;\n    else if (score >= 60) cout << "B" << endl;\n    else cout << "C" << endl;\n    switch (score / 10) {\n        case 7: cout << "seventies" << endl; break;\n        default: cout << "other" << endl;\n    }\n    return 0;\n}`]]},
{g:"Control flow",id:"loops",t:"Loops",lead:"<code>for</code>, <code>while</code>, <code>do-while</code>, range-for.",
 s:[["Example","",`#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 0; i < 3; i++) cout << "for " << i << endl;\n    int n = 3;\n    while (n > 0) { cout << "while " << n << endl; n--; }\n    return 0;\n}`]]},
{g:"Functions & OOP",id:"functions",t:"Functions",lead:"Declare return type, name, parameters.",
 s:[["Example","Pass by reference (<code>&</code>) to avoid copies or to modify the caller's value.",`#include <iostream>\nusing namespace std;\n\nint add(int a, int b = 10) { return a + b; }\nvoid inc(int& x) { x++; }\n\nint main() {\n    cout << add(2, 3) << " " << add(2) << endl;\n    int v = 5;\n    inc(v);\n    cout << v << endl;\n    return 0;\n}`]]},
{g:"Functions & OOP",id:"pointers",t:"Pointers & References",lead:"A pointer holds a memory address. A reference is an alias.",
 s:[["Example","<code>&x</code> gets address, <code>*p</code> reads value at address.",`#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int* p = &x;\n    int& r = x;\n    *p = 20;\n    r++;\n    cout << x << endl;\n    cout << (p != nullptr) << endl;\n    return 0;\n}`]]},
{g:"Functions & OOP",id:"classes",t:"Classes",lead:"Bundle data and behavior. Members are private by default in <code>class</code>.",
 s:[["Class + inheritance","<code>virtual</code> enables runtime polymorphism.",`#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Animal {\npublic:\n    string name;\n    Animal(string n) : name(n) {}\n    virtual string speak() { return name + " makes a sound"; }\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(string n) : Animal(n) {}\n    string speak() override { return name + " says woof"; }\n};\n\nint main() {\n    Animal* a = new Dog("Rex");\n    cout << a->speak() << endl;\n    delete a;\n    return 0;\n}`]]},
{g:"Advanced",id:"templates",t:"Templates",lead:"Write one function or class that works with many types.",
 s:[["Example","",`#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT biggest(T a, T b) { return a > b ? a : b; }\n\nint main() {\n    cout << biggest(3, 7) << endl;\n    cout << biggest(2.5, 1.5) << endl;\n    cout << biggest<char>('a', 'z') << endl;\n    return 0;\n}`]]},
{g:"Advanced",id:"smart",t:"Smart Pointers",lead:"Auto-free memory. Prefer these over raw <code>new</code>/<code>delete</code>.",
 s:[["unique_ptr & shared_ptr","",`#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    auto u = make_unique<int>(42);\n    auto s1 = make_shared<int>(7);\n    auto s2 = s1;\n    cout << *u << " " << *s1 << endl;\n    cout << "owners: " << s1.use_count() << endl;\n    return 0;\n}`]]},
{g:"Advanced",id:"algorithms",t:"STL Algorithms",lead:"Ready-made <code>sort</code>, <code>find</code>, <code>accumulate</code> and more in <code>&lt;algorithm&gt;</code>.",
 s:[["Example","Lambdas <code>[](int a, int b){...}</code> customize behavior.",`#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 9, 1};\n    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n    for (int n : v) cout << n << " ";\n    cout << endl;\n    cout << accumulate(v.begin(), v.end(), 0) << endl;\n    return 0;\n}`]]},
{g:"Advanced",id:"errors",t:"Exceptions",lead:"Handle errors with <code>try</code>, <code>throw</code>, <code>catch</code>.",
 s:[["Example","",`#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nint divide(int a, int b) {\n    if (b == 0) throw runtime_error("divide by zero");\n    return a / b;\n}\n\nint main() {\n    try {\n        cout << divide(10, 0) << endl;\n    } catch (const exception& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    return 0;\n}`]]}
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
    h+=`<h2>${title}</h2>${txt?`<p>${txt}</p>`:""}<div class="ex"><div class="ex-head"><span>C++</span><button data-run="${i}-${n}">Try it</button></div><pre><code>${esc(c)}</code></pre></div>`;
  });
  h+=`<div class="pager">${i>0?`<a href="#${T[i-1].id}">← ${T[i-1].t}</a>`:"<span></span>"}${i<T.length-1?`<a href="#${T[i+1].id}">${T[i+1].t} →</a>`:"<span></span>"}</div>`;
  content.innerHTML=h; window.scrollTo(0,0);
  code.value=x.s[0][2]; mark(); side.classList.remove("open");
  document.title=x.t+" – C++ Docs";
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
  try{localStorage.setItem("cppdocs-theme",t)}catch(e){}
}
$("#themeBtn").onclick=()=>{
  const i=themes.findIndex(x=>x[0]===document.documentElement.dataset.theme);
  setTheme(themes[(i+1)%3][0]);
};
let saved=null; try{saved=localStorage.getItem("cppdocs-theme")}catch(e){}
setTheme(saved||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));

// editor: compile + run via Wandbox online API (g++, C++20)
async function run(){
  runBtn.disabled=true; out.className=""; out.textContent=""; status.textContent="Compiling…";
  try{
    const r=await fetch("https://wandbox.org/api/compile.json",{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({code:code.value,compiler:"gcc-head",options:"warning","compiler-option-raw":"-std=c++20"})
    });
    if(!r.ok) throw new Error("Compiler server error "+r.status);
    const d=await r.json();
    if(d.compiler_error&&d.status!=="0"){out.className="err";out.textContent=d.compiler_error}
    else{
      out.textContent=(d.program_output||d.program_message||"(no output)")+(d.status&&d.status!=="0"?"\n[exit code "+d.status+"]":"");
      if(d.signal) {out.className="err";out.textContent+="\n[signal "+d.signal+"]"}
    }
    status.textContent="Done";
  }catch(e){out.className="err";out.textContent="Cannot reach compiler. Check internet connection.\n"+e.message;status.textContent="Failed"}
  runBtn.disabled=false;
}
runBtn.onclick=run;
$("#clearBtn").onclick=()=>{out.className="";out.textContent=""};
code.addEventListener("keydown",e=>{
  if(e.key==="Tab"){e.preventDefault();const s=code.selectionStart;code.setRangeText("    ",s,code.selectionEnd,"end")}
  if(e.key==="Enter"&&(e.ctrlKey||e.metaKey)){e.preventDefault();run()}
});
buildNav(); render();
