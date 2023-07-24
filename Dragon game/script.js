score=0;
cross =true;
audio=new Audio('music.mp3')
audiogo=new Audio('gameover.mp3')
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function(e){
    console.log("Key code is :", e.key)
    if(e.key=="ArrowUp"){
        human=document.querySelector('.human');
        human.classList.add('animatehuman')
        setTimeout(()=>{
            human.classList.remove('animatehuman')
        },500)
    }
    if(e.key=="ArrowRight"){
        human=document.querySelector('.human');
        humanX=parseInt(window.getComputedStyle(human,null).getPropertyValue('left'))
        human.style.left =humanX +120 +"px";
    }
    if(e.key=="ArrowLeft"){
        human=document.querySelector('.human');
        humanX=parseInt(window.getComputedStyle(human,null).getPropertyValue('left'))
        human.style.left =(humanX -112)+"px";
    }
}


setInterval(()=>{
    human=document.querySelector('.human');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    gameContainer=document.querySelector('.gameContainer')

    hx=parseInt(window.getComputedStyle(human,null).getPropertyValue('left'))
    hy=parseInt(window.getComputedStyle(human,null).getPropertyValue('top'))
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))
    offsetX=Math.abs(hx-ox);
    offsetY=Math.abs(hy-oy);
    console.log(offsetX,offsetY)

    if(offsetX <70 &&offsetY <70){
        gameOver.innerHTML="Game Over";
        obstacle.classList.remove('animateObstacle');
        cross=false;
        audio.pause()
        audiogo.play()
        human.classList.add('animatehumanend')
        setTimeout(()=>{
            audiogo.pause()
            human.style.visibility='hidden'
            human.style.botton='0px'
            human.style.left='20px'
            
        },1000)
    }
    else if(offsetX <100 && cross){
        score+=10;
        updateScore(score);
            cross=false;
            setTimeout(()=>{
            cross=true;
        },1000)
        setTimeout(()=>{
            AniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=AniDur-0.5;
            obstacle.style.animationDuration=newDur+'s';
            console.log('new animation time:',newDur)
        },500)
    }
    
},10) 

updateScore=function(score){
    scoreCont=document.querySelector('.scoreCont');
    scoreCont.innerHTML= "Your score is : " + score;
} 