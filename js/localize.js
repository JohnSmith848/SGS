const rusLoc = document.querySelector('.loc-link-rus');
const engLoc = document.querySelector('.loc-link-eng');
let curLoc = document.querySelector('.loc-link_hidden-lang');// The hidden <li> element for the current language 

rusLoc.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// 1. Change the localizing links
		// This block is first, becase the 2.3 block need updated setting curLoc variable
		rusLoc.classList.add('loc-link_hidden-lang');
		curLoc.classList.remove('loc-link_hidden-lang');
		curLoc = document.querySelector('.loc-link_hidden-lang'); 
		// 2. Change the texts links
		let tE = document.querySelectorAll('*');
		for (let i=0; i < tE.length; i++){
			// 2.1 in the text nodes
			if (tE[i].hasAttribute("data-loc")){
				if (tE[i].getAttribute("data-loc").startsWith("Text")){
					tE[i].innerHTML=RussianDictionary[tE[i].getAttribute("data-loc")];
				}else{
					tE[i].textContent=RussianDictionary[tE[i].getAttribute("data-loc")];
				}
			}
			// 2.2 in the gradient background button
			if (tE[i].hasAttribute("data-loc-gbb")){
				tE[i].textContent=GBBRussianDictionary[tE[i].getAttribute("data-loc-gbb")][0];
				tE[i].parentNode.parentNode.style["width"]=GBBRussianDictionary[tE[i].getAttribute("data-loc-gbb")][1];
				}
			// 2.3 in the placeholder attributes
			if (tE[i].hasAttribute("data-loc-ph")){
				if(tE[i].getAttribute("data-loc-ph")=="HowManyGuests"){
					console.log("AdultsGuestsCount, ChildrenGuestsCount, BiAGuestsCount = "+AdultsGuestsCount+" "+ChildrenGuestsCount+" "+BiAGuestsCount);
					tE[i].placeholder=getGuestsPlaceholder(AdultsGuestsCount+ChildrenGuestsCount,BiAGuestsCount);
				}else{
					tE[i].placeholder=PlaceholderRussianDictionary[tE[i].getAttribute("data-loc-ph")];					
				}
			}
		}
	}
);

engLoc.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// 1. Change the localize links
		// This block is first, becase the 2.3 block need updated setting curLoc variable
		engLoc.classList.add('loc-link_hidden-lang');
		curLoc.classList.remove('loc-link_hidden-lang');
		curLoc = document.querySelector('.loc-link_hidden-lang'); 
		// 2. Change the text 
		let tE = document.querySelectorAll('*');
		for (let i=0; i < tE.length; i++){
			// 2.1 in the text nodes
			if (tE[i].hasAttribute("data-loc")){
				if (tE[i].getAttribute("data-loc").startsWith("Text")){
					tE[i].innerHTML=EnglishDictionary[tE[i].getAttribute("data-loc")];
				}else{
					tE[i].textContent=EnglishDictionary[tE[i].getAttribute("data-loc")];
				}
			}
			// 2.2 in the background images
			if (tE[i].hasAttribute("data-loc-gbb")){
				tE[i].textContent=GBBEnglishDictionary[tE[i].getAttribute("data-loc-gbb")][0];
				tE[i].parentNode.parentNode.style.width=GBBEnglishDictionary[tE[i].getAttribute("data-loc-gbb")][1];
			}
			// 2.3 in the placeholder attributes
			if (tE[i].hasAttribute("data-loc-ph")){
				if(tE[i].getAttribute("data-loc-ph")=="HowManyGuests"){
					tE[i].placeholder=getGuestsPlaceholder(AdultsGuestsCount+ChildrenGuestsCount,BiAGuestsCount);
				}else{
					tE[i].placeholder=PlaceholderEnglishDictionary[tE[i].getAttribute("data-loc-ph")];					
				}
			}
		}
	}
);

function englishNumber(number, numberForms, numberOffset){
	if(number==1){
		return numberForms[numberOffset];
	}else{
		return numberForms[numberOffset+1];		
	}
}
function russianNumber(number, numberForms, numberOffset){
	if(number%10==1){
		return numberForms[numberOffset];
	}else if((number%10==2||number%10==3||number%10==4)&&(number<12||number>14)){
		return numberForms[numberOffset+1];
	}else{
		return numberForms[numberOffset+2];		
	}
}

function getGuestsPlaceholder(guests, babiesInArms){
	let ph="";
	if(curLoc.classList.contains("loc-link-eng")){
		if(guests==0){return PlaceholderEnglishDictionary["HowManyGuests"][0]};
		ph=guests+" "+englishNumber(guests,PlaceholderEnglishDictionary["HowManyGuests"],1);
		if(babiesInArms==0){return ph}
		return ph+", "+babiesInArms+" "+englishNumber(babiesInArms,PlaceholderEnglishDictionary["HowManyGuests"],3)
	}
	if(curLoc.classList.contains("loc-link-rus")){
		if(guests==0){return PlaceholderRussianDictionary["HowManyGuests"][0]};
		ph=guests+" "+russianNumber(guests,PlaceholderRussianDictionary["HowManyGuests"],1);
		if(babiesInArms==0){return ph}
		return ph+", "+babiesInArms+" "+russianNumber(babiesInArms,PlaceholderRussianDictionary["HowManyGuests"],4)
	}
}
