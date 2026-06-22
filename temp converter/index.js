const celsius_label= document.getElementById("celsius-label");
const celsius= document.getElementById("celsius");
const fahrenheit_label= document.getElementById("fahrenheit-label");
const fahrenheit= document.getElementById("fahrenheit");
const convert_btn= document.getElementById("convert-btn");

convert_btn.onclick = function(){
    fahrenheit_label.textContent= "Fahrenheit: " + (parseFloat(celsius.value) * 9/5 + 32).toFixed(2) + " °F";
}