let u1 ={
    name: 'ravi',
    age: 30,
    city: 'USA'
}

let u2 ={
    name: 'amit',
    age: 34,
    city: 'Russia'
}

let u3 ={
    name: 'Pooja',
    age: 25,
    city: 'Australia'
}

let u4 ={
    name: 'Punit',
    age: 41,
    city: 'Africa'
}

console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);

console.log('==========');

u1= u2;
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);
console.log('==========');

u2 = u3;
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);

console.log('==========');
u3= u4;
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);

console.log('==========');
u4= u1;
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);