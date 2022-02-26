let keyword = [
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

let question =""; //질문 임시 저장 함수
let answer=""; // 대답 임시 저장 함수

let n = 0; // 따라하기 판단
let b = 0; // 다크모드 판단
let key=0; // 말가르쳐주기 판단

function text_check(){
  event.preventDefault();
  const value=document.getElementById("input").value; //사용자 입력값
  const reply = document.getElementById("type");

  const bod = document.getElementById("body");
  const cat = document.getElementById("cat");
  
  //length = 배열 길이 확인 함수, json 데이터를 모두 확인.
  for(let i = 0; i<json.length; i++){
    if(value==json[i].question){
      reply.innerText=json[i].answer;
      input.value=null;
      return;
    }
  };

  
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

  //말 배우기 함수.
  function learning(){
    reply.innerText="나한테 가르쳐줄래?(응 / 싫어)";
    question=value; //사용자 질문 미리 저장
    key=1; //조건문으로 진입하는 키 값 변경
    return;
  };

  if(key==1){
    if(value=="응"){
      reply.innerText="대답을 알려줘!";
      input.value=null;
      key=2;
      return;
    } else {
      reply.innerText="야옹?";
      input.value=null;
      key=0;
      return;
    }
  };

  function push_json(){
    json.push({question: `${question}`, answer: `${answer}`});
    //json이라는 데이터에 값을 추가하는 함수
    reply.innerText="기억했어!";
    return;
  };

  //answer값에 사용자 입력 저장
  if(key==2){
    answer=value;
    push_json();
    key = 0;
    input.value=null;
    return;
  };

  if (value=="어둡게"){
    if(b==0){
      reply.innerText="불을 껐어!"
      bod.style.backgroundColor = "black";
      cat.style.filter="grayscale(100%)";
      b++;
      input.value=null;
    } else {
      reply.innerText="이미 어두운걸?";
      input.value=null;
      return;
    };
  } else if (value=="밝게"){
    if(b==1){
      reply.innerText="불을 켰어!"
      bod.style.backgroundColor = "white";
      cat.style.filter="";
      b=0;
      input.value=null;
    } else {
      reply.innerText="지금도 밝아!";
      input.value=null;
      return;
    };
  } else {
    if(key==0){
      reply.innerText="모르는 말이야!";
      setTimeout(learning,2000);
      input.value=null;
      return;
    }
  };

}

document.getElementById("btn").addEventListener("click",text_check);
document.getElementById("form").addEventListener("submit",text_check);



// var talking = 
// [
//     {
//         "question" : "안녕",
//         "answer" : "안녕! 반가워!"
//     },
//     {
//         "question" : "이름",
//         "answer" : "내 이름은 냥냥이"
//     },
//     {
//         "question" : "취미",
//         "answer" : "프로그래밍 하기!"
//     }
// ]

// var question = ""; //사용자의 질문을 임시 저장할 변수
// var answer = ""; //사용자의 대답을 임시 저장할 변수


// var key = 0; // 키 값을 이용하여 말을 배우는 상황인지 아닌지 판별



// // 따라하기 체크 여부
// var copycat;


// // talking에 값 추가하는 함수
// function push_json(){
//     talking.push({"question": `${question}`, "answer": `${answer}`}); //json이라는 데이터에 값을 추가하는 push함수
// }


// function clickevent(){
//     var talk = document.getElementById("talk"); //말주머니
//     var value = document.getElementById("text").value;  //사용자 입력값


//     if(key == 1){
//         if(value == "네"){
//             talk.innerHTML = "대답을 입력해주세요!";
//             key = 2;
//         }
//         else{
//             talk.innerHTML = "냐~!";
//             key = 0;
//         }
//         return;
//     }


//     if(key == 2){
//         talk.innerHTML = "말을 배웠다 냥!";
//         answer = value; //전역변수 answer값에 사용자의 입력을 저장
//         key = 0;  //키 값 0으로 초기화
//         push_json(); //json 데이터에 값을 추가하는 함수 (추후 생성)
//     }


//     if(copycat == 0 || copycat == 1){
//         //그만하기 여부확인(0: '그만' 기재 / -1: '그만' 기재 X)
//         if(value.indexOf('그만') == 0){
//             copycat = -1;
//         }else if(value.indexOf('그만') == -1){
//             copycat = 1;
//         }
//     }



//     if(copycat != 1 && copycat != -1){
//         //따라하기 여부확인(0: '따라' 기재 / -1: '따라' 기재 X)
//         if(value.indexOf('따라') == 0){
//             copycat = value.indexOf('따라');
//         }
//     }



//     if(copycat == undefined){ // 따라하기 아닐 때
//         if(value == ""){
//             alert("명령을 입력하세요.")
//         }else if(value == "불 꺼줘"){
//             document.getElementById("back").style.backgroundColor="black";
//             talk.style.color="white";
//             talk.innerText = "어두워졌어요!"
//         }else if(value == "불 켜줘"){
//             document.getElementById("back").style.backgroundColor="white";
//             talk.style.color="black";
//             talk.innerText = "밝아졌어요!"
//         }else{
//             //talking에 저장된 대답 말하기
//             for(let i = 0; i < talking.length; i++){
//                 if(value == talking[i].question){ 
//                     talk.innerHTML = talking[i].answer; 
//                     return; 
//                 }
//             }
//             if(answer == ""){
//                 talk.innerText = "말을 가르쳐 주실래요?(네 or 아니요)";
//                 question = value; //사용자의 질문을 미리 저장
//                 key = 1; //조건문으로 진입하게 만들 키 값 변경
//             }
//         }
//     }else if(copycat == 0){ // 따라하기 시작
//         talk.innerText = "냥냥냥!(따라하기 시작)"
//     }else if(copycat == 1){
//         talk.innerText = value+" 냥!";
//     }else if(copycat == -1){ // 따라하기 종료
//         talk.innerText = "냐냐냥!(따라하기 종료)"
//         copycat = undefined;
//     }
// }