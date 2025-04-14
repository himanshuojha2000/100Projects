const container = document.querySelector(".content");

for (let i = 0; i < 12; i++) {
  const img = document.createElement("img");
  img.src = `https://picsum.photos/seed/${i}/300/300`;
  container.appendChild(img);
}
