document.addEventListener("keydown",function(Event){
    if(Event.key==="d"){
        bark();
    }
});
document.querySelector(".dog").addEventListener("click",bark);
function bark(){
    var audio=new Audio("./bhuk.mp3");
    audio.play();
    document.querySelector(".dog").classList.add("pressed");
    setTimeout(function (){
        document.querySelector(".dog").classList.remove("pressed");
    },1000);
}