
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");
      // clockTitle = document.querySelector(".js-title");
      // 이 두개 무슨 차이 있길래 그럴까? 아래꺼에다 document대신 clockContainer써도 상관없음.


function getClock(){ 
  const  date = new Date();
 
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}`: hours}:${
                            minutes<10 ?`0${minutes}`:minutes}`  ;
}
function init(){
  getClock();//나는 이거 지웠더니 처음에 00으로 시작.
  setInterval(getClock, 1000  );
}  
init();


