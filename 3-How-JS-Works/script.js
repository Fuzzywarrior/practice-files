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
  console.log(c); //not part of the scope of the first and second function, won't work
}




// Example to show the difference between execution stack and scope chain

/*
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
*/



//
// ─── LECTURE THE THIS KEYWORD ───────────────────────────────────────────────────
//










