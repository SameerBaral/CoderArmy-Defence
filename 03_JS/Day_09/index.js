// Day-09               function in JavaScript


//1) normal function:-

// ye function ko phele bhi call kar skte hai bcz vo hoist ho jate hai normal function hoist hota 
// greet("John");   

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("John");

// console.log(greet);
// console.log(greet("Sameer")); // undefined because function is not returning anything


// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1 + num2 + num3 + num4;
//     console.log(sum);
// }


// rest operator:-
// ...num is used to take multiple arguments in a function and store them in an array ye jitne element daloge wo ek array create kar dega 

// function addNumber(...num){
//     // console.log(num);

//     let sum = 0
//     for(let n of num){
//         sum += n;
//     }
//     console.log(sum);
// }

// addNumber(10,20); 
// addNumber(10,20,30);
// addNumber(1,2,3,4);


// phele ke do number alag variable me store kar diye aur baaki ke number ko ek array me store kar diya rest operator ke through

// const arr = [1,2,3,4,5,6,7];
// const [first,second,...rest] = arr;
// console.log(first,second,rest);


// -----------------------------------------------------

// spread operator vs rest operator:-

// spread operator is used to expand an array into individual elements
// rest operator is used to collect multiple elements into an array

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const combinedArr = [...arr1, ...arr2]; // spread operator
// console.log(combinedArr); // [1,2,3,4,5,6]

// spred and rest operator directly object and array me use kar sakte hai



// ----------------------------------------------------

// 2)  Function Expression:-

// function expression is a function that is assigned to a variable. It can be anonymous or named. Function expressions are not hoisted, which means they cannot be called before they are defined.

// normal function ko phele bhi call kar skte hai bcz vo hoist ho jate hai

// console.log(addNumber(3,4)); // error because function is not hoisted

// const addNumber = function(num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(3,4));


// -----------------------------------------------------

// 3) Arrow Function:-

// arrow function is a shorter syntax for writing function expressions. It does not have its own this, arguments, super, or new.target keywords. Arrow functions are always anonymous.


// const addNumber = (num1,num2) => {
//     return num1+num2;
// }

// arrow function me jab single line me sir return karana ho to curly bracket aur return keyword ko hata skte hai, aur argument me agr sirf ek hi value pass ho raha hoga to vo bracket bhi hata skte hai

// const addNumber = (num1,num2) => num1+num2;

// console.log(addNumber(3,4));


// let arr = [10,5,78,2,11]
// arr.sort((a,b)=>a-b)
// console.log(arr);


// if we have single parameter, no need of this ()
// const squareNumber = num => num*num;
// console.log(squareNumber(3));



// const greeting = ()=>{
//     return{
//         name:"Rohit",
//         age:22
//     }
// }

// console.log(greeting());

// {} ke andar return to lagana hi padega humko pora object return karna to () laga ke kardo

// const greeting = ()=>({name:"Rohit",age:20});
// console.log(greeting());


// ------------------------------------------------------

// IIFE:  Immediately Invoked Function Expression
// ye jab bhi function ko turant call karwana ho tab use hote hai

// (function greeting(){
//     console.log("Helloji");
// })()


// (()=>{
//     console.log("Hi");
// })()



// -------------------------------------------------------

// Callback function:-
// ye vo function hota jisme call karte wqt ek aur function ko as an argument pass kar skte hai


// function greet(){
//     console.log("Hello Ji, Kaise ho");
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     // dance() //hardcode mat karo yhi call karke(Reusable banao callback se)
//     callback()
//     console.log("I have finished meeting");
// }

// // meet(greet())  aise pass karoge to greet fnc yehicall ho jaega turant

// meet(greet) // aise as a refrence pass kara meet func call karte time greet ko to meet function callback function khelayega
// meet(dance)



// ---------------------------------------------------

// understanding callback function flow

// blinkit

function blinkitOrderPlaced(){
    console.log("We have started packing your Order");
}


function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    // zomatoOrderPlaced();
    callback()

    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}

// payment(500);
payment(500,zomatoOrderPlaced);

payment(300,blinkitOrderPlaced);



