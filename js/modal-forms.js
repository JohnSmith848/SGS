//// the header submenu elements
//const servicesLinksGroup = document.querySelector('.header__link-services');
//const servicesSubmenu = document.querySelector('.header__list2-services');
//const documentationLinksGroup = document.querySelector('.header__link-documentation');
//const documentationSubmenu = document.querySelector('.header__list2-documentation');

// the main forms elements for call modal forms
const guestsField = document.querySelector('.lf__guests-text-field')||document.querySelector('.sf__guests-text-field');
const numberImprovementsField = document.querySelector('.sf__number-improvments-text-field');
const arrivalField = document.querySelector('.lf__arrival-text-field');
const departureField = document.querySelector('.lf__departure-text-field');
const beingDatesField = document.querySelector('.sf__being-dates-text-field');

// the modal form guests elements
const modalFormGuests=document.querySelector('.qimf_guests');
const mFG_Apply=document.querySelector('.qimf-g__btn-apply');
const mFG_Clean=document.querySelector('.qimf-g__btn-clean');
let AdultsGuestsCount=0;
const mFG_Adults=document.querySelector('.qimf-g__adults');
const mFG_Adults_M=document.querySelector('.qimf-g__adults-m-btn');
const mFG_Adults_P=document.querySelector('.qimf-g__adults-p-btn');
let ChildrenGuestsCount=0;
const mFG_Children=document.querySelector('.qimf-g__children');
const mFG_Children_M=document.querySelector('.qimf-g__children-m-btn');
const mFG_Children_P=document.querySelector('.qimf-g__children-p-btn');
let BiAGuestsCount=0;
const mFG_BiA=document.querySelector('.qimf-g__babies-in-arms');
const mFG_BiA_M=document.querySelector('.qimf-g__babies-in-arms-m-btn');
const mFG_BiA_P=document.querySelector('.qimf-g__babies-in-arms-p-btn');

// the modal form guests elements
const modalFormNumberImprovements=document.querySelector('.qimf_number-improvements');
const mFNI_Apply=document.querySelector('.qimf-ni__btn-apply');
const mFNI_Clean=document.querySelector('.qimf-ni__btn-clean');
let BedroomsNICount=0;
const mFNI_Bedrooms=document.querySelector('.qimf-ni__bedrooms');
const mFNI_Bedrooms_M=document.querySelector('.qimf-ni__bedrooms-m-btn');
const mFNI_Bedrooms_P=document.querySelector('.qimf-ni__bedrooms-p-btn');
let BedsNICount=0;
const mFNI_Beds=document.querySelector('.qimf-ni__beds');
const mFNI_Beds_M=document.querySelector('.qimf-ni__beds-m-btn');
const mFNI_Beds_P=document.querySelector('.qimf-ni__beds-p-btn');
let BathroomsNICount=0;
const mFNI_Bathrooms=document.querySelector('.qimf-ni__bathrooms');
const mFNI_Bathrooms_M=document.querySelector('.qimf-ni__bathrooms-m-btn');
const mFNI_Bathrooms_P=document.querySelector('.qimf-ni__bathrooms-p-btn');

// the modal form date elements
const modalFormDate = document.querySelector('.dimf_arr-dep');
//const modalFormDate_DT = document.querySelector('.modalFormDate_DateTable');
const mFD_Apply = document.querySelector('.dimf-ad__btn-apply');
const mFD_Clean = document.querySelector('.dimf-ad__btn-clean');
let arrivalDate;
let departureDate;

//console.log(navigator.userAgent);
//// the Services item (in the header menu) click processing
//servicesLinksGroup.addEventListener(
//	'click',
//	function(evt){
//		evt.preventDefault();
//		// Enter code to initialize the value of guests form controls
//		servicesSubmenu.classList.toggle('header__list2_show');
//		servicesLinksGroup.classList.toggle('header__link_dd-click');
//		
//	}
//)

//// the Documentation item (in the header menu) click processing
//documentationLinksGroup.addEventListener(
//	'click',
//	function(evt){
//		evt.preventDefault();
//		// Enter code to initialize the value of guests form controls
//		documentationSubmenu.classList.toggle('header__list2_show');
//		documentationLinksGroup.classList.toggle('header__link_dd-click');
//	}
//)


// the gests form events processing
if(guestsField){
guestsField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to initialize the value of guests form controls
		modalFormGuests.classList.add('modal-form_show');
		guestsField.classList.add('text-field_active');
		guestsField.parentNode.classList.add('dropdown-field_clicked')
	}
)};
if(mFG_Apply){
mFG_Apply.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of guests field
		guestsField.value=getGuestsValue(AdultsGuestsCount+ChildrenGuestsCount,BiAGuestsCount);
		modalFormGuests.classList.remove('modal-form_show');
		guestsField.classList.remove('text-field_active');	
		guestsField.parentNode.classList.remove('dropdown-field_clicked')
	}
)};
if(mFG_Clean){
mFG_Clean.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		modalFormGuests.classList.remove('modal-form_show');		
		guestsField.classList.remove('text-field_active');	
		guestsField.parentNode.classList.remove('dropdown-field_clicked')
	}
)};

