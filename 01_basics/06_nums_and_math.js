// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNum = 154.2367
// console.log(otherNum.toPrecision(2));

// const anotherNum = 123456780
// console.log(anotherNum.toLocaleString());
// console.log(anotherNum.toLocaleString('en-IN'));


// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// Maths Basics Functions 

// console.log(Math);
// console.log(Math.abs(-56));
// console.log(Math.round(5.9));
// console.log(Math.ceil(5.9));
// console.log(Math.floor(5.9));
// console.log(Math.min(3,8,89,54,36));
// console.log(Math.max(3,8,89,54,36));


// Maths random function range(0,1) & how can avoid0 value 

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log((Math.random()  * 10) + 1);
// console.log(Math.floor((Math.random() * 10) + 1));
// console.log(Math.ceil((Math.random() * 10) + 1));

// Maths random function by max and min value 

const min = 1 
const max = 6

// To avoid zeo from floor i use ceil 
console.log(Math.ceil((Math.random() * ((max - min) + 1))));

console.log(Math.floor((Math.random() * (max - min + 1) + min)));