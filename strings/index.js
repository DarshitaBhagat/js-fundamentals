let user = "Darshita";
user.charAt(0); //D
user.charAt(1); //a
user.charAt(2); //r
user.charAt(3); //s
user.charAt(4); //h
user.charAt(5); //i
user.charAt(6); //t
user.charAt(7); //a
user.charAt(8); //empty string

user.indexOf("a"); //1 first occurrence of "a"
user.lastIndexOf("a"); //7 last occurrence of "a"
user.slice(0, 4); //Dars
user.slice(4); //hita
user.toUpperCase(); //DARSHITA
user.toLowerCase(); //darshita
user.replace("a", "o"); //Dorshita replaces only first occurrence of "a"
user.replaceAll("a", "o"); //Dorshito replaces all occurrences of "a"   

user.length; //8

user.trim(); //removes whitespace from both ends of the string

user.repeat(3); //repeats the string 3 times

user.startsWith("D"); //true
user.endsWith("a"); //true
user.includes("sh"); //true

user.padStart(10, "*"); //**Darshita pads the string with * at the start until the total length is 10
user.padEnd(10, "*"); //Darshita** pads the string with * at the end until the total length is 10

const fullName = "Darshita Bhagat";

let firstName = fullName.slice(0, 8); //Darshita
let lastName = fullName.slice(9); //Bhagat
let lastName = fullName.slice(-1); //t
let lastName = fullName.slice(-6); //Bhagat

let firstName = fullName.slice(0, fullName.indexOf(" ")); //Darshita
let lastName = fullName.slice(fullName.indexOf(" ") + 1); //Bhagat

// method chaining
username = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLowerCase(); //Darshita





