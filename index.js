let marks=101
marks<50?console.log('you failed Terribly '):console.log("You are doing well");
let status=marks<50?"Below average Nigga":(marks>100? "You are Genius":"above average Moniu")
console.log(status);
// argument object function in js

function printName(){
    console.log(arguments[1]);
}
printName('Haron','Mburu')

// es6 Backticks
let name="Haron Mburu Thio'ngo"
console.log(`The boss name is ${name} and he has given us permission to go to new line without using \\n sahjs`);

// destructuring
person=["Tall","American","Teacher","Male"]
var[height,native,profession,gend]=person
console.log(height);

const man={
    age:24,
    work:"writer",
    gender:"man",
    residence:"Nairobi",

};
const {age,work,gender,residence}=man;
console.log(residence);