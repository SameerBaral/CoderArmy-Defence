// Day_05    Number and Math Object Random Object


// Number:-

// let a = 10;
// let b = 345.6821;
// let c = b.toFixed(1);   // toFixed() method returns a string
// console.log(c);
// console.log(typeof c);
// console.log(b);

// console.log(b.toPrecision(5));   //kitne digits chahiye precision ke liye ye bhi string return karta hai

// console.log(b.toString());  //ye number ko string me convert kar deta hai


// aise number banaoge to object treat hoga
// let a = new Number(20); 
// // console.log(a);
// // console.log(typeof a);

// let b = new Number(10);
// console.log(a==b);  //false bcz reference alag hai dono ka object hai na


// same vahi refernce alag hai dono ka object hai na isliye false return karega

// let obj1 = {
//     name: "Rohit",
// }

// let obj2 = obj1;  //same reference hai dono ka isliye true return karega
// console.log(obj1==obj2);

// let obj2 = {
//     name: "Rohit",
// }

// console.log(obj1==obj2);


// Non Primitives are passed by reference and primitives are passed by value

//Non Primitive: Reference base pr compare hote hai
//Primitive: Value base pr compare hote hai

// let a = 10;
// let b = a;
// console.log(a==b);


// Math Object:-

// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);

// console.log(Math.ceil(6.3));    //ceil=> upper value return karega

// console.log(Math.floor(6.3));   //floor=> lower value return karega

// console.log(Math.log10(20));

// console.log(Math.pow(2,3));   //2 ki power 3

// console.log(Math.sqrt(16));   //square root

// console.log(Math.max(20,11,234,10));


// =================================================================


// Math.random(): random number generate karta hai 0 se 1 ke beech me 1 include nahi hota hai 0 include hota hai

// [0,1): It will generate random number between 0 and 1 , where 0 is included and 1 will not be included

// minimum=0.  aur maximum= 0.9999999999999999  aisa rhega random number generate hoga

// console.log(Math.random());

// 10 se multiply karne se 0 to 9.99999999999999 ke beech me random number generate hoga

// console.log(Math.random()*10);


// ab 0-9.99999999999999 ke beech me random number generate hoga to usme se floor karne se 0-9 ke beech me random number generate hoga

// console.log(Math.floor(Math.random()*10));

// 0-9 ke beech number generate kar raha humko 1-10 ke beech me number chahiye to 1 add kar denge

// console.log(Math.floor(Math.random()*10)+1);  


// 1-6 ke beech number geneate karo
// abhi yha 6 se multiply kara bcz 6 diffrent number chiye na 6 se multiply karne se 0-5.99999999999999 ke beech me random number generate hoga aur floor karne se 0-5 ke beech me number generate hoga aur 1 add karne se 1-6 ke beech me number generate hoga

// jitne numbers chiye utne se multiply karenge 

// console.log(Math.floor(Math.random()*6)+1);


// 15-25 tak ke random number generate kare

// console.log(Math.floor(Math.random()*11)+15);


//ye formula hai random number generate karne ka
// Math.floor(Math.random()*(max-min+1))+min;  

