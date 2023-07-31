console.log("Welcome to Spotify");
let audioElement = new Audio('1.mp3');
let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName : "Hanuman Chalisa", filepath : "songs/1.mp3", coverpath : "covers/1.jpg"},
    {songName : "Hanuman Chalisa", filepath : "song/1.mp3", coverpath : "covers/1.jpg"},
]
// handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause'); 
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play'); 
        gif.style.opacity = 0;
    }

})
// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

    })


})

// continue from 1 hour 11 minutes in the video