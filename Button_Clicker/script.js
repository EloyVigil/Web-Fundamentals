function loginchange(){
    // declare button as var 
    var button = document.querySelector("#loginbutton");
    button.innerText = "log out";

    console.log(button)
}

function addbuttonremoval(button){
    button.remove();
    console.log(button);
}

function alertliked1(button){
    alert("ninja was liked");
}

function alertliked2(button){
    alert("ninja was liked");
}