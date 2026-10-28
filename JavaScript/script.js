const T = [
{g:"Basics",id:"intro",t:"Introduction",lead:"JavaScript is the language of the web. It runs in every browser and, with Node.js, on servers too.",
 s:[["Hello, world","<code>console.log()</code> prints to the console. Semicolons are optional but recommended.",`console.log("Hello, JavaScript!");\nconst name = "Vinay";\nconsole.log(\`Welcome, \${name}\`);`]]},
{g:"Basics",id:"variables",t:"Variables",lead:"Use <code>const</code> by default, <code>let</code> when value changes. Avoid <code>var</code>.",
 s:[["let and const","<code>const</code> blocks re-assignment, not mutation of objects.",`let count = 1;\ncount += 1;\nconst PI = 3.14159;\nconst user = { name: "Vinay" };\nuser.name = "Amit";   // allowed: object mutated\nconsole.log(count, PI, user);\ntry {\n  PI = 3;\n} catch (e) {\n  console.log("Error:", e.message);\n}`]]},
{g:"Basics",id:"types",t:"Data Types",lead:"Primitives: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>bigint</code>, <code>symbol</code>. Everything else is an object.",
 s:[["typeof","Check type with <code>typeof</code>. Note: <code>typeof null</code> is <code>\"object\"</code> (old bug).",`const values = ["hi", 42, true, null, undefined, [1, 2], {a: 1}, () => 1];\nfor (const v of values) {\n  console.log(typeof v);\n}\nconsole.log(Number("42") + 1, String(5) + "px");\nconsole.log(0.1 + 0.2);`]]},
{g:"Basics",id:"operators",t:"Operators",lead:"Always use <code>===</code> (strict equality). <code>==</code> converts types and surprises.",
 s:[["Examples","<code>??</code> gives fallback for null/undefined. <code>?.</code> safely reads nested values.",`console.log(7 / 2, 7 % 2, 2 ** 10);\nconsole.log(1 == "1", 1 === "1");\nconst a = null;\nconsole.log(a ?? "default");\nconst user = {};\nconsole.log(user.address?.city);\nconsole.log(5 > 3 ? "yes" : "no");`]]},
{g:"Data",id:"strings",t:"Strings",lead:"Immutable text. Template literals use backticks and <code>\${}</code>.",
 s:[["Common methods","",`const s = "  Hello World  ";\nconsole.log(s.trim().toUpperCase());\nconsole.log(s.trim().slice(0, 5));\nconsole.log(s.includes("World"));\nconsole.log("a,b,c".split(","));\nconsole.log(["a", "b"].join("-"));\nconsole.log("Python".replace("P", "J"));\nconsole.log(\`2 + 3 = \${2 + 3}\`);`]]},
{g:"Data",id:"arrays",t:"Arrays",lead:"Ordered, resizable lists with powerful built-in methods.",
 s:[["Basic use","<code>push</code>, <code>pop</code>, <code>slice</code>, <code>includes</code>.",`const nums = [3, 1, 2];\nnums.push(4);\nconsole.log(nums, nums.length);\nconsole.log(nums.slice(1, 3));\nconsole.log(nums.includes(2));\nconsole.log([...nums].sort((a, b) => b - a));`],
 ["map, filter, reduce","Transform without loops. They return new arrays.",`const nums = [1, 2, 3, 4, 5];\nconsole.log(nums.map(n => n * 2));\nconsole.log(nums.filter(n => n % 2 === 0));\nconsole.log(nums.reduce((sum, n) => sum + n, 0));\nconsole.log(nums.find(n => n > 3));`]]},
{g:"Data",id:"objects",t:"Objects",lead:"Key–value collections. The core data structure of JavaScript.",
 s:[["Example","Use <code>Object.keys</code>, <code>Object.entries</code> to iterate.",`const user = { name: "Vinay", skills: ["HTML", "CSS"] };\nuser.age = 21;\nconsole.log(user.name, user["age"]);\nfor (const [k, v] of Object.entries(user)) {\n  console.log(k, "=>", v);\n}\nconsole.log("age" in user, delete user.age, user);`]]},
{g:"Control flow",id:"conditions",t:"Conditionals",lead:"Branch with <code>if</code>, <code>else</code>, <code>switch</code>.",
 s:[["Example","Falsy values: <code>false</code>, <code>0</code>, <code>\"\"</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>.",`const score = 72;\nif (score >= 90) console.log("A");\nelse if (score >= 60) console.log("B");\nelse console.log("C");\n\nswitch (Math.floor(score / 10)) {\n  case 7: console.log("seventies"); break;\n  default: console.log("other");\n}\nconsole.log(Boolean(""), Boolean("0"), Boolean([]));`]]},
{g:"Control flow",id:"loops",t:"Loops",lead:"<code>for</code>, <code>while</code>, <code>for...of</code> (values), <code>for...in</code> (keys).",
 s:[["Example","",`for (let i = 0; i < 3; i++) console.log("for", i);\nlet n = 3;\nwhile (n > 0) { console.log("while", n); n--; }\nfor (const ch of "abc") console.log(ch);\nfor (const key in {x: 1, y: 2}) console.log(key);`]]},
{g:"Functions",id:"functions",t:"Functions",lead:"Functions are values: store them, pass them, return them.",
 s:[["Declaration and arrow","Arrow functions are short and keep outer <code>this</code>.",`function add(a, b = 10) {\n  return a + b;\n}\nconst square = x => x * x;\nconst total = (...nums) => nums.reduce((s, n) => s + n, 0);\nconsole.log(add(2, 3), add(2), square(5), total(1, 2, 3));`]]},
{g:"Functions",id:"closures",t:"Closures",lead:"A function remembers variables from where it was created.",
 s:[["Counter","<code>count</code> stays private but alive between calls.",`function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\nconsole.log(a(), a(), a());\nconsole.log(b());`]]},
{g:"Functions",id:"classes",t:"Classes",lead:"Cleaner syntax over prototypes. Supports inheritance and private fields.",
 s:[["Example","<code>#</code> marks a private field.",`class Animal {\n  #secret = 42;\n  constructor(name) { this.name = name; }\n  speak() { return this.name + " makes a sound"; }\n}\nclass Dog extends Animal {\n  speak() { return super.speak() + " (woof)"; }\n}\nconst d = new Dog("Rex");\nconsole.log(d.speak());\nconsole.log(d instanceof Animal);`]]},
{g:"Modern JS",id:"destructuring",t:"Destructuring & Spread",lead:"Unpack values from arrays and objects in one line.",
 s:[["Example","<code>...</code> spreads items or collects the rest.",`const [first, ...rest] = [1, 2, 3, 4];\nconst { name, age = 18 } = { name: "Vinay" };\nconsole.log(first, rest, name, age);\nconst a = { x: 1 };\nconst b = { ...a, y: 2 };\nconsole.log(b, [...rest, 5]);`]]},
{g:"Modern JS",id:"async",t:"Promises & async/await",lead:"Handle work that finishes later: timers, network, files.",
 s:[["Example","<code>await</code> pauses until the promise settles. Top-level <code>await</code> works in this editor.",`const wait = ms => new Promise(res => setTimeout(res, ms));\n\nasync function fetchUser() {\n  await wait(300);\n  return { id: 1, name: "Vinay" };\n}\n\nconsole.log("start");\nconst user = await fetchUser();\nconsole.log("got", user);\n\nconst results = await Promise.all([wait(100).then(() => "a"), wait(50).then(() => "b")]);\nconsole.log(results);`]]},
{g:"Modern JS",id:"errors",t:"Error Handling",lead:"Use <code>try</code>, <code>catch</code>, <code>finally</code> and <code>throw</code>.",
 s:[["Example","Throw <code>Error</code> objects, not strings.",`function parse(json) {\n  try {\n    return JSON.parse(json);\n  } catch (e) {\n    console.log("Bad JSON:", e.name);\n    return null;\n  } finally {\n    console.log("parse finished");\n  }\n}\nconsole.log(parse('{"a": 1}'));\nconsole.log(parse("{oops"));`]]}
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
    h+=`<h2>${title}</h2>${txt?`<p>${txt}</p>`:""}<div class="ex"><div class="ex-head"><span>JS</span><button data-run="${i}-${n}">Try it</button></div><pre><code>${esc(c)}</code></pre></div>`;
  });
  h+=`<div class="pager">${i>0?`<a href="#${T[i-1].id}">← ${T[i-1].t}</a>`:"<span></span>"}${i<T.length-1?`<a href="#${T[i+1].id}">${T[i+1].t} →</a>`:"<span></span>"}</div>`;
  content.innerHTML=h; window.scrollTo(0,0);
  code.value=x.s[0][2]; mark(); side.classList.remove("open");
  document.title=x.t+" – JavaScript Docs";
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
  try{localStorage.setItem("jsdocs-theme",t)}catch(e){}
}
$("#themeBtn").onclick=()=>{
  const i=themes.findIndex(x=>x[0]===document.documentElement.dataset.theme);
  setTheme(themes[(i+1)%3][0]);
};
let saved=null; try{saved=localStorage.getItem("jsdocs-theme")}catch(e){}
setTheme(saved||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));

