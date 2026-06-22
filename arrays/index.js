let fruits = ["apple", "banana", "grapes", "orange"];

fruits[0] = "mango"; // change 
fruits[4] = "kiwi"; // add
fruits.push("watermelon"); // add at the end
fruits.unshift("papaya"); // add at the beginning
fruits.pop(); // remove last element
fruits.shift(); // remove first element
fruits.splice(1, 2); // remove elements from index 1 to 2
fruits.splice(1, 0, "strawberry", "blueberry"); // add elements at index 1
fruits.splice(1, 1); // remove element at index 1
let fruitslength = fruits.length; // get length of array
let index = fruits.indexOf("grapes"); // get index of element, if not returns -1

let fruitsCopy = fruits.slice(); // copy array
let fruitsCopy2 = fruits.slice(1, 3); // copy array from index 1 to 2

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}  

for (let fruit of fruits) {
    console.log(fruit);
}


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//...spread operator expands an array into individual elements
//...rest operator collects individual elements into an array

let numbers = [1,2,3,4,5]
let maximum = Math.max(...numbers); // get maximum number from array
let minimum = Math.min(...numbers); // get minimum number from array

let foods = [...fruits,...numbers, "pizza", "burger"]; // spread operator to combine arrays

function open(...foods){
    console.log(foods); // or ...foods
}  

const food1 = "pizza";
const food2 = "burger";
const food3 = "pasta";

open(food1, food2, food3); // rest operator to collect arguments into an array

function combinestr(...strings){
    return strings.join(" "); // combine strings into a single string
}

const name = combinestr("John", "Doe", "is", "a", "developer");
console.log(name); // John Doe is a developer

