let n = 0;

const app = document.getElementById("type");
const typewriter = new Typewriter(app, {
    loop: false,
});

typewriter
    .deleteAll()
    .typeString("야옹")
    .pauseFor(300)
    .deleteAll()
    .typeString("이제부터 대답할거에냥")
    .pauseFor(300)
    .deleteAll()
    .start();

function output(){
    event.preventDefault();
    let value = document.getElementById("input").value;
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    const say = document.getElementById("type");
    const bod = document.getElementById("body");
    const cat = document.getElementById("cat");
    const ti = document.getElementById("ti");
    if(value=="안녕?"){
        typewriter
        .deleteAll()
        .typeString("안녕!")
        .pauseFor(500)
        .deleteAll()
        .start();
        // say.innerText = "안녕!";
    } else if(value=="배경색"){
        bod.style.backgroundColor = "azure";
    } else if(value=="원래대로"){
        bod.style.backgroundColor = "white";
    } else if (value=="크게"){
        say.style.fontSize="20px";
    } else if (value=="작게"){
        say.style.fontSize="10px";
    } else if (value=="기본"){
        say.style.fontSize="15px";
    } else if (value==""){
        alert("메세지를 입력해주세요!");
    } else if (value=="처음"){
        // say.innerText ="야옹";
        typewriter
        .deleteAll()
        .typeString("야옹")
        .pauseFor(500)
        .deleteAll()
        .start();
    } else if (value=="어둡게"){
        bod.style.backgroundColor = "black";
        say.style.color="white";
        cat.style.filter="grayscale(100%)";
        btn.style.backgroundColor="white";
        ti.style.backgroundColor="white";
    } else if (value=="밝게"){
        bod.style.backgroundColor = "white";
        say.style.color="black";
        cat.style.filter="";
    } else if (value=="밥"){
        say.innerText="좋아!";
    } else {
        console.log(value);
    };
    if(n==0&&value=="따라하기"){
        typewriter
        .deleteAll()
        .typeString("응! 이제 따라할게!")
        .pauseFor(500)
        .deleteAll()
        .start();
        // say.innerText="응! 이제 따라할게!"
        n=1;
    } else if (n==1&&value!=="그만하자") {
        typewriter
        .deleteAll()
        .typeString(" “ "+value+" ! ” ")
        .pauseFor(500)
        .deleteAll()
        .start();
        // say.innerText=" “ "+value+" ! ” ";
    };
    if (n==1&&value=="그만하자"){
        typewriter
        .deleteAll()
        .typeString("알았어!")
        .pauseFor(500)
        .deleteAll()
        .start();
        // say.innerText="알았어!";
        n=0;
    };

    input.value=null;
}


document.getElementById("btn").addEventListener("click",output);
document.getElementById("form").addEventListener("submit",output);