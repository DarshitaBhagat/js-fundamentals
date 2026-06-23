/*
let x = 3.21;
let a = 3;
let b=81;
let c = 10;
let d = 45;
let f = -5.68;
let y = 2;
let z;
z=Math.round(x);
z=Math.floor(x); //round down
z=Math.ceil(x); //round up
z=Math.trunc(x); // cancel decimal part
z=Math.pow(a,y); // a^y
z=Math.round(x);
z=Math.sqrt(b); // square root of b
z=Math.log(c); // natural logarithm of c = 2.3
z= Math.sin(d); // sine of d in radians
z=Math.cos(d);
z=Math.tan(d);
z=Math.abs(f); // absolute value of f = 5.68
z=Math.sign(f); // sign of f = -1 (-1 or 1 or 0)
z=Math.max(x,a,b,c,d,f); // maximum value among the arguments
z=Math.min(x,a,b,c,d,f); // minimum value among the arguments


console.log(z);

*/
/*
const min = 1;
const max = 100;

let randomNum = Math.floor(Math.random()*(max-min))+min; // random number between min and max

console.log(randomNum);
*/

const mybtn = document.getElementById("roll");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const min = 1;
const max = 100;
let randomNum1;
let randomNum2;
let randomNum3;
mybtn.onclick= function(){
    randomNum1 = Math.round(Math.random()*(max-min)+min);
    randomNum2 = Math.round(Math.random()*(max-min)+min);
    randomNum3 = Math.round(Math.random()*(max-min)+min);
    number1.textContent=randomNum1;
    number2.textContent=randomNum2;
    number3.textContent=randomNum3;
}