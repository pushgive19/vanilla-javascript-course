// const title = document.querySelector("#title");

// const CLICKED_CLASS = 'clicked';
// const UNCLICKED_CLASS = 'unclicked';

// function handleClick(){
//   // const hasClass = title.classList.contains(CLICKED_CLASS);
//   // if(hasClass ){
//   //   title.classList.remove(CLICKED_CLASS);
//   // }else{
//   //   title.classList.add(CLICKED_CLASS);
//   // }
//   title.classList.toggle(CLICKED_CLASS);
  
// }
// function handleEnter(){

//   title.classList.replace(CLICKED_CLASS,UNCLICKED_CLASS );
//   title.classList.toggle(UNCLICKED_CLASS);title.classList.contains(CLICK_CLASS)
//   console.log(title.classList);
// }


// function init() {

//   title.addEventListener("click", handleClick);
// }
// init();

// function init2(){
//   title.addEventListener("mouseenter",handleEnter );

// }
// init2();

  
const title = document.querySelector("#title");

const CLICK_CLASS= "clicked";

function handleClick(){
  // const currentClass = title.className;
  // const contain = title.classList.contains(CLICK_CLASS);
  // if(contain){
  //   title.classList.remove(CLICK_CLASS);
  // }else{
  //   title.classList.add(CLICK_CLASS);
  // }
  title.classList.toggle(CLICK_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);

}
init();
