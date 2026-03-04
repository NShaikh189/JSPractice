//1.  function with no name e.g. IIFE

let fc = function()
{
    console.log('Hello world');
    return 100;
}

let val= fc();

console.log(val);

//initDriver('EDGE'); Hoisting is not allowed for anonymous function
let initDriver = function (browserName)
{
    console.log(`browser name: ${browserName}`);
    switch (browserName.trim().toLowerCase())
    {
        case 'chrome': console.log('launch chrome');
        return true;

        case 'edge': console.log('launch edge');
        return true;

        default: console.log('enter correct browser');
        return false;
    }
}

let isInitDriver = initDriver('CHROME');
if(isInitDriver)
    console.log('Enter the url: google.com');
else
    console.log('Driver initialization failed');