
let modal = document.querySelector('#modaal'),
wins = document.createElement('div'),
field= document.querySelector('.proValue'),
scoreBoard={
  player:0,
  computer:0,
  draw:0
};
function nicya(){
  modal.style.display = 'block'
  let wins = document.createElement('div'),
  field= document.querySelector('.proValue');
  
  wins.classList.add('winner col');
  wins.innerHTML = `
  <h3 class='player fs-1'>Player:${scoreBoard.player}</h1>
  <h3 class='computer fs-1'>Computer:${scoreBoard.computer}</h1>
  <h3 class='draw fs-1'>Draw:${scoreBoard.draw}</h1>
  <p class='result fs-1'>I'ts A Draw</p>
  <i class='bi bi-emoji-neutral-fill'></i>
  <a href='../index.html' class='btn btn-danger'>End Game</a>`;
  field.appendChild(wins);
  modal.addEventListener('click' , ()=>{
    document.querySelector('#modaal').style.display = 'none'
    wins.remove();
  })
}

function winpl(){
  modal.style.display = 'block'
  let wins = document.createElement('div'),
  field= document.querySelector('.proValue');
  
  wins.classList.add('winner');
  wins.innerHTML = `
  <h1 class='player'>Player:${scoreBoard.player}</h1>
  <h1 class='computer'>Computer:${scoreBoard.computer}</h1>
  <h1 class='draw'>Draw:${scoreBoard.draw}</h1>
  <p class='result'>Player Win</p>
  <i class='bi bi-emoji-smile-fill'></i>
  <a href='../index.html' class='btn btn-danger'>End Game</a>
  `;
  field.appendChild(wins);
  modal.addEventListener('click' , ()=>{
    document.querySelector('#modaal').style.display = 'none'
    wins.remove();
  })
  
}

function wincomp(){
  modal.style.display = 'block'
  let wins = document.createElement('div'),
  field= document.querySelector('.proValue');
  
  wins.classList.add('winner');
  wins.innerHTML = `
  <h1 class='player'>Player:${scoreBoard.player}</h1>
  <h1 class='computer'>Computer:${scoreBoard.computer}</h1>
  <h1 class='draw'>Draw:${scoreBoard.draw}</h1>
  <p class='result'>Computer Win</p>
  <i class='bi bi-emoji-angry-fill'></i>
  <a href='../index.html' class='btn btn-danger'>End Game</a>`;
  
  field.appendChild(wins);
  modal.addEventListener('click' , ()=>{
    document.querySelector('#modaal').style.display = 'none'
    wins.remove();
  })
}



















let cell = new Array(9);
for (i=0; i<9; i++) cell[i] = 0;

x = new Image(64,64);
x.src = "../imeg/kres.png";
o = new Image(64,64);
o.src = "../imeg/nol.png";
e = new Image(64,64);
e.src = "../imeg/bgtable.png";

function Cross(value) {
  if (value == 0) document.pole0.src = x.src;
  if (value == 1) document.pole1.src = x.src;
  if (value == 2) document.pole2.src = x.src;
  if (value == 3) document.pole3.src = x.src;
  if (value == 4) document.pole4.src = x.src;
  if (value == 5) document.pole5.src = x.src;
  if (value == 6) document.pole6.src = x.src;
  if (value == 7) document.pole7.src = x.src;
  if (value == 8) document.pole8.src = x.src;
}

function Zero(value) {
  if (value == 0) document.pole0.src = o.src;
  if (value == 1) document.pole1.src = o.src;
  if (value == 2) document.pole2.src = o.src;
  if (value == 3) document.pole3.src = o.src;
  if (value == 4) document.pole4.src = o.src;
  if (value == 5) document.pole5.src = o.src;
  if (value == 6) document.pole6.src = o.src;
  if (value == 7) document.pole7.src = o.src;
  if (value == 8) document.pole8.src = o.src;
}

function CheckVictory() {
  btnClickMp3();
  if (cell[0] == cell[1] && cell[1] == cell[2] && cell[2] > 0) return true; 
  if (cell[3] == cell[4] && cell[4] == cell[5] && cell[5] > 0) return true;
  if (cell[6] == cell[7] && cell[7] == cell[8] && cell[8] > 0) return true;
  if (cell[6] == cell[3] && cell[3] == cell[0] && cell[0] > 0) return true;
  if (cell[7] == cell[4] && cell[4] == cell[1] && cell[1] > 0) return true;
  if (cell[8] == cell[5] && cell[5] == cell[2] && cell[2] > 0) return true;
  if (cell[6] == cell[4] && cell[4] == cell[2] && cell[2] > 0) return true;
  if (cell[0] == cell[4] && cell[4] == cell[8] && cell[8] > 0) return true;
}

