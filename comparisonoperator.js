//10 is equal to 19
//nayum is equal to nayum

// == : Loose equality - compares the value only
// ===: Strict equality - compares the value and type

console.log(10==10);
console.log(10=="10");
console.log(10==`10`);
console.log('1'+'0'==10);
console.log(`10`==10);

console.log(10===10);
console.log(10==="10");
console.log(10===`10`);
console.log('1'+'0'===10);
console.log(`10`===10);

let bill = "29004";
console.log(bill==29004);
console.log(bill===29004);


//true = 1
//false = 0

console.log(true==1);//true
console.log(1==true);//true
console.log(1===true);//false
console.log(true===1);//false

//JS is case sensitive
console.log('nayum'=='Nayum');//false
console.log('nayum'==='Nayum');//false
console.log('Nayum'=='Nayum');//false