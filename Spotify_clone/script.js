// console.log("Welcome to spotify")

//Initialize the variable
let songIndex=0;
let AudioElement = new Audio('songs/1.mp3');

let myProgressBar= document.getElementById('myProgressBar')
let masterPlay= document.getElementById('masterPlay')
let masterforward= document.getElementById('masterforward')
let masterrewind= document.getElementById('masterrewind')
let gif= document.getElementById('gif')
let mastersonginfo= document.getElementById('mastersonginfo')
let songPlaytime= document.getElementById('songPlaytime')
let songItems= Array.from(document.getElementsByClassName('songItem'))

let songs= [
    {songName:"love you man",filePath:"songs/4.mp3",coverPath:"covers/9.jpg",duration:'4:27'},
    {songName:"love you by justin biber",filePath:"songs/2.mp3",coverPath:"covers/2.jpg",duration:'4:13'},
    {songName:"marthin 123",filePath:"songs/3.mp3",coverPath:"covers/3.jpg",duration:'03:00'},
    {songName:"robert 122",filePath:"songs/4.mp3",coverPath:"covers/4.jpg",duration:'4:27'},
    {songName:"justin biber",filePath:"songs/5.mp3",coverPath:"covers/5.jpg",duration:'3:28'},
    {songName:"tom jeus",filePath:"songs/6.mp3",coverPath:"covers/6.jpg",duration:'3:28'},
    {songName:"boby jeno tu has tagh",filePath:"songs/9.mp3",coverPath:"covers/10.jpg",duration:'4:33'},
]

songItems.forEach((element,i) => {
    // console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    element.getElementsByClassName('timestamp')[0].innerText=songs[i].duration;
    // element.getElementsByClassName('timestamp')[0].innerText=songs[i].filePath.duration;
});


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(AudioElement.paused||AudioElement.currentTime<=0){
        AudioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        AudioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;


     }
})

//listen to event
AudioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    let progress=parseInt((AudioElement.currentTime/AudioElement.duration)*100);
    // songPlaytime.innerHTML="0"+Math.floor((AudioElement.currentTime)%60) + ' / ' + Math.floor((AudioElement.duration)/60)+ " sec";
    // Update seekbar
    // console.log(progress)
    let duration = AudioElement.duration; //song is object of audio.  song= new Audio();

    var sec= new Number();
    var min= new Number();
     sec = Math.floor( duration );    
     min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;    
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;
    songPlaytime.innerHTML=min +":"+sec;
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
   AudioElement.currentTime=(myProgressBar.value*AudioElement.duration)/100;
   
})


//songItem play button event
const markAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle')
    element.classList.remove('fa-pause-circle')
    
    
    
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target); 
        markAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        AudioElement.src=`songs/${songIndex+1}.mp3`;

        AudioElement.play();
        AudioElement.currentTime=0;
        gif.style.opacity=1;
        mastersonginfo.innerText=songs[songIndex].songName;

    })
})

document.getElementById('masterbackward').addEventListener('click',()=>{
if(songIndex<=0){
    songIndex=6;
}
else{
    songIndex-=1;
}
AudioElement.src=`songs/${songIndex}.mp3`;
    AudioElement.play();
    AudioElement.currentTime=0;
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    mastersonginfo.innerText=songs[songIndex].songName;

})
document.getElementById('masterforward').addEventListener('click',()=>{
if(songIndex>=6){
    songIndex=0;
}
else{
    songIndex+=1;
}
AudioElement.src=`songs/${songIndex}.mp3`;
    AudioElement.play();
    AudioElement.currentTime=0;
    gif.style.opacity=1;
    mastersonginfo.innerText=songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})