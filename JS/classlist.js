const h1 = document.querySelector("h1");
console.log(h1.classList);

const intervalId = setInterval(() => {
  h1.classList.add("five");
  setTimeout(() => h1.classList.remove("five"), 2000);
}, 4000);
setTimeout(() => clearInterval(intervalId), 12000);

const a = document.querySelector("a");
a.href = "https://canva.com";
const inp = document.querySelector("input");
inp.placeholder = "Password";
console.log(a.getAttribute("href"));

const h = document.querySelector("h1");
h.style.color = "teal";
