//js026_String.js

let data = "It`s alright";
console.log(data);

//length : 문자열의 길이
console.log(data.length);

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1. substring(start, end);
2. substr(start, length);
3. slice(start, end);
*/

data = "Apple, Banana, Kiwi";
console.log(`substring: ${data.substring(7, 13)}`); // 7 인덱스 부터 13 인덱스 미만
//substring: Banana
console.log(`substring: ${data.substring(-13, -6)}`);
//substring()은 음수값을 지원하지 않는다.

console.log(`substr: ${data.substr(7, 6)}`); //Banana
console.log(`substr: ${data.substr(-12, 6)}`); //Banana

console.log(`slice: ${data.slice(7, 13)}`); //Banana
console.log(`slice: ${data.slice(-12, -6)}`); //Banana

//문자열 변경
//replace('찾을 문자열', '바꿀 문자열')
//i: 대소문자 구분없음, g: 모든 문자열
console.log(`replace: ${data.replace("Banana", "Grape")}`); //Apple, Banana, Kiwi

console.log(data);

//Mr Blue has a red houses and a blue car
data = "Mr Blue has a blue houses and a blue car";
console.log(data.replace(/blue/, "red"));

//Mr Blue has a red houses and a red car
data = "Mr Blue has a blue houses and a blue car";
console.log(data.replace(/blue/g, "red"));

// Mr red has a blue houses and a blue car
data = "Mr Blue has a blue houses and a blue car";
console.log(data.replace(/blue/i, "red"));

//Mr red has a red houses and a red car
data = "Mr Blue has a blue houses and a blue car";
console.log(data.replace(/blue/gi, "red"));

data = "Hello World";
console.log(`toUpperCase() : ${data.toUpperCase()}`); //HELLO WORLD
console.log(`toLowerCase() : ${data.toLowerCase()}`); //hello world

let data2 = "javascript";
console.log(`concat() : ${data.concat(data2)}`); //Hello Worldjavascript
console.log(`concat() : ${data.concat(" ", data2)}`); //Hello World javascript

console.log(`charAt() : ${data.charAt(0)}`); //H
console.log(`charAt() : ${data.charCodeAt(0)}`); //72 (unicode value)

data = "a,b,c,d,e";
//split() : 문자열을 나누어 준다.
let arr = data.split(","); //배열로 리턴 해준다.
for (let i of arr) console.log(i);

data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
console.log(`match : ${res} ${typeof res} ${res instanceof Array}`); //blue,blue object true

res = data.match(/red/g);
console.log(`match : ${res} ${typeof res} ${res instanceof Array}`); //null object false

//search( ) : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//            일치하는 문자열이 없으면 -1을 리턴한다.

res = data.search(/blue/g);
console.log(`search(): ${res}`); //14

res = data.search(/red/g);
console.log(`search(): ${res}`); //-1

data = "Mr Blue has a blue house and a blue car";

// indexOf( ) : 문자열의 인덱스를 리턴

console.log(data.indexOf("M")); //0
console.log(data.indexOf("B")); //3

let position = data.indexOf("blue");
console.log(data.indexOf("blue", position + 1)); //31

data = "Mr Blue has a blue house and a blue car";
let pos = -1;
// do {
//   pos = pos + 1;
//   pos = data.indexOf("blue", pos);
//   if (pos != -1) console.log(pos);
// } while (pos != -1);

for (let i = 0; i < data.length; i += 1) {
  i = data.indexOf("blue", i);
  if (i == -1) break;
  console.log(i);
}

//repeat()
let text = "korea";
console.log(text.repeat(10));

text = "*";
console.log(text.repeat(10));

let text2 = "        korea         ";
console.log(text2.length);
console.log(text2.trim().length);
