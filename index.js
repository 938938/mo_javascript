// const x = 5;
// const y = 3;
// console.log("x =",x);
// console.log("y = ",y);
// console.log("x+y = ", x+y);
// console.log("x-y = ", x-y);
// console.log("x*y = ", x*y);
// console.log("x/y = ", x/y);

// function first(){
//   let x = document.getElementById("first").value;
//   console.log(x);
// }
// function second(){
//   let y = document.getElementById("second").value;
//   console.log(y);
// }

var h=0
var m=0
var s=0
var k=0;
var time="";
var h1=document.getElementsByTagName('h1');
var set;

function stop(){
	k=1;
	timestop();
}

function reset(){
	clearTimeout(set);
	time="00 : 00 : 00";
	h=0;
	m=0;
	s=0;
	h1[0].innerHTML=time;
}

function start(){
	timer();
	timestop();
	set=setTimeout(start,1000);
}

function timestop(){
	if (k==1) clearTimeout(set);
}

function timer(){
	time="";
	s++;

	if (s>=60){
		s-=60;
		m++;
	}

	if (m>=60){
		m-=60;
		h++;
	}

	if (h==99 && m==59 && s==59){
		stop();
	}

	if (h<10) time+='0';
	time+=h;
	time+=' : ';

	if (m<10) time+='0';
	time+=m;
	time+=' : ';

	if (s<10) time+='0';
	time+=s;

	h1[0].innerHTML=time;	
}