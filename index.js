// const span = document.getElementsByTagName("span");
// let text =  '연습중입니다';
// let i = 0;

// function btn(){
//     if(i < text.length){
//         colorChange();
//         span[0].innerHTML +=text[i];
//         i++
//     };
// }

// function reset(){
//     span[0].innerHTML = "";
//     i = 0;
// }

// function colorChange() {
//     var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
//     span[0].style.color = colorCode;
// }

// let title = document.getElementsByClassName("title");
// // let img = document.getElementsByClassName("img");
// let date = document.getElementsByClassName("date");
// let genre = document.getElementsByClassName("genre");


// function movies(title, date, genre){
//     this.title = title,
//     // this.image = image,
//     this.date = date,
//     this.genre = genre
// }

// let movieOne = new movies("Sister Act" , "1993", "코미디/드라마");
// let movieTwo = new movies("Mamma Mia!", "2008", "코미디/뮤지컬");
// let movieThree = new movies("Aladdin", "2019", "판타지/뮤지컬");

// function one(){
//     title[0].innerHTML = movieOne.title;
//     // img.src = movieOne.image;
//     date[0].innerHTML = movieOne.date;
//     genre[0].innerHTML = movieOne.genre;
// }
// function two(){
//     title[0].innerHTML = movieTwo.title;
//     date[0].innerHTML = movieTwo.date;
//     genre[0].innerHTML = movieTwo.genre;
// }
// function three(){
//     title[0].innerHTML = movieThree.title;
//     date[0].innerHTML = movieThree.date;
//     genre[0].innerHTML = movieThree.genre;
// }

setTimeout(function onClick(){
    const name = document.getElementsByTagName("h2");
    name[0].innerText = "김OO";
    const p = document.getElementsByTagName("p");
    p[0].innerText = "010-XXXX-XXXX";
    const btn = document.getElementById("btn");
    btn.innerText = "연결중…";
},2000);

document.getElementById("btn").addEventListener("click",onClick);
