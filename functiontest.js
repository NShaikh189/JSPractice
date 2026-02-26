//No error for duplicate functions
//Latest function will be called
//function overloading is not possible in JS

function search()
{
    console.log("hello search1");
}

function search()
{
    console.log("hello search2");
}




function search(productname)
{
    console.log(`hello : ${productname}`);//hello : undefined
}

search();//hello : undefined
search('nayum');//hello : nayum