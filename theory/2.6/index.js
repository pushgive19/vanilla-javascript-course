// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(44, 62, 80)";
// const OTHER_COLOR = "rgb(236, 240, 241)";

// function handleClick() {
//   // event는 어디서 온거여?
//   //   console.log(event);
//   //   console.log("I have benn resized");
//   // console.log(title.style.color);
//   const currentColor = title.style.color;
//   console.log(currentColor);
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   //application 초기화
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
// }
// init();

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(162, 155, 254)";
const OTHER_COLOR = "#74b9ff";

title.style.color = BASE_COLOR;

  
function handleClick(){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }else{
    title.style.color = BASE_COLOR;
  }
}  

function init(){
    title.addEventListener("wheel", handleClick);
}
init();

// mouseout	A pointing device is moved off the element that has the listener attached or off one of its children.
// mouseup	A pointing device button is released over an element.
// pointerlockchange	The pointer was locked or released.
// pointerlockerror	It was impossible to lock the pointer for technical reasons or because the permission was denied.
// select	Some text is being selected.
// wheel	A wheel button of a pointing device is rotated in any direction.

