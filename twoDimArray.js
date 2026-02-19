let num = [
    [1,2,3],
    [10,20,30],
    [100,200,300],
    [1000,2000,3000]
];

//3x3 matrix: 2D Array: [row][column]
// console.log(num[1][1]);//20
// console.log(num[2][2]);//300
// console.log(num.length);//4
// console.log(num[0].length);//3

for(let i=0; i< num.length; i++){
    for(let j=0; j<num[i].length;j++){
//console.log(num[i][j]);
    process.stdout.write(`${num[i][j]}`)
}
process.stdout.write('\n')
}


console.log(`=========Jagged Array=========`);
let marks = [
    [1,2,3],
    [10],
    [23,44,55,67],
    [99,80]
];

console.log(marks);

for(let i=0; i< marks.length; i++)
{
    for(let j=0; j<marks[i].length; j++)
    {
        console.log(marks[i][j]);
    }
    process.stdout.write('\n');
}