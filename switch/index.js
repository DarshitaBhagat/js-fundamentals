let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let testscore = 85;
let grade;

switch (true){
    case testscore >= 90:
        grade = "A";
        break;
    case testscore >= 80:
        grade = "B";
        break;
    case testscore >= 70:
        grade = "C";
        break;
    default:
        grade = "D";
}
console.log(grade);