let input = document.getElementById("inputBox");
let form = document.querySelector(".mainForm");
input.addEventListener("keydown", validate);

function validate() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (input.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
}
