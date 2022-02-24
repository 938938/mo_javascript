let n = 0;

let json = [
    {
        "question":"안녕?",
        "answer":"안녕!"
    },
    {
        "question":"밥",
        "answer":"좋아!"
    },
    {
        "question":"뭐해?",
        "answer":"놀고있어!"
    }
]

const app = document.getElementById("type");
const typewriter = new Typewriter(app, {
    loop: false,
});

typewriter
    .deleteAll()
    .typeString("야옹")
    .pauseFor(300)
    .deleteAll()
    .typeString("이야기를 하자!")
    .pauseFor(300)
    .deleteAll()
    .start();

let question ="";
let answer="";

let b = 0; // 다크모드 판단

let key=0;

function text_check(){
    event.preventDefault();
    const value=document.getElementById("input").value;
    const reply = document.getElementById("type");

    const bod = document.getElementById("body");
    const cat = document.getElementById("cat");
    
    for(let i = 0; i<json.length; i++){
        if(value==json[i].question){
            reply.innerText=json[i].answer;
            input.value=null;
            return;
        }
    }

    if(key==1){
        if(value=="네"){
            reply.innerText="대답을 알려줘!";
            input.value=null;
            key=2;
        } else {
            reply.innerText="야옹?";
            input.value=null;
            key=0;
        }
        return;
    }

    function push_json(){
        json.push({question: `${question}`, answer: `${answer}`});
        key = 0;
    }

    if(key==2){
        answer=value;
        push_json();
        reply.innerText="기억했어!";
        input.value=null;
        return;
    }

    if(n==0&&value=="따라하기"){
        typewriter
        .deleteAll()
        .typeString("응! 이제 따라할게!")
        .pauseFor(500)
        .deleteAll()
        .start();
        n=1;
        input.value=null;
        return;
    } else if (n==1&&value!=="그만하자") {
        typewriter
        .deleteAll()
        .typeString(" “ "+value+" ! ” ")
        .pauseFor(500)
        .deleteAll()
        .start();
        input.value=null;
        return;
    };
    if (n==1&&value=="그만하자"){
        typewriter
        .deleteAll()
        .typeString("알았어!")
        .pauseFor(500)
        .deleteAll()
        .start();
        input.value=null;
        n=0;
        return;
    };

    
    function learning(){
        reply.innerText="나한테 가르쳐줄래?(네 / 아니오)";
        question=value;
        key=1;
    }

    if (value=="어둡게"){
        if(b==0){
            reply.innerText="불을 껐어!"
            bod.style.backgroundColor = "black";
            cat.style.filter="grayscale(100%)";
            b++;
            input.value=null;
            return;
        } else {
            reply.innerText="이미 어두운걸?";
            input.value=null;
        };
    } else if (value=="밝게"){
        if(b==1){
            reply.innerText="불을 켰어!"
            bod.style.backgroundColor = "white";
            cat.style.filter="";
            b=0;
            input.value=null;
            return;
        } else {
            reply.innerText="지금도 밝아!";
            input.value=null;
        };
    } else {
        if(key==0){
            reply.innerText="모르는 말이야!";
            setTimeout(learning,2000);
            input.value=null;
        }
    };
}

document.getElementById("btn").addEventListener("click",text_check);
document.getElementById("form").addEventListener("submit",text_check);