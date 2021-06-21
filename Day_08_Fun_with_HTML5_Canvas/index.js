const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let increaseLineWidth = true;
const maxLineWidth = 50;

function draw (e) {
  if (!isDrawing) return;
  console.log(e);
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue = hue < 360 ? hue + 1 : 0;
  if (ctx.lineWidth > maxLineWidth || ctx.lineWidth === 1) {
    increaseLineWidth = !increaseLineWidth;
  }
  ctx.lineWidth = increaseLineWidth ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
