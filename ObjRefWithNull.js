let user =
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

//object are stored in Heap memory
//local and reference variables are stored in the stack memory
console.log(typeof user.devices);//object
console.log(user.devices);
user = null;
console.log(user.devices); //null.devices ==> TypeError: Cannot read properties of null (reading 'devices')

//gc deletes the objects having no references and null references from the Heap memory
//Garbage Collector removes unreachable objects from heap memory, i.e., objects that no longer have any active references.