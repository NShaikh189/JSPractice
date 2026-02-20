//object  -> non primitive datatype
//no fixed memory
//referred by reference variable
//key-value pair
// key should be always in the String format

//reference variable
let user =
//object
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
}

//console.log(user);
console.log(user['name']); //Tom
console.log(user['isActive']); //true
console.log(user['age']);
console.log(user['city']);

//add new key value pair
user['email'] = 'tomandjerry@gmail.com';
console.log(user);

//delete pair
delete user.age;
console.log(user);

//update a pair
user.name = 'Lisa';
console.log(user['name']);
for(let key in user)
{
    //console.log(key + ": "+user.key); //name:undefined
    console.log(key," : " ,user[key]); //Tom
}

console.log(user.devices.length); //3 length is Applicable only for the arrays

console.log(1,'hi',true);//1 hi true