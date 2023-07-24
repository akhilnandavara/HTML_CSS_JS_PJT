 console.log('welcome to tic tac toe');
 let music=new Audio('music.mp3')
 let gameoversong=new Audio('gameover.mp3');
 let Audioturn=new Audio('ting.mp3')
 let turn="X";
 let gameover=false;

 //Function to Change a turn
 const changeTurn=()=>{
    return turn=="X"?"0":"X"
 }

 //Function to check for Win
 const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,-1,7,0],
        [3,4,5,-1,22,0],
        [6,7,8,-1,37,0],
        [0,3,6,-15,23,90],
        [1,4,7,0,24,90],
        [2,5,8,15,24,90],
        [0,4,8,-1,21,45],
        [2,4,6,-1,22,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText !=="")&&(!gameover)){
            document.querySelector('.Info').innerText=boxtext[e[0]].innerText + " Won the game";
            gameover=true;
            gameoversong.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="20vw";
            document.querySelector('.line').style.width="45vw"
            document.querySelector('.line').style.transform=`translate(${e[[3]]}vw,${e[[4]]}vw) rotate(${e[[5]]}deg)`
        }
    })
    
 }


 //Game logic
let box=document.getElementsByClassName('box')
Array.from(box).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText=== ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            Audioturn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('Info')[0].innerText= "Turn for "+turn;
            }

        }
    })
})

//Add onclick listener to rset button

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText='';
    })
    gameover=false;
    document.getElementsByClassName('Info')[0].innerText= "Turn for X";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.line').style.width="0vw"
})

