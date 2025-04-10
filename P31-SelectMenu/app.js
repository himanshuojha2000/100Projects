let selectField = document.getElementById("selectField");

let selectText = document.getElementById("selectText");

let list = document.getElementById("list");

let arrwoIcon = document.getElementById("arrowIcon");
let options = document.getElementsByClassName("options");

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    arrowIcon.classList.toggle("rotate");
  };
}
