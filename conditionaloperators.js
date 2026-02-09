let x = 9;

if(x>-10)
    console.log("hi");
else
    console.log("bye");

let eleExist = true;

if(eleExist)
    console.log('click on the element');
else
    console.log('Error: Element not found');

let result = (eleExist==true)?'Pass' : 'Fail';
console.log(result);//Pass

let result1 = (eleExist=='true')?'Pass' : 'Fail';
console.log(result1); //Fail