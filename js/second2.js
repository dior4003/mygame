window.addEventListener('DOMContentLoaded' , ()=>{
    let 
menuBtn = document.querySelector('#menu'),
playBtn =document.querySelector('.play');


menuBtn.addEventListener( 'click' , ()=>{
    document.querySelector('#modaal').style.display = 'block';
    nicy();
});
// function menu(){
//    let mymenu = document.createElement('div');
//     mymenu.classList.add('proValue');
//     mymenu.innerHTML = `
//     `


//     playBtn.addEventListener('click' , ()=>{
//        document.querySelector('#modaal').style.display = 'none';
//     })
//     document.querySelector('#modaal').appendChild(mymenu);
// }

function nicy(){
    document.querySelector('#modaal').style.display = 'block'
    let win = document.createElement('div'),
    field= document.querySelector('.proValue'),
    play = document.getElementsByClassName('play');

    win.classList.add('menu')
    
    win.innerHTML = `
    <ul class="listgrs w-50">
        <li class="listgr play"><i class="bi bi-play-circle-fill"></i></li>
        <li class="listgr"><i class="bi bi-arrow-repeat"></i></li>
        <li class="listgr"><i class="bi bi-house-door-fill"></i></li>
        <li class="listgr"><i class="bi bi-gear-fill"></i></li>
        <li class="listgr"><i class="bi bi-info"></i></li>
        <li class="listgr"><i class="bi bi-power"></i></li>
    </ul>`;
    
    field.appendChild(win);

    document.querySelector('.play').addEventListener('click' , ()=>{
        document.querySelector('#modaal').style.display = 'none';
        win.remove();
      })
  }
})