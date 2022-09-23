//js025_Number.js

let data = 10;
let fData = Number(data);
let nObj = new Number(data); //내부 객체
console.log(`data=${typeof data}`); //data=number
console.log(`fData=${typeof fData}`); //fData=number
console.log(`nObj=${typeof nObj}`); //nObj=object
console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

Number.prototype.toString = function () {};

console.log(data + fData); //number + nember = 20
console.log(data + nObj); //number + object = 20

//Number -> number
//object -> promitive
console.log(typeof nObj.valueOf()); //number
console.log(typeof new String("javascript").valueOf()); //object ---(+valueOf())---> string

console.log(parseInt("10")); //10

//let val = '10';
// let val = "10.3";
// let val = "A";
// let val = "10A";
let val = "A10";
console.log(val + val); //1010 -> 10.310.3 -> AA -> 10A10A -> A10A10

//Number( ), perseInt( )
console.log(Number(val) + Number(val)); //////////20 -> 20.6 -> NaN -> NaN -> NaN
console.log(parseInt(val) + parseInt(val)); //////20 -> 20   -> NaN -> 20 -> NaN
console.log(parseFloat(val) + parseFloat(val)); //20 -> 20.6 -> NaN -> 20 -> NaN

console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NaN); //NaN
