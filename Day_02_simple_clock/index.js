const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

function setDay() {
  const now = new Date();
  
  const sec = now.getSeconds();
  const secDeg = (sec / 60) * 360;
  secHand.style.transform = `rotate(${secDeg}deg)`;

  const min = now.getMinutes();
  const minDeg = (min / 60) * 360;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setDay(); /* Init clock */

setInterval(setDay, 1000);
