let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let gradCont = document.querySelector("#gradient-cont");
let btn = document.querySelector(".randomColorBtn");

function makeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function generategrad() {
  c1.value = "#" + makeColor();
  c2.value = "#" + makeColor();
  gradCont.style.background = `linear-gradient(${c1.value},${c2.value})`;
}

function setGradient() {
  gradCont.style.background = `linear-gradient(${c1.value},${c2.value})`;
}

document.body.addEventListener("load", generategrad());
c1.addEventListener("input", setGradient);
c2.addEventListener("input", setGradient);
btn.addEventListener("click", generategrad);
