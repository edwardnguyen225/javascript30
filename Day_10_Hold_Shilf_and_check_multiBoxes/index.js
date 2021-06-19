const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);

let lastCheckbox;

function handleChecked(e) {
  if (e.shiftKey) {
    const isChecked = this.checked;
    let isBetween = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox == this || checkbox == lastCheckbox) {
        isBetween = !isBetween;
      }

      if (isBetween) {
        checkbox.checked = isChecked;
      }
    });
  }
  lastCheckbox = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleChecked)
);
