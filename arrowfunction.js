
//Arrow function =>
//no need to add the keyword function when using arrow function

    //1. no param arrow function
   let print = ()=>{
        console.log("Hello");
    };

    print();

    //2. One param arrow function

    let printname = (name)=>{
        console.log(name);

    }

    printname('nayum');

    let test = function(ob){console.log(ob);}
//let test = (ob)=>{console.log(ob);}
    test(10);

    //for only one parameter no need to provide ()
    let printnum = num => {console.log(`Number ${num}`)};

    printnum(1000);