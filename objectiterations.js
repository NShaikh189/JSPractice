let user =
{ 
    name: 'Tom',
    age : 30,
    city: 'LA',
    isActive: true
}


for(let key in user)
{
    console.log(key, '===>', user[key]);
}