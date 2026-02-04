//concat -- merge -- add

let a =10;
let b = 20;

console.log(a+b);//30 => addition

console.log("Hello"+a+b);
console.log(a+b+"Hello");
console.log("Hello"+"Playwright");//HelloPlaywright

let x = "hello";
let y = "automation";
console.log(a+b+x+y);//30helloautomation
console.log(x+y+a+b);//helloautomation1020
console.log(x+y+(a+b));//helloautomation30
console.log(a+b+x+y+a+b);