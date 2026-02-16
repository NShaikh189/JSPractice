let num = [10,20,30,40];

num.push(100);
console.log(num);

num.unshift(5); //insert at 0th index
console.log(num);

num.unshift(20);
console.log(num);

num.pop(); //remove the last element
console.log(num);

num.shift(); //remove first element
console.log(num);

let subarr = num.slice(0,3); //create a subarray
console.log(subarr);

//splice(start index, number of values to be removed, replace with)
let fruits = ['apple','grapes','banana','cherry'];
fruits.splice(0,1,'water melon');
console.log(fruits);

fruits.splice(0,2,'water melon');
console.log(fruits);

fruits.splice(0,2);
console.log(fruits);

fruits.splice(0,2,'melon',"mangoe","kiwi");
console.log(fruits);

fruits.splice(2,0,['melon',"mangoe","kiwi"]);
console.log(fruits);

let marks = [1,2,3,4,1,3,5,1,8,7];
console.log(marks.indexOf(1));
// indexOf(searchNumber, starting index)
console.log(marks.indexOf(1, marks.indexOf(1)+1)); //4

console.log(marks.indexOf(1, marks.indexOf(1, marks.indexOf(1)+1)+1)); //7

let p1 = marks.indexOf(1);
let p2 = marks.indexOf(1,p1+1);
let p3 = marks.indexOf(1,p2+1);

console.log(p3);


