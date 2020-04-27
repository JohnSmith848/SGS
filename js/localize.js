const rusLoc = document.querySelector('.loc-link-rus');
const engLoc = document.querySelector('.loc-link-eng');
let curLoc = document.querySelector('.loc-link_hidden-lang');// The hidden <li> element for the current language 

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
			// 1.2 in the gradient background button
			if (tE[i].hasAttribute("data-loc-gbb")){
				tE[i].textContent=GBBRussianDictionary[tE[i].getAttribute("data-loc-gbb")][0];
				tE[i].parentNode.parentNode.style["width"]=GBBRussianDictionary[tE[i].getAttribute("data-loc-gbb")][1];
				}
//			// 1.3 in the placeholder attributes
//			if (tE[i].hasAttribute("data-loc-ph")){
//				for (let x in tE[i].parentNode.style){
//				}
//				tE[i].placeholder=PlaceholderRussianDictionary[tE[i].getAttribute("data-loc-ph")].Default;
//			}
		}
		// 2. Change the localizing links
		rusLoc.classList.add('loc-link_hidden-lang')
		curLoc.classList.remove('loc-link_hidden-lang');
		curLoc = document.querySelector('.loc-link_hidden-lang'); 
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
			if (tE[i].hasAttribute("data-loc-gbb")){
				tE[i].textContent=GBBEnglishDictionary[tE[i].getAttribute("data-loc-gbb")][0];
				tE[i].parentNode.parentNode.style.width=GBBEnglishDictionary[tE[i].getAttribute("data-loc-gbb")][1];
			}
//			// 1.3 in the placeholder attributes
//			if (tE[i].hasAttribute("data-loc-ph")){
//				for (let x in tE[i].parentNode.style){
//				}
//				tE[i].placeholder=PlaceholderEnglishDictionary[tE[i].getAttribute("data-loc-ph")].Default;
//			}
		}
		// 2. Change the localize links
		engLoc.classList.add('loc-link_hidden-lang')
		curLoc.classList.remove('loc-link_hidden-lang');
		curLoc = document.querySelector('.loc-link_hidden-lang'); 
	}
);

