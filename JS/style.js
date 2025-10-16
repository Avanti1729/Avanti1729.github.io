const cont = document.querySelector(".container");
const h1 = document.querySelector("h1");
const btn = document.querySelector("a");

cont.style.height = "400px";
cont.style.width = "400px";
cont.style.background = "teal";
cont.style.color = "white";
h1.style.color = "skyblue";
h1.style.fontFamily = "sans-serif";
btn.style.color = "pink";

const h2 = document.createElement("h1");
const body = document.body;
h2.textContent = "Hello World";
h2.classList.add("greetings");
body.append(h2);
