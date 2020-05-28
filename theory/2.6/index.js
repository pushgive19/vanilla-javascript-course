const title = document.querySelector("#title");

const BASE_COLOR = "rgb(44, 62, 80)";
const OTHER_COLOR = "rgb(236, 240, 241)";

function handleClick() {
  // event는 어디서 온거여?
  //   console.log(event);
  //   console.log("I have benn resized");
  // console.log(title.style.color);
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  //application 초기화
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();



