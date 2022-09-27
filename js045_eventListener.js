let btn = document.querySelector("button");

// btn.onclick = () => {
//   alert("click1");
// };

// btn.onclick = () => {
//   alert("click2");
// };

function click1() {
  alert("click1");
}

function click2() {
  alert("click2");
}

//이벤트 전파 => true : capturing, false : bubbling
btn.addEventListener("click", click1, false); //(click이라는 이벤트가 발생이 되면 , 수행될 함수, 이벤트 전파)
btn.addEventListener("click", click2, false);
