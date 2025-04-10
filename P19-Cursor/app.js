const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (event) {
  movecursor(event.pageX, event.pageY);
});

const movecursor = function (pageX, pageY) {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
