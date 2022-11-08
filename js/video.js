var video;
video = document.querySelector('#player1')

//page load --- intialize the video element and turn off autoplay and loop
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log('autoplay is set to ' + video.autoplay);
	console.log('loop is set to ' + video.loop)
});

// play button --- play the video and update the volume
document.querySelector("#play").addEventListener("click", function() {
	// console.log("Play Video");
	video.play()
	volume = document.querySelector("#slider").value 
	document.querySelector("#volume").innerHTML = volume + '%'
 });

//pause button -- pause video
document.querySelector("#pause").addEventListener("click", function(){
	video.pause()
})

//slow down --- slow the vide speed by 10% each time the button is clicked
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.90
	console.log("New speed: " + video.playbackRate)
})

//speed up --- increase the current video speed each time the button is clicked
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate *= 1.10
	console.log("New speed: " + video.playbackRate)
})

//skip ahead --- advance the current video by 10 seconds
document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime + 10 >= 67.403333){
		video.currentTime = 0
		video.play()
	}
	else{
		video.currentTime += 10
	}
	console.log("Current time: " + video.currentTime )
})

//mute --- mute / unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").innerText = 'Unmute'
	}else {
        video.muted = false;
		document.querySelector("#mute").innerText = 'Mute'
    }
})

//Volume Slider --- change the volume based on the slider and update the volume information
var slider = document.getElementById("slider");
var output = document.getElementById("volume");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + '%';
  //volume = document.querySelector("#slider").value 
  video.volume = slider.value / 100
}


//styled --- old school styling when button is clicked 
document.querySelector("#vintage").addEventListener("click", function(){
	video.className += " oldSchool";
})

document.querySelector("#orig").addEventListener("click", function(){
	//document.getElementsByClassName("video").className = "css/video.css/video";
	video.className = "video";
})