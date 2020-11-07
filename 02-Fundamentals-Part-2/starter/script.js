'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive ;)');


function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declaration
console.log(calcAge1(1965));
 function calcAge1(birthYear) {
   return 2020 - birthYear;
 }


 // Function Expression
 const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
 }

 console.log(calcAge2(1965));

// Arrow Function
const calcAge3 = birthYear => 2020 - birthYear
const age3 = calcAge3(1965)
console.log(age3);
console.log(calcAge3(1965));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1965, 'Manuel'));
console.log(yearsUntilRetirement(1960, 'Reo'));


function cutFruitPieces(fruit) {
  return fruit * 5;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const year = 2020;
const calcAge = function (birthYear) {
  return year - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

if(retirement > 0){
  console.log(`${firstName} retires in ${retirement} years`);
  return retirement;
} else {
  console.log(`${firstName} has already retired`);
  return -1;

}

  // return retirement;
  // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1965, 'Manuel'));
console.log(yearsUntilRetirement(1960, 'Reo'));


const calcAverage = (score1, score2, score3, team) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage (44, 23, 71, 'Dolphins');
let scoreKoalas = calcAverage (65, 54, 49, 'Koalas');

console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
  if(avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphins are the winners with ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins){
    console.log(`Dolphins are the winners with ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No one is the winner`);

  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(300, 200);

scoreDolphins = calcAverage (85, 54, 41, 'Dolphins');
scoreKoalas = calcAverage (23, 34, 27, 'Koalas');
checkWinner(scoreDolphins, scoreKoalas);


c
console.log(friends);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Manuel';
console.log(friends);
// friends = ['Bob', 'Alice'];

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
console.log(years[1]);
console.log(years[3]);
console.log(years.length);
console.log(years[years.length -1]);

const firstName = 'Manuel';
const manuel = [firstName, 'Schamroth', 2020 - 1965, 'Programmer', friends];
console.log(manuel);

// Excercise
const calcAge = function (birthYear) {
  return 2020 - birthYear;
}

const years = [1990, 1965, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

console.log(years.length);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]

console.log(ages);



// Array Methodes - Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Array Methodes - Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);
const removed = friends.shift();
console.log(removed);

console.log(friends.indexOf('Steven'));


// const calcTip = function (bill) {
//   if(bill >= 50 && bill <= 300) {
//     return ((bill * 15) / 100);
//   } else {
//     return ((bill * 20) / 100);
//   }
// }

// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

console.log(`The bill is ${bills[0]} with a tip of ${tips[0]} for a total of ${total[0]}`);
console.log(`The bill is ${bills[1]} with a tip of ${tips[1]} for a total of ${total[1]}`);
console.log(`The bill is ${bills[2]} with a tip of ${tips[2]} for a total of ${total[2]}`);


// Objects

// Array example
const manuelArray = [
  'Manuel',
  'Schamroth',
  2020 - 1965,
  'programmer',
  ['Reo', 'Yoni', 'Ben', 'Eden']
];
console.log(manuelArray);
console.log(manuelArray[0]);
console.log(manuelArray[1]);
console.log(manuelArray[2]);
console.log(manuelArray[3]);
console.log(manuelArray[4]);

// Object example
const Person = {
  firstName: 'Manuel',
  lastName: 'Schamroth',
  age: 2020 - 1965,
  job: 'Programmer',
  family: ['Reo', 'Ben', 'Eden', 'Yoni']
}

console.log(Person);
console.log(Person.firstName);
console.log(Person.lasttName);
console.log(Person.age);
console.log(Person.job);
console.log(Person.family);
console.log(Person.family[0]);
console.log(Person.family[1]);
console.log(Person.family[2]);
console.log(Person.family[3]);

const nameKey = 'Name';
console.log(Person['first' + nameKey]);
console.log(Person['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Manuel? Choose between firstName, lastName, job, and family');
// if(Person[interestedIn]) {
//   console.log(Person[interestedIn]);
// } else {
//   console.log('Wrong reques! Choose between firstName, lastName, job, and family');
// }


Person.location = 'Melbourne';
Person['twitter'] = '@manuelschamroth';

console.log(Person);

//Challenge
//Person has 3 friends and his best friend is called Michael
console.log(Person.family.length);
console.log(`${Person.firstName} has ${Person.family.length} family members and his wife name is ${Person.family[0]}`);
*/

const Person = {
  firstName: 'Manuel',
  lastName: 'Schamroth',
  birthYear: 1965,
  job: 'Programmer',
  family: ['Reo', 'Ben', 'Eden', 'Yoni'],
  canDriveCar: true,
  // calcAge: function(birthYear){
  //   return 2020 - birthYear;
  // }

  // calcAge: function(){
  //   // console.log(Person);
  //   return 2020 - this.birthYear;
  // }

  calcAge: function(){
    this.age = 2020 - this.birthYear;
    return this.age;
  }
};

console.log(Person.calcAge());

console.log(Person.age);


console.log(Person.calcAge(1965));
console.log(Person.calcAge(Person.birthYear));
console.log(Person['calcAge'](1965));
console.log(Person['calcAge'](Person.birthYear));



// Challange
const canDrive = function() {
  if(Person.canDriveCar){
    return 'he can drive a car.';
  } else {
    return 'he cannot drive a car.';
  }
}


console.log(`${Person.firstName} is a ${Person.age}-year old programmer and ${canDrive}`);
