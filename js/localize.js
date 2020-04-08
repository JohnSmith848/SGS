const rusLoc = document.querySelector('.footer-container__body_rusLocLink');
const engLoc = document.querySelector('.footer-container__body_engLocLink');
let curLoc = document.querySelector('.currentLanguageHide');// The hidden <li> element for the current language 

rusLoc.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// 1. Change the texts links
				console.log(document.body.childNodes.length);
		let a = document.querySelectorAll('a');
		for (let i=0; i < a.length; i++){
			let elem = a[i];
			console.log(elem.textContent);
			//if(document.body.childNodes[i].nodeType==1){
			//	console.log('document.body.childNodes[i].nodeType=1');
			//}
		}
		// 2. Change the localize links
		// 3. Change the localizing links
		rusLoc.classList.add('currentLanguageHide')
		curLoc.classList.remove('currentLanguageHide');
		curLoc = document.querySelector('.currentLanguageHide'); 
	}
);

engLoc.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// 3. Change the localize links
		engLoc.classList.add('currentLanguageHide')
		curLoc.classList.remove('currentLanguageHide');
		curLoc = document.querySelector('.currentLanguageHide'); 
	}
);
