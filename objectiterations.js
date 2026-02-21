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


for(let key in user)
{
    if(key === 'address')
    {
     //   console.log(key, '===>', user[key]);
        console.log(user[key]['flat']);
    }
}