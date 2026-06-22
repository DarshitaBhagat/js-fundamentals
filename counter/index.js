/*console.log(`Hello, World!`);
console.log(`i like music`);

window.alert('faahhhhh');
*/
/*
document.getElementById("first").textContent = `hello`;
document.getElementById("para").textContent = `i like music`;
*/
//cmnt

/*VARIABLES
let x;
x=10;
console.log (typeof x);
let name = 'darshita';
console.log(typeof name);
console.log(`i am ${name}`);
console.log(x);
let age=19;
console.log(`this is a ${age} yesss`);
let on = true;
console.log (typeof on);
console.log (`online status ${on}`);

document.getElementById("p1").textContent= `My name is ${name}`;
document.getElementById("p2").textContent= `My age is ${age}`;
document.getElementById("p3").textContent= `Are you online? ${on}`;
*/
/*
// OPERATIONS

let a=10;
let students = 80;
students+=1;
students++; //--
students=students-1;
students=students*2;
students=students/2;
students=students**2;
extrastudents=students%8;
console.log(students);

//precence of operations : () , exp , /*% , +-
*/

/*

//user input
//html textbox or window prompt

let username;
username = window.prompt("whats ur username");
console.log(username);


document.getElementById("mysubmit").onclick = function (){
    let username = document.getElementById("mytext").value;
    document.getElementById("head").textContent = `Hello, ${username}!`;
}*/
/*
// type conversion

let age = window.prompt("what is your age");
//age=Number(age);
age+=1;
console.log(age);
*/
/*
// constants

// CAPS ONLY FOR INT AND BOOLEANS CONSTANTS
//let radius = window.prompt("enter radius") ;

document.getElementById("mysubmit").onclick = function(){
    let radius = document.getElementById("mytext").value;
    radius = Number(radius);
    const PI = 3.14;
    let ccm = 2*PI*radius;
    document.getElementById("result").textContent = ccm;
}
    */

const btn2 = document.getElementById("btn2");
const btn1 = document.getElementById("btn1");
const btn3 = document.getElementById("btn3");
const count = document.getElementById("count");

btn1.onclick = function(){
    count.textContent = Number(count.textContent) + 1;
}
btn2.onclick = function(){
    count.textContent = Number(count.textContent) - 1;
}
btn3.onclick = function(){
    count.textContent = 0;
}
