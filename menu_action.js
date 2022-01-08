    let menu=document.getElementById('menuShow')
	let menu2=document.getElementById('menuHide')
	let menuOption1=document.getElementById('menuOpt1')
	let menuOption2=document.getElementById('menuOpt2')
	let menuOption3=document.getElementById('menuOpt3')
	let menuOption4=document.getElementById('menuOpt4')

    menu.onclick=function(){
		menuOption1.style.display='block';
		menuOption2.style.display='block';
		menuOption3.style.display='block';
		menuOption4.style.display='block';
		menu.style.display='none';
		menu2.style.display='block';
	}
	menu2.onclick=function(){
		menuOption1.style.display='none';
		menuOption2.style.display='none';
		menuOption3.style.display='none';
		menuOption4.style.display='none';
		menu.style.display='block';
		menu2.style.display='none';
	}