const guestsField = document.querySelector('.mainForm__guestsField');
const arrivalField = document.querySelector('.mainForm__arrivalField');
const departureField = document.querySelector('.mainForm__departureField');

const modalFormDate = document.querySelector('.modalFormDate');
const modalFormDate_DT = document.querySelector('.modalFormDate_DateTable');
const mFD_Apply = document.querySelector('.modalFormDate_Apply');
const mFD_Clean = document.querySelector('.modalFormDate_Clean');

const modalFormGuests = document.querySelector('.modalFormGuests');
const mFG_Apply = document.querySelector('.modalFormGuests_Apply');
const mFG_Clean = document.querySelector('.modalFormGuests_Clean');

const mFG_Adults= document.querySelector('.modalFormGuests_Adults');
const mFG_Adults_M= document.querySelector('.modalFormGuests_Adults_M-Btn');
const mFG_Adults_P= document.querySelector('.modalFormGuests_Adults_P-Btn');
let AdultsGuestsCount=0;

const mFG_Children= document.querySelector('.modalFormGuests_Children');
const mFG_Children_M= document.querySelector('.modalFormGuests_Children_M-Btn');
const mFG_Children_P= document.querySelector('.modalFormGuests_Children_P-Btn');
let ChildrenGuestsCount=0;

const mFG_BiA= document.querySelector('.modalFormGuests_BabiesInArms');
const mFG_BiA_M= document.querySelector('.modalFormGuests_BabiesInArms_M-Btn');
const mFG_BiA_P= document.querySelector('.modalFormGuests_BabiesInArms_P-Btn');
let BiAGuestsCount=0;

// the gests form events processing
guestsField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to initialize the value of guests form controls
		modalFormGuests.classList.add('modal-show');
		guestsField.classList.add('mF_textFild-active');
	}
)
mFG_Apply.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of guests field
		guestsField.placeholder=String(AdultsGuestsCount+ChildrenGuestsCount+BiAGuestsCount)
		modalFormGuests.classList.remove('modal-show');	
		guestsField.classList.remove('mF_textFild-active');	
	}
)
mFG_Clean.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		modalFormGuests.classList.remove('modal-show');		
		guestsField.classList.remove('mF_textFild-active');	
	}
)

mFG_Adults_P.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		AdultsGuestsCount=+mFG_Adults.childNodes[0].data;
		if (AdultsGuestsCount==0){
			mFG_Adults_M.classList.add("M-Btn-active");
		}
		AdultsGuestsCount++;
		mFG_Adults.childNodes[0].data=String(AdultsGuestsCount);
	}
)
mFG_Adults_M.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		AdultsGuestsCount=+mFG_Adults.childNodes[0].data;
		if (AdultsGuestsCount>0){
			AdultsGuestsCount--
			mFG_Adults.childNodes[0].data=String(AdultsGuestsCount);
			if (AdultsGuestsCount==0){
				mFG_Adults_M.classList.remove("M-Btn-active");
			}
		}
	}
)

mFG_Children_P.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		ChildrenGuestsCount=+mFG_Children.childNodes[0].data;
		if (ChildrenGuestsCount==0){
			mFG_Children_M.classList.add("M-Btn-active");
		}
		ChildrenGuestsCount++;
		mFG_Children.childNodes[0].data=String(ChildrenGuestsCount);
	}
)
mFG_Children_M.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		ChildrenGuestsCount=+mFG_Children.childNodes[0].data;
		if (ChildrenGuestsCount>0){
			ChildrenGuestsCount--
			mFG_Children.childNodes[0].data=String(ChildrenGuestsCount);
			if (ChildrenGuestsCount==0){
				mFG_Children_M.classList.remove("M-Btn-active");
			}
		}
	}
)

mFG_BiA_P.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		BiAGuestsCount=+mFG_BiA.childNodes[0].data;
		if (BiAGuestsCount==0){
			mFG_BiA_M.classList.add("M-Btn-active");
		}
		BiAGuestsCount++;
		mFG_BiA.childNodes[0].data=String(BiAGuestsCount);
	}
)
mFG_BiA_M.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		BiAGuestsCount=+mFG_BiA.childNodes[0].data;
		if (BiAGuestsCount>0){
			BiAGuestsCount--
			mFG_BiA.childNodes[0].data=String(BiAGuestsCount);
			if (BiAGuestsCount==0){
				mFG_BiA_M.classList.remove("M-Btn-active");
			}
		}
	}
)

// the dataPicker form events processing
arrivalField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		showModalFormDate();
	}
)
departureField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		showModalFormDate();
	}
)

function showModalFormDate(){
	let tD = new Date();
	// Enter code to initialize the value of date form controls

	modalFormDate.classList.add('modal-show');
	arrivalField.classList.add('mF_textField-active');
	departureField.classList.add('mF_textField-active');

	//createHTMLMonth(modalFormDate_DT, tD.getFullYear(), tD.getMonth()); 
	createHTMLMonth(modalFormDate_DT, 2020, 4); 
}

