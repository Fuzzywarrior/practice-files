/*
var name = 'John';
var lastName = 'Smith';
var age = 26;
var fullAge = true;

console.log(name);
console.log(lastName);
console.log(age);
console.log(fullAge);
*/

// Lecture: Variables 2
/*
var name = 'John';
var age = 26;
var job, isMarried;

job = 'teacher';
isMarried = true;


console.log(name + age);
console.log(name + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');

console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried + '.');
*/

// Lecture: operators

/* var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);
*/

////////////////////////////////
// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)' );
}

isMarried = false;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if (23 == '23'){
    console.log ('Print something...');
}
*/

////////////////////////////////////
// Lecture: boolean logic and switch

/*
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30 ) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}


var job = 'teacher';
job = prompt('What does John do?');

switch (job) {
case 'teacher':
    console.log('John teaches kids.');
    break;
case 'driver':
    console.log('John drives a cab in Lisbon');
    break;
case 'cop':
    console.log('John helps fight crime.');
    break;
default:
    console.log('John does something else.');
}
*/

//////////////////////////////////////
// CODING CHALLENGE 1

/*
var playerOneHeight = 198;
var playerTwoHeight = 170;
var playerThreeHeight = 200;
var playerOneAge = 20;
var playerTwoAge = 30;
var playerThreeAge = 27;

function scoreCalc(height, age) {
    "use strict";
    var score = height + (age * 5);
    return score;
}

var playerOneScore = scoreCalc(playerOneHeight, playerOneAge);
var playerTwoScore = scoreCalc(playerTwoHeight, playerTwoAge);
var playerThreeScore = scoreCalc(playerThreeHeight, playerThreeAge);

if (playerOneScore > playerTwoScore && playerOneScore > playerThreeScore) {
    console.log('Player one wins!');
} else if (playerTwoScore > playerOneScore && playerTwoScore > playerThreeScore) {
    console.log('Player two wins!');
} else if (playerThreeScore > playerOneScore && playerThreeScore > playerTwoScore) {
    console.log('Player Three Wins!');
} else {
    console.log('We have a draw! Everyone wins!');
}

console.log(playerOneScore);
console.log(playerTwoScore);
console.log(playerThreeScore);
*/

//
// ─── LECTURE: FUNCTIONS ──────────────────────────────────────────────────────────
//
/*
function calculateAge(yearOfBirth) {
    "Use Strict:";
    var age = 2017 - yearOfBirth;
    return age;
}

function yearsUntilRetirement(name, year) {
    "Use Strict:";
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired');
    }
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log(ageJohn, ageMike, ageMary);

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

//
// ─── LECTURE STATEMENTS AND EXPRESSIONS ─────────────────────────────────────────
//
/*
//Expressions
3 + 4;
var x = 3;

//statements
if (x === 5) {
    // do something
}
*/

//
// ─── LECTURE ARRAYS ─────────────────────────────────────────────────────────────
//
/*
var names = ['John', 'Jane', 'Mark'];
var years = [1990, 1969, 1948];

console.log(names[0], names[1], names[2]);

names[1] = 'Ben';

console.log(names[0], names[1], names[2]);

var john = ['John', 'Smith', 1990, 'Teacher', false];


john.push('Blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

var lastName = john.indexOf('Smith');
console.log(lastName);

if (john.indexOf('Teacher') === -1) {
    console.log('John is not a teacher.');
}
*/

//
// ─── LECTURE OBJECTS ────────────────────────────────────────────────────────────
//
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['job']);

var xyz = 'job';

console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = Object.create(null);
jane.name = 'Jane';
jane.lastName = 'Smith';
jane.yearOfBirth = 1969;
jane.isMarried = true;

console.log(jane);
*/

//
// ─── LECTURE OBJECTS AND METHODS ────────────────────────────────────────────────
//
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family:['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        "Use Strict:";
        return 2017 - this.yearOfBirth;
    }
};
*/


// 2.0
/*
var john = {
    //age: this.calculateAge(),
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family:['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        "Use Strict:";
        this.age = 2016 - this.yearOfBirth;
    },
    fullName: function () {
        return this.name + ' ' + this.lastName;
    }
};
john.calculateAge();

console.log(john.fullName(), john.age);
*/

//
// ─── LECTURE LOOPS ──────────────────────────────────────────────────────────────
//

// for (i = 0; i <= 10; i++) {
//    console.log(i);
// }


var names = ['John', 'Jane', 'Marry', 'Mark', 'Bob'];

for (i = names.length -1 ; i >= 0; i--) {
    console.log(names[i]);
}
