var drumCount = document.querySelectorAll(".drum").length;

// Event Listener for Clicks
for ( var i = 0; i < drumCount; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playDrumSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

// Event Listener for Keyboard presses
document.addEventListener("keydown", function(event){
    // console.log("key was pressed: " + event.key);
    playDrumSound(event.key);
    buttonAnimation(event.key);
})

function playDrumSound(key) {
    var tom1 = new Audio("sounds/tom-1.mp3");
    var tom2 = new Audio("sounds/tom-2.mp3");
    var tom3 = new Audio("sounds/tom-3.mp3");
    var tom4 = new Audio("sounds/tom-4.mp3");
    var snare = new Audio("sounds/snare.mp3");
    var crash = new Audio("sounds/crash.mp3");
    var kickBass = new Audio("sounds/kick-bass.mp3");
    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kickBass.play();
            break;
        default:
            console.log(key + " not found.");
            break;
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 120);
}