let signupbtn=document.getElementById("signupbtn");
signupbtn.onclick=async function(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if (username===""||password===""){
        alert("Please fill all fields");
        return ;
    }
    let response=await fetch("http://127.0.0.1:8000/signup",
        {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        }
    );

    let data=await response.json();
    if(response.ok){
        alert("Account Created Successfully");
        window.location.href="login.html";
    }
    else{
        alert(data.detail);
    }
};