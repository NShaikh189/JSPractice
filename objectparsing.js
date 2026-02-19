//object ===> JSON : serialization (marshelling)
//JSON ===> object : deserialization (unmarshelling)
//POJO == Plane Old Java Object
//JSON == Javascript Object notation

//API automation:
//POST call: url, json
//user object in JS ==> JSON

let user =
{ 
    name: 'Tom',
    age : 30,
    city: 'LA',
    isActive: true
}

//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let userJSON = JSON.stringify(user, null, 2); //2 => number of tabs in the row from the left
console.log(userJSON); //{"name":"Tom","age":30,"city":"LA","isActive":true}
console.log(typeof userJSON); //string
console.log(userJSON.p);


let userObj = JSON.parse(userJSON);
console.log(userObj);