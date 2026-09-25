// Day-10          Hoisting in JavaScript | How Javascript code Runs


// Notes=> https://app.notion.com/p/Lecture-10-JS-Code-Execution-2853a78e0e2280a8a3c2e21a712ebd43?source=copy_link



// JS ka code run hone ka process 2 phase me hota hai

// code run ==> Execution context create hota hai==> 2 phase me run hota hai

// 1. Memory allocation phase
// 2. Code Execution Phase

// phele phase me memory allocate hoti hai sare variable aur function ke liye, variable ke liye undefined value assign hoti hai aur function ke liye pura function memory me store hota hai

// second phase me code execute hota hai,usme variable ke liye value assign hoti hai aur function call hota hai


// sabe phele jo execution context create hota hai use global execution context create bolte hai, aur uske andar 2 phase me run hota hai

// ------------------------------------------------------

// Execution Context
// Memory allcation:-
// a = undefined            
// b = undefined
// addNumber = {fuCode}
// sumResult1 = undefined
// sumResult2 = undefined


// Execution Phase:-
// a = 10            
// b = 20
// addNumber = {fuCode}
// sumResult1 = 30
// sumResult2 = undefined


// // console.log(a);

// var a = 10;
// var b = 20;

// // console.log(a);

// var sumResult1 = addNumber(a,b);
// console.log(sumResult1);

// function addNumber(num1,num2){
//     var sum = num1 + num2;
//     return sum;
// }

// // var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);
// // console.log(sumResult1,sumResult2);


// --------------------------------------------------

// let and const
// Memory allcation hoga iska bhi, lekin value assign nahi hogi, aur agar hum isse access karenge to error aayega, isse temporal dead zone bolte hai

// a = <uninitialized>  ata memory allocation pahse me isko access nahi kar skte isko (TDZ[Temporal Dead Zone]) bhibolte hai

// b = <uninitialized>  ata memory allocation pahse me isko access nahi kar skte isko (TDZ[Temporal Dead Zone]) bhibolte hai

// let and const dono me memory allocation phase me uninitialize hota mtlb koi value nahi hota value ata hai code execution phase me, aur agar hum isse access karenge to error aayega, isse temporal dead zone bolte hai 

// memory execution phase me memory to de deta hai let,const ko lekin access nahi kar skte TDZ me hote access tab kar paoge jab iska execution phase chalega value ayega tab


// console.log(a); //here is error bcz TDZ
// let a = 10;
// const b = 20;
// // console.log(a);      //10 ye  normally print hoga, kyuki ye second phase me run hoga, aur value assign ho chuki hogi



let a = 10;
const b = 20;

const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}

const result = addNumber(a,b);
console.log(result);
