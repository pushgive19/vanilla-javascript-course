const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
    
const TODO_LS = "toDos";

// function saveTodo(text){
//     localStorage.setItem(TODO_LS, text);
// }
let toDos = [];


function deletToDo(event){
    const btn = event.target;
    const li  = btn.parentNode; //변수 정해주는거. 나는 그냥한줄로 적었는데. 이게 더 좋은듯.
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;

    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deletToDo);
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    
    li.id = newId;

    const toDoObj ={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
 
    //뭔가를 그ㄹ의 father안에 넣는거야
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
//7분 으로 돌아가

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODO_LS);
    
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
   
    //병신 toDoForm.addEventListener = ("submit", handleSubmit);
    //이따위로 적고 있다.
    
    //eventListener는 loadToDos()가 아니라 여기로 와야되네.
}
init();