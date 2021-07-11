const logo = document.querySelector(".logo"),
  toDo = document.querySelector(".toDoForm"),
  form = document.querySelector(".js-form"),
  input = form.querySelector("input"), // .js=form의 input tag
  greeting = document.querySelector(".js-greetings"); // class니깐 . 빼먹지 마라

const USER_LS = "currentUser", // Local storage
  SHOWING_INIT_CN = "showing-init-form",
  SHOWING_CN = "showing"; // Class name (CSS에서도 확인)

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault(); // default: event 발생하면 -> 타고타고 올라가서 페이지 새로고침하고 사라짐
  const currentValue = input.value;
  //console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_INIT_CN);
  form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_INIT_CN);
  greeting.classList.add(SHOWING_CN);
  logo.classList.add(SHOWING_CN);
  toDo.classList.add(SHOWING_CN);
  greeting.innerText = `Runner, ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    // she is
    paintGreeting(currentUser);
  }
}
function init() {}
init();
loadName();
