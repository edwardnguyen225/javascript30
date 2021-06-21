const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
progressBar.style.flexBasis = '0%';

const ranges = player.querySelectorAll('input[type="range"]');
const skipButtons = player.querySelectorAll('button[data-skip]');
let isMouseDown = false;

function togglePlay () {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateToggle () {
  const icon = video.paused ? '►' : '❚❚';
  toggle.textContent = icon;
}

function handleRange () {
  video[this.name] = this.value;
}

function handleSkip () {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress () {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function updateProgress (e) {
  console.log(e);
  const time = (e.offsetX / progress.offsetWidth) * 100;
  video.currentTime = (time / 100) * video.duration;
  progressBar.style.flexBasis = `${time}%`;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);

video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', updateProgress);
progress.addEventListener('mousedown', () => (isMouseDown = true));
progress.addEventListener('mouseup', () => (isMouseDown = false));
progress.addEventListener('mousemove', (e) => isMouseDown && updateProgress(e));

ranges.forEach((range) => range.addEventListener('change', handleRange));
ranges.forEach((range) => range.addEventListener('mousemove', handleRange));

skipButtons.forEach((skip) => skip.addEventListener('click', handleSkip));
