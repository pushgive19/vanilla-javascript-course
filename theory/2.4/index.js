const title = document.querySelector("#title");
const color = title.style.color;
function handleClick() {
  // event는 어디서 온거여?
  //   console.log(event);
  //   console.log("I have benn resized");
  title.style.color = "gold";
  console.log(color);
}
title.addEventListener("click", handleClick);
