
let num = [1,2,3,4,5];
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

