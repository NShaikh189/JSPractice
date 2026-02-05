//++ and --

//1. post increment
let a=1;
let b=a++;
console.log(b);//1
console.log(a); //2

let x = -99;
let y = x++;
console.log(x); //-98
console.log(y); //-99

let total = 10;
console.log(total++);//10
console.log(total);//11

//2. pre increment:
let p = 1;
let q = ++p;
console.log(p);//2
console.log(q);//2


//3. Post decrement
let m=2;
let n = m--;
console.log(m); //1
console.log(n); //2

//4. Pre decrement
let r = 2;
let s=--r;
console.log(r); //1
console.log(s); //1

let bill ="100";
console.log(--bill);
console.log(bill);

let i = 11;
let j = i++ + ++i;
console.log(i);//13
console.log(j);//24

// let z=10;
// let w = --(z++); //error
// console.log(w);

let z=10n;
console.log(++z); //11n
//let yy = 1N; N is considered as another variable
let yy = 1;
//console.log(z+yy); //TypeError: Cannot mix BigInt and other types

let d=1.5, D = 2.5;
console.log(d++ + ++D);