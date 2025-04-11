const btn = document.querySelector(".btn");
const content = document.querySelector(".content-container-2");

btn.addEventListener("click", () => {
  content.classList.toggle("toggle");
  btn.innerText = content.classList.contains("toggle")
    ? "Show Less"
    : "Learn More";
});
