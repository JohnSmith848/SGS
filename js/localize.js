const rusLoc = document.querySelector('.footer-container__body_rusLocLink');
const engLoc = document.querySelector('.footer-container__body_engLocLink');
let curLoc = document.querySelector('.currentLanguageHide');// The hidden <li> element for the current language 

rusLoc.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// 1. Change the texts links
		let tE = document.querySelectorAll('*');
		for (let i=0; i < tE.length; i++){
			if (tE[i].hasAttribute("data-loc")){
				tE[i].textContent=RussianDictionary[tE[i].getAttribute("data-loc")];
			}
			if (tE[i].hasAttribute("data-locImg")){
				for (let x in tE[i].parentNode.style){
					console.log(x);
				}
				tE[i].parentNode.classList.add(ImageRussianDictionary[tE[i].getAttribute("data-locImg")]);
				tE[i].parentNode.classList.add(ImageRussianDictionary[tE[i].getAttribute("data-locImg")]+":hover");
				//tE[i].parentNode.style="background-image: url(./img/"+ImageRussianDictionary[tE[i].getAttribute("data-locImg")]+".png";
				//tE[i].style=ImageRussianDictionary[tE[i].getAttribute("data-locImg")]+"_hover.png";
				console.log(tE[i].textContent);
			}
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
