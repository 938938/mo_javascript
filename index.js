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

// let h=0;
// let m=0;
// let s=0;
// let k=0;
// let time="";
// const h1=document.getElementsByTagName('h1');
// let set;

// function stop(){
// 	k=1;
// 	timestop();
// }

// function reset(){
// 	clearTimeout(set);
// 	time="00 : 00 : 00";
// 	h=0;
// 	m=0;
// 	s=0;
// 	h1[0].innerHTML=time;
// }

// function start(){
// 	timer();
// 	timestop();
// 	set=setTimeout(start,1000);
// }

// function timestop(){
// 	if (k==1) clearTimeout(set);
// }

// function timer(){
// 	time="";
// 	s++;

// 	if (s>=60){
// 		s-=60;
// 		m++;
// 	}

// 	if (m>=60){
// 		m-=60;
// 		h++;
// 	}

// 	if (h==99 && m==59 && s==59){
// 		stop();
// 	}

// 	if (h<10) time+='0';
// 	time+=h;
// 	time+=' : ';

// 	if (m<10) time+='0';
// 	time+=m;
// 	time+=' : ';

// 	if (s<10) time+='0';
// 	time+=s;

// 	h1[0].innerHTML=time;	
// }

let timerId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
let  hour, min, sec;


function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
}

//시계 시작 - 재귀호출로 반복실행
function startClock() {
    printTime();
    stopClock();
    timerId = setTimeout(startClock, 1000);
}

//시계 중지
function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}

// 시계 초기화
function resetClock() {
    stopClock()
    stopwatch.innerText = "00:00:00";
    time = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}