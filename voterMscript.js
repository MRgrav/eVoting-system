
	let votersData=document.getElementById("votersData")
	let editVoter=document.getElementById("editVoter")
	let hideVoter=document.getElementById("hideVoter")
	
	let VL=document.getElementById('listVC')
	let saveVoter=document.getElementById('saveVoter')
	let username=document.getElementById('Uname')
	let dept=document.getElementById('Dname')
	let sem=document.getElementById('Sem')
	let addVoter=document.getElementById('addVoter')
	let regVoter=document.getElementById('regVoter')
	let haVoter=document.getElementById('hide-addVoter')
    let a=document.getElementById('asd')
	
	addVoter.onclick=function(){
		regVoter.style.display='block';
		votersData.style.display='none';
		VL.style.display='none';
	}
	haVoter.onclick=function(){
		regVoter.style.display='none';
		votersData.style.display='none';
		VL.style.display='block';
		VL.style.height='650px';
		editVoter.disabled=false;
	}
	editVoter.onclick=function(){
		votersData.style.display='block';
		VL.style.height='450px';
		editVoter.disabled=true;
	}
	hideVoter.onclick=function(){
		votersData.style.display='none';
		VL.style.height='650px';
		editVoter.disabled=false;
	}
	votersData.addEventListener('input',() => {
		if (username.value.length > 0 ||
			dept.value.length > 0 ||
			sem.value.length > 0
    		){
			saveVoter.removeAttribute('disabled');
		}else{
			saveVoter.setAttribute('disabled','disabled');
		}
	});