// editor: code runs in a Web Worker inside your browser (no server, 5 s time limit)
function workerMain(){
  const fmt=v=>{
    if(typeof v==="string") return v;
    if(typeof v==="function") return String(v);
    if(v===undefined) return "undefined";
    if(typeof v==="bigint") return v+"n";
    if(v instanceof Error) return v.name+": "+v.message;
    try{return JSON.stringify(v,(k,x)=>x instanceof Map?{Map:[...x]}:x instanceof Set?{Set:[...x]}:typeof x==="bigint"?x+"n":x)}catch(e){return String(v)}
  };
  const log=(...a)=>postMessage({t:"log",v:a.map(fmt).join(" ")});
  const con={log,info:log,debug:log,warn:log,error:log};
  onmessage=async e=>{
    try{
      const AF=Object.getPrototypeOf(async function(){}).constructor;
      await new AF("console",e.data)(con);
      postMessage({t:"done"});
    }catch(err){postMessage({t:"fail",v:(err&&err.name?err.name+": ":"")+(err&&err.message||err)})}
  };
}
let worker=null, timer=null;
function run(){
  if(worker) worker.terminate();
  clearTimeout(timer);
  out.className=""; out.textContent=""; status.textContent="Running…"; runBtn.disabled=true;
  let buf="";
  const finish=(msg,bad)=>{
    clearTimeout(timer); if(worker){worker.terminate();worker=null}
    if(msg) buf+=msg;
    out.className=bad?"err":""; out.textContent=buf||"(no output)";
    status.textContent=bad?"Error":"Done"; runBtn.disabled=false;
  };
  try{
    const url=URL.createObjectURL(new Blob(["("+workerMain.toString()+")()"],{type:"text/javascript"}));
    worker=new Worker(url); URL.revokeObjectURL(url);
  }catch(e){finish("Cannot start worker: "+e.message,true);return}
  worker.onmessage=e=>{
    const m=e.data;
    if(m.t==="log"){buf+=m.v+"\n";out.textContent=buf}
    else if(m.t==="done") finish("",false);
    else if(m.t==="fail") finish(m.v,true);
  };
  worker.onerror=e=>finish((e.message||"Script error"),true);
  timer=setTimeout(()=>finish("Timed out after 5 seconds (infinite loop?)",true),5000);
  worker.postMessage(code.value);
}
runBtn.onclick=run;
$("#clearBtn").onclick=()=>{out.className="";out.textContent=""};
code.addEventListener("keydown",e=>{
  if(e.key==="Tab"){e.preventDefault();const s=code.selectionStart;code.setRangeText("    ",s,code.selectionEnd,"end")}
  if(e.key==="Enter"&&(e.ctrlKey||e.metaKey)){e.preventDefault();run()}
});
buildNav(); render();
