function output(){
    event.preventDefault();
    let value = document.getElementById("input").value;
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    const say = document.getElementById("catsay");
    const bod = document.getElementById("body");
    const cat = document.getElementById("cat");
    const ti = document.getElementById("ti");
    if(value=="안녕?"){
        say.innerText = "안녕!";
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
        say.innerText ="야옹";
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
    } else {
        say.innerText="따라하기 : "+value;
        console.log(value);
    };
    input.value=null;
}

document.getElementById("btn").addEventListener("click",output);
document.getElementById("form").addEventListener("submit",output);