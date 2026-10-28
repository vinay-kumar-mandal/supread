const T = [
{g:"Basics",id:"intro",t:"Introduction",lead:"C# is a modern, type-safe language from Microsoft for web, desktop, games (Unity) and cloud apps on .NET.",
 s:[["Hello, world","Program starts at <code>Main()</code>. <code>Console.WriteLine</code> prints a line.",`using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, C#!");\n    }\n}`]]},
{g:"Basics",id:"variables",t:"Variables & Types",lead:"C# is statically typed. Use <code>var</code> to let compiler infer the type.",
 s:[["Core types","<code>int</code>, <code>double</code>, <code>bool</code>, <code>char</code>, <code>string</code>. <code>const</code> fixes a value.",`using System;\n\nclass Program {\n    static void Main() {\n        int age = 21;\n        double price = 9.99;\n        bool ok = true;\n        char grade = 'A';\n        string name = "Vinay";\n        const double PI = 3.14159;\n        var x = 42;\n        Console.WriteLine($"{name} {age} {price} {ok} {grade} {PI} {x}");\n        Console.WriteLine(x.GetType());\n    }\n}`]]},
{g:"Basics",id:"operators",t:"Operators",lead:"Arithmetic, comparison, logical, null-handling.",
 s:[["Examples","Integer division truncates. <code>??</code> gives a fallback when value is null.",`using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(7 / 2 + " " + 7 % 2 + " " + 7 / 2.0);\n        Console.WriteLine(3 < 5 && !(2 > 4));\n        string s = null;\n        Console.WriteLine(s ?? "default");\n        Console.WriteLine(5 > 3 ? "yes" : "no");\n    }\n}`]]},
{g:"Data",id:"strings",t:"Strings",lead:"Immutable text. Use <code>$\"...\"</code> for interpolation.",
 s:[["Common methods","",`using System;\n\nclass Program {\n    static void Main() {\n        string s = "  Hello World  ";\n        Console.WriteLine(s.Trim().ToUpper());\n        Console.WriteLine(s.Trim().Substring(0, 5));\n        Console.WriteLine(s.Contains("World"));\n        Console.WriteLine(string.Join("-", new string[] {"a", "b", "c"}));\n        Console.WriteLine("Python".Replace("P", "J"));\n    }\n}`]]},
{g:"Data",id:"collections",t:"Arrays & Lists",lead:"Arrays are fixed size. <code>List&lt;T&gt;</code> is resizable.",
 s:[["Example","<code>Add</code> appends, <code>Count</code> gives size.",`using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        int[] arr = {3, 1, 2};\n        Array.Sort(arr);\n        Console.WriteLine(string.Join(" ", arr));\n        List<int> list = new List<int> {5, 6};\n        list.Add(7);\n        list.Remove(5);\n        foreach (int n in list) Console.Write(n + " ");\n        Console.WriteLine("count: " + list.Count);\n    }\n}`]]},
{g:"Data",id:"dicts",t:"Dictionaries",lead:"Key–value pairs with fast lookup.",
 s:[["Example","Use <code>TryGetValue</code> to avoid <code>KeyNotFoundException</code>.",`using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        var age = new Dictionary<string, int>();\n        age["Vinay"] = 21;\n        age["Amit"] = 25;\n        foreach (var kv in age) Console.WriteLine(kv.Key + ": " + kv.Value);\n        int v;\n        Console.WriteLine(age.TryGetValue("Ravi", out v) ? v.ToString() : "not found");\n    }\n}`]]},
{g:"Control flow",id:"conditions",t:"Conditionals",lead:"Branch with <code>if</code>, <code>else</code>, <code>switch</code>.",
 s:[["Example","",`using System;\n\nclass Program {\n    static void Main() {\n        int score = 72;\n        if (score >= 90) Console.WriteLine("A");\n        else if (score >= 60) Console.WriteLine("B");\n        else Console.WriteLine("C");\n        switch (score / 10) {\n            case 7: Console.WriteLine("seventies"); break;\n            default: Console.WriteLine("other"); break;\n        }\n    }\n}`]]},
{g:"Control flow",id:"loops",t:"Loops",lead:"<code>for</code>, <code>while</code>, <code>foreach</code>.",
 s:[["Example","",`using System;\n\nclass Program {\n    static void Main() {\n        for (int i = 0; i < 3; i++) Console.WriteLine("for " + i);\n        int n = 3;\n        while (n > 0) { Console.WriteLine("while " + n); n--; }\n        foreach (char c in "abc") Console.Write(c + ",");\n        Console.WriteLine();\n    }\n}`]]},
{g:"Methods & OOP",id:"methods",t:"Methods",lead:"Declare access, return type, name, parameters.",
 s:[["Example","Optional parameters, <code>ref</code> and <code>out</code> are supported.",`using System;\n\nclass Program {\n    static int Add(int a, int b = 10) { return a + b; }\n    static void Inc(ref int x) { x++; }\n\n    static void Main() {\n        Console.WriteLine(Add(2, 3) + " " + Add(2));\n        int v = 5;\n        Inc(ref v);\n        Console.WriteLine(v);\n    }\n}`]]},
{g:"Methods & OOP",id:"classes",t:"Classes & Properties",lead:"Classes bundle data and behavior. Properties control access to fields.",
 s:[["Example","<code>{ get; set; }</code> makes an auto-property.",`using System;\n\nclass Person {\n    public string Name { get; set; }\n    public int Age { get; private set; }\n\n    public Person(string name, int age) {\n        Name = name;\n        Age = age;\n    }\n    public void Birthday() { Age++; }\n    public override string ToString() { return Name + " is " + Age; }\n}\n\nclass Program {\n    static void Main() {\n        Person p = new Person("Vinay", 21);\n        p.Birthday();\n        Console.WriteLine(p);\n    }\n}`]]},
{g:"Methods & OOP",id:"inheritance",t:"Inheritance & Interfaces",lead:"A class has one base class but can implement many interfaces.",
 s:[["Example","<code>virtual</code> + <code>override</code> give polymorphism.",`using System;\n\ninterface IShape { double Area(); }\n\nclass Animal {\n    public virtual string Speak() { return "..."; }\n}\nclass Dog : Animal {\n    public override string Speak() { return "Woof"; }\n}\nclass Circle : IShape {\n    public double R;\n    public double Area() { return Math.PI * R * R; }\n}\n\nclass Program {\n    static void Main() {\n        Animal a = new Dog();\n        Console.WriteLine(a.Speak());\n        IShape s = new Circle { R = 2 };\n        Console.WriteLine(s.Area());\n    }\n}`]]},
{g:"Advanced",id:"linq",t:"LINQ & Lambdas",lead:"Query collections with short, readable expressions.",
 s:[["Example","<code>x =&gt; ...</code> is a lambda.",`using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        int[] nums = {5, 2, 9, 1, 6};\n        var evens = nums.Where(n => n % 2 == 0);\n        var sq = nums.OrderBy(n => n).Select(n => n * n);\n        Console.WriteLine(string.Join(" ", evens));\n        Console.WriteLine(string.Join(" ", sq));\n        Console.WriteLine(nums.Sum() + " " + nums.Max());\n    }\n}`]]},
{g:"Advanced",id:"errors",t:"Exceptions",lead:"Handle errors with <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>.",
 s:[["Example","<code>finally</code> always runs.",`using System;\n\nclass Program {\n    static void Main() {\n        try {\n            int z = 0;\n            Console.WriteLine(10 / z);\n        } catch (DivideByZeroException e) {\n            Console.WriteLine("Error: " + e.Message);\n        } finally {\n            Console.WriteLine("done");\n        }\n    }\n}`]]}
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
    h+=`<h2>${title}</h2>${txt?`<p>${txt}</p>`:""}<div class="ex"><div class="ex-head"><span>C#</span><button data-run="${i}-${n}">Try it</button></div><pre><code>${esc(c)}</code></pre></div>`;
  });
  h+=`<div class="pager">${i>0?`<a href="#${T[i-1].id}">← ${T[i-1].t}</a>`:"<span></span>"}${i<T.length-1?`<a href="#${T[i+1].id}">${T[i+1].t} →</a>`:"<span></span>"}</div>`;
  content.innerHTML=h; window.scrollTo(0,0);
  code.value=x.s[0][2]; mark(); side.classList.remove("open");
  document.title=x.t+" – C# Docs";
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
  try{localStorage.setItem("csdocs-theme",t)}catch(e){}
}
$("#themeBtn").onclick=()=>{
  const i=themes.findIndex(x=>x[0]===document.documentElement.dataset.theme);
  setTheme(themes[(i+1)%3][0]);
};
let saved=null; try{saved=localStorage.getItem("csdocs-theme")}catch(e){}
setTheme(saved||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));

