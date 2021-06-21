const inputs = document.querySelectorAll('.controls input');

function handleInputChange () {
  const suffix = this.dataset.suffix || '';
  //   console.log(this.value + suffix);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener('change', handleInputChange));

// Below is for continously update when range is changing
inputs.forEach((input) =>
  input.addEventListener('mousemove', handleInputChange)
);
