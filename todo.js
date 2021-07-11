// HTML으로부터 JS로 필요한 것 가져오기
const toDoForm = document.querySelector(".js-toDoForm"), //이름 겹치는 모듈 만드려면 유튜브클론 들어라
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos",
  TODO_ITEM_CN = "toDo__item",
  DELBTN_CN = "del-button"; //타이핑 실수 안하려고 문자열 저장

let toDos = []; // toDos를 저장하기 위해 array 만들기

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function filterFn(toDo) {
    return toDo.id !== parseInt(li.id); // 삭제된 id는 버리기 toDo.id는 숫자고 li.id는 string임
  }); // toDos array에서 true인 item만 filter시켜서 새로운 array 만든다
  toDos = cleanToDos; //let toDos로 바꿔야 함
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //string으로 저장
}
function paintToDo(text) {
  //console.log(text);
  // JS에서 HTML로 생성하기
  const li = document.createElement("li");
  li.classList.add(TODO_ITEM_CN);
  const span = document.createElement("span");
  const delBtn = document.createElement("span");
  delBtn.classList.add(DELBTN_CN);
  const newId = toDos.length + 1; // array 비었을 때는 id =1
  delBtn.innerText = "x"; // 이모지:window + . or ;
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn); //만든 tag들을 child로 넣어주기
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); // toDos arry안에 toDoObf 넣기
  saveToDos(); // push로 넣고 save해야 함
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // submit하면 초기화
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos); // string에서 object로 바꾸기
    //console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text); //
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
