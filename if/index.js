
const age = document.getElementById("age").value;
const btn = document.getElementById("check");
const result = document.getElementById("status");
btn.onclick = function(){
    const age = document.getElementById("age").value;

    if (Number(age)<0){
        result.textContent="Invalid age.";
        
    }

    else if(Number(age)<18){
        result.textContent="You are a minor.";
    }


    else{
        result.textContent="You are an adult.";
    }}