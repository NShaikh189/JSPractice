//There is no ASCII concept in JS

//addition : +
console.log(1+1); //1
console.log("1"+"1"); //11

//substraction
console.log(1-"1"); // 1 -  String converted to normal number
//1 - 1 => 0
console.log("1" - 1); //0
console.log("555"-2); //553
console.log("55"-'21'); //34
console.log(1 - 'A'); // NaN
console.log("Hello" - 10); //NaN
console.log("Hello" - '10'); //NaN
console.log("Hello" - 'NSA'); //NaN

//multiplication
console.log(1*"1"); // 1 -  String converted to normal number
//1 - 1 => 0
console.log("1" * 1); //0
console.log("555"*2); //1110
console.log("55"*'21'); //1155
console.log(1 * 'A'); // NaN
console.log("Hello" * 10); //NaN
console.log("Hello" * '10'); //NaN
console.log("Hello" * 'NSA'); //NaN
console.log(10+"1"*4);//14
console.log(10+"1"-4);//101-4 => 97
console.log("3"-"1"*4);//-1

//division
console.log(10/"2"); //5
console.log("10"/"2"); //5
console.log(10 + "10"/"2"); //15
console.log(10 + "10" + 10); //101010
console.log(10+"10"); //1010
console.log(10-"10"-10); //-10


//unary plus: +
console.log("42"+5); //425
console.log(+"42"+5);//47 (+ is equivalent to Interger.parseInt())

let billAmount = "1000";
console.log(+billAmount + 100);


//unray negation: - 
console.log(-"42"+5); // -42+5 = -37
console.log(-42+"5"); // -42+5 = -425 concatenation
console.log(-"42"+"5"); // -42+5 = -425 concatenation

console.log(-billAmount + 200); // -1000+200 = -800

console.log(Number.parseInt(billAmount)+500); //1500
console.log(-Number.parseInt(billAmount)+500); //-500

let bmi = "20.010";
console.log(Number.parseFloat(bmi)+100); //120.01
console.log(-1 + "1");// -11