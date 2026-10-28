const T = [
{g:"Basics",id:"intro",t:"Introduction",lead:"C is a small, fast, low-level language. It powers operating systems, embedded devices and many other languages.",
 s:[["Hello, world","Program starts at <code>main()</code>. <code>printf</code> prints; <code>#include &lt;stdio.h&gt;</code> provides it. <code>\\n</code> is newline.",`#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C!\\n");\n    return 0;\n}`]]},
{g:"Basics",id:"variables",t:"Variables & Types",lead:"C is statically typed. Declare the type before use.",
 s:[["Core types","<code>int</code>, <code>float</code>, <code>double</code>, <code>char</code>. Use <code>const</code> for fixed values. Format codes: <code>%d</code> int, <code>%f</code> float/double, <code>%c</code> char, <code>%s</code> string.",`#include <stdio.h>\n\nint main(void) {\n    int age = 21;\n    double price = 9.99;\n    char grade = 'A';\n    const double PI = 3.14159;\n    printf("%d %.2f %c %.5f\\n", age, price, grade, PI);\n    printf("sizeof(int) = %zu\\n", sizeof(int));\n    return 0;\n}`]]},
{g:"Basics",id:"operators",t:"Operators",lead:"Arithmetic, comparison, logical, bitwise.",
 s:[["Examples","Integer division truncates. C has no <code>bool</code> keyword by default: 0 is false, non-zero is true.",`#include <stdio.h>\n\nint main(void) {\n    printf("%d %d %.2f\\n", 7 / 2, 7 % 2, 7 / 2.0);\n    printf("%d\\n", (3 < 5) && !(2 > 4));\n    printf("%d %d %d\\n", 5 & 3, 5 | 3, 1 << 4);\n    return 0;\n}`]]},
{g:"Data",id:"arrays",t:"Arrays",lead:"Fixed-size sequence of same-type items. Index starts at 0. No bounds checking.",
 s:[["Example","Use <code>sizeof(a)/sizeof(a[0])</code> to get length.",`#include <stdio.h>\n\nint main(void) {\n    int a[] = {3, 1, 2, 4};\n    int n = sizeof(a) / sizeof(a[0]);\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        printf("%d ", a[i]);\n        sum += a[i];\n    }\n    printf("\\nsum = %d\\n", sum);\n    return 0;\n}`]]},
{g:"Data",id:"strings",t:"Strings",lead:"A string is a <code>char</code> array ending with <code>'\\0'</code>. Helpers live in <code>&lt;string.h&gt;</code>.",
 s:[["Common functions","<code>strlen</code>, <code>strcpy</code>, <code>strcat</code>, <code>strcmp</code>. Make sure the destination buffer is big enough.",`#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char s[32] = "Hello";\n    strcat(s, " World");\n    printf("%s (%zu)\\n", s, strlen(s));\n    printf("%d\\n", strcmp("abc", "abd"));\n    return 0;\n}`]]},
{g:"Control flow",id:"conditions",t:"Conditionals",lead:"Branch with <code>if</code>, <code>else if</code>, <code>switch</code>.",
 s:[["Example","",`#include <stdio.h>\n\nint main(void) {\n    int score = 72;\n    if (score >= 90) printf("A\\n");\n    else if (score >= 60) printf("B\\n");\n    else printf("C\\n");\n    switch (score / 10) {\n        case 7: printf("seventies\\n"); break;\n        default: printf("other\\n");\n    }\n    return 0;\n}`]]},
{g:"Control flow",id:"loops",t:"Loops",lead:"<code>for</code>, <code>while</code>, <code>do-while</code>. Use <code>break</code> and <code>continue</code>.",
 s:[["Example","",`#include <stdio.h>\n\nint main(void) {\n    for (int i = 0; i < 3; i++) printf("for %d\\n", i);\n    int n = 3;\n    while (n > 0) { printf("while %d\\n", n); n--; }\n    return 0;\n}`]]},
{g:"Functions & memory",id:"functions",t:"Functions",lead:"Declare return type, name, parameters. C passes arguments by value.",
 s:[["Example","Declare a prototype before <code>main</code> if function is defined after.",`#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\n\nint factorial(int n) {\n    return n <= 1 ? 1 : n * factorial(n - 1);\n}\n\nint main(void) {\n    printf("%d %d\\n", add(2, 3), factorial(5));\n    return 0;\n}`]]},
{g:"Functions & memory",id:"pointers",t:"Pointers",lead:"A pointer stores a memory address. <code>&x</code> gets address, <code>*p</code> reads value.",
 s:[["Pass by pointer","Pointers let a function change the caller's variable.",`#include <stdio.h>\n\nvoid inc(int *x) { (*x)++; }\n\nint main(void) {\n    int v = 5;\n    int *p = &v;\n    *p = 10;\n    inc(&v);\n    printf("%d\\n", v);\n    return 0;\n}`]]},
{g:"Functions & memory",id:"structs",t:"Structs",lead:"Group related data under one type.",
 s:[["Example","Use <code>.</code> on a value, <code>-&gt;</code> on a pointer.",`#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n} Person;\n\nint main(void) {\n    Person p = {"Vinay", 21};\n    Person *q = &p;\n    q->age++;\n    printf("%s is %d\\n", p.name, p.age);\n    return 0;\n}`]]},
{g:"Functions & memory",id:"memory",t:"Dynamic Memory",lead:"Allocate on the heap with <code>malloc</code>. You must <code>free</code> it.",
 s:[["malloc and free","Always check for <code>NULL</code>. Forgetting <code>free</code> leaks memory.",`#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n = 5;\n    int *a = malloc(n * sizeof(int));\n    if (a == NULL) return 1;\n    for (int i = 0; i < n; i++) a[i] = i * i;\n    for (int i = 0; i < n; i++) printf("%d ", a[i]);\n    printf("\\n");\n    free(a);\n    return 0;\n}`]]},
{g:"Advanced",id:"macros",t:"Preprocessor",lead:"Lines starting with <code>#</code> run before compile: <code>#include</code>, <code>#define</code>, <code>#ifdef</code>.",
 s:[["Macros","Wrap macro arguments in parentheses.",`#include <stdio.h>\n\n#define PI 3.14159\n#define SQUARE(x) ((x) * (x))\n\nint main(void) {\n    printf("%d\\n", SQUARE(4));\n    printf("%.2f\\n", PI * SQUARE(2));\n#ifdef __GNUC__\n    printf("compiled with GCC\\n");\n#endif\n    return 0;\n}`]]},
{g:"Advanced",id:"files",t:"File Handling",lead:"Use <code>FILE *</code> with <code>fopen</code>, <code>fprintf</code>, <code>fgets</code>, <code>fclose</code>.",
 s:[["Write then read","Always check <code>fopen</code> result and close the file.",`#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("test.txt", "w");\n    if (!f) { printf("open failed\\n"); return 1; }\n    fprintf(f, "line one\\nline two\\n");\n    fclose(f);\n    char buf[64];\n    f = fopen("test.txt", "r");\n    while (fgets(buf, sizeof buf, f)) printf("%s", buf);\n    fclose(f);\n    return 0;\n}`]]}
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
    h+=`<h2>${title}</h2>${txt?`<p>${txt}</p>`:""}<div class="ex"><div class="ex-head"><span>C</span><button data-run="${i}-${n}">Try it</button></div><pre><code>${esc(c)}</code></pre></div>`;
  });
  h+=`<div class="pager">${i>0?`<a href="#${T[i-1].id}">← ${T[i-1].t}</a>`:"<span></span>"}${i<T.length-1?`<a href="#${T[i+1].id}">${T[i+1].t} →</a>`:"<span></span>"}</div>`;
  content.innerHTML=h; window.scrollTo(0,0);
  code.value=x.s[0][2]; mark(); side.classList.remove("open");
  document.title=x.t+" – C Docs";
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
  try{localStorage.setItem("cdocs-theme",t)}catch(e){}
}
$("#themeBtn").onclick=()=>{
  const i=themes.findIndex(x=>x[0]===document.documentElement.dataset.theme);
  setTheme(themes[(i+1)%3][0]);
};
let saved=null; try{saved=localStorage.getItem("cdocs-theme")}catch(e){}
setTheme(saved||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));

// editor: compile + run via Wandbox online API (g++, C20)
async function run(){
  runBtn.disabled=true; out.className=""; out.textContent=""; status.textContent="Compiling…";
  try{
    const r=await fetch("https://wandbox.org/api/compile.json",{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({code:code.value,compiler:"gcc-head-c",options:"warning","compiler-option-raw":"-std=c17"})
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
