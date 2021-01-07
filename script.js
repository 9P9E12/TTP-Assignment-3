const q1 = document.getElementById('container');
console.log(q1);

const q2 = document.querySelector("#container");
console.log(q2);

const q3 = document.getElementsByClassName("second");
console.log(q3);

const q4 = document.getElementById('container').lastElementChild.querySelector('.second');
console.log(q4);

const q5 = document.getElementById('container');
let helloText = document.createTextNode("Hello!");
q5.appendChild(helloText);

document.querySelector(".footer").classList.add("main");
const q6 = document.querySelector(".footer").classList;
console.log(q6);

document.querySelector(".footer").classList.remove("main");
const q7 = document.querySelector(".footer").classList;
console.log(q7);

const q8 = document.createElement("li");
let q9 = q8;
q9.innerHTML = "4";
const q10 = q9;
document.querySelector("#container").firstElementChild.appendChild(q10);

const q12 = document.querySelector('#container').lastElementChild.getElementsByTagName("li");

for (let i = 0; i < q12.length; i++) {
    q12[i].style.backgroundColor = "green";
}
console.log(q12);

let q13 = document.querySelector(".footer");
q13.remove();