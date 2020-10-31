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


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if(money){
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height = 0;
if(height) {
  console.log('Yay! Height is defined');
} else {
  console.log(('Height is undefined'));
}


const age = '18';
if(age === 18) console.log('You just became an adult - Strict');
if(age == 18) console.log('You just became an adult - Loose');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);


if (favourite === 23) {
  console.log('Cool, 23 is an amazing number.');
} else if(favourite === 7) {
  console.log('Number 7 is also cool!');
} else {
  console.log('Number 7 and 23 are missing');
}


const age = 16;
if(age > 20 && age < 30){
  console.log("I'm in my mid 20's");
} else {
  console.log("I'm not in my 20's");
}
if(age > 20 || age < 30){
  console.log("I'm in my mid 20's");
} else {
  console.log("I'm not in my 20's");
}


// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 106) / 3;

if(dolphins === koalas && dolphins >= 100){
  console.log(`Dolphins and Koalas have a draw of ${dolphins} and both won`);
} else if (dolphins === koalas && dolphins <= 100) {
  console.log(`Dolphins and Koalas have a draw of ${dolphins} and both lost`);
} else if (dolphins > koalas && dolphins >= 100) {
  console.log(`Dolphins average score of ${dolphins} is bigger than Koalas and is the winner`);
} else if (dolphins < koalas && dolphins >= 100) {
  console.log(`Koalas average score of ${koalas} is bigger than Dolphins and is the winner`);
} else {
  console.log(`Dolphins and Koalas did not score above 100 points and lost`);
}


const day = 'Sunday';

switch(day) {
  case 'Monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'Tuesday':
    console.log('Prepare video');
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log('Write code exmple');
    break;
  case 'Friday':
    console.log('time to visit');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
}

if(day === 'Monday'){
  console.log('it is Monday');
} else if(day === 'Tuesday') {
  console.log('it is Tuesday');
} else if(day === 'Wednesday') {
  console.log('it is Wednesday');
} else if(day === 'Thursday') {
  console.log('it is Thursday');
} else if(day === 'Friday') {
  console.log('it is Friday');
} else if(day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Its not a day');
}


// Statements - A piece of code that generates a value
3 + 4
1994
true && false && !false

// Expressions - A bigger piece of code that does not produce a value. If Else statements and Switch are examples. It declares not produce.
if(23>10){
  const str = '23 is bigger';
}


// CONDITIONAL OPERATOR or Tirdnary operator

const age = 23;
age >= 18 ? console.log('I like to dring wine') : console.log('I like to dring water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >=18) {
  drink2 = 'wine';
} else {
  drink2 = 'wanter'
}

console.log(drink2);

console.log(`I like to drink ${drink2}`);
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// const bill = 275;
// const bill = 40;
const bill = 430;
const tip1 = bill*0.15;
const tip2 = bill*0.20;

bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${tip1} and total value is ${bill + tip1}`) : console.log(`The bill was ${bill}, the tip was ${tip2} and total value is ${bill + tip2}`);

const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.20 ;

console.log(`The bill was ${bill}, the tip was ${tip} and total value is ${bill + tip}`);
*/
