

let user = {
    name: 'Tom',
    age: 34
};

let {uname, uage}=user;
console.log(uname); //undefined

let {name, age}=user;
console.log(name); //Tom

let customer = {
    name: 'Peter',
    age: 40,
    city: 'LA',
    zip: 1010
};

function placeOrder({name, city})
{
console.log(name, city);
}

placeOrder(customer);

console.log('---------------');

function launchBrowser({browserName, headless, url}){
console.log(browserName,headless,url);
}
let page =
{
    title: 'login',
    browserName: 'chrome',
    url: 'https://abc.com',
    headless: true,
    footer: [1,2,3]
};

launchBrowser(page);