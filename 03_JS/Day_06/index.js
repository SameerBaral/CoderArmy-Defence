// Day-06     String and date

// Notes =>  https://app.notion.com/p/Lecture-06-String-and-Date-27e3a78e0e22803ca796f1eef30bc86b



// const str1 = "Sameer";
// const str2 = 'Sameer Baral';
// const str3 = `My name is ${str1} and my full name is ${str2}`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// console.log(str1.length);
// console.log(str1[1]);
// str1[2] = 'M'
// console.log(str1);

// ------------------------------------------------------

// uppercase and lowercase:- ye original string ko change nahi karta hai, ye sirf ek new string return karta hai bcz strings are immutable in js

// const str = 'Sameer Baral';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// ------------------------------------------------------

// indexOf:- ye hume index return karta hai, agar string me wo substring exist nahi karti hai to ye -1 return karta hai, agar present hogi to ye uska index return karega first occurrence hi return karta hai ye

// const str = "Hello Coder Army Coder";
// console.log(str.indexOf('Cod'));
// // console.log(str.indexOf('coder'));
// console.log(str.lastIndexOf("Coder"));
// console.log(str.includes('Coder'));

// -----------------------------------------------------

// slice:- ye hume ek new string return karta hai, ye original string ko change nahi karta hai, ye start index se end index tak ki string ko return karta hai, end index ko include nahi karta hai
// isme negative index bhi use kar sakte hai, agar negative index use karte hai to ye string ke end se count karega

// const str = "Hello Coder Army Coder";
// console.log(str.slice(2,5));
// console.log(str.slice(3));
// console.log(str.slice(-4));
// console.log(str.slice(-5,-2));

// --------------------------------------------------

// substring:- ye bhi slice ki tarah hi hai, bas ye negative index ko support nahi karta hai, agar negative index use karte hai to ye 0 consider karega
// substring me agar negative index use karte hai to ye 0 consider karega

// const str = "Hello Coder Army Coder";
// console.log(str.substring(2,5));
// console.log(str.substring(3));
// console.log(str.substring(-4));
// console.log(str.substring(-5,-2));


// ------------------------------------------------------

// concatination:- ye do ya do se jyada strings ko join karne ke liye use hota hai, ye original string ko change nahi karta hai, ye ek new string return karta hai

// const a = "Sameer";
// const b = "Baral";
// const c = a.concat(" ", b);
// console.log(c);

// const c = a + " " + b;
// console.log(c);


// console.log(20+"sameer");


// ------------------------------------------------------

// replace and replaceAll: string immutable hai to usme koi changes nahi hoga

// const str = "Hello Coder Army Coder";
// console.log(str.replace("Coder", "Programmer"));
// console.log(str.replaceAll("Coder", "Programmer"));


// ------------------------------------------------------

// trim:- ye string ke starting aur ending me jo whitespace hai usko remove karta hai, ye original string ko change nahi karta hai, ye ek new string return karta hai

// const str = "  Sameer Baral  ";
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());


// ------------------------------------------------------

// split:- ye string ko ek array me convert karta hai, ye original string ko change nahi karta hai, ye ek new array return karta hai

// const str = "Hello Coder Army Coder";
// console.log(str.split(" "));

// const str = "Sameer,Mohit,Rohit,Ankit";
// console.log(str.split(","));





// =====================================================================


// Date

// const now = new Date();
// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());

//for day of the week, 0 for Sunday, 1 for Monday, 2 for Tuesday, 3 for Wednesday, 4 for Thursday, 5 for Friday, 6 for Saturday
// console.log(now.getDay());  
// console.log(now.getDate());
// console.log(now.getFullYear());

// 0 for January, 1 for February, 2 for March, 3 for April, 4 for May, 5 for June, 6 for July, 7 for August, 8 for September, 9 for October, 10 for November, 11 for December
// console.log(now.getMonth());  
// console.log(now.getHours());
// console.log(now.getSeconds());


// days: Mon-tue(1 based)
// Months: Jan-Dec(0 based)
// aise bhi ap apna custom date bana skte ho
// const now = new Date(2026,8,21,10,51,30,123); // 21st September 2026, 10:51:30.123
// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());


// now me current time in milliseconds milta hai, ye 1st January 1970 se ab tak ke milliseconds ko return karta hai
// const now = Date.now();     //1790011618946
// const dates = new Date(now)
// console.log(dates.toString());