const span = document.getElementsByTagName("span");
let text =  '연습중입니다';
let i = 0;

function btn(){
    if(i < text.length){
        colorChange();
        span[0].innerHTML +=text[i];
        i++
    };
}

function reset(){
    span[0].innerHTML = "";
}

function colorChange() {
    var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    span[0].style.color = colorCode;
}