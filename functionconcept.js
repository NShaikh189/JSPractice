//1. Simple function: no input and no return

function test()
{
    console.log("test");
}

//hoisting is allowed, function can be called before/after definition
testLogin();

function testLogin()
{
    console.log("test Login");
}


test();

function getName()
{
    return "Nayum";
}

let name = getName();
console.log(name);