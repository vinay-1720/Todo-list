let taskinput=document.getElementById("taskinput");
let addbutton=document.getElementById("addbtn");
let takelist=document.getElementById("takelist");

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

    checkbox.onclick=function(){
        if(checkbox.checked){
            span.classList.add("checked");
        }
        else{
            span.classList.remove("checked");
        }
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

}

let todocount=0;
addbutton.onclick=function(){
    let userinput=taskinput.value;

    if(userinput===""){
        alert("Enter a task");
        return ;
    }
    todocount=todocount+1;

    let newtodo={
        id:todocount,
        text:userinput
    };

    createandappendtask(newtodo);
    taskinput.value="";

};