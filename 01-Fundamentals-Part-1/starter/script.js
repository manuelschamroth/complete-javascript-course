/*
let js = 'amazing';
console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Matild";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conversions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1425;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schemdtmann';
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operastors
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x + 10 = 25
x ++; // x = x + 10 = 25
x --; // x = x + 10 = 25
x --; // x = x + 10 = 25
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // y = 10, x = y
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markMass1 / markHeight1 ** 2;
const johnBMI1 = johnMass1 / johnHeight1 ** 2;
const isMarkHeight1 = markBMI1 > johnBMI1;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
const isMarkHeight2 = markBMI2 > johnBMI2;

console.log(markBMI1, johnBMI1, "Mark Height is heigher = " + isMarkHeight1);
console.log("Mark Height is heigher = " + isMarkHeight1);
console.log(markBMI2, johnBMI2, "Mark Height is heigher = " + isMarkHeight2);
console.log("Mark Height is heigher = " + isMarkHeight2);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jona = "I'm " + firstName + ', a ' + (year - birthYear) + ' ' + 'years old' + ' ' + job + '!';
const jona2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(jona);
console.log(jona2);

console.log(`Just some regual string....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if(age >=18) {
  console.log('Sarah can start driving license 🙏');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah needs ${yearsLeft} years more befoe she can take driving license.`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000){
  century = 20;
} else {
  century = 21;
}

console.log(century);
console.log(`Jonas was born in the ${century}st century.`);


const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

const markBMI1 = markMass1 / markHeight1 ** 2;
const johnBMI1 = johnMass1 / johnHeight1 ** 2;
const isMarkHeight1 = markBMI1 > johnBMI1;

if(markBMI1 < johnBMI1){
  console.log(`Mark's BMI of ${markBMI1} is smaller than John BMI of ${johnBMI1}`)
} else {
  console.log(`Mark's BMI of ${markBMI1} is higher than John BMI of ${johnBMI1}`);
}

// Type Concersion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coersion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('23' / 2);
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 'Jonas';
if(money){
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}
