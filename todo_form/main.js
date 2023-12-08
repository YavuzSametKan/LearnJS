// Tüm elementleri seçmek
const addTodoForm = document.querySelector("#add_form");
const addBtn = document.querySelector(".add_btn");
const addTodoInput = document.getElementsByName("add_todo")[0];
const todoList = document.querySelector(".todos");
const searchTodoForm = document.getElementsByName("search_todo")[0];
const clearBtn = document.querySelector(".dlt_all");

eventListeners();

function eventListeners(){ // Tüm event listenerlar
    addTodoForm.addEventListener("submit", addTodo);
    addTodoForm.addEventListener("submit", function(){
        (document.querySelectorAll(".todos li").length > 0) ? document.querySelector(".noTodo").style.display = "none" : document.querySelector(".noTodo").style.display = "block";
    });
    addBtn.addEventListener("click",function(){
        if(document.querySelectorAll("#add_form .message").length != 0)
            document.querySelectorAll("#add_form .message").forEach(function(div){div.remove();});
    });
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    document.querySelectorAll(".card-body")[2].addEventListener("click",deleteTodo);
    searchTodoForm.addEventListener("keyup",searchTodos);
}

function searchTodos(e){
    let filterValue = e.target.value.toLowerCase();
    let listItems = todoList.querySelectorAll("li");
    
    listItems.forEach(listItem => {
        let text = listItem.querySelector(".todo_mission").textContent.toLowerCase();
        (text.indexOf(filterValue) === -1) ? listItem.setAttribute("style", "display:none") : listItem.setAttribute("style", "display:default"); 
    })
}

function deleteTodoFromStorage(todo){
    let todos = getTodosFromStorage();
    index = todos.indexOf(todo);
    if(index !== -1) todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteTodo(e){
    let todos = getTodosFromStorage();
    if(e.target.className == "dlt_btn"){
        e.target.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.querySelector(".todo_mission").textContent);
        showAlert("info","Todo başarıyla silindi.");
        (document.querySelectorAll(".todos li").length > 0) ? document.querySelector(".noTodo").style.display = "none" : document.querySelector(".noTodo").style.display = "block";
    }
    else if(e.target.className == "dlt_all"){
        let result = confirm("Tüm todo'ları silmek istediğine emin misin?");
        if(result){
            document.querySelectorAll(".todos li").forEach(todo => {
                todo.remove();
                deleteTodoFromStorage(todo.querySelector(".todo_mission").textContent);
            });
            document.querySelector(".noTodo").style.display = "block"
        }
    }
        
}

function loadAllTodosToUI(){
    todos = getTodosFromStorage();
    todos.forEach(todo => {
        addTodoToUI(todo);
    });
    (document.querySelectorAll(".todos li").length > 0) ? document.querySelector(".noTodo").style.display = "none" : document.querySelector(".noTodo").style.display = "block";
}

function addTodo(e){
    let newTodo = addTodoInput.value.trim();
    /*
    *Uyarı Mesajları HTML Yapısı*
    <div class="message danger mt-3">
        message..
    </div>
    */
    
    if(newTodo == ""){
        showAlert("warning", "Bir şeyler girin!");
    }
    else{
        addTodoToUI(newTodo); // girilen Todo'yu arayüze eklemek 
        addTodoToStorage(newTodo);
        showAlert("success", "Todo başarıyla eklendi.");
    }
    

    e.preventDefault();
}

function getTodosFromStorage(){ // storage'dan todoları alma fonksiyonu
    let todos = (localStorage.getItem("todos") === null) ? [] : JSON.parse(localStorage.getItem("todos"));
    return todos;
}

function addTodoToStorage(newTodo){
    // halihazırda bulunan todo'ları dizi şeklinde storage'dan çektik
    let todos = getTodosFromStorage();

    // yeni todo'muzu todos dizisinin içine ekledik
    todos.push(newTodo);

    // yeni todo'muzu eklediğimiz todos dizisinin yeni halini storage'a kayıt ettik.
    localStorage.setItem("todos",JSON.stringify(todos));
}

// types : danger, info, warning, success
function showAlert(type, message){
    let messageDiv = document.createElement("div");
    messageDiv.className = "message mt-3 " + type;
    messageDiv.innerHTML = message;
    addTodoForm.appendChild(messageDiv);
    setTimeout(() => {
        messageDiv.remove();
    }, 3500);
}

function addTodoToUI(newTodo){
    /*
    *Liste HTML Yapısı*
    <li>
        <span class="todo_mission">TODO MISSION..</span>
        <span class="dlt_btn">&times;</span>
    </li>
    */
   // li etiketini üretiyoruz
    let listItem = document.createElement("li");

    // todo spanını üretiyoruz ve içerisine newTodo'yu ekliyoruz
    let todoMissionItem = document.createElement("span");
    todoMissionItem.className = "todo_mission";
    todoMissionItem.innerHTML = newTodo;

    // silme butonunu üretiyoruz
    let deleteItemBtn = document.createElement("span");
    deleteItemBtn.className = "dlt_btn";
    deleteItemBtn.innerHTML = "&times;";

    // li'nin içine ürettiğimiz çocuk etiketleri atıyoruz. 
    listItem.appendChild(todoMissionItem);
    listItem.appendChild(deleteItemBtn);

    //Todo list'e ürettiğimiz HTML yapısını ekliyoruz.
    todoList.appendChild(listItem);
     addTodoInput.value = "";
}
