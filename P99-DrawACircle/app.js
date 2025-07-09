const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let startX, startY;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  startX = e.clientX - rect.left;
  startY = e.clientY - rect.top;
});

canvas.addEventListener("mouseup", (e) => {
  if (!isDrawing) return;
  isDrawing = false;
  const rect = canvas.getBoundingClientRect();
  const endX = e.clientX - rect.left;
  const endY = e.clientY - rect.top;

  const width = Math.abs(endX - startX);
  const height = Math.abs(endY - startY);

  const centerX = (startX + endX) / 2;
  const centerY = (startY + endY) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, width / 2, height / 2, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "#00ffcc";
  ctx.lineWidth = 3;
  ctx.stroke();

  const difference = Math.abs(width - height);
  const max = Math.max(width, height);
  let accuracy = 100 - (difference / max) * 100;
  accuracy = Math.max(0, accuracy.toFixed(2));

  document.getElementById(
    "result"
  ).textContent = ` Circle Accuracy: ${accuracy}%`;
});
