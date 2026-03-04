
//IIFE: Immediate Invoke function Expression

// Java: main method called automatically
// JS: IIFE function called automatically

//function has no name: Annonymous function
//cannot have any alias name for the anonuymous function
//expression names not allowed


//function body
(
    function ()
    {
        console.log("hello world");
        console.log(30);

        //read data from excel, csv
        //DB connection code
        //starting server

    }
)//function body

(); //function calling

//tc1
//tc2
//tc3


 (   function (browserName)
    {
        console.log("hello world", browserName);
    }
)

('chrome'); 


//multiple annoymous functions allowed
(   function ()
    {
        console.log("hello world2");
    }
)

(); 