//export 
let name = 'Tom';

//export 
function add(a,b){
    return a+b;
}

//export 
function test(){
    console.log("Test");
}

//default function will never participate in destructuring
export default function print()
{
    console.log("print something....");
}

//Two defaults not allowed
// export default function print1()
// {
//     console.log("print something....");
// }


export {name, add, test};