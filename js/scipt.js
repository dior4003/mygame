// window.addEventListener('DOMContentLoaded' , ()=>{
    let playerBtnValue = document.querySelectorAll('.playerValueBtn'),
    computerBtnValue = document.querySelectorAll('.computerValueBtn'),
    playerScore = document.querySelector('#playerScore'),
    restart = document.querySelector('#reset'),
    plaBtnover = document.querySelector('#playerover'),
    compBtnOver = document.querySelector('#computerover'),
    moduled = document.querySelector('.resetAlert'),
    resetBtnOk = document.querySelector('.resetOk'),
    resetBtnCancel = document.querySelector('.resetCancel'),
    playerElem = document.querySelector('.playertank'),
    

    scoreBoard = {
        player: 0,
        computer: 0
    };


let playerArray =[],
computerArray = [ 0, 1 , 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24],
kkarr=[];


function includee(){
    
    let randoms = Math.floor(Math.random()*(computerArray.length   ) ) ;

    return computerArray[randoms];
}



function elemResult(){
   for (let index = 0; index <25; index++) {
      if(playerArray[0]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
      if(playerArray[1]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
      if(playerArray[2]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
      if(playerArray[3]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
      if(playerArray[4]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
       if(playerArray[5]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
      if(playerArray[6]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
      if(playerArray[7]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
      if(playerArray[8]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
      if(playerArray[9]===index){
        playerBtnValue[index].innerHTML = `<i class="bi bi-cloudy-fill"></i>`;
      }
     
    }
}

function computerIntelect() {

    let randomis = includee();
    for(var i = 0; i < computerArray.length; i++) {
        if(computerArray[i] === randomis){
           return computerArray.splice(i ,1)
        }   
        // computerIntelect1();
    }
    console.log(computerArray)
       
}



function computerTanlawi(){
    let plBtn = document.querySelectorAll('.playerValueBtn'),
    compBtnOver = document.querySelector('#computerover'),
    computerScore = document.querySelector('#computerScore'),
    son = computerIntelect();

    
    console.log(son)
    if(playerArray[0] == son){
        compBtnOver.classList.add(`computerover${son}`);
        vwwfSound();
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else if(playerArray[1] == son){
        compBtnOver.classList.add(`computerover${son}`);
        vwwfSound();
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else if(playerArray[2] == son){
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);;
    }else if(playerArray[3] == son){
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else if(playerArray[4] == son){
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else if(playerArray[5] == son){
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else if(playerArray[6] == son){
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else if(playerArray[7] == son){
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else if(playerArray[8] == son){
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else if(playerArray[9] == son){
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            scoreBoard.computer++;
            computerScore.innerHTML =`${scoreBoard.computer}`;
            plBtn[son].style.background = 'blue'
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }else{
        vwwfSound();
        compBtnOver.classList.add(`computerover${son}`);
        setTimeout(()=>{
            bdwSound();
            plBtn[son].style.background = 'red';
            plBtn[son].disabled = true;
            compBtnOver.classList.remove(`computerover${son}`);
        }, 1000);
    }
}

let computerWindow = document.querySelector('.computer1'),
playerWindow = document.querySelector('.player');
computerWindow.style.display = 'none';

// playerni 10 qiymatini kiritish
function playerPushValue(value){
    let plllArr = playerArray.includes(value),
    item = document.querySelectorAll('.playerValueBtn');
    
    if(playerArray.length<10 && plllArr === false){
        btnClickMp3();
        item[value].disabled =true
        item[value].style.background = 'coral';
        playerArray.push(value);

    }else{
        modall.style.display = 'block';
        computerWindow.style.display = 'block';
        for (let index = 0; index < 25; index++) {
            item[index].style.background = 'none';
            
        }
        
    }
    
}


// komputer tasodifiy 10 ta son
function compArr(range , outputCount){
        

    let arr = [];
    for (let i = 0; i <= range; i++) {
      arr.push(i)
    }

    let results = [];

    for (let i = 0; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      results.push(arr[random]);
      arr[random] = arr[range - i];
    }

    
    return results;
    

}
    

// playerni funksiyasi tayor
function computerniBos(item){
    let arr10 = compArr(24 , 9),
    btn = document.querySelectorAll('.computerValueBtn');

    if(arr10[0]== item){
       
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[1]== item ){
       
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[2]== item ){
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[3]== item ){
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[4]== item ){
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[5]== item ){
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[6]== item ){
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[7]== item ){
        
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[8]== item ){
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else if(arr10[9]== item ){
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'blue';
            scoreBoard.player++;
            playerScore.innerHTML = `${scoreBoard.player}`;
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
        
    }else{
        vwwfSound();
        plaBtnover.classList.add(`playerover${item}`);
        setTimeout(()=>{
            bdwSound();
            btn[item].disabled = true;
            btn[item].style.background = 'red';
            plaBtnover.classList.remove(`playerover${item}`);
        } , 1000)
    }

    
}


function go(item){
    let resultGame = document.querySelector('#result');
    if(scoreBoard.player < 10 && scoreBoard.computer < 10){
        computerniBos(item);
        setTimeout(()=>{
            computerTanlawi();
        },3100);
    }else{
        if(scoreBoard.computer >9){
            winsComp();
            moduled.style.display = 'block';
            resultGame.style.display = 'block';
            resultGame.innerHTML = `
            <h1>Computer Win</h1>
            <i class='bi bi-emoji-frown-fill'></i>
            <span class='btn btn-success' onclick='GameOver()' id='restatGame'><i class="bi bi-arrow-right"></i>Restart Game</span>
            <span class ='btn btn-danger' onclick='GameEnd()' id='endGame'>End Game</span>

            `
            moduled.appendChild(resultGame);

        }else if(scoreBoard.player >9){
            winsPl();
            moduled.style.display = 'block';
            resultGame.style.display = 'block';
            resultGame.innerHTML = `
            <h1>You Win</h1>
            <i class='bi bi-emoji-smile-fill'></i>
            <span class='btn btn-success' onclick='GameOver()' id='restatGame'><i class="bi bi-arrow-right"></i>Restart Game</span>
            <span class ='btn btn-danger' onclick='GameEnd()' id='endGame'>End Game</span>

            `
            moduled.appendChild(resultGame);

        }else{
            moduled.style.display = 'block';
            resultGame.style.display = 'block';
            resultGame.innerHTML = `
            <h1>It's A Draw</h1>
            <i class='bi bi-emoji-smile-fill'></i>
            <span class='btn btn-success' onclick='GameOver()' id='restatGame'><i class="bi bi-arrow-right"></i>Restart Game</span>
            <span class ='btn btn-danger' onclick='GameEnd()' id='endGame'>End Game</span>

            `
            moduled.appendChild(resultGame);
        }
        
    }
}
function GameEnd(){
    let resultGame = document.querySelector('#result');
    moduled.style.display = 'none';
    resultGame.style.display = 'none';
}
function GameOver(){
    let plBtn = document.querySelectorAll('.playerValueBtn'),
    btn = document.querySelectorAll('.computerValueBtn');
    let resultGame = document.querySelector('#result');
    for (let index = 0; index < 25; index++) {
        plBtn[index].style.background = 'none';
        btn[index].style.background = 'none';
        plBtn[index].disabled = false;
        btn[index].disabled = false;
        playerArray.length= 0;
        scoreBoard.player= 0;
        scoreBoard.computer = 0;
        playerScore.innerHTML = `${scoreBoard.player}`;
        computerScore.innerHTML = `${scoreBoard.computer}`;
        moduled.style.display = 'none';
        resultGame.style.display = 'none';
        // go(item);

        
    }
}


let audio;

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
function bdwMp3(element){
    audio = new Audio('../media/bdw.mp3');
}
function vwwfMp3(element){
    audio = new Audio('../media/vwwf.mp3');
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
function bdwSound(){
	bdwMp3($(this));
	audio.play();
	
};
function vwwfSound(){
	vwwfMp3($(this));
	audio.play();
	
};

//Volume control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});








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
nazad = document.querySelector('#nazad'),
modall =document.querySelector('#modaal'), 
start = document.querySelector('#go');


playerElem.addEventListener('mouseover' , ()=>{
    elemResult();
})
playerElem.addEventListener('mouseout' , ()=>{
    for (let index = 0; index < 25; index++) {
        playerBtnValue[index].innerHTML = '';
        
    }
})

start.addEventListener('click' , ()=>{
   
    modall.style.display = 'none';
})

menuBtn.addEventListener('click' , ()=>{
  modals.style.display = 'block';
})
playGameBtn.addEventListener('click' , ()=>{
  modals.style.display = 'none';
})
resetGameBtn.addEventListener('click' ,()=>{
  modals.style.display = 'none';
  // game end
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
  };
  slides[slideIndex-1].style.display = "block";  
}







    

    





