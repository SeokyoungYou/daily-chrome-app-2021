const body = document.querySelector("body"); // 배경은 body에
const colors = ["#36d1dc", "#3d6dff"],
  directions = ["0deg", "180deg", "270deg", "90deg"];

const IMG_NUMBER = 8;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}
function genRandomImg() {
  const number = Math.floor(Math.random() * IMG_NUMBER); // 0-3까지
  return number;
}
function genRandomDir() {
  const randomDirection = Math.floor(Math.random() * directions.length);
  return randomDirection;
}
function paintBackground(randomDirection) {
  body.style.background = `linear-gradient(${directions[randomDirection]}, ${colors[0]},${colors[1]})`;
}
function handleSubmitBg(event) {
  event.preventDefault();
  const randomNumber = genRandomImg();
  paintImage(randomNumber);
}

function loadBackground() {
  const currentUser = localStorage.getItem(USER_LS);
  form.addEventListener("submit", handleSubmitBg);
  if (currentUser === null) {
    console.log("hello");
    const randomDirection = genRandomDir();
    paintBackground(randomDirection);
  } else {
    const randomNumber = genRandomImg();
    paintImage(randomNumber);
  }
}
function init() {}
init();
loadBackground();
