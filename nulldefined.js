

let obj = {
    name : 'Tom',
    age : 20
}
obj1 = obj;

//obj = null;
//obj1 = undefined;
//console.log(obj.name);//TypeError: Cannot read properties of null (reading 'name')
//console.log(obj1.name);//TypeError: Cannot read properties of undefined (reading 'name')

//console.log("hello world");

//handling null or undefined errors by using ? in the object
obj = null;
obj1 = undefined;
console.log(obj?.namename);//undefined
console.log(obj1?.name);//undefined
//execution is not terminated
