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


//2. no input and return
function getName()
{
    return "Nayum";
}

let name = getName();
console.log(name);

//3. some input and return
function getStatus(name)
{
    if(name === 'nayum')
    return true;
else
    return false;
}

let status = getStatus('ajay');
console.log(status);

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
//4. some input and no return
function add(a,b)
{
    let result = a + b;
    console.log(result);
}

add(5,6); //11
add('James',20); //James
add(10,'20');//1020
add(10,+'20');//30