const body = document.querySelector("body"); // 배경은 body에

const IMG_NUMBER = 4;

function paintImgae(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); // 0-3까지
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImgae(randomNumber);
}
init();
