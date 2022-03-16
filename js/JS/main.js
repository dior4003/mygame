
// function realTime(){
//     let rtClock =new Date();
    
//     let year = rtClock.getFullYear();
//     let week = rtClock.getMonth();
//     let days = rtClock.getDay();
//     let hours = rtClock.getHours();
//     let minutes = rtClock.getMinutes();
//     let seconds = rtClock.getSeconds();

//     let amPm = (hours >12) ? "Am" : "PM";

//     hours = (hours >12) ? hours - 12 :hours;

//     days = ("0" + days).slice(-2);
//     week = ("0" + week).slice(-2)
//     hours = ("0" + hours).slice(-2);
//     minutes = ("0" + minutes).slice(-2);
//     seconds = ("0" + seconds).slice(-2);

//     document.querySelector('.days').innerHTML = days + "/" + week.toString() + "/" + year;;
//     document.querySelector('.dates').innerHTML= hours + " : " + minutes + " : " + seconds + "" + amPm;

//     let up = setTimeout(realTime , 500);

// }
// realTime();

let i , tabcontent , tablinks , container , containerFluit , XOGame , 
closeBtnItem1 , closeBtnItem2, XOGameTab, XOGameTabOpenBtn1 , XOGameTabOpenBtn2 ,
 XOGameTabOpenBtn3 , XOGameTabSetting , XOGameTabCloseBtn1 , XOGameTabCloseBtn2 , XOGameTabCloseBtn3 , closeBtnItem3;

    containerFluit= document.querySelector('.container-fluit')
    closeBtnItem1 = document.querySelector('.btn-close-item1')
    closeBtnItem2 = document.querySelector('.btn-close-item2')
    closeBtnItem3 = document.querySelector('.btn-close-item3')
    container = document.querySelector('.container')
    tabcontent = document.getElementsByClassName("tabcontent")
    XOGame = document.querySelector('#x-oGame')
    XOGameTabSetting = document.querySelector('.setting-item-click')
    XOGameTabOpenBtn1 = document.querySelector('#x-oGame')
    XOGameTabOpenBtn2 = document.querySelector('#zarGame')
    XOGameTabOpenBtn3 = document.querySelector('#OXGame')
    XOGameTabCloseBtn1= document.querySelector('.nav-setting-click-close1')
    XOGameTabCloseBtn2= document.querySelector('.nav-setting-click-close2')
    XOGameTabCloseBtn3= document.querySelector('.nav-setting-click-close3')
    XOGameTabOpenBtn1.addEventListener('click' , ()=>{
        XOGameTabSetting.style.display = 'block'
        document.querySelector('#x-o-game').style.display = 'none'
    })
	
    XOGameTabOpenBtn2.addEventListener('click' , ()=>{
        XOGameTabSetting.style.display = 'block'
        document.querySelector('#zarik').style.display = 'none'
    })
	
    XOGameTabOpenBtn3.addEventListener('click' , ()=>{
        XOGameTabSetting.style.display = 'block'
        document.querySelector('#o-x-game').style.display = 'none'
    })

    XOGameTabCloseBtn1.addEventListener( 'click' , ()=>{
        XOGameTabSetting.style.display = 'none'
        document.querySelector('#x-o-game').style.display = 'block'
    })
    XOGameTabCloseBtn2.addEventListener( 'click' , ()=>{
        XOGameTabSetting.style.display = 'none'
        document.querySelector('#x-o-game').style.display = 'block'
    })
    XOGameTabCloseBtn3.addEventListener( 'click' , ()=>{
        XOGameTabSetting.style.display = 'none'
        document.querySelector('#x-o-game').style.display = 'block'
    })
	

   closeBtnItem1.addEventListener('click' , ()=>{
    containerFluit.style.display = 'none'
    container.style.display = 'block'
   })

   closeBtnItem2.addEventListener('click' , ()=>{
    containerFluit.style.display = 'none'
    container.style.display = 'block'
   })

   closeBtnItem3.addEventListener('click' , ()=>{
    containerFluit.style.display = 'none'
    container.style.display = 'block'
   })


    function close(){
       
            
            containerFluit.style.display = 'none'
            container.style.display = 'block'

       
    }
    // // closeBtnItem1.addEventListener('click' , function(){
    // //     container.style.display = 'block'
    // //     containerFluit.style.display = 'none'
    // // })
    
    // closeBtnItem2.addEventListener('click' , ()=>{
    //     container.style.display = 'block'
    //     containerFluit.style.display = 'none'
    // })
    
    // closeBtnItem3.addEventListener('click' , ()=>{
    //     container.style.display = 'block'
    //     containerFluit.style.display = 'none'
    // })
    
   







function openTab(evt , tabName){
    
    for( i = 0 ; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
        container.style.display = 'none'
        containerFluit.style.display = 'flex'
    }

    tablinks = document.getElementsByClassName("tablinks");

    for(i = 0; i < tablinks.length ; i++){
        tablinks[i].className.replace("active" , "");
    }
        // tablinks[i].className.remove()
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}





    









