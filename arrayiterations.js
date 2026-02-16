
let num = [10,20,40,30];//len = 4, range = 0-3

//to print all the values of array: use for loop for fixed iterations
for(let i=0;i<num.length;i++)
    console.log(num[i]);

console.log('-----------');

//for...in => returns the indexes of the values in the array
for(let x in num)
    console.log(x);
console.log("=========");
for(let x in num)
    console.log(num[x]);
console.log('-----------');
//for...of => returns the actual values in the array
for(let x of num)
    console.log(x);

console.log('-----------');

let empData = ['nayum',30, 'SDET1','IBM',12.33, true];


for(let e of  empData)
{
    console.log(e);
    if(e==='SDET1')
        break;
}



