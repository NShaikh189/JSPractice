//data types: type of data:
//number, boolean, string

//1. primitive datatypes: simple | stack memory | not part of object/reference | fixed memory | No garbage collector
//2. non primitive datatypes: Object | References | Class | Arrays | Functions | Interfaces | Dynamic memory | Heap 


//1. primitive datatypes:
//1. number:
let i = 10;
console.log(i);
console.log(typeof(i)); //number

let j = 10.38;
console.log(j);
console.log(typeof(j)); //number

//size: 8 bytes = 64 bits

//2. String: '' or ""
let name = "Testing";
let firstName = 'Nayum';
let gender = "M";
let isExe = 'Y';
let number = "976674993";
console.log(name);
console.log(typeof name);

console.log(firstName);
console.log(typeof firstName);

console.log(gender);
console.log(typeof gender);

console.log(isExe);
console.log(typeof isExe);

console.log(number);
console.log(typeof number);

//size: 2 bytes per character
let e = "abc"; // 3 x 2 = 6 bytes


//3. boolean 
let flag = true;
console.log(flag);
console.log(typeof flag);
//size: ~1 byte = 8 bits


//4.BigInt: used to long value/large values
let amt = 99093999794737399397n;
console.log(typeof amt);//bigint

let pop = BigInt(100);
console.log(pop);
console.log(typeof pop); //bigint

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//5. null: nothing/no value
//size: might take 0 to 8 bytes depending on the engine(like v8 engine )
let data = null;
console.log(typeof data); //object -- JS known existing bug

//6. undefined:

let v;
console.log(typeof v); //undefined
//size: 0 to 8 bytes depends on the engine


var vv;
console.log(typeof vv); //undefined
//size: 0 to 8 bytes depends on the engine

let qa = undefined;
console.log(qa); //undefined
console.log(typeof qa); // undefined

let q=null;
console.log(q);
console.log(typeof q);