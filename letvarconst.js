//var, let, const are Keywords and not DATA TYPES
//decided at the run time (JS is a runtime)

//1. var: used in old js --never use it in modern JS/tools/PW
//    - duplicates allowed
//2. keywords start with small case

//Declaration: Re-Declaration allowed
var x = 10;
var x=20;
var x=30;
//clg => consle.log
console.log(x);


//Reassignment:
var y = 100;
y=200;
y=300;
console.log(y);

//Hoisting
console.log(t); //undefined - accessing before declaration
var t = 90;
console.log(t); // 90

//2. let:
//Declaration:
let p = 10;
//let p=20; --Re-Declaration Not allowed
console.log(p);

let a;
console.log(a); //undefined

//Reassignment:
let total = 900;
total = 970; //allowed
console.log(total);

//Hoisting: but with error at Runtime
//console.log(h); //ReferenceError: Cannot access 'h' before initialization
let h=25;

//console.log(i); //ReferenceError: i is not defined

//3. const: Pagetitle, url, days, month, baseurl
const PI = 3.14;
//const PI=20; //duplicates not allowed
const LOGIN_TITLE = 'LoginPage'; //constant should be written in the UPPERCASE
const LOGINPAGE_TITLE = "LoginPage Title";
//PI=22/10; //TypeError: Assignment to constant variable.
console.log(PI);

//const pi; //'const' declarations must be initialized.

//Hoisting
//console.log(val); //ReferenceError: Cannot access 'val' before initialization
//const val =25;

// var r = 10;
// let r=20;
// console.log(r); //SyntaxError: Identifier 'r' has already been declared