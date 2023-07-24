// Game constants & variables
const foodSound = new Audio("../music/food.mp3");
const gameoverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const bgSound = new Audio("../music/music.mp3");
let speed = 6;
let lastPaintTime = 0;
let snakeArr = [{ x: 14, y: 15 }];
let food = { x: 10, y: 15 };
let score = 0;
let inputDir={x:0,y:0}



// Game Functions
function main(ctime) {
  window.requestAnimationFrame(main);
  //   console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}




// if snake  collide 
// if snake bumps with itself
function iscollide(snake) {
  for (let i = 1; i < snakeArr.length; i++) {
    if(snake[i].x===snake[0].x&& snake[i].y===snake[0].y){
        return true;
    }}
// if snake bumps into wall
if(snake[0].x>=18||snake[0].x<=0||snake[0].y>=18||snake[0].y<=0){
        return true;
    }
}



function gameEngine() {
  //Part 1: Updating the snake array
  if (iscollide(snakeArr)) {
      gameoverSound.play();
      moveSound.pause();
      inputDir = { x: 0, y: 0 };
      score = 0;
    // alert("Game Over press any key to play again");
    snakeArr = [{ x: 14, y: 15 }];
    // bgSound.play();
  }


  
  //if snake eaten food ,increment score and change food location
  if (snakeArr[0].y == food.y && snakeArr[0].x == food.x) {
    foodSound.play();
    score+=1;
    scoreBox.innerHTML="Score is:"+score;
    if(score>hiscoreval){
        hiscoreval=score;
        localStorage.setItem('hiscore',JSON.stringify(hiscoreval));
        hiscoreBox.innerHTML="Hiscore:"+ hiscoreval;
  }
    snakeArr.unshift({x: snakeArr[0].x + inputDir.x,y: snakeArr[0].y + inputDir.y});
    let a = 2;
    let b = 16;
    food = {x: Math.round(a + (b-a) * Math.random()),y: Math.round(a + (b-a) * Math.random())};
  }

  // moving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = {...snakeArr[i]};
}
snakeArr[0].x += inputDir.x;
snakeArr[0].y += inputDir.y;




  //Part 2: display the snake and food
  //display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index == 0) {
        snakeElement.classList.add("head");
    }
    else{

        snakeElement.classList.add("body");
    }
    board.appendChild(snakeElement);
  });
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}



// Game Main logic

//storing high score in localstorage
let hiscore=localStorage.getItem('hiscore');
if(hiscore == null){
    hiscoreval=0;
    localStorage.setItem('hiscore',JSON.stringify(hiscoreval));    
}
else{
    hiscoreval=hiscore;
    hiscoreBox.innerHTML="Hiscore:" +hiscoreval; 
}

window.requestAnimationFrame(main);

window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; //start the game
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
        console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;
    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
    default:
      break;
  }
});
