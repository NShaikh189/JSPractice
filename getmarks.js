

/**
 * 
 * @param {String} studentName 
 * @returns this function returns the marks of the student
 */
function getMarks(studentName)
{

    let marks = -1;

    if(studentName === 'nayum')
        marks = 90;

    else if(studentName === 'Jinto')
        marks = 80;

    else if(studentName === 'James')
        marks = 75;
    else
        console.log("No record found");

    return marks;
}

//console.log(marks); ReferenceError: Cannot access 'marks' before initialization
let marks = getMarks('Jinto');
console.log(marks);