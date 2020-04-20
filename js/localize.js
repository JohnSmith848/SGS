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
			// 1.1 in the text nodes
			if (tE[i].hasAttribute("data-loc")){
				if (tE[i].getAttribute("data-loc").startsWith("Text")){
					tE[i].innerHTML=RussianDictionary[tE[i].getAttribute("data-loc")];
				}else{
					tE[i].textContent=RussianDictionary[tE[i].getAttribute("data-loc")];
				}
			}
			// 1.2 in the background images
			if (tE[i].hasAttribute("data-loc-img")){
				tE[i].parentNode.classList.add(ImageRussianDictionary[tE[i].getAttribute("data-loc-img")]);
				tE[i].parentNode.classList.add(ImageRussianDictionary[tE[i].getAttribute("data-loc-img")]+":hover");
			}
			// 1.3 in the placeholder attributes
			if (tE[i].hasAttribute("data-loc-ph")){
				for (let x in tE[i].parentNode.style){
				}
				tE[i].placeholder=PlaceholderRussianDictionary[tE[i].getAttribute("data-loc-ph")].Default;
			}
		}
		// 2. Change the localizing links
		rusLoc.classList.add('currentLanguageHide')
		curLoc.classList.remove('currentLanguageHide');
		curLoc = document.querySelector('.currentLanguageHide'); 
	}
);

engLoc.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// 1. Change the text 
		let tE = document.querySelectorAll('*');
		for (let i=0; i < tE.length; i++){
			// 1.1 in the text nodes
			if (tE[i].hasAttribute("data-loc")){
				if (tE[i].getAttribute("data-loc").startsWith("Text")){
					tE[i].innerHTML=EnglishDictionary[tE[i].getAttribute("data-loc")];
				}else{
					tE[i].textContent=EnglishDictionary[tE[i].getAttribute("data-loc")];
				}
			}
			// 1.2 in the background images
			if (tE[i].hasAttribute("data-loc-img")){
				tE[i].parentNode.classList.remove(ImageEnglishDictionary[tE[i].getAttribute("data-loc-img")]);
				tE[i].parentNode.classList.remove(ImageEnglishDictionary[tE[i].getAttribute("data-loc-img")]+":hover");
			}
			// 1.3 in the placeholder attributes
			if (tE[i].hasAttribute("data-loc-ph")){
				for (let x in tE[i].parentNode.style){
				}
				tE[i].placeholder=PlaceholderEnglishDictionary[tE[i].getAttribute("data-loc-ph")].Default;
			}
		}
		// 2. Change the localize links
		engLoc.classList.add('currentLanguageHide')
		curLoc.classList.remove('currentLanguageHide');
		curLoc = document.querySelector('.currentLanguageHide'); 
	}
);

