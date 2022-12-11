function cookiegone(){
    var cookiegone = document.querySelector("#cookiebox");
    cookiegone.remove();
    
}

var temp = document.querySelectorAll(".temp")
function tempchange(){
    for(var i = 0; i < temp.length; i++)
        temp[i].innerText = temp[i].innerText * 2 + 30;
    }

