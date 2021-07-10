#1 THEORY
#1.0 Why JS?
Javascript
- The only programming lag on the web.
    Frontend에서 interactive한 website를 만들기 위해 필요
무료 사진 웹사이트: https://unsplash.com/

#1.1 Super Powers of JS
#1.2 ES5, ES6....
ECMAScript Specification: manual
ES5, ES6는 version임

#1.3 VanilaJS
JS without library, raw JS

#1.4 Hello World with Javascript
JS file은 .html body의 맨 마지막에 있어야 함
<script src="index.js"></script>

#1.5 What are we learning
programming lag concept

#1.6 Your first JS Variable!
Variable: something can be changed.
; 가 있어야 expression을 끝낸 것임
Create>Initialize>Use
    let a = 221;    # let은 create and initialize할 떄 사용
    let b = a - 5;  # use나
    a = 4;          # update할 때는 사용하지 않아도 됨
    console.log(b, a);

#1.7 let, const, var
    let             # can modify variable
    const a = 221;  # ConstantSourceNode. 바꿀 수 없음(assignment 안됨)
    var a = 221;    # let을 쓰렴
** default는 const 로 선언하고 필요할 때만 let 쓸 것
** 변수명 camel case: daysOfWeek

#1.8 Data Types on JS
단축키 Ctrl + /: comment // /**/
1. string "": text
2. Boolean
    const wat = true;   // true=1, false=0
3. Number: 정수         // 55
4. Float: 실수          // 55.2

#1.9,10  Organizing Data with Arrays and Objects: 데이터 정렬 방법
1. Array [] brackets
 :list를 만들 때
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    console.log(daysOfWeek[2]);   // [2]:element num starts from 0
2. Object {} curly brackets
    const nicoInfo = {
        name: "Nico",
        age: 33,
        gender: "Male",
        isHandsome: true,
        favMovies: ["Oldboy", "Along the gods"],
        favFood: [
            { name: "Kimchi", fatty: false },
            { name: "Cheesburger", fatty: true },
        ],
    };
    nicoInfo.gender ="Female"   // .찍어서 call
    console.log(nicoInfo.gender);
    console.log(nicoInfo.favFood[1].fatty);
 ** comma 까먹지마



#2 PRACTICE
#2.0 Your first JS Function 
- console.log()
    console: object, log: key, function
    Built-in function
- Function
    function sayHello() {
        console.log("Hello!");

    }
- Argument/Parameter
    function sayHello(potato) {
        console.log("Hello!", potato);
    }

#2.1 More Function Fun
- `` backticks: 새로운 string 쓰는 방식
    console.log(`Hello ${name} you ar ${age} years old`);
- return
    function sayHello(name, age) {
        return `Hello ${name} you are ${age} years old`;
    }
    const greetNicolas = sayHello("Nicolas", 14);
   
    const calculator = {
        plus: function (a, b) {
          return a + b;
        },
      };
      const plus = calculator.plus(5, 5);

#2.2 JS DOM Functions
JS also can select an element and change it.
DOM(Document Object Module)
 JS는 html element -> js object로 바꿀것임
- html의 id select하기    
    const title = document.getElementById("title");
    title.innerHTML = "Hi! From JS";    // 실제로 html의 title이 바뀜

#2.3 Modifying the DOM with JS
    console.log(title); // HTML 그 자체를 보여줌
    console.dir(title); // 사용가능한 attributes 확인
    console.dir(document);
    title.style.color = "red";
    document.title = "I own you now";
- DocumentFragment.querySelector(css에서 select하는 방식)    
    const title = document.querySelector("#id, .class");

#2.4 Events and event handlers
    function handleResize(event) {
        console.log(event);
    }
    window.addEventListener("resize", handleResize); // window reize되었을 때 fcn call
    ** handleResize()이면 바로 fcn call
    
    const title = document.querySelector("#title");
    function handleClick() {
      title.style.color = "blue";
    }
    title.addEventListener("click", handleClick);   // title clicked -> 파란색
    
#2.5 If, else, and, or
    if(condition){
        block
    } else if(condition){
        block
    } else{
        block
    }
** equals: === 세 개야!
- and &&, or ||

#2.6,7 DOM - If else - Function practice 
색상 팔레트: https://flatuicolors.com/
dom event reference: https://developer.mozilla.org/en-US/docs/Web/Events
- title 클릭시 색상 변경
    const title = document.querySelector("#title");
    const BASE_COLOR = "rgb(52, 73, 94)";
    const OTHER_COLOR = "#7f8c8d";
    function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
    }
    function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    }
    init();

- element.classList.func
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 ex) class가 있으면 remove, 없으면 add
 HTML
    <h1 id="title" class="btn">This works!</h1>
 CSS // style에 관한건 여기서 관리(class HTML에서 사용하지 않았어도 JS꺼 옮겨와도 됨)
    h1 {
        color: #34495e;
        transition: color 2s ease-in-out;
    }
    .clicked {
        color: #7f8c8d;
    }
 JS
    const title = document.querySelector("#title");
    const CLICKED_CLASS = "clicked";            // CSS에서 가져오는건 대문자로 표시
    function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (hasClass) {
    //   title.classList.remove(CLICKED_CLASS); // 이전 class를 지우지 않음
    // } else {
    //   title.classList.add(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);      // 주석과 정확히 같은 방식으로 동작함
    }
    function init() {
    title.addEventListener("click", handleClick);
    }
    init();




#3 MAKE YOUR FIRST JS APP
#3.0,1 Making a JS Clock


