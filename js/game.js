/*Function for the main game*/
function playBackGroundMusic(clicked){
	var audio = document.getElementById("audio")
	if(clicked){
		document.getElementById("snd").style.display = "none";
		document.getElementById("snd2").style.display = "block";
		audio.loop = true;
		audio.play();
	}else{
		document.getElementById("snd").style.display = "block";
		document.getElementById("snd2").style.display = "none";
		console.log("pausing");
		audio.loop = false;
		audio.pause();
	}
}