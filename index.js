var numberOfAudioButtons = document.querySelectorAll(".audio").length;


for (var i=0; i<numberOfAudioButtons; i++)
{
    document.querySelectorAll(".audio")[i].addEventListener("click", clickButton);
   
    
}

function clickButton(audioList)
{
    var audioSound = this.innerHTML;

    switch (audioSound) {
        case "p":
            var zupGuys = new Audio("audio/zup guys.mp3");
            zupGuys.play();
            this.style.color ="red";
            break;
        
        case "o":
            var ohYeah = new Audio("audio/huh.oh yeah.wav");
            ohYeah.play();
            this.style.color ="red";
            break;

        case "r":
            var shoutOut = new Audio("audio/shout out.mp3");
            shoutOut.play();
            this.style.color ="red";
            break;
        
        case "t":
            var lalala = new Audio("audio/lalalalalala.mp3");
            lalala.play();
            this.style.color ="red";
            break;
    
        case "f":
            var aha = new Audio("audio/aha.mp3");
            aha.play();
            this.style.color ="red";
            break;

        case "l":
            var playSound = new Audio("audio/play sound_ren.wav");
            playSound.play();
            this.style.color ="red";
            break;

        case "i":
            var broom = new Audio("audio/broom.mp3");
            broom.play();
            this.style.color ="red";
            break;

        default: 
            
            break;
    }
    
}

// this.style.color ="red";
//     // // 
//     // // // alert("clicked!");
//     // // 
//     // // console.log(this.innerHTML);