// editor: compile + run via Wandbox online API (picks a C# compiler from server list)
let comp=null;
async function pick(){
  if(comp) return comp;
  const r=await fetch("https://wandbox.org/api/list.json");
  if(!r.ok) throw new Error("Compiler list error "+r.status);
  const cs=(await r.json()).filter(c=>c.language==="C#");
  const c=cs.find(c=>/dotnet.*head/i.test(c.name))||cs.find(c=>/dotnet/i.test(c.name))||cs.find(c=>/mono-head/.test(c.name))||cs[0];
  if(!c) throw new Error("No C# compiler on server");
  return comp=c.name;
}
async function run(){
  runBtn.disabled=true; out.className=""; out.textContent=""; status.textContent="Compiling…";
  try{
    const r=await fetch("https://wandbox.org/api/compile.json",{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({code:code.value,compiler:await pick()})
    });
    if(!r.ok) throw new Error("Compiler server error "+r.status);
    const d=await r.json();
    if(d.compiler_error&&d.status!=="0"){out.className="err";out.textContent=d.compiler_error}
    else{
      out.textContent=(d.program_output||d.program_message||"(no output)")+(d.status&&d.status!=="0"?"\n[exit code "+d.status+"]":"");
      if(d.signal){out.className="err";out.textContent+="\n[signal "+d.signal+"]"}
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
