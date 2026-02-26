

function login()
{
    console.log("login to app");
    search();
}

function search()
{
    console.log("search product");
    addToCart();
}

function addToCart()
{
    console.log("add to cart");
    //login(); //infinte calling
}

login();