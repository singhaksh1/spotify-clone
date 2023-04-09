// console.log("hii")
let songIndex=0;
let music=new Audio("songs/7.mp3");
let masterplay=document.getElementById("masterplay");
let progressbar=document.getElementById("progressbar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName:"Maan meri jaan", filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"kahani suno", filepath:"songs/2.mp3",coverpath:"cover/2.jpg"},
    {songName:"tere pyaar me", filepath:"songs/3.mp3",coverpath:"cover/3.jpg"},
    {songName:"Bairiya", filepath:"songs/4.mp3",coverpath:"cover/4.jpg"},
    {songName:"Heeriye dil jaaniye", filepath:"songs/5.mp3",coverpath:"cover/5.jpg"},
    {songName:"Har har sambhu", filepath:"songs/6.mp3",coverpath:"cover/6.jpg"},
    {songName:"kaise-Hua", filepath:"songs/7.mp3",coverpath:"cover/7.jpg"}
]

//FOR SONGS ITEM
songItems.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverpath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// music.play();

//HANDLE PLAY/PAUSE
masterplay.addEventListener("click",()=>{
    if(music.paused || music.currentTime<=0){
    music.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity=1;
}
else{
    music.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity=0;

}
})

//LISTEN TO EVENTS
music.addEventListener("timeupdate",()=>{
     console.log("timeupdate");
     //UPDATE SEEKBAR
     progress= parseInt((music.currentTime/music.duration)*100);
     console.log(progress);
     progressbar.value=progress;

})
progressbar.addEventListener('change' ,()=>{
    music.currentTime=progressbar.value*music.duration/100;
})

//SONG ITEM CHOOSE

const makeallplays=()=>{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
})
}



Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
    element.addEventListener("click" ,(e)=>{
     console.log(e.target);
     makeallplays();
     songIndex=parseInt(e.target.id);
     e.target.classList.remove("fa-play-circle");
     e.target.classList.add("fa-pause-circle");
     music.src=`songs/${songIndex}.mp3`
     music.currentTime=0;
     music.play();
     gif.style.opacity=1;
     masterplay.classList.remove("fa-play-circle");
     masterplay.classList.add("fa-pause-circle");
    })
})

//PREVIOUS AND NEXT BUTTONS

document.getElementById('next').addEventListener("click" ,()=>{
    if(songIndex>=7){
      songIndex=1;
    }
    else{
      songIndex+=1;
    }
    music.src=`songs/${songIndex}.mp3`
       music.currentTime=0;
       music.play();
       masterplay.classList.remove("fa-play-circle");
       masterplay.classList.add("fa-pause-circle");
  })

document.getElementById('previous').addEventListener("click" ,()=>{
  if(songIndex<=1){
    songIndex=1;
  }
  else{
    songIndex-=1;
  }
  music.src=`songs/${songIndex}.mp3`
     music.currentTime=0;
     music.play();
     masterplay.classList.remove("fa-play-circle");
     masterplay.classList.add("fa-pause-circle");
})
