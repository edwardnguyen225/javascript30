const pressedKeys = [];
const secretCode = "hirito";

window.addEventListener("keyup", (e) => {
  const newKey = e.key;
  console.log(newKey);
  pressedKeys.push(newKey);
  pressedKeys.splice(
    -secretCode.length - 1,
    pressedKeys.length - secretCode.length
  );
  console.log(pressedKeys);

  if (pressedKeys.join("").includes(secretCode)) {
    console.log("DING DING DING!!! 🎉🎉🎉");
    console.log(`You found "${secretCode}"`);
    cornify_add();
  }
});
