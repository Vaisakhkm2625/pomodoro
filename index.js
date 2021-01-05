var minute=1
var second=20
var flag=0
var counter;

var tune=new Audio("nokia-3330-ringtone.mp3")

function b(){
	document.getElementById("time").innerHTML = minute + ":" + second;
}

function a(){ 


if(flag==0){
	counter=setInterval(secondcounter,1000)
	flag=1;
	}
}


function secondcounter(){
	if(second==0){
		second=59;
		minute=minute-1;
	}
	else{
		second=second-1;
	}
	if(minute==0 && second==0){
		clearInterval(counter);
		tune.play();
	}
document.getElementById("time").innerHTML = minute + ":" + second;
//document.getElementById("time").innerHTML = "vaikh";
}