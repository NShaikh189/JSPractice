
let user = {
    name: 'naeem',
    age : 30,
    city: 'Pune'

};

function printUserData(userObj)
{
    console.log(userObj);
    userObj.age = 50
    userObj.name = 'naeem shaikh'
}

printUserData(user);
console.log(user.name);
console.log(user.age);