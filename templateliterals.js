//template literals String
//back tick: ` ` (anything written in `` becomes a template literal);
// anything written in `` is displayed as it is 
// dynamic String ``
// ${} => Placeholder

let msg = `this is nayum here`;
console.log(msg);


// Strings can be writtedn in ` `, ' ' , " "

let para = `hi this is my JS code
I love JS
            I want to learn Playwright`;

            console.log(para);
/* output:
this is nayum here
hi this is my JS code
I love JS
            I want to learn Playwright
            */

            let par = "hi this is my JS code"
+"I love JS"+
            "I want to learn Playwright";

            console.log(par);
            /* Output:
            hi this is my JS codeI love JSI want to learn Playwright
            */


//op: I love 'javascript' coding
console.log('I love \'javascript\' coding')
console.log('I love \"javascript\" coding')
console.log(`I love 'javascript' coding`);
console.log(`I love "javascript" coding`);
console.log(`I love \`javascript\` coding`);

//dynamic values:
let username = 'admin';
console.log("Welcome "+username+"!"); //Welcome admin!
console.log("Welcome ${username}!"); //Welcome ${username}!
console.log(`Welcome ${username}!`); //Welcome admin!

let productName = "Apple Mac";
let price = 503.76;
console.log(`the search product name is ${productName} and price is $${price}$`);


let playerName = "ViratKohli";
console.log(`//button[text()='${playerName}']`);

let n1 =100;
let n2 = 200;

console.log(`the sum of ${n1} and ${n2} is ${n1+n2}`);

let emailId = 'automation@gmail.com';
let password = 'testing@123';

console.log(`User credentials:
    username: ${emailId}
    password: ${password}`);

console.log(emailId, password, 'admin');
console.log('admin',10); //admin 10
console.log('admin'+10); //admin10
