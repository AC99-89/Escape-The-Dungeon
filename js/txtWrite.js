/*this js file is for making the text animation of the text */
//define the vars and speed of the type
var LETTER = 0;
var TXT = "lorem ipsum dolor si amet osefhsiughs.";
var SPEED = 50;

function typeWriter(){
	//coninue writing until letter equals the length of the text.
	if(LETTER < TXT.length){
		document.getElementById("txt").innerHTML += TXT.charAt(LETTER);
		LETTER++;
		/*timeout function used to set the delay to make it 
		look like it's typing it out. 
		*/
		setTimeout(typeWriter, SPEED);
	}
}

typeWriter();