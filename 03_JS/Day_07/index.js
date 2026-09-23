// Day-07       Array in JS


// Notes => https://app.notion.com/p/Lecture-07-Array-in-javascript-2803a78e0e228002bcb2dffd112b7c4c


// let arr = [100,5.8,"sameer",70,80,90]

// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);
// console.log(typeof arr);  //object


// updating the particular index element
// arr[1] = 15
// console.log(arr);


// push an element at the end of the array
// arr.push(200)
// console.log(arr);


// pop an element from the end of the array
// arr.pop()
// console.log(arr);


// unshift: add an element at the start of the array
// arr.unshift(10)
// console.log(arr);


// shift: remove an element from the start of the array
// arr.shift()
// console.log(arr);

// -------------------------------------------------------

// Loops in Array


// let arr = [10,30,50,90,11]

// for loops:-
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// forof loop:-
// for(let i of arr){
//     console.log(i);
// }


// ------------------------------------------------

// nonpremitive copy by reference

// let arr = [10,30,50,90,11]
// let arr2 = arr;

// console.log(arr);
// console.log(arr2);

// arr2.push(100)
// console.log(arr);
// console.log(arr2);



// slice method:- starting index and ending index (ending index is not included)
// let arr = [10,30,50,90,11]
// console.log(arr.slice(2,4));
// console.log(arr);   //original array me koi fark nahi pada


// splice method:- starting index and number of elements to be removed , ye original array me hi changes kar deta hai
// let arr = [10,30,50,90,11]
// console.log(arr.splice(1,3));
// console.log(arr);

// adding elements to the array using splice starting index:1 diya kitne elements remove karne hai:3 aur new elements add karne hai: "Sameer",20,55,67,78,99 jitne chiye utne elements add kar sakte hai
// let arr = [10,30,50,90,11]
// console.log(arr.splice(1,3,"Sameer",20,55,67,78,99));
// console.log(arr);



// Most Important 

// spred operator:- it is used to copy the elements of one array into another array

// concatination:- it is used to join two or more arrays into one array

// const arr = [10,30,50,90,11]
// const arr2 = ["Rohit",66,19]
// const arr4 = [90,4,false]

// const arr3 = arr.concat(arr2,arr4)   //concat method
// console.log(arr3);



// spred operator:- it is used to copy the elements of one array into another array
// har element ko bhar nikal ke ek new array me daal deta hai

// const arr = [10,30,50,90,11]
// const arr2 = ["Rohit",66,19]

// const arr3 = [...arr,...arr2]   //spred operator
// console.log(arr3);

// -------------------------------------------------

// toString():- array ke elements ko string me convert kar deta hai

// const names = ["Rohit","Sameer","Ramesh","Suresh"]
// console.log(names.toString());

// -------------------------------------------------

// join():- array ke elements ko string me convert kar deta hai but hum khud ka separator de sakte hai

// const names = ["Rohit","Sameer","Ramesh","Suresh"]
// console.log(names.join("-"));

// -------------------------------------------------

// indexOf():- ye method hume element ka first occurance index return karta hai agar element array me exist karta hai to otherwise -1 return karta hai

// const names = ["Rohit","Sameer","Ramesh","Suresh","Sameer"]
// console.log(names.indexOf("Sameer"));

// -------------------------------------------------

// lastIndexOf():- ye method hume element ka last occurance index return karta hai agar element array me exist karta hai to otherwise -1 return karta hai

// const names = ["Rohit","Sameer","Ramesh","Suresh","Sameer"]
// console.log(names.lastIndexOf("Sameer"));



// --------------------------------------------------
// sort():- ye method array ke elements ko ascending order me sort kar deta hai
// ye method original array me changes kar deta hai

// const names = ["Alice","Rohit","Bob","Mohit","Charlie"]
// console.log(names.sort());
// names.reverse()
// console.log(names);


// --------------------------------------------------
// abhi ye sort method number ke liye kaam nahi karega kyuki ye string ke hisab se sort karta hai

// const a = [101,90,80,32,91]
// const arr = [10,"Rohit","Mohan",true]
// a.sort()
// console.log(a);


// number ke liye sort method kaam karne ke liye hume compare function dena padta hai
// compare function me do parameters hote hain: a aur b
// agar a-b < 0 to a phele ayega
// agar a-b > 0 to b phele ayega
// agar a-b = 0 to koi farq nahi padta

// assending order me sort karne ke liye a-b karna padta hai
// const arr = [101,90,80,32,91]
// arr.sort((a,b)=>a-b)
// console.log(arr);

// ye sort vala kaam aise kar raha hai:
// -ve: phele a ayega fr b aayega
// +ve: phele b ayega fr a aayega

// 101,90
// a=101, b=90 => a-b = 11 => +ve => 90 ayega fr 101


// -----------------------------------------------------

// decending order me sort karne ke liye b-a karna padta hai

// const arr = [101,90,80,32,91]
// arr.sort((a,b)=>b-a)
// console.log(arr);


// -------------------------------------------------------

// flat():- ye method array ke andar array ko ek hi level pe le aata hai


// const arr = [10,30,50,[40,90,[60,19,99],11],80,100]
// console.log(arr[3]);
// console.log(arr[3][2]);
// console.log(arr[3][2][1]);

// // abhi array ke andar array hai usko hum nested array bolte hai confusing lag raha
// // flat method:- ye method array ke andar array ko ek hi level pe le aata hai

// const flattedarray = arr.flat()  // ye method original array me koi changes nahi karta hai
// console.log(arr.flat());  // ye method array ke andar array ko ek hi level pe le aata hai

// const a = arr.flat(2)  //ye do level me array ko flated kara
// console.log(a);

// jab na pata ho ki kitne level me array ko flated karna hai to hum Infinity ka use karte hai

// const a = arr.flat(Infinity)  //ye do level me array ko flated kara
// console.log(a);



