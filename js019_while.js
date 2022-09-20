//js019_while.js

/*
while(조건식){
    실행문;
}
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("========================");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}
console.log("========================");

/*
do{
실행문;
}while(조건식);
for문은 처음부터 false이면 문장실행 안 할 수 있는데, 
do while문은 적어도 한 번 문장수행한다.
*/

do {
  console.log("고객님 주문하시겠습니까? (y/n)");
  let input = prompt("입력");
} while (input == "y");
