var numberOfAudioButtons = document.querySelectorAll(".audio").length;


for (var i=0; i<numberOfAudioButtons; i++)
{
    document.querySelectorAll(".audio")[i].addEventListener("click", clickButton);
   
function clickButton()
{
    var audioSound = this.innerHTML;
    keyboardSound(audioSound);
    keyboardAnimation(audioSound);
    // console.log(key);
   
}};

document.addEventListener("keydown", keyBoardEvent);

function keyBoardEvent(event)
{
    keyboardSound(event.key);
    keyboardAnimation(event.key);
}

function keyboardSound(key)
{
    switch(key) {
    case "p":
        var zupGuys = new Audio("audio/zup guys.mp3");
        zupGuys.play();
        break;
    
    case "o":
        var ohYeah = new Audio("audio/huh.oh yeah.wav");
        ohYeah.play();
        break;
    
    case "r":
        var shoutOut = new Audio("audio/shout out.mp3");
        shoutOut.play();
        break;
    
    case "t":
        var lalala = new Audio("audio/lalalalalala.mp3");
        lalala.play();
        break;

    case "f":
        var aha = new Audio("audio/aha.mp3");
        aha.play();
        break;
    
    case "o":
        var ohYeah = new Audio("audio/broom.mp3");
        ohYeah.play();
        break;

    case "l":
        var playSound = new Audio("audio/play sound_ren.wav");
        playSound.play();
        break;

    case "i":
        var broom = new Audio("audio/broom.mp3");
        broom.play();
        break;
    
    case "o":
        var ohYeah = new Audio("audio/huh.oh yeah.wav");
        ohYeah.play();
        break;

    default: 
        
        break;
    }
}

function keyboardAnimation(currentKey)
{
    var pressedKey = document.querySelector("." + currentKey);
    console.log(pressedKey);
    pressedKey.classList.add("whenPress");
    setTimeout(function(){
    pressedKey.classList.remove("whenPress");
    }, 200);
}




