// the header submenu elements
const servicesLinksGroup = document.querySelector('#ServicesLinksGroup');
const servicesSubmenu = document.querySelector('#ServicesSubmenu');
const documentationLinksGroup = document.querySelector('#DocumentationLinksGroup');
const documentationSubmenu = document.querySelector('#DocumentationSubmenu');

// the Services item (in the header menu) click processing
servicesLinksGroup.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to initialize the value of guests form controls
		servicesSubmenu.classList.toggle('header__list2_show');
		servicesLinksGroup.classList.toggle('header__link_dd-click');
		
	}
)

// the Documentation item (in the header menu) click processing
documentationLinksGroup.addEventListener(
	'click',
	function(evt){
		evt.preventDefault();
		// Enter code to initialize the value of guests form controls
		documentationSubmenu.classList.toggle('header__list2_show');
		documentationLinksGroup.classList.toggle('header__link_dd-click');
	}
)

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
