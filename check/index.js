const check= document.getElementById('check');
const result= document.getElementById('result');
const visabtn= document.getElementById('visabtn');
const paytm= document.getElementById('paytm');
const phonepe= document.getElementById('phonepe');
const pr = document.getElementById('pr');
const payres = document.getElementById('payres');

result.onclick = function(){
    if (check.checked == true){
        pr.textContent= "you have subscribed to our newsletter";

    }

    else{
        pr.textContent= "you have not subscribed to our newsletter";
    }

    if (visabtn.checked == true){
        payres.textContent= "you have selected visa as your payment method";
    }
    else if (paytm.checked == true){
        payres.textContent= "you have selected paytm as your payment method";
    }
    else if (phonepe.checked == true){
        payres.textContent= "you have selected phonepe as your payment method";
    }

    else{
        payres.textContent= "Select any payment method";
    }
}

/* let age = 12;
let message = age>=18 ? "adult":"minor";
console.log(message); */
