// js034_dom.js
let hNode = document.getElementById("selector");
console.log(hNode, typeof hNode);

let hId = document.querySelector("#selector");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length); //4
console.log(pNode[0], pNode.item(0)); //두가지로 접근가능
console.log(pNode[0].innerText); //content1

pNode[0].style.backgroundColor = "blue"; //스타일 적용

function process() {
  alert("dd");
  let fname = document.frm.fname;
  console.log("fname:", fname);
  console.log(fname.value);
  console.log(fname.defaultValue);
  //   document.write(fname); [object HTMLInputElement] 가져온 객체 타입
  return false;
}
