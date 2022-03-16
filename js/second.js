
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
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

