/*Code to make the text animation on the main webpage */
const num = ["", "Choose which choice to make.", "Some will help you escape,", "while others will not.", "You have limited hp", "and little defense.", "Can You Escape?"];
let index = 0
function displayNumber(){
	if (index < num.length) {
        document.getElementById("delay").innerHTML = num[index];
        index++;
        if(index == 6){
        	setTimeout(displayNumber, 2000);
        }
        else if(index == 7){
        	document.getElementById("delay").style.fontSize = "36px"
        	document.getElementById("delay").style.fontFamily = "fantasy"
        	document.getElementById("delay").style.textUnderlineOffset = "5px"
        	document.getElementById("delay").style.textDecorationStyle = "wavy"
        }
        else{
        setTimeout(displayNumber, 1000);
    }
    }
}

/* Hides the button for a certain amount of time and then shows it */
function delayBtn(){
    document.getElementById("delay2").style.display = "none";

    // Wait for a certain amount of time (e.g., 7 seconds)
    setTimeout(function() {
        // Show the button after the specified time
        /*plays audio */
    var audio = new Audio('./fx/ambience5.mp3')
    audio.play();
        document.getElementById("delay2").style.display = "block";

        

}, 7000); // 7000 milliseconds (7 seconds)

}

/* Takes user to the game */
document.getElementById("delay2").onclick = function() {
    location.href = "./game.html"
}

delayBtn();
displayNumber();