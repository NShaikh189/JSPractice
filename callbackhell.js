//callback hell: pyramid of doom
//multiple as0ync operations/tasks
//they depedn on eadch other--- nested call
//hard to read
//hard to debug


// setTimeout(()=>{
//     console.log("Hello");
// }, 2000);


// setTimeout((name, age)=>{
//     console.log("Hello ",name, age);
// }, 3000, 'Dev', 30);

startMachine(()=>{});
function startMachine(callback){
   setTimeout(()=>{
    console.log('Machine started');
    callback();
   }, 3000);
};

function grindBeans(callback){
   setTimeout(()=>{
    console.log('Grinding beans started');
    callback();
   }, 3000);
};

function boilWater(callback){
   setTimeout(()=>{
    console.log('Boling water');
    callback();
   }, 4000);
};

function brewCofee(callback){
   setTimeout(()=>{
    console.log('Brewing coffee started');
    callback();
   }, 5000);
};

function pourCoffee(callback){
   setTimeout(()=>{
    console.log('Puring coffee into cup');
    callback();
   }, 2000);
};

function stopMacine(callback)
{
    setTimeout(()=>{
        console.log("macphine is turned off");
        callback();
    }, 4000)
}
//calling the functions

startMachine(()=> {
    grindBeans(()=>{
        boilWater(()=>{
            brewCofee(()=>{
                pourCoffee(()=>{
                    stopMacine(()=>{console.log("Cofee is ready");})
                })
            })
        })
    })
});


// async function makeCoffee()
// {
//     await grindBeans();
//     await boilWater();
//     await pourCoffee();
// };

// makeCoffee();