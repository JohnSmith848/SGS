const $rSlider=$(".js-range-slider");
const $rsOutputTo=$(".drs__value-to");
const $rsOutputFrom=$(".drs__value-from");
let rsIntance;

$rSlider.ionRangeSlider({
 	skin:"big",
	type: "double",
	min: 0,
	max: 16000,
	from: 5000,
	to: 10000,
	hide_min_max:true,
	hide_from_to:true,
	onStart: updateText,
	onChange: updateText,
	onFinish: updateText,
});

rsIntance=$rSlider.data("ionRangeSlider");

function updateText(data){
	$rsOutputFrom.prop("innerHTML",numberPrettifier(data.from));
	$rsOutputTo.prop("innerHTML",numberPrettifier(data.to));
}

function numberPrettifier(number){
	const nS=number.toString();
	let s="";
	let i=nS.length
	while(i>=0){
		if(i-3<=0) return nS.slice(0,i)+s;		
		s+=" "+nS.slice(i-3,i);
		i=i-3
	}
}