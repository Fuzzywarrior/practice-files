//
// ─── LECTURE HOISTING ───────────────────────────────────────────────────────────
//
// functions
calculateAge(1990);

function calculateAge (year) {
  console.log(2016 - year);
}

var retirement = function (year) {
  console.log(65 - (2016 - year));
}

// variables
console.log(age);
var age = 23;

function foo() {
  var age = 65;
  console.log(age);
}

foo();

console.log(age);

//
// ─── LECTURE SCOPING ────────────────────────────────────────────────────────────
//


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
        third()
    }
}

function third() {
  var d = 'John';
  console.log(a + d); //not part of the scope of the first and second function, won't work
}




// Example to show the difference between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}



<<<<<<< HEAD

//
// ─── LECTURE THE THIS KEYWORD ───────────────────────────────────────────────────
//

// Messing Around

    /*
var obj = {
    firstName: 'Billy',
    lastName: 'Hamel',
    birthYear: 1989,
    age: function (year) {
        "Use Strict";
        var date = currentYear();
        return date - year;
    },
    retirement: function () {
        "Use Strict";
        var date = currentYear();
        return date + (65 - this.age(this.birthYear));
    }
};
=======
///////////////////////////////////////
// Lecture: The this keyword
console.log(this);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this)
}
>>>>>>> a81bc899581d5af68bda56a92b58a1deb23dbefd

function currentYear() {
    "Use Strict";
    return (new Date()).getFullYear();
}

<<<<<<< HEAD
console.log(obj.age(obj.birthYear));
console.log(obj.retirement());
*/
=======
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearOfBirth);
>>>>>>> a81bc899581d5af68bda56a92b58a1deb23dbefd

        function innerFunction() {
            console.log(this);
        }
        //innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

