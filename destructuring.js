//clean way to extract values from arrays or objects and assing them to the variables in single line

let [a,b,c] = [10,20,30];
console.log(a);
console.log(b);
console.log(c);

let arr=[40,50,60];
let [x,y,z] = arr;

console.log(arr[1]);
console.log(y);

let [d, , r] = arr;
console.log(d, r);

let num = [1,2,3,4,5,6];
let [t1, t2, ...pop] = num;
console.log(t1);
console.log(pop);
