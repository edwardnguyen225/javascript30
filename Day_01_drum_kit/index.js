function playsound(e) {
  const key = document.querySelector(`div[data-key="${e.code}"]`);

  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".keys"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playsound);
