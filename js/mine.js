let navBlock = document.getElementsByClassName('nav');
let submenuBlock = document.getElementsByClassName('submenu');
let arrowBlock = document.getElementsByClassName('arrow');
let navLength = navBlock.length;
let activeBlock;

for(let i = 0; i < navLength; i++){
	navBlock[i].onclick = function(){
		this.classList.toggle("nav-active");
		submenuBlock[i].classList.toggle("submenu-active");
		arrowBlock[i].classList.toggle("arrow-active");
		if(i != activeBlock && activeBlock != undefined){
			navBlock[activeBlock].classList.remove("nav-active");
			submenuBlock[activeBlock].classList.remove("submenu-active");
			arrowBlock[activeBlock].classList.remove("arrow-active");
			console.log('1');
			activeBlock = i;
		}else{
			activeBlock = i;
			console.log('2');
		}

	}
}