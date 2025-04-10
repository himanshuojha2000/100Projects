let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imageWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/Img${index}.jpeg`);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imageWrapper.src = pic;
}
