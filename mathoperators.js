console.log(9/2); //4.5
console.log(0/9); //0
console.log(0.0/5); //0

console.log(5/0.0); //Infinity
console.log(2.5/0); //Infinity
console.log(8/0);//Infinity
console.log(5/0); //Infinity (Java - AR divide by 0 error)

console.log(0/0); //NaN
console.log(0.0/0);//NaN
console.log(0.0/0.0);//Nan
console.log(0/0/0);//Nan

console.log(9%2); //1
console.log(8%2);//0
console.log(9%0); //NaN
console.log(0%9); //0

console.log(100/3); //33.33333333333336
console.log(100%3);//1
console.log("9"/"Hello");//NaN
console.log("9"/"2"); //4.5
let x=10n;
let y=20n;
let z = x + y;
if(z===30)
{
    console.log("hello");
}
if(z===30n)
{
    console.log("hello with n");
}
if(z==30)
{
    console.log("Match");
}