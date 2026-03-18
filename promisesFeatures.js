
//Promise.resolve("task 1 done");

let a11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("a11")},2000);
});


let b12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("b11")},3000);
});


let c13 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("c11")},1000);
});

Promise.all([b12,c13, a11]).then((result)=>console.log(result));



let a21 = new Promise((resolve, reject)=>{
    setTimeout(()=>{reject("a21")},2000);
});


let b22 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("b22")},3000);
});


let c23 = new Promise((resolve, reject)=>{
    setTimeout(()=>{reject("c23")},1000);
});

Promise.all([a21,b22,c23])
.then((result)=>console.log(result))
.catch((error)=>console.log(error));


function startMachine()
{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("machine started");
            resolve();}
            ,3000);
    })
};

function grindBeans()
{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("grinding beans started");
            resolve();}
            ,2000);
    })
};

function boilwater()
{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("boiling water started");
            resolve();}
            ,1000);
    })
};

function brewCofee()
{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("brewing coffee started");
            resolve();}
            ,4000);
    })
};
 async function makeCoffee()
{
   await startMachine();
    await brewCofee();
    await boilwater();
    await grindBeans();

};
await makeCoffee();

