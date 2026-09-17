// Day-02 js variables and datatype


// variable creation:-

// let and const are block scoped variable. they can't be accessed before initialization. they can't be redeclared in same scope. they can be updated in same scope.

// let name = "Sameer"; 
// let age = 25;

// age = 30

// console.log(name,age);

// -------------------------------------------------------

// const account = 1234;
// //in constant variable we can't change the value of variable after initialization.
// account = 1425  
// console.log(account);


// ------------------------------------------------------
// var is a global variable and can be redeclared and updated. it is function scoped. 
// it can be accessed before initialization. 
// it is not recommended to use var in modern js.
// redeclaration and reinitialization is possible in var in same scope.
// var global and function scoped variable. it can be accessed before initialization thats called hoisting.

// var city = "Pune";
// var city = "Kanpur";
// console.log(city);

// if(true){
//     var num = 10;
// }

// console.log(num);

// functional scope of var variable:-
// function test(){
//     var c = 20;
// }
// console.log(c);



// -------------------------------------------------------

// datatype in js:-

// 1. primitive datatype:-
// number, string, boolean, undefined, null, bigint, symbol


// number:-

// let a = 10;
// let b = 1.3
// console.log(a,b);
// console.log(typeof a, typeof b);

// ------------------------------------------

// String:-

// let name = "Sameer";
// let city = 'Pune';
// let address = `Pune, Maharashtra`;
// console.log(name,city,address,typeof(name));


// ---------------------------------------------

// boolean:-

// let isActive = true;
// let isLoggedIn = false;
// console.log(isActive,typeof(isActive));

// ----------------------------------------------

// undefined:- not assigned any value to variable. it is a default value of variable which is not initialized. it is a primitive datatype.

// let userName;
// console.log(userName,typeof(userName));


// -------------------------------------------------

// null:- it can be assigned to a variable as a representation of no value. it is an object type in js.

// let user = null;
// console.log(user,typeof(user));


// --------------------------------------------------

// bigint:- it is used to store large integer values. it is a primitive datatype.

// let num = 1234567890123456789012345678901234567890n;
// console.log(num,typeof(num));


// ---------------------------------------------------

// symbol:- it is used to create unique identifiers for objects. it is a primitive datatype.

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1==id2);


// -----------------------------------------------------

// 2. non-primitive datatype:-
// array, object, function


// array:- it is used to store multiple values in a single variable. it is an object type in js.

// let fruits = ["apple",1,"banana","mango"];
// console.log(fruits,typeof(fruits));


// -----------------------------------------------------

// object:- it is used to store multiple values in a single variable in key-value pair format. it is an object type in js.

// let user = {
//     name: "Sameer",
//     age: 25,
//     city: "Kanpur"
// }
// console.log(user,typeof(user));


// -----------------------------------------------------

// function:- it is used to perform a specific task. it is an object type in js.

// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20),typeof(add));

// store function as a variable:-

// const add = function(a,b){
//     return a+b;
// }
// console.log(add(10,20),typeof(add));




// Primitive datatype are immutable means they can't be changed. when we change the value of primitive datatype variable then it creates a new variable in memory and assign the new value to it.


// let a = 10;
// a = 20;
// console.log(a);


// non-primitive datatype are mutable means they can be changed. when we change the value of non-primitive datatype variable then it changes the value of the same variable in memory.

// let arr = [1,2,3];
// arr[0] = 10;
// console.log(arr);

// let obj = {
//     name: "Sameer",
//     age: 25
// }
// obj.name = "Rahul";
// console.log(obj);



// -------------------------------------------------
// copy by value:- in premitive datatype when we copy the value of one variable to another variable then it creates a new variable in memory and assign the value to it. so when we change the value of one variable then it doesn't affect the other variable.

// let a = 10;
// let b = a; // copy the value of a to b

// b = 20;
// console.log(a,b);

// -----------------------------------

// Call by reference:- in non-premitive datatype when we copy the reference of one variable to another variable then it doesn't create a new variable in memory. so when we change the value of one variable then it affects the other variable.

let obj = {
    name: "Sameer",
    age: 25
}

let obj2 = obj; // copy the reference of obj to obj2

obj2.name = "Rohit"; // change the value of obj2

console.log(obj);


//Day-2 Class Notes:-  

//  https://app.notion.com/p/Lecture-02-Data-Type-2773a78e0e228042ba55df0265e78c6b