function CompTurn() {
  for (i=0; i<9; i++) if (cell[i] == 0) PutHere = i;
  for (i=0; i<3; i++) {
  setTimeout(()=>{
    btnClickMp3();
  }, 500)  
  if (cell[0] == cell[1] && cell[2] == 0 && cell[0] == i) PutHere = 2;
  if (cell[0] == cell[2] && cell[1] == 0 && cell[0] == i) PutHere = 1;
  if (cell[1] == cell[2] && cell[0] == 0 && cell[2] == i) PutHere = 0;
  if (cell[3] == cell[4] && cell[5] == 0 && cell[3] == i) PutHere = 5;
  if (cell[3] == cell[5] && cell[4] == 0 && cell[3] == i) PutHere = 4;
  if (cell[4] == cell[5] && cell[3] == 0 && cell[5] == i) PutHere = 3;
  if (cell[6] == cell[7] && cell[8] == 0 && cell[6] == i) PutHere = 8;
  if (cell[6] == cell[8] && cell[7] == 0 && cell[6] == i) PutHere = 7;
  if (cell[7] == cell[8] && cell[6] == 0 && cell[8] == i) PutHere = 6;

  if (cell[6] == cell[3] && cell[0] == 0 && cell[6] == i) PutHere = 0;
  if (cell[6] == cell[0] && cell[3] == 0 && cell[6] == i) PutHere = 3;
  if (cell[3] == cell[0] && cell[6] == 0 && cell[3] == i) PutHere = 6;
  if (cell[7] == cell[4] && cell[1] == 0 && cell[7] == i) PutHere = 1;
  if (cell[7] == cell[1] && cell[4] == 0 && cell[7] == i) PutHere = 4;
  if (cell[4] == cell[1] && cell[7] == 0 && cell[4] == i) PutHere = 7;
  if (cell[8] == cell[5] && cell[2] == 0 && cell[8] == i) PutHere = 2;
  if (cell[8] == cell[2] && cell[5] == 0 && cell[8] == i) PutHere = 5;
  if (cell[5] == cell[2] && cell[8] == 0 && cell[5] == i) PutHere = 8;

  if (cell[6] == cell[4] && cell[2] == 0 && cell[6] == i) PutHere = 2;
  if (cell[6] == cell[2] && cell[4] == 0 && cell[6] == i) PutHere = 4;
  if (cell[4] == cell[2] && cell[6] == 0 && cell[4] == i) PutHere = 6;
  if (cell[0] == cell[4] && cell[8] == 0 && cell[0] == i) PutHere = 8;
  if (cell[0] == cell[8] && cell[4] == 0 && cell[0] == i) PutHere = 4;
  if (cell[4] == cell[8] && cell[0] == 0 && cell[4] == i) PutHere = 0;
  }
  Zero(PutHere);
  cell[PutHere] = 2;
  if (CheckVictory() == true) {
    scoreBoard.computer++;
    winsComp();
    wincomp();
    
	  GameOver();
  }
}

function GameOver() {
  for (i=0; i<9; i++) cell[i] = 0;
  document.pole0.src = e.src;
  document.pole1.src = e.src;
  document.pole2.src = e.src;
  document.pole3.src = e.src;
  document.pole4.src = e.src;
  document.pole5.src = e.src;
  document.pole6.src = e.src;
  document.pole7.src = e.src;
  document.pole8.src = e.src;
  
}

function CheckNobody() {
  no = false;
  for (i=0; i<9; i++) if (cell[i] == 0) no = true;
  if (no == false) {
    scoreBoard.draw++;
    winsDraw();
	  nicya();
	  GameOver();
  }
}

function Place(value) {
  if (cell[value] == 0) {
	Cross(value);
	cell[value] = 1;
	if (CheckVictory() == true) {
    scoreBoard.player++;
    winsPl();
	  winpl();
	  GameOver();
	}
	else {
	  CheckNobody();
	  CompTurn();
	  CheckNobody();
	}
  }
}
let audio;



// initAudio($('#playlist li:first-child'));

function initAudio(element){
	 audio = new Audio('../media/win.mp3');
}
function loseMp3(element){
  audio = new Audio('../media/lose.mp3');
}
function drawMp3(element){
  audio = new Audio('../media/draw.wav');
}
function clickMp3(element){
  audio = new Audio('../media/click.mp3');
}


//Playlist song click
function winsPl(){
	initAudio($(this));
	audio.play();
	
};
function winsComp(){
	loseMp3($(this));
	audio.play();
	
};
function winsDraw(){
	drawMp3($(this));
	audio.play();
	
};
function btnClickMp3(){
	clickMp3($(this));
	audio.play();
	
};






let menuBtn = document.querySelector('#menu'),
menuList = document.querySelector('#menuList'),
playGameBtn = document.querySelector('#playGame'),
resetGameBtn = document.querySelector('#resetGame'),
settingGameBtn = document.querySelector('#settingGame'),
infoGameBtn = document.querySelector('#info'),
settingList = document.querySelector('#settingList'),
chek = document.querySelector('#nazadSetting'),
modals = document.querySelector('#modals'),
pole = document.querySelector('.item'),
slide = document.querySelector('#sliderwov'),
nazad = document.querySelector('#nazad');

menuBtn.addEventListener('click' , ()=>{
  modals.style.display = 'block';
})
playGameBtn.addEventListener('click' , ()=>{
  modals.style.display = 'none';
})
resetGameBtn.addEventListener('click' ,()=>{
  modals.style.display = 'none';
  GameOver();
})
settingGameBtn.addEventListener('click' , ()=>{
  menuList.style.display = 'none';
  settingList.style.display = 'block';
  let ams = pole.appendChild(chek);
  chek.addEventListener('click', ()=>{
    menuList.style.display = 'block';
    settingList.style.display= 'none';
    ams.remove();
  })
})


infoGameBtn.addEventListener('click' , ()=>{
  menuList.style.display = 'none';
  slide.style.display = 'block';

})
nazad.addEventListener('click' , ()=>{
  menuList.style.display = 'block';
  slide.style.display = 'none';
})



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}

