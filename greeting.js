//쌤이 뭔가를 저장해 보자고 하며 시작했어 뭐야? localStorage.setItem을 말한거 같어.
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";



function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //새로고침 되는거 막아줘
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
    
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);//이거 왜 showing으,ㄹ 빼버리지?
    greeting.classList.add(SHOWING_CN); 
    //이렇게 하면서 showing을 나중에 추가해주니까 보여지는 거야
    greeting.innerText = `Hello ${text}`;
    //innertext는 문자그대로html은 html형식을 그대로 따라간다.
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}



function init(){
    loadName();
}
init();
