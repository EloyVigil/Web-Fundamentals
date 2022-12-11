console.log("page loaded...");

var video = document.querySelector("#video");
video.muted = true
function startVid(video){
    video.play();
}

function pauseVid(video){
    video.pause();
}