let email = document.getElementById("user-email");
let password = document.getElementById("user-password");
let submit = document.getElementById("submit");

submit.addEventListener('click', function(){
    let userEmail = email.value;
    let userPassword = password.value;

    if(userEmail === "chele@baap.com" && userPassword === "password"){
        location.href='bank.html' // this will redirect to another html page
    } else{
        alert("User is not available");
    }
});