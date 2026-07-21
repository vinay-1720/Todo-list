let taskinput=document.getElementById("taskinput");
let addbutton=document.getElementById("addbtn");
let takelist=document.getElementById("takelist");
let todoList = [];

let userId = localStorage.getItem("user_id");
let savebtn = document.getElementById("savebtn");

fetch(`http://127.0.0.1:8000/todos/${userId}`)
.then(function(response){
    return response.json();
})
.then(function(todos){
    for(let todo of todos){
        let newtodo={
            id:todo.id,
            text:todo.task,
            ischecked:todo.is_checked
        };

        todoList.push(newtodo);
        createandappendtask(newtodo);
    }
})
.catch(function(error){
    console.log(error);
});







function createandappendtask(todo){
    //list element
    let li=document.createElement("li");
    li.classList.add("task");
    li.id="todo"+todo.id;


    //checkbox element
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("checkbox");


    li.appendChild(checkbox);

    //task-box
    let taskbox=document.createElement("div");
    taskbox.classList.add("task-box");

    //span
    let span=document.createElement("span");
    span.id = "label" + todo.id;
    span.textContent=todo.text;
    //restore old state
    checkbox.checked=todo.ischecked;
    if(todo.ischecked){
        span.classList.add("checked");
    }

    checkbox.onclick=async function(){
        todo.ischecked=checkbox.checked;

        if(checkbox.checked){
            span.classList.add("checked");
        }
        else{
            span.classList.remove("checked");
        }
        await fetch(
            `http://127.0.0.1:8000/todo/${todo.id}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    is_checked:checkbox.checked
                })
            }
        );
    }
        

    
    taskbox.appendChild(span);
    li.appendChild(taskbox);

    
    //delete icon
    let deletediv=document.createElement("div");
    deletediv.classList.add("delete-icon");

    let deleteicon=document.createElement("i");
    deleteicon.classList.add("fa-solid","fa-trash-can");

    deletediv.appendChild(deleteicon);
    li.appendChild(deletediv);

    takelist.appendChild(li);

    deleteicon.onclick=function(){
        deletetask(li.id);
    }

}

//delete tasks from local storage
async function deletetask(todoid){

    let realTodoId = todoid.replace("todo","");

    let response = await fetch(
        `http://127.0.0.1:8000/todo/${realTodoId}`,
        {
            method:"DELETE"
        }
    );

    if(response.ok){

        let taskelement=document.getElementById(todoid);
        takelist.removeChild(taskelement);

        let deleteindex=todoList.findIndex(function(todo){
            return "todo"+todo.id==todoid;
        });

        todoList.splice(deleteindex,1);
    }
}






addbutton.onclick=async function(){
        let userinput=taskinput.value;

        if(userinput===""){
            alert("Enter a task");
            return ;
        }
        let response=await fetch(
            "http://127.0.0.1:8000/addtodo",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    task:userinput,
                    user_id:userId
                })
            }
        );
        if(response.ok){
            location.reload();
        }
    };

savebtn.onclick=function(){
    savetasks();
}


function savetasks(){
    localStorage.setItem("todoList",JSON.stringify(todoList));
}

for (let todo of todoList){
    createandappendtask(todo);
}


