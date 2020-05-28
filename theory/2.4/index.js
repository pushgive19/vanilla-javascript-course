const title = document.querySelector("#title");
function handleClick() {
  // event는 어디서 온거여?
  //   console.log(event);
  //   console.log("I have benn resized");
  title.style.color = "gold";
}
title.addEventListener("click", handleClick);
