// the main form elements
const guestsField = document.querySelector('.mainForm__guestsField');
const arrivalField = document.querySelector('.mainForm__arrivalField');
const departureField = document.querySelector('.mainForm__departureField');

// the modal form date elements
const modalFormDate = document.querySelector('.modal-form-date');
const modalFormDate_DT = document.querySelector('.modalFormDate_DateTable');
const mFD_Apply = document.querySelector('.modalFormDate_Apply');
const mFD_Clean = document.querySelector('.modalFormDate_Clean');

// the modal form guests elements
const modalFormGuests = document.querySelector('.modal-form-guests');
const mFG_Apply = document.querySelector('.mfg__btn-apply');
const mFG_Clean = document.querySelector('.mfg__btn-clean');
let AdultsGuestsCount=0;
const mFG_Adults= document.querySelector('.mfg__adults');
const mFG_Adults_M= document.querySelector('.mfg__adults-m-btn');
const mFG_Adults_P= document.querySelector('.mfg__adults-p-btn');
let ChildrenGuestsCount=0;
const mFG_Children= document.querySelector('.mfg__children');
const mFG_Children_M= document.querySelector('.mfg__children-m-btn');
const mFG_Children_P= document.querySelector('.mfg__children-p-btn');
let BiAGuestsCount=0;
const mFG_BiA= document.querySelector('.mfg__babies-in-arms');
const mFG_BiA_M= document.querySelector('.mfg__babies-in-arms-m-btn');
const mFG_BiA_P= document.querySelector('.mfg__babies-in-arms-p-btn');

// the gests form events processing
guestsField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to initialize the value of guests form controls
		modalFormGuests.classList.add('modal-form_show');
		guestsField.classList.add('text-field_active');
	}
)
mFG_Apply.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of guests field
		guestsField.placeholder=String(AdultsGuestsCount+ChildrenGuestsCount+BiAGuestsCount)
		modalFormGuests.classList.remove('modal-form_show');	
		guestsField.classList.remove('text-field_active');	
	}
)
mFG_Clean.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		modalFormGuests.classList.remove('modal-form_show');		
		guestsField.classList.remove('text-field_active');	
	}
)

mFG_Adults_P.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		AdultsGuestsCount=+mFG_Adults.childNodes[0].data;
		if (AdultsGuestsCount==0){
			mFG_Adults_M.classList.add("m-btn-active");
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
				mFG_Adults_M.classList.remove("m-btn-active");
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
			mFG_Children_M.classList.add("m-btn-active");
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
				mFG_Children_M.classList.remove("m-btn-active");
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
			mFG_BiA_M.classList.add("m-btn-active");
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
				mFG_BiA_M.classList.remove("m-btn-active");
			}
		}
	}
)

// the datePicker form events processing
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

	modalFormDate.classList.add('modal-form_show');
	arrivalField.classList.add('text-field_active');
	departureField.classList.add('text-field_active');

	//createHTMLMonth(modalFormDate_DT, tD.getFullYear(), tD.getMonth()); 
	createHTMLMonth(modalFormDate_DT, 2020, 4); 
}

