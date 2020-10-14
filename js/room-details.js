const LikeButtonCheckboxes = document.querySelectorAll('.like-btn-checkbox');

for (let i=0;i<LikeButtonCheckboxes.length;i++){
  console.log(LikeButtonCheckboxes[i]);
  console.log(LikeButtonCheckboxes[i].checked);
  console.log(LikeButtonCheckboxes[i].disabled);
  if(!LikeButtonCheckboxes[i].checked){
    LikeButtonCheckboxes[i].addEventListener(
      'click',
      function(evt){
      //evt.preventDefault();
      console.log('Clicked');
      let eBorder=LikeButtonCheckboxes[i].nextElementSibling;
      console.log(eBorder);
      let eCounter=eBorder.lastElementChild.firstElementChild;
      console.log(eBorder.lastElementChild);
      let nCounter=+eCounter.textContent;
      eCounter.textContent=nCounter+1;
        LikeButtonCheckboxes[i].disabled=true;
//    // Enter code to initialize the value of guests form controls
//    modalFormGuests.classList.add('modal-form_show');
//    guestsField.classList.add('text-field_active');
//    guestsField.parentNode.classList.add('dropdown-field_clicked')
      }      
    )
  }
//if(guestsField){
//guestsField.addEventListener(
//  'click',
//  function(evt){
//    evt.preventDefault();
//    // Enter code to initialize the value of guests form controls
//    modalFormGuests.classList.add('modal-form_show');
//    guestsField.classList.add('text-field_active');
//    guestsField.parentNode.classList.add('dropdown-field_clicked')
//  }
//)};
}



var Canvas = $('#dch-impressions-of-number');
var dnCanvas = document.getElementById('dch-impressions-of-number');// $('#dch-impressions-of-number');
var dnCtx = dnCanvas.getContext("2d");
//180deg, #919191 0%, #3D4975 100%
var grdDisap=dnCtx.createLinearGradient(0,0,0,120);
grdDisap.addColorStop(0,"#919191");
grdDisap.addColorStop(1,"#3D4975");
//180deg, #6FCF97 (144(90),218(DA),176(B0)) 0%, #66D2EA (154(9A),222(DE),210(D2)) 100%
var grdGood=dnCtx.createLinearGradient(0,60,0,240);
grdGood.addColorStop(0,"#6FCF97");
grdGood.addColorStop(1,"#66D2EA");
//180deg, #FFE39C  0%, #FFBA9C 100%
var grdExcel=dnCtx.createLinearGradient(0,0,0,120);
grdExcel.addColorStop(0,"#FFE39C");
grdExcel.addColorStop(1,"#FFBA9C");
//180deg, #BC9CFF 0%, #8BA4F9 100%
var grdSati=dnCtx.createLinearGradient(0,0,0,120);
grdSati.addColorStop(0,"#BC9CFF");
grdSati.addColorStop(1,"#8BA4F9");
console.log(Chart.defaults.doughnut);
var myDoughnutChart = new Chart(dnCanvas, {
    type: 'doughnut',
    data:{
      datasets:[{
        data:[0,65,65,130],
        backgroundColor:[grdDisap,grdSati,grdGood,grdExcel],
      }],
      labels: getJSPhrase("DoughnutQuality"),
    },
    options:{
      cutoutPercentage:90,
      circumference:2*Math.PI,
      legend:{
        display:false,
//        position:'right',
//        align:'end',
//        reverse:true,
//        labels:{
//          fontFamily:'Montserrat',
//          fontColor:'rgba(31, 32, 65, 0.75)',
//          fontSize:14,
//        },
//        usePointStyle:true,
      },
    },
});
