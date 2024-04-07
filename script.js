console.log("Welcome to Spotify")

// initialize the variables

let songIndex = 0;

let audioElement = new Audio('1.mp3');

let masterPlay = document.getElementById('masterPlay')

let myProgressBar = document.getElementById('myProgressBar')

let gif = document.getElementById('gif')


let Songs =[
   {songName:"salme-e-Ishq",filePath:"",coverPath:""},
   {songName:"salme-e-Ishq",filePath:"",coverPath:""},
   {songName:"salme-e-Ishq",filePath:"",coverPath:""},
   {songName:"salme-e-Ishq",filePath:"",coverPath:""},
   {songName:"salme-e-Ishq",filePath:"",coverPath:""},
   {songName:"salme-e-Ishq",filePath:"",coverPath:""},
   {songName:"salme-e-Ishq",filePath:"",coverPath:""}
]




// audioElement.play
//handlre play pause click

masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play')
      masterPlay.classList.add('fa-circle-pause')
      gif.style.opacity=1;
   }
   else{
      audioElement.pause();
      masterPlay.classList.remove('fa-circle-pause')
      masterPlay.classList.add('fa-circle-play')
      gif.style.opacity=0;
   }
})

//listen to events

audioElement.addEventListener('timeupdate',()=>{
   

   //update seek bar

   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
   myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})



