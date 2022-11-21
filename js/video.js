// Add js here.

//video, autolay, loop off
var video = document.querySelector("#videoplayer");

window.addEventListener("load", function(){
    video.autoplay = false;
    video.loop = false;
    video.load()
})

//play button
document.querySelector("#play").addEventListener("click", function(){
    video.play();
})

//pause button
document.querySelector("#pause").addEventListener("click", function(){
    video.pause();
})

//1.slow down button 
document.querySelector("#slower").addEventListener("click", function(){
    
    
    if (video.playbackRate == 1){
        video.playbackRate = 0.5;
    }

    else if (video.playbackRate == 2){
        video.playbackRate = 1;
    }


   /// alert at lowest speed
   
   if (video.playbackRate == 0.5){
       window.alert("Video is at slowest speed!");
   }

})

//2.speed up button
//code here...
document.querySelector("#faster").addEventListener("click", function(){
    
    if (video.playbackRate == 0.5){
        video.playbackRate = 1;
    }

    else if (video.playbackRate == 1){
        video.playbackRate = 2;
    }

   /// alert at fastest speed
   
   if (video.playbackRate == 2){
       window.alert("Video is at fastest speed!");
   }

})




//skip ahead
document.querySelector("#skip").addEventListener("click", function(){
    video.currentTime += 15;
    if (video.currentTime >= video.duration) {
        video.currentTime = video.startTime;
    }
       
})

//3.mute
let mute = document.querySelector("#mute");
mute.addEventListener("click", function()
{
    if (video.muted === false){
        video.muted = true;
        mute.innerHTML = 'unmute';
    }

   else if (video.muted === true){
        video.muted = false;
        mute.innerHTML = 'mute';
    }
    
})


//Volume slider

let slider = document.querySelector("#slider");
let vol = document.querySelector("#volume");
slider.addEventListener("change", function(e) {
    video.volume = e.currentTarget.value / 100;
    vol.innerHTML = e.currentTarget.value;
})






