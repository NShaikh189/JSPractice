//Callback: A simple function sent as an argument to another function which will be called later

//call by value
//call by obj ref
//call by function: callback

let sayHi = function(){
    console.log("Hi");
}

let sayHello = function(callback)
{
    callback();
    console.log("Hello");
}

sayHello(sayHi);

//callback functions || Utility functions
let add = (a,b) => a+b;
let sub = (a,b) => a-b;
let mul = (a,b) => a*b;
let div = (a,b) => a/b;

let cal = function(a,b,callback)
{
    console.log(callback(a,b));
}

//core function
function calculator(a,b, callback)
{
  //  let val = callback(a,b);
  //  console.log(val);
  //  return val;
  return callback(a,b);
}

//let result = cal(add(3,5));
//console.log(result);
cal(2,5,add);
cal(29,44,sub);
cal(29,0,div);
cal(29,44,mul);
console.log("============");
let result = calculator(112,5,add);
console.log(result);

result = calculator(139,44,sub);
console.log(result);

result = calculator(19,10,div);
console.log(result);

result = calculator(19,44,mul);
console.log(result);

console.log("================");

function initDriver(browserName)
{
    console.log("browser name: ", browserName);

    switch(browserName.trim().toLowerCase())
    {
        case 'chrome': console.log("chrome browser");
        return true;

        case 'edge': console.log("edge browser");
        return true;

        default: console.log("Incorrect browser");
        return false;

    }
}

function enterUrl(browserName, url, callback)
{
    console.log('starting browser execution');
    if(callback(browserName))
        console.log("entered url: "+url);
}

enterUrl('chrome','https://google.com',initDriver)

console.log("----------------------");

function launchBrowser(browserName, callback)
{
return callback(browserName);
}

                        // ' chrome', ()=>{}
let flag = launchBrowser('chrome', (browserName)=>{
     console.log("browser name: ", browserName);

    switch(browserName.trim().toLowerCase())
    {
        case 'chrome': console.log("chrome browser");
        return true;

        case 'edge': console.log("edge browser");
        return true;

        default: console.log("Incorrect browser");
        return false;

    }
});

if(flag)
    console.log('enter the url');


console.log("+++++++++++++++++++++++");

function myCalc(a,b,callback)
{
    return callback(a,b);
}

result = myCalc(3,5,(a,b)=>a+b);
console.log(result);
result = myCalc(3,5,(a,b)=>a*b);
console.log(result);

//OR
result = myCalc(4,5, function(a,b){return a+b});
console.log(result);