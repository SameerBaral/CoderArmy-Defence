// Day-08               Object in Javascript

// object: key-value pair

// const user = {
//     name: "Sameer",
//     age: 22,
//     emailId: "sameer@gmail.com",
//     amount: 1000,
//     "home address": "Kanpur",
// }

// CRUR operation: Create, Read, Update, Delete

// console.log(user);
// console.log(typeof user);
// console.log(user.age);

// ye property agar nahi hoga to create kar dega , hoga to update kar dega
// user.adhaar = 123456789012;

// console.log(user);

// behind the scenes vo keys ko bhi string me convert kar ke store karta hai

// console.log(user["name"]);


// aise jo spaces lagke hoge property name me unko access karne ke liye bracket notation ka use karna padta hai, dot notation ka use nahi kar sakte

// console.log(user["home address"]);



// const user = {
//     name: "Sameer",
//     age: 22,
//     emailId: "sameer@gmail.com",
//     amount: 1000
// }

// const user2 = user; // user2 is pointing to the same object as user

// user2.name = "Rohit"; // changing the name property of user2 will also change the name property of user

// console.log(user);
// console.log(user2);

// -------------------------------------------------

// sare keys ko array me convert kar ke return karega
// console.log(Object.keys(user));


// sare values ko array me convert kar ke return karega
// console.log(Object.values(user));

// ab entries method se hume key-value pair ka array milega, jisme har ek key-value pair ek array ke form me hoga
// console.log(Object.entries(user));

// ------------------------------------------------------

// for in loop: ye loop object ke sare keys ko iterate karega, aur hume key milegi, uske corresponding value ko access karne ke liye hume bracket notation ka use karna padega

// for (let keys in user) {
//     console.log(keys, user[keys]);
// }


// user.keys   user["name"]  user["age"]


// ------------------------------------------------------

// Desructuring of object:-

// const user = {
//     name: "Sameer",
//     age: 22,
//     emailId: "sameer@gmail.com",
//     amount: 1000
// }

// const name = user.name;
// const age = user.age;
// console.log(name,age);

// ---------------------------------------------------
// Object Destructuring

// const {name,age} = user;
// console.log(name,age);

// desructuring ke time pe keys ka name ko hum apne hisab se change kar sakte hai, but value same rahegi
// const {name:useName,age:useAge} = user;
// console.log(useName,useAge);


// ----------------------------------------------------

// first do value nikal do
// const arr = [10,20,40,90,11];
// const [first,second] = arr;
// console.log(first,second);



// -------------------------------------------------------

// const user = {
//     name: "Sameer",
//     age: 22,
//     emailId: "sameer@gmail.com",
//     amount: 1000
// }

// forof loop array me laga skte hai, object me nahi laga skte, kyuki object iterable nahi hota, but hum object ke keys ko array me convert kar ke forof loop me laga skte hai

// const temparr = Object.keys(user);
// console.log(temparr);

// for (let keys of Object.keys(user)) {
//     console.log(keys, user[keys]);
// }



// values ko iterate karne ke liye

// const temparr = Object.values(user);
// console.log(temparr);

// for (let values of Object.values(user)) {
//     console.log(values);
// }



// key-value pair ko iterate karne ke liye

// const temparr = Object.entries(user);
// console.log(temparr);

// for (let [key,value] of Object.entries(user)) {
//     console.log(key,value);
// }



// --------------------------------------------------------
// object ke andar function ko bhi bana skte hai, aur usko call bhi kar skte hai

// const user = {
//     name: "Sameer",
//     age: 22,
//     emailId: "sameer@gmail.com",
//     amount: 1000,
//     greeting: function() {
//         console.log(`Hello I am function inside object, my name is ${this.name}`);
//         return 100;
//     }
// }

// Why we use this.name instead of just name in the greeting function?

// this current object ka abhi jaise yha user hai usko reference store kareke rakhta hai, aur iske andar ke properties ko access karne ke liye this keyword ka use karte hai.

// this.name likha bcz this keyword is used to refer to the current object, and we want to access the name property of the current object, which is user in this case. If we just use name without this, it will look for a variable named name in the current scope, which does not exist, and will result in an error. By using this.name, we are explicitly telling JavaScript to look for the name property of the user object.

// user.greeting(); // Hello Sameer

// const val = user.greeting(); // Hello I am function inside object
// console.log(val); // 100



// ------------------------------------------------------

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// // this lagaya kabhi bhi hardcode karke nahi likhna aisa user.name karke nahi likhna, balki this.name likhna chahiye

// const user2 = {
//     name:"Mohan",
//     account:201,
// //      greeting: function(){
// //     console.log(`Strike is coming on 18 october ${this.name}`);
// //     return 20;
// //    }
// }

// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting();
// console.log(va);



// ------------------------------------------------------

// nested object: object ke andar object

// const user = {
//     name: "Sameer",
//     age: 22,
//     emailId: "sameer@gmail.com",
//     address: {
//         city: "Kanpur",
//         state: "UP",
//         pincode: 289007
//     }
// }

// console.log(user);
// console.log(user.address.city);

// const user2 = user; // user2 is pointing to the same object as user

// lekin hum chahte hai ki dono alag alag object ho, to hum spread operator ka use karenge

// const user2 = {...user}; // user2 is a new object
// user2.name = "Ayush"

// -------------  Shallow Copy ---------------------------

// user2.address.city = "Lucknow" // ye dono object ke liye change ho jaega, kyuki address object ke andar hai, aur humne usko spread operator se copy nahi kiya, to dono object ke andar same address object hai

// abhi sirf one level ko hi handel hoga nested object valo ko alag copy nahi banegi, kyuki wo same reference ko point karengi

// nested object ke andar ke object ko bhi alag alag copy karne ke liye hum nested spread operator ka use karenge


// ----------------- Deep Copy--------------------------

// const user2 = structuredClone(user); // ye dono object ke liye alag alag copy ban jaegi, aur dono object ke andar ke nested object bhi alag alag copy ban jaegi

// user2.address.city = "Lucknow" // ye sirf user2 ke liye change ho jaega, user ke liye nahi

// console.log(user);
// console.log(user2);


// array bhi behinde the scence object hi hai


// const user = {
//     name:"Rohit",
//     age:20,
//     0: 100,
//     2: "Mohan",
// }

// const arr = [10,20,30,40];

// {
//     0:10,
//     1:20,
//     2:30,
//     3: 40
// }

// console.log(user);