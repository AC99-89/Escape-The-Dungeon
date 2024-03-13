/*Plays background music and detects
consent for game*/
//exports sound consent to sound dependent files
function playBackGroundMusic(clicked){
    var consent = Boolean;
	var audio = document.getElementById("audio")
	if(clicked){
		document.getElementById("snd").style.display = "none";
		document.getElementById("snd2").style.display = "block";
		audio.loop = true;
		audio.play();
	}else{
		document.getElementById("snd").style.display = "block";
		document.getElementById("snd2").style.display = "none";
		audio.loop = false;
		audio.pause();
	}
}