if(mFG_Adults_P){
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
)};
if(mFG_Adults_M){
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
)};

if(mFG_Children_P){
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
)};
if(mFG_Children_M){
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
)};

if(mFG_BiA_P){
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
)};
if(mFG_BiA_M){
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
)};

// the number improvements form events processing
if(numberImprovementsField){
numberImprovementsField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to initialize the value of number improvements form controls
		modalFormNumberImprovements.classList.add('modal-form_show');
		numberImprovementsField.classList.add('text-field_active');
		numberImprovementsField.parentNode.classList.add('dropdown-field_clicked')
	}
)};
if(mFNI_Apply){
mFNI_Apply.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of number improvements field
		numberImprovementsField.value=getNumberImprovementsValue(BedroomsNICount,BedsNICount,BathroomsNICount);
		modalFormNumberImprovements.classList.remove('modal-form_show');
		numberImprovementsField.classList.remove('text-field_active');	
		numberImprovementsField.parentNode.classList.remove('dropdown-field_clicked')
	}
)};
if(mFNI_Clean){
mFNI_Clean.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		modalFormNumberImprovements.classList.remove('modal-form_show');		
		numberImprovementsField.classList.remove('text-field_active');	
		numberImprovementsField.parentNode.classList.remove('dropdown-field_clicked')
	}
)};

if(mFNI_Bedrooms_P){
mFNI_Bedrooms_P.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		BedroomsNICount=+mFNI_Bedrooms.childNodes[0].data;
		if (BedroomsNICount==0){
			mFNI_Bedrooms_M.classList.add("m-btn-active");
		}
		BedroomsNICount++;
		mFNI_Bedrooms.childNodes[0].data=String(BedroomsNICount);
	}
)};
if(mFNI_Bedrooms_M){
mFNI_Bedrooms_M.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		BedroomsNICount=+mFNI_Bedrooms.childNodes[0].data;
		if (BedroomsNICount>0){
			BedroomsNICount--
			mFNI_Bedrooms.childNodes[0].data=String(BedroomsNICount);
			if (BedroomsNICount==0){
				mFNI_Bedrooms_M.classList.remove("m-btn-active");
			}
		}
	}
)};

if(mFNI_Beds_P){
mFNI_Beds_P.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		BedsNICount=+mFNI_Beds.childNodes[0].data;
		if (BedsNICount==0){
			mFNI_Beds_M.classList.add("m-btn-active");
		}
		BedsNICount++;
		mFNI_Beds.childNodes[0].data=String(BedsNICount);
	}
)};
if(mFNI_Beds_M){
mFNI_Beds_M.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		BedsNICount=+mFNI_Beds.childNodes[0].data;
		if (BedsNICount>0){
			BedsNICount--
			mFNI_Beds.childNodes[0].data=String(BedsNICount);
			if (BedsNICount==0){
				mFNI_Beds.classList.remove("m-btn-active");
			}
		}
	}
)};

if(mFNI_Bathrooms_P){
mFNI_Bathrooms_P.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		BathroomsNICount=+mFNI_Bathrooms.childNodes[0].data;
		if (BathroomsNICount==0){
			mFNI_Bathrooms_M.classList.add("m-btn-active");
		}
		BathroomsNICount++;
		mFNI_Bathrooms.childNodes[0].data=String(BathroomsNICount);
	}
)};
if(mFNI_Bathrooms_M){
mFNI_Bathrooms_M.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		BathroomsNICount=+mFNI_Bathrooms.childNodes[0].data;
		if (BathroomsNICount>0){
			BathroomsNICount--
			mFNI_Bathrooms.childNodes[0].data=String(BathroomsNICount);
			if (BathroomsNICount==0){
				mFNI_Bathrooms_M.classList.remove("m-btn-active");
			}
		}
	}
)};

// the datePicker form events processing
if(arrivalField){
arrivalField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		showDateModalForm();
	}
)};
if(departureField){
departureField.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		showDateModalForm();
	}
)};
if(beingDatesField){
	beingDatesField.addEventListener(
		'click',
		function(evt){
			evt.preventDefault();
			showDateModalForm();
		}
	)	
};

if(mFD_Apply){
mFD_Apply.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of the arrival and departure fields
		if(beingDatesField){
			beingDatesField.value= (arrivalDate?arrivalDate:"")+" - "+(departureDate?departureDate:"");
		}else{
			arrivalField.value=(arrivalDate)?arrivalDate:"";
			departureField.value=(departureDate)?departureDate:"";
		}
		hideDateModalForm();
	}
)};

if(mFD_Clean){
mFD_Clean.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to change the value of the arrival and departure fields
		if(beingDatesField){
			beingDatesField.value=" - ";
		}else{
			arrivalField.value="";
			departureField.value="";
		}
		hideDateModalForm();
	}
)};

