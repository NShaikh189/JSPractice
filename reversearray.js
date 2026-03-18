
let num = [1,2,31,4,5];
//let cnt = num.length-1;

for(let e of num)
{
    let cnt = num.length - num.indexOf(e) -1;
    console.log(num[cnt]);
 //   cnt--;
}

for(let e in num)
{
    let count = num.length-e -1 ;
    console.log(num[count]);
}
console.log('--------------');
for(let i of num)
{

    let index = num.length-1-num.indexOf(i);
    console.log(num[index]);
}

console.log('--------------');
let nums = num.map(n=> num[num.length-1 - num.indexOf(n)]);
console.log(nums);