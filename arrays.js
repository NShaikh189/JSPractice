//collection of similar data types in JS
//Array: []
//Array is dynamic in JS


let num = [10,20,30,40];
num.forEach(element => {console.log("$"+element);});
num.forEach(element => console.log("^"+element));

console.log(num[3]);
console.log(num);
console.log(num.length);
console.log("abc".length);
console.log(num[-1]);
console.log(num[num.length-1]);
console.log(num[num.length]);

for(let x in num)
    console.log(x);
 
//Array is dynamic in JS
num[10]=100;
console.log(num); //[ 10, 20, 30, 40, <6 empty items>, 100 ]
console.log(num[8]);

let empData = ['nayum',30, 'SDET1','IBM',12.33, true];
console.log(empData);
console.log(typeof empData);//object

//constant doesn't work for the arrays
num[0]=5;
console.log(num);
const p = [10,20,30];

p[0]=5;
console.log(p);

let products = ['macbook pro',"imac","iphone"];
console.log(typeof products);

let arr = Array.of(1,3,5,34);
console.log(arr);

//Array.from workfs only for strings
let chars = Array.from("Playwright");
console.log(chars);
console.log(chars[5]);

let narr = Array.from('12345');
console.log(narr);

let numarr = Array.from(12345);
console.log(numarr); // [] => empty array/ from works only with Strings