function showDateModalForm(){
	let tD = new Date();
	// Enter code to initialize the value of date form controls

	modalFormDate.classList.add('modal-form_show');
	if(beingDatesField){
		beingDatesField.classList.add('text-field_active');
		beingDatesField.parentNode.classList.add('dropdown-field_clicked')
	}else{
		arrivalField.classList.add('text-field_active');
		departureField.classList.add('text-field_active');
		arrivalField.parentNode.classList.add('dropdown-field_clicked')
		departureField.parentNode.classList.add('dropdown-field_clicked')
	}
	//createHTMLMonth(modalFormDate_DT, tD.getFullYear(), tD.getMonth()); 
	//createHTMLMonth(modalFormDate_DT, 2020, 4); 
}

function hideDateModalForm(){
	let tD = new Date();
	// Enter code to initialize the value of date form controls

	modalFormDate.classList.remove('modal-form_show');
	if(beingDatesField){
		beingDatesField.classList.remove('text-field_active');
		beingDatesField.parentNode.classList.remove('dropdown-field_clicked')
	}else{
		arrivalField.classList.remove('text-field_active');
		departureField.classList.remove('text-field_active');
		arrivalField.parentNode.classList.remove('dropdown-field_clicked')
		departureField.parentNode.classList.remove('dropdown-field_clicked')
	}
	//createHTMLMonth(modalFormDate_DT, tD.getFullYear(), tD.getMonth()); 
	//createHTMLMonth(modalFormDate_DT, 2020, 4); 
	//	guestsField.placeholder=String(AdultsGuestsCount+ChildrenGuestsCount+BiAGuestsCount)
}

// Инициализация
$('.datepicker_arr-dep').datepicker({
	multipleDates: 2,
	range:true,
	navTitles:{days: 'MM yyyy',},

	prevHtml:'<svg><path d="m 16,8 -8,8 8,8 1.4,-1.4 -5.6,-5.6 h 12.2 v -2 H 11.8 l 5.6,-5.6 z"></path></svg>',
	nextHtml:'<svg><path d="m 16,8 8,8 -8,8 -1.4,-1.4 5.6,-5.6 H 8 v -2 H 20.2 l -5.6,-5.6 z"></path></svg>',
	onSelect: DateSelected,
//	minDate: new Date(), //To prevent the choising date before today. It's disabled as that hides the previous arrow in the navigation.
	startDate: new Date("2019-08-08"), //To start from the day that indexed in the exemple.
});

function DateSelected(fd, date, inst){
	arrivalDate = fd.split(",")[0];
	departureDate = fd.split(",")[1];
};

function createHTMLMonth(elem, year, month){
	let m='';//result HTML string
	let r=1, i=1, n=1;//the days counts: rest last month, current month, and next month
	let tmDll=new Date(year, month, 0);
	console.log('tmDll '+tmDll);
	//tmDll.getDate();
	let tmDc=new Date(year, month, 1);
	console.log('tmDc.getDay() '+tmDc.getDay());
	(tmDc.getDay())? r=tmDll.getDate()+2-tmDc.getDay():r=tmDll.getDate()-5;
	console.log(r);
	tmDc=new Date(year, month+1, 0);	
	console.log('tmDc '+tmDc);
	let w=5;//the weeks count: usually 5
	if (tmDc.getDate()==28&&tmDc.getDay()==1){
		w=4;	// but for no leap-year February with First day is Monday, the weeks count is 4
	} 
	if (tmDc.getDate()>=35+r-tmDll.getDate()){
		w=6; // Some big month need to 6 weeks
	}
	console.log('w '+w);
	m+='<table border="1">';
	//m+=`<thead><tr><th>Mon</th><th>Tue</th>
	//				<th>Wed</th><th>Thu</th>
	//				<th>Fri</th><th>Sat</th><th>Sun</th></tr></thead>`
	m+=`<thead><tr><th>Mn</th><th>Tu</th>
					<th>Wd</th><th>Th</th>
					<th>Fr</th><th>St</th>
					<th>Sn</th></tr></thead>`;
	m+='<tbody>';
	for (let x=0;x<w;x++){
		m+='<tr>';
		for (let y=1;y<8;y++){
//(x==1)?(r<=tmDll.getDate())?m+='<td>'+r++ +'</td>':m+='<td>'+i++ +'</td>':(i<=tmDc.getDate())?m+='<td>'+i++ +'</td>':m+='<td>'+n++ +'</td>';
			if(x==0){
				if(r<=tmDll.getDate()){
					m+='<td>'+r+'</td>';
					r++;
				}else{
					m+='<td>'+i+'</td>';
					i++;					
				}
			}else{
				if(i<=tmDc.getDate()){
					m+='<td>'+i+'</td>';
					i++;
				}else{
					m+='<td>'+n+'</td>';
					n++;
				}
			}
		}
		m+='</tr>';
	}
	m+='</tbody>';
	m+='</table>';
	console.log(m);
	elem.innerHTML=m;
}
