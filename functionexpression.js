let cart = function addToCart() //function expression is used to give short name to the functions
{
    console.log('add to cart');
    return 100;
}

let cart1 = function addToCart1(pname)
{
    console.log('add to cart: '+pname);
    return 100;
}
function addToCart2() //function expression is used to give short name to the functions
{
    console.log('add to cart');
    return 10011;
}
//function expression name: cart
//actual function name: addToCart

//call the function:
//addToCart();//ReferenceError: addToCart is not defined
let n1 = cart();//add to cart
console.log(n1); //100

let n2 = cart1('MacBook');
console.log(n2);
console.log(cart1.name);//actual function name

let n3 = addToCart2();
console.log(n3);

let waitFor = function waitForElementPresenceWithExplicitWaitOnThePage(pname)
{
    console.log(pname);
}

waitFor('mac');