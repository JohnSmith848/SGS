const searchRoomPage=true;

const $sSlider=$(".numb-prev__slider");
const $rSlider=$(".js-range-slider");
const $rsOutputTo=$(".drs__value-to");
const $rsOutputFrom=$(".drs__value-from");
let rsInstance;
let ssInstance=new Array(11);

if (typeof $sSlider === "array"){
	for (let i=0;i<$sSlider.length;i++){
		ssInstance[i]=$sSlider[i].slick({
			nextArrow: '<button type="button" class="numb-prev__slider-navbtn numb-prev__slider-navbtn_next"></button>',
			prevArrow: '<button type="button" class="numb-prev__slider-navbtn numb-prev__slider-navbtn_prev"></button>',
			lazyLoad: 'ondemand',
			dots: true,
			dotsClass: 'numb-prev__slider-nav-dots',
		})
	}
}else{
	ssInstance[0]=$sSlider.slick({
		nextArrow: '<button type="button" class="numb-prev__slider-navbtn numb-prev__slider-navbtn_next"></button>',
		prevArrow: '<button type="button" class="numb-prev__slider-navbtn numb-prev__slider-navbtn_prev"></button>',
		lazyLoad: 'ondemand',
		dots: true,
		dotsClass: 'numb-prev__slider-nav-dots',
	})
}

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

rsInstance=$rSlider.data("ionRangeSlider");

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




