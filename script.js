let main = document.createElement("main");
let header = document.createElement("header");
let h1 = document.createElement("h1");
let s = document.createElement("div");
let l = document.createElement("div");
let o = document.createElement("span");
let t = document.createElement("span");
let h = document.createElement("span");

h1.innerHTML = "Baby Sloth";
s.id = "s";
l.id = "l";
o.id = "o";
t.id = "t";
h.id = "h";

let body = document.getElementById("body");

body.appendChild(main);
main.appendChild(header);
header.appendChild(h1);
main.appendChild(s);

s.appendChild(l);
l.appendChild(o);
l.appendChild(t);
l.appendChild(h);
