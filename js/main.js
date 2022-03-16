window.addEventListener('DOMContentLoaded',() =>{
	const loader = document.querySelector(".loader"),
	header = document.querySelector("header");
	const navHover = document.querySelector(".navbar")
	navItem = document.querySelector('nav'),
	navHoverBottom = document.querySelector(".navbarBottom")
	navItemBottom = document.querySelector('.navBottom'),
	navHoverLeft = document.querySelector(".navbarLeft")
	navItemLeft = document.querySelector('.navLeft'),
	navHoverTop = document.querySelector(".navbarTop")
	navItemTop = document.querySelector('.navTop'),
	settingBtnClose = document.querySelector('.nav-item-click-close')
	settingItem = document.querySelector('.nav-item-click'),
	btnTop = document.querySelector('.btnTop'),
	btnRight = document.querySelector('.btnRight'),
	btnLeft = document.querySelector('.btnLeft'), 
	settingBtn = document.querySelector('.settingBtn');
	settingBtnTop = document.querySelector('.settingBtnTop');
	settingBtnBottom = document.querySelector('.settingBtnBottom');
	settingBtnLeft = document.querySelector('.settingBtnLeft');
	btnBottom = document.querySelector('.btnBottom')
	settingBtnBottom = document.querySelector('.settingBtnBottom');
	let i , tabcontent , tablinks , container , containerFluit , closeBtnItem;


	

	setTimeout( () =>{
		loader.style.opacity = "0"
		setTimeout(() =>{
			loader.style.display = 'none'
			header.style.display = 'block';
		

			

			settingBtn.addEventListener('click', ()=>{
				settingItem.style.display = 'block'
			})
			
			settingBtnClose.addEventListener( 'click' , ()=>{
				settingItem.style.display = 'none'
			})

			settingBtnBottom.addEventListener('click', ()=>{
				settingItem.style.display = 'block'
			})
			settingBtnTop.addEventListener('click', ()=>{
				settingItem.style.display = 'block'
			})
			settingBtnLeft.addEventListener('click', ()=>{
				settingItem.style.display = 'block'
			})
			
			

			


			function openTab(evt , tabName){
				let i , tabcontent , tablinks;
			
				tabcontent = document.getElementsByClassName("tabcontent");
				for( i = 0 ; i < tabcontent.length; i++){
					tabcontent[i].style.display = "none";
				}
			
				tablinks = document.getElementsByClassName("tablinks");
			
				for(i = 0; i < tablinks.length ; i++){
					tablinks[i].className.replace("active" , "");
				}
					// tablinks[i].className.remove()
				document.getElementById(tabName).style.display = "block";
				evt.currentTarget.className += "active";
			}
			
			


			let products = document.querySelectorAll(".card"),
			buttons = document.querySelectorAll(".btn-game"),
			submit = document.querySelector('.submit'),
			height = document.querySelector('.container'),
			field = document.querySelector('.clone-item') ;
			// fieldTop = document.querySelector('.clone-itemTop'),
			// fieldBottom= document.querySelector('.clone-itemBottom'),
			// fieldLeft = document.querySelector('.clone-itemLeft');
			
		
	
			buttons.forEach(function(item , i){
		
		
				item.addEventListener('click' , function(){
					let cloneItem = products[i].cloneNode(true),
					img = cloneItem.querySelector('img');
					let btn = cloneItem.querySelector('span');
					btn.remove()
				
			
					cloneItem.addEventListener('click' , () =>{
				 
					products[i].style.display = 'inline-block'
					cloneItem.style.display = 'none'
					})
		 	   		
					products[i].style.display = 'none'
					field.appendChild(cloneItem)
					// fieldTop.appendChild(cloneItem)
					// fieldBottom.appendChild(cloneItem)
					// fieldLeft.appendChild(cloneItem)
			
				})
		

			})

		
			



		}, 1000)
	} , 5000)

	
	let products = document.querySelectorAll(".card"),
	navhovergame = document.querySelectorAll(".navhovergame"),
	submit = document.querySelector('.submit'),
	height = document.querySelector('.container'),
	field = document.querySelectorAll('.clone-item');
			
		
	
	navhovergame.forEach(function(item , i){
		
		
		item.addEventListener('click' , function(){
  			let cloneItem = products[i].cloneNode(true),
			img = cloneItem.querySelector('img');
			let btn = cloneItem.querySelector('span');
			btn.remove()
				
			
			
		 	cloneItem.addEventListener('click' , () =>{
			 
				products[i].style.display = 'inline-block'
				cloneItem.style.display = 'none'
			})
			
			products[i].style.display = 'none'
			field[i].appendChild(cloneItem)
			
		})
		

	})

	let btnAboutXOGame = document.querySelector('.btnAboutx-oGame'),
	btnAboutZarik = document.querySelector('.btnAboutZarik') ,
	btnAboutClose = document.querySelector('.click-closeAbout'),
	btnAboutOXGame = document.querySelector('.btnAbouto-xGame'),
	aboutList = document.querySelector('.about');
	
	btnAboutOXGame.addEventListener( 'click' , ()=>{
	    aboutList.style.display = 'flex'
	})
	
	btnAboutXOGame.addEventListener( 'click' , ()=>{
	    aboutList.style.display = 'flex'
	})
	
	btnAboutZarik.addEventListener( 'click' , ()=>{
	    aboutList.style.display = 'flex'
	})
	btnAboutClose.addEventListener( 'click' , ()=>{
	    aboutList.style.display = 'none'
	})




	navHover.addEventListener('mouseover' ,() =>{
		navItem.style.width = '100px'
		navHover.style.padding= '0'
	  //   navItem.style.display = 'block'
	});
	navHover.addEventListener('mouseout' , ()=>{
		navItem.style.width = '0'
	});

	navHoverBottom.addEventListener('mouseover' ,() =>{
		navItemBottom.style.height = '100px'
		navHoverBottom.style.padding= '0'
	  //   navItem.style.display = 'block'
	});
	navHoverBottom.addEventListener('mouseout' , ()=>{
		navItemBottom.style.height = '0'
	});

	btnBottom.addEventListener( 'click' , ()=>{
		navHoverBottom.style.display = 'flex'
		navHover.style.display = 'none'
		navHoverLeft.style.display = 'none'
		navHoverTop.style.display = 'none'
		
		
	})

	navHoverLeft.addEventListener('mouseover' ,() =>{
		navItemLeft.style.width = '100px'
		navHoverLeft.style.padding= '0'
	  //   navItem.style.display = 'block'
	});
	navHoverLeft.addEventListener('mouseout' , ()=>{
		navItemLeft.style.width = '0'
	});

	btnLeft.addEventListener( 'click' , ()=>{
		navHoverLeft.style.display = 'flex'
		navHover.style.display = 'none'
		navHoverBottom.style.display = 'none'
		// navHover.style.display = 'none'
		// navHoverLeft.style.display = 'none'
		navHoverTop.style.display = 'none'
	})

	navHoverTop.addEventListener('mouseover' ,() =>{
		navItemTop.style.height = '80px'
		navHoverTop.style.padding= '0'
	  //   navItem.style.display = 'block'
	});
	navHoverTop.addEventListener('mouseout' , ()=>{
		navItemTop.style.height = '0'
	});

	btnTop.addEventListener( 'click' , ()=>{
		navHoverTop.style.display = 'flex'
		navHover.style.display = 'none'
		navHoverBottom.style.display = 'none'
		// navHover.style.display = 'none'
		navHoverLeft.style.display = 'none'
		// navHoverTop.style.display = 'none'
	})

	btnRight.addEventListener( 'click' , ()=>{
		// navHoverTop.style.display = 'flex'
		// navHover.style.display = 'none'
		navHoverBottom.style.display = 'none'
		navHover.style.display = 'flex'
		navHoverLeft.style.display = 'none'
		navHoverTop.style.display = 'none'
	})


	
    containerFluit= document.querySelector('.container-fluit')
    closeBtnItem = document.querySelectorAll('.btn-close-item')
    container = document.querySelector('.container')
    tabcontent = document.getElementsByClassName("tabcontent");
	
   
       
    
    closeBtnItem.forEach(function(item , i){
		
		
        item.addEventListener('click' , bbk() ) 
           
        function bbk(){
            // alert("salom")
        }

    })



let playGame = document.querySelector('#x-oGamePlay');

playGame.addEventListener('click' , ()=>{
	window.open('page/firstpage.html')
})



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







});


	  





