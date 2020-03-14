for(var i=0;i<document.querySelectorAll(".drum").length; ++i){
    switch (i) {
        case 0:
            document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                var audio = new Audio("sounds/snare.mp3")
                audio.play();
            })
            break;
        case 1:
                document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                    var audio = new Audio("sounds/tom-1.mp3")
                    audio.play();
                })
                break;
        case 2:
                document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                    var audio = new Audio("sounds/tom-3.mp3")
                    audio.play();
                })
                break;
        case 3:
                document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                    var audio = new Audio("sounds/tom-4.mp3")
                    audio.play();
                })
                break;
        case 4:
                document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                    var audio = new Audio("sounds/tom-2.mp3")
                    audio.play();
                })
                break;
        case 5:
                document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                    var audio = new Audio("sounds/kick-bass.mp3")
                    audio.play();
                })
                break;
        case 6:
                    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                        var audio = new Audio("sounds/crash.mp3")
                        audio.play();
                    })
                    break;
        default:
            break;
    }    
}
document.addEventListener("keydown",function(e){
    switch(e.keyCode){
            case 65:
                var audio = new Audio("sounds/snare.mp3")
                    audio.play();
                break;
                case 83:
                var audio = new Audio("sounds/tom-1.mp3")
                    audio.play();
                break;
                case 68:
                var audio = new Audio("sounds/tom-3.mp3")
                    audio.play();
                break;
                case 70:
                var audio = new Audio("sounds/tom-4.mp3")
                    audio.play();
                break;
                case 71:
                var audio = new Audio("sounds/tom-2.mp3")
                    audio.play();
                break;
                case 72:
                var audio = new Audio("sounds/kick-bass.mp3")
                    audio.play();
                break;
                case 74:
                var audio = new Audio("sounds/crash.mp3")
                    audio.play();
                break;
                default:
                    break;
    }
})