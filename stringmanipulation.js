let str = "hello";
// h e l l o
// 0 1 2 3 4
//-5 -4 -3 -2 -1
console.log(str.includes('el'));
console.log(str.indexOf('e'));
console.log(str.lastIndexOf('l'));
console.log( str.slice(0,-2)); //hel
let st = "playwright";
console.log(st.charAt(0));
console.log(st.charAt(-3)); // -ve not allowed

//ascii value
//A-Z: 65 to 90
//a-z: 97 to 122
//0-0: 48 to 57
console.log("A".charCodeAt());

console.log("0".charCodeAt());

console.log("abc".charCodeAt(2));//66
console.log("$".charCodeAt());//36
console.log("   hello     ".trim());
console.log("   hello     ".trimStart());
console.log("   hello     ".trimEnd());


console.log(st.replace('play','Type'));
console.log(st);
console.log(st.replaceAll('pla','Player'));

//padding
console.log("7".padStart(3,0)); //007
console.log("7".padEnd(3,1)); //711
console.log("7".padEnd(4,'hi')); //7hih

//repeat
console.log("--".repeat(3));//------

//split:
let lang = 'java_python_ruby';
let lg = lang.split('_');
console.log(lg[0]);
console.log(lg[1]);
console.log(lg[2]);
console.log(lg[3]); //undefined