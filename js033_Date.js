//js033_Date.js

let date = new Date(); //2022-09-26T01:10:32.477Z
console.log(date);

console.log(date.getFullYear()); //년도
console.log(date.getMonth() + 1); //월__1월달을 0으로 처리하므로 가지고 올때는  +1 해줘야함
console.log(date.getDate()); //일
console.log(date.getDay()); //요일 0:일요일 6토요일
