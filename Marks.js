

// problem no 3 

console.log("Program to print marks of a student.  Using For-loop and for-in-loop");

let marks = {
    Sulaiman : 877,
    Laraib : 667 , 
    Shahroz : 400,
    Fardeen : 550 ,
    Anusha  : 710
}

// for(let i=0; i < Object.keys(marks).length ; i++ ){
//     console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// } 


// Problem no 4 (same program using For-In-Loop)

for(let keys in marks){
    console.log("The Marks of " + keys + " are " + marks[keys]);
}