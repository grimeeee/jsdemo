//js028_array.js

let scores = [100, 90, 100];
console.log(scores); //[100,90,100] Array{3}

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined
console.log(scores.length); //3

let person = ["John", "Doe", 26, true];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}
/* 
John string
Doe string
26 number
true boolean
*/

let student = ["홍길동", [100, 90, 20]];
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}
/* 
홍길동 string
[100, 90, 20] object
*/

let cars = new Array("Sasb", "Volvo", "BMW"); //cars=[]
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}
/*
Sasb string
Volvo string
BMW string
*/

let color = [];
console.log(color.length); //0
color[0] = "red";
console.log(color.length); //1
color.push("green");
console.log(color.length); //2
color.push(759);
console.log(color.length); //3
color[8] = "blue";
console.log(color.length); //9
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}

//3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length : ${point.length}`); //3

//2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(shape.length);
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}

shape[2] = 50; //추가
console.log(shape[1]); //요소 가져오기
console.log(shape.length); //갯수 조회

/*
for()
for ~ in : index
for ~ of : element
*/

// forEach() : 배열 전용 메소드
// 배열.forEach(function(element[, index]){수행할 문장}); 요소를 순차적으로 받아서 문장수행 index, element 둘 다 받을 수 있음.
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});

shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});

let choice = "javascript";
//문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
// TypeError: choice.forEach is not a function
// choice.forEach(function (element, index) {
//   console.log(`${index} : ${element}`);
// });

//배열명.map(callback);  __요소에 있는 개수 그대로 return!
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});

console.log(`res : ${res}`); //res : 8,18,32,50

const sqt = numbers.map(Math.sqrt);
console.log(`sqt : ${sqt}`); //sqt : 2,3,4,5

//reduce 하나의 결과값 리턴
function getSum(total, num) {
  //total = 누적, num = 요소
  return total + num;
}
const sum = numbers.reduce(getSum);
console.log(`sum : ${sum}`); //sum : 54

const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 18; //논리값이여야한다.
});

console.log(`per : ${per}`); //per : 32,33,40
