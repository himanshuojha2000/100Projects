const loginF = document.querySelector(".login-form");
const signupF = document.querySelector(".signup-form");
const loginBtn = document.querySelector(".login button");
const signupBtn = document.querySelector(".signup button");
const backLayer = document.querySelector(".back-layer");

signupBtn.addEventListener("click", () => {
  loginF.classList.remove("active");
  signupF.classList.add("active");
  backLayer.style.clipPath = "inset(0 0 0 50%)";
});

loginBtn.addEventListener("click", () => {
  loginF.classList.add("active");
  signupF.classList.remove("active");
  backLayer.style.clipPath = "inset(0 50% 0 0)";
});
