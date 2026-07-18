let loginbtn=document.getElementById("loginbtn");

loginbtn.onclick=async function(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    let response=await fetch(
        "http://127.0.0.1:8000/login",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        }
    );

    if (response.ok){
        let data=await response.json();
        localStorage.setItem(
            "user_id",
            data.user_id
        );
        window.location.href="todo.html";
    }
    else{
        let data=await response.json();
        alert(data.detail);
    }
};