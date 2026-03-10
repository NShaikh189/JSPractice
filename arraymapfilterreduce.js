let number = [1,2,3,4,5];

let num = number.map(e=>e*2);
console.log(num);

let sqr = number.map(e=> e*e);
console.log(sqr);


let empNames = ['uday','ankit','naveen','jinto', 'jaikishan','Nilofar'];
let namesUpper = empNames.map(n=> n.toUpperCase());
console.log(namesUpper);

//2. filter

let numbers = [10,25,34,35,50,64];
let nums = numbers.filter(e=> e%5==0);
console.log(nums);
let evenNums = numbers.filter(e=>e%2==0);
console.log(evenNums);

let nlen = empNames.filter(e=> e.length>5);
console.log(nlen);

let productData = ['apple macbook','apple iphn','samsung galaxy','apple macbook pro','apple airpods'];
let appleproducts = productData.filter(p=>p.startsWith('apple'))
.filter(p=>p.includes('iphn'))
.map(p=>p.replace('iphn','iphone'));

console.log(appleproducts);

//3. reduce: returns a single value
// combines everything into One Value

let numData = [10,20,30,40,50,60];

let empAddress = ['400','Radha apt','marunji', 'HINJEWADI', 'Pune'];
let actAddress = empAddress.reduce((addr,word)=> addr+word+', ',"");
console.log(actAddress.trimEnd(','));
console.log(actAddress.slice(0,-2)); //negative number start from the end

//chain all methods:
//number array: even->square them -->sum