let fon = document.querySelector('.fon');
let icon = document.querySelectorAll('.icon');
let shadow = document.querySelector('.shadow');
let iconArr = [];
let aClass;
let bClass;
let aPos;
let bPos;
let counter = 0;
randomPosition();

fon.onclick = function(event){

  let cards = event.target;
  if(cards.classList.contains('icon')){
    audioClick();
    cards.classList.add('active');
    if(cards.classList.contains('active')){
      iconArr.push(cards);
    }
    if(iconArr.length == 2){
     shadow.classList.add('shadow_active');
     firstClass = iconArr[0].classList[1];
     secondClass = iconArr[1].classList[1];
     firstStyle = iconArr[0].style;
     secondStyle = iconArr[1].style;
    
    //console.log(firstClass, firstStyle.order + ' и '+ secondClass, secondStyle.order);
    
    if(firstClass == secondClass && firstStyle.order != secondStyle.order){
      
      setTimeout(changeOpacity, 500);
      setTimeout(answerTrue, 400);
      setTimeout(unlockWindow, 1000);
      counter++
      if (counter === 8){
         musicWin();
         setTimeout(winner, 1000)
      }
    }
    else{
    setTimeout(answerFalse, 200);
     setTimeout(deletActiveArr, 500);
    }
    }
  }
  else if(cards.classList != ('icon')){
    iconArr.length - 1;
    return 
    
  }
}
   

function changeOpacity(){
  firstStyle.opacity = "0";
  firstStyle.zIndex = "-5"
  secondStyle.opacity = "0";
  secondStyle.zIndex = "-5"
  iconArr = [];
}

function deletActiveArr(){
  iconArr[0].classList.remove('active');
  iconArr[1].classList.remove('active');
  iconArr = [];
  unlockWindow();
}

function audioClick(){
let audio = new Audio();  
audio.src = "Click.mp3";
audio.play()
}

function answerFalse(){
  let audio = new Audio();
  audio.src = "Otkaz.mp3"
  audio.play()
}

function answerTrue() {
  let audio = new Audio();
  audio.src = "Yes.mp3"
  audio.play()
}
 //удаление блока экрана
function unlockWindow(){
if(iconArr.length == 0){
  shadow.classList.remove('shadow_active');
  //console.log('удалил')
}
}

//рандомная позиция
function randomPosition() {
  icon.forEach(elem => {
    elem.style.order = (Math.floor(Math.random() * 100));
  })
}
function winner(){
  alert('You win!');
  location.reload();
}
function musicWin(){
  let audio = new Audio();
  audio.src = "Winner.mp3"
  audio.play()
}