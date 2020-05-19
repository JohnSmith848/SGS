// the main form elements
const guestsField = document.querySelector('.lf__guests-field');
const arrivalField = document.querySelector('.lf__arrival-field');
const departureField = document.querySelector('.lf__departure-field');

// the modal form date elements
const modalFormDate = document.querySelector('.dimf__arr-dep');
//const modalFormDate_DT = document.querySelector('.modalFormDate_DateTable');
const mFD_Apply = document.querySelector('.dimf-ad__btn-apply');
const mFD_Clean = document.querySelector('.dimf-ad__btn-clean');
let arrivalDate;
let departureDate;

// the modal form guests elements
const modalFormGuests = document.querySelector('.qimf__guests');
const mFG_Apply = document.querySelector('.qimf-g__btn-apply');
const mFG_Clean = document.querySelector('.qimf-g__btn-clean');
let AdultsGuestsCount=0;
const mFG_Adults= document.querySelector('.qimf-g__adults');
const mFG_Adults_M= document.querySelector('.qimf-g__adults-m-btn');
const mFG_Adults_P= document.querySelector('.qimf-g__adults-p-btn');
let ChildrenGuestsCount=0;
const mFG_Children= document.querySelector('.qimf-g__children');
const mFG_Children_M= document.querySelector('.qimf-g__children-m-btn');
const mFG_Children_P= document.querySelector('.qimf-g__children-p-btn');
let BiAGuestsCount=0;
const mFG_BiA= document.querySelector('.qimf-g__babies-in-arms');
const mFG_BiA_M= document.querySelector('.qimf-g__babies-in-arms-m-btn');
const mFG_BiA_P= document.querySelector('.qimf-g__babies-in-arms-p-btn');

// the gests form events processing
guestsField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to initialize the value of guests form controls
		modalFormGuests.classList.add('modal-form_show');
		guestsField.classList.add('text-field_active');
		guestsField.parentNode.classList.add('dropdown-field_clicked')
	}
)
mFG_Apply.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of guests field
//		guestsField.placeholder=String(AdultsGuestsCount+ChildrenGuestsCount+BiAGuestsCount)
		guestsField.placeholder=getGuestsPlaceholder(AdultsGuestsCount+ChildrenGuestsCount,BiAGuestsCount);
		modalFormGuests.classList.remove('modal-form_show');
		guestsField.classList.remove('text-field_active');	
		guestsField.parentNode.classList.remove('dropdown-field_clicked')
	}
)
mFG_Clean.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();

//		guestsField.placeholder=String(AdultsGuestsCount+ChildrenGuestsCount+BiAGuestsCount)
		modalFormGuests.classList.remove('modal-form_show');		
		guestsField.classList.remove('text-field_active');	
		guestsField.parentNode.classList.remove('dropdown-field_clicked')
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
		showDateModalForm();
	}
)
departureField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		showDateModalForm();
	}
)

mFD_Apply.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of the arrival and departure fields
		console.log(arrivalDate);
		arrivalField.value=(arrivalDate)?arrivalDate:"";
		departureField.value=(departureDate)?departureDate:"";
		hideDateModalForm();
	}
)

mFD_Clean.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of the arrival and departure fields
		arrivalField.value="";
		departureField.value="";
		console.log(departureDate);
		hideDateModalForm();
	}
)

function showDateModalForm(){
	let tD = new Date();
	// Enter code to initialize the value of date form controls

	modalFormDate.classList.add('modal-form_show');
	arrivalField.classList.add('text-field_active');
	departureField.classList.add('text-field_active');
	arrivalField.parentNode.classList.add('dropdown-field_clicked')
	departureField.parentNode.classList.add('dropdown-field_clicked')

	//createHTMLMonth(modalFormDate_DT, tD.getFullYear(), tD.getMonth()); 
	//createHTMLMonth(modalFormDate_DT, 2020, 4); 
}

function hideDateModalForm(){
	let tD = new Date();
	// Enter code to initialize the value of date form controls

	modalFormDate.classList.remove('modal-form_show');
	arrivalField.classList.remove('text-field_active');
	departureField.classList.remove('text-field_active');
	arrivalField.parentNode.classList.remove('dropdown-field_clicked')
	departureField.parentNode.classList.remove('dropdown-field_clicked')

	//createHTMLMonth(modalFormDate_DT, tD.getFullYear(), tD.getMonth()); 
	//createHTMLMonth(modalFormDate_DT, 2020, 4); 
	//	guestsField.placeholder=String(AdultsGuestsCount+ChildrenGuestsCount+BiAGuestsCount)
}

// Инициализация
$('.datepickerArrDep').datepicker({
	multipleDates: 2,
	range:true,
	navTitles:{days: 'MM yyyy',},

	//prevHtml:'<svg><path d="m 210.176,361.016 v 1.968 h -12.188 l 5.578,5.625 -1.406,1.407 -8.016,-8.016 8.016,-8.016 1.406,1.407 -5.578,5.625 z"></path></svg>',
	//nextHtml:'<svg><path d="m 8.0,0.0 8.0,8.0 -8.0,8.0 -1.4,-1.4 5.6,-5.6 H -0.0 v -2.0 H 12.2 l -5.6,-5.6 z"></path></svg>',
	//nextHtml:'<svg><path d="m 8.0,0.0 8.0,8.0 -8.0,8.0 -1.4,-1.4 5.58,-5.62 H 0.07 v -1.97 H 12.26 l -5.58,-5.63 z"></path></svg>',
	//m 8.0,0.0 8.0,8.0 -8.0,8.0 -1.4,-1.4 5.6,-5.6 H -0.0 v -2.0 H 12.2 l -5.6,-5.6 z
	onSelect: DateSelected,
	minDate: new Date(),
});

function DateSelected(fd, date, inst){
	console.log("fd ="+fd);
	console.log("date ="+date);
	arrivalDate = fd.split(",")[0];
	departureDate = fd.split(",")[1];
};
// Доступ к экземпляру объекта
//$('#my-element').data('datepicker')
