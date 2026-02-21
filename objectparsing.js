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
console.log(typeof userObj); //object

let customer = 
{ 
    name: 'Tom',
    age : 30,
    city: 'LA',
    isActive: true,
    address: {
        flat: 101,
        zip: 411017,
        lat: 10.34,
        long: 11.22
    },
    devices: ['iphone','mouse','keyboard']
};

//JS object to JSON string
let customerJson = JSON.stringify(customer,null,2);
console.log(customerJson);

//JSON string to JS Object
let customerObject = JSON.parse(customerJson);
console.log(customerObject);

console.log(typeof customer);
if(customer.address.long === customerObject.address.long)
    console.log(true);
else
    console.log(false);