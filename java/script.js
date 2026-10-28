const T = [
{g:"Basics",id:"intro",t:"Introduction",lead:"Java is a portable, object-oriented language for backends, Android and enterprise apps. Code runs on the JVM.",
 s:[["Hello, world","Program starts at <code>main</code>. In this editor keep the class named <code>Main</code>.",`public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`]]},
{g:"Basics",id:"variables",t:"Variables & Types",lead:"Java is statically typed. Primitive types are lowercase; <code>String</code> is a class.",
 s:[["Core types","<code>int</code>, <code>long</code>, <code>double</code>, <code>boolean</code>, <code>char</code>. <code>final</code> fixes a value.",`public class Main {\n    public static void main(String[] args) {\n        int age = 21;\n        double price = 9.99;\n        boolean ok = true;\n        char grade = 'A';\n        String name = "Vinay";\n        final double PI = 3.14159;\n        System.out.println(name + " " + age + " " + price + " " + ok + " " + grade + " " + PI);\n        System.out.println(Integer.MAX_VALUE);\n    }\n}`]]},
{g:"Basics",id:"operators",t:"Operators",lead:"Arithmetic, comparison, logical, ternary.",
 s:[["Examples","Integer division truncates. <code>==</code> on strings compares references; use <code>.equals()</code>.",`public class Main {\n    public static void main(String[] args) {\n        System.out.println(7 / 2 + " " + 7 % 2 + " " + 7 / 2.0);\n        System.out.println(3 < 5 && !(2 > 4));\n        System.out.println(5 > 3 ? "yes" : "no");\n        System.out.println("a".equals("a"));\n    }\n}`]]},
{g:"Data",id:"strings",t:"Strings",lead:"Immutable text. Many helpers built in.",
 s:[["Common methods","",`public class Main {\n    public static void main(String[] args) {\n        String s = "  Hello World  ";\n        System.out.println(s.trim().toUpperCase());\n        System.out.println(s.trim().substring(0, 5));\n        System.out.println(s.contains("World"));\n        System.out.println(String.join("-", "a", "b", "c"));\n        System.out.printf("%s is %d years%n", "Vinay", 21);\n    }\n}`]]},
{g:"Data",id:"arrays",t:"Arrays",lead:"Fixed size, same type, index from 0.",
 s:[["Example","Use <code>Arrays</code> helper class for sort and print.",`import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 2};\n        Arrays.sort(a);\n        System.out.println(Arrays.toString(a));\n        System.out.println("length: " + a.length);\n        int[][] grid = new int[2][3];\n        grid[1][2] = 9;\n        System.out.println(Arrays.deepToString(grid));\n    }\n}`]]},
{g:"Data",id:"lists",t:"ArrayList",lead:"Resizable list from <code>java.util</code>. Generics set the item type.",
 s:[["Example","<code>add</code>, <code>get</code>, <code>remove</code>, <code>size</code>.",`import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = new ArrayList<>();\n        names.add("Vinay");\n        names.add("Amit");\n        names.remove("Amit");\n        names.add("Ravi");\n        for (String n : names) System.out.println(n);\n        System.out.println("size: " + names.size());\n    }\n}`]]},
{g:"Data",id:"maps",t:"HashMap",lead:"Key–value pairs with fast lookup.",
 s:[["Example","<code>getOrDefault</code> avoids null for missing keys.",`import java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> age = new HashMap<>();\n        age.put("Vinay", 21);\n        age.put("Amit", 25);\n        for (Map.Entry<String, Integer> e : age.entrySet())\n            System.out.println(e.getKey() + ": " + e.getValue());\n        System.out.println(age.getOrDefault("Ravi", -1));\n    }\n}`]]},
{g:"Control flow",id:"conditions",t:"Conditionals",lead:"Branch with <code>if</code>, <code>else</code>, <code>switch</code>.",
 s:[["Example","",`public class Main {\n    public static void main(String[] args) {\n        int score = 72;\n        if (score >= 90) System.out.println("A");\n        else if (score >= 60) System.out.println("B");\n        else System.out.println("C");\n        switch (score / 10) {\n            case 7: System.out.println("seventies"); break;\n            default: System.out.println("other");\n        }\n    }\n}`]]},
{g:"Control flow",id:"loops",t:"Loops",lead:"<code>for</code>, <code>while</code>, <code>do-while</code>, enhanced for.",
 s:[["Example","",`public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) System.out.println("for " + i);\n        int n = 3;\n        while (n > 0) { System.out.println("while " + n); n--; }\n        for (char c : "abc".toCharArray()) System.out.print(c + ",");\n        System.out.println();\n    }\n}`]]},
{g:"Methods & OOP",id:"methods",t:"Methods",lead:"Declare access, <code>static</code> or not, return type, name, parameters. Java passes arguments by value.",
 s:[["Example","Overloading: same name, different parameters. Varargs: <code>int... nums</code>.",`public class Main {\n    static int add(int a, int b) { return a + b; }\n    static int add(int a, int b, int c) { return a + b + c; }\n    static int sum(int... nums) {\n        int t = 0;\n        for (int n : nums) t += n;\n        return t;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(2, 3) + " " + add(1, 2, 3));\n        System.out.println(sum(1, 2, 3, 4));\n    }\n}`]]},
{g:"Methods & OOP",id:"classes",t:"Classes & Objects",lead:"Classes bundle fields and methods. Keep fields <code>private</code>, expose via getters.",
 s:[["Example","<code>this</code> refers to the current object.",`class Person {\n    private String name;\n    private int age;\n\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    String getName() { return name; }\n    void birthday() { age++; }\n    @Override\n    public String toString() { return name + " is " + age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person("Vinay", 21);\n        p.birthday();\n        System.out.println(p);\n    }\n}`]]},
{g:"Methods & OOP",id:"inheritance",t:"Inheritance & Interfaces",lead:"<code>extends</code> one class, <code>implements</code> many interfaces. Methods are virtual by default.",
 s:[["Example","<code>@Override</code> makes compiler check you really override.",`interface Shape { double area(); }\n\nclass Animal {\n    String speak() { return "..."; }\n}\nclass Dog extends Animal {\n    @Override\n    String speak() { return "Woof"; }\n}\nclass Circle implements Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    public double area() { return Math.PI * r * r; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        System.out.println(a.speak());\n        Shape s = new Circle(2);\n        System.out.println(s.area());\n    }\n}`]]},
{g:"Advanced",id:"streams",t:"Lambdas & Streams",lead:"Process collections in a declarative way.",
 s:[["Example","<code>x -&gt; ...</code> is a lambda.",`import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(5, 2, 9, 1, 6);\n        List<Integer> evens = nums.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());\n        int sum = nums.stream().mapToInt(Integer::intValue).sum();\n        System.out.println(evens);\n        System.out.println(sum);\n        nums.stream().sorted().map(n -> n * n).forEach(n -> System.out.print(n + " "));\n        System.out.println();\n    }\n}`]]},
{g:"Advanced",id:"errors",t:"Exceptions",lead:"Handle errors with <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>.",
 s:[["Example","<code>finally</code> always runs. Checked exceptions must be caught or declared with <code>throws</code>.",`public class Main {\n    static int divide(int a, int b) {\n        if (b == 0) throw new IllegalArgumentException("divide by zero");\n        return a / b;\n    }\n\n    public static void main(String[] args) {\n        try {\n            System.out.println(divide(10, 0));\n        } catch (IllegalArgumentException e) {\n            System.out.println("Error: " + e.getMessage());\n        } finally {\n            System.out.println("done");\n        }\n    }\n}`]]}
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
    h+=`<h2>${title}</h2>${txt?`<p>${txt}</p>`:""}<div class="ex"><div class="ex-head"><span>Java</span><button data-run="${i}-${n}">Try it</button></div><pre><code>${esc(c)}</code></pre></div>`;
  });
  h+=`<div class="pager">${i>0?`<a href="#${T[i-1].id}">← ${T[i-1].t}</a>`:"<span></span>"}${i<T.length-1?`<a href="#${T[i+1].id}">${T[i+1].t} →</a>`:"<span></span>"}</div>`;
  content.innerHTML=h; window.scrollTo(0,0);
  code.value=x.s[0][2]; mark(); side.classList.remove("open");
  document.title=x.t+" – Java Docs";
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
  try{localStorage.setItem("javadocs-theme",t)}catch(e){}
}
$("#themeBtn").onclick=()=>{
  const i=themes.findIndex(x=>x[0]===document.documentElement.dataset.theme);
  setTheme(themes[(i+1)%3][0]);
};
let saved=null; try{saved=localStorage.getItem("javadocs-theme")}catch(e){}
setTheme(saved||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));

// editor: compile + run via Wandbox online API (picks a Java compiler from server list)
let comp=null;
async function pick(){
  if(comp) return comp;
  const r=await fetch("https://wandbox.org/api/list.json");
  if(!r.ok) throw new Error("Compiler list error "+r.status);
  const cs=(await r.json()).filter(c=>c.language==="Java");
  const c=cs.find(c=>/openjdk-head/i.test(c.name))||cs[cs.length-1];
  if(!c) throw new Error("No Java compiler on server");
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
