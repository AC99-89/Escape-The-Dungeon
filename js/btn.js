/*Code for the buttons*/
/*function below plays sound files in a
list based on a random value
*/
function choice(){
	//the list
	var audio = [
		new Audio('./fx/walk1.mp3'), 
		new Audio('./fx/walk3.mp3')
		];
	//creates a random integer between 0 and 2
	var random = Math.floor(Math.random() * audio.length);
	
	//plays the sound
	audio[random].play();
}