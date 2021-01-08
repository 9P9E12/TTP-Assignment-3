/*          DOM ASSIGNMENT 1
//Question 1
const q1 = document.getElementById('container');
console.log(q1);
//Question 2
const q2 = document.querySelector("#container");
console.log(q2);
//Question 3
const q3 = document.getElementsByClassName("second");
console.log(q3);
//Question 4
const q4 = document.getElementById('container').lastElementChild.querySelector('.second');
console.log(q4);
//Question 5
const q5 = document.getElementById('container');
let helloText = document.createTextNode("Hello!");
q5.appendChild(helloText);
//Question 6
document.querySelector(".footer").classList.add("main");
const q6 = document.querySelector(".footer").classList;
console.log(q6);
//Question 7
document.querySelector(".footer").classList.remove("main");
const q7 = document.querySelector(".footer").classList;
console.log(q7);
//Question 8-10
const q8 = document.createElement("li");
let q9 = q8;
q9.innerHTML = "4";
const q10 = q9;
document.querySelector("#container").firstElementChild.appendChild(q10);
//Question 12 (there was no 11)
const q12 = document.querySelector('#container').lastElementChild.getElementsByTagName("li");
for (let i = 0; i < q12.length; i++) {
    q12[i].style.backgroundColor = "green";
}
console.log(q12);
//Question 13
let q13 = document.querySelector(".footer");
q13.remove();

*//*--------DOM ASSIGNMENT 2--------*/

//Question 1
/*let b1 = document.querySelector(".button-1");
b1.addEventListener("click",function(event){
    const preExist = document.querySelector(".btn-1-msg");
    if(!preExist){
        const b1Msg = document.createElement("SPAN");
        b1Msg.className = "btn-1-msg";
        const msgText = document.createTextNode("I'm right ");
        b1Msg.appendChild(msgText);
        b1.appendChild(b1Msg);
    }
    const b2Msg = document.querySelector(".btn-2-msg");
    if(b2Msg){
        b2Msg.remove();
    }
});
console.log(b1);
let b2 = document.querySelector(".button-2");
b2.addEventListener("click",function(event){
    const preExist = document.querySelector(".btn-2-msg");
    if(!preExist){
        const b2Msg = document.createElement("SPAN");
        b2Msg.className = "btn-2-msg";
        const msgText = document.createTextNode("No, I'm right! ");
        b2Msg.appendChild(msgText);
        b2.appendChild(b2Msg);
    }
    const b1Msg = document.querySelector(".btn-1-msg");
    if(b1Msg){
        b1Msg.remove();
    }
});*/

//Question 2
/*let b1 = document.querySelector(".jumbotron");
b1.addEventListener("mouseover",function(){
    alert("Hey, I told you not to hover over me!");
});
console.log(b1);*/

//Question 4
/*let b1 = document.getElementById("form-login");
b1.addEventListener("submit",function(event){
    let pword = new FormData(b1).get('password');
    let y = document.getElementById("h1-elem");
    if(pword == "12345678"){
        y.innerText = "Test passed";
    } else {
        alert("Incorrect Password");
    }
    
});*/

//Bonus
let b1 = document.getElementById("form-calculate");
b1.addEventListener("submit",function(event){
    let radius = new FormData(b1).get('radius');
    let result = (4/3) * Math.PI * Math.pow(radius,3);
    alert(result);
});