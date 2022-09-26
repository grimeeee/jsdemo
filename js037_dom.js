let pNode = document.getElementById("wrap");
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`); //1 P null

//속성명
let pAttr = pNode.attributes;
console.log(pAttr); //NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

//id
console.log(pAttr[0]); //id='wrap'
console.log(pAttr.id); //id='wrap'
console.log(pAttr.length); //2
console.log(
  `${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`
); //2, id, wrap

let pIdAttr = pNode.getAttribute("id"); //속성값을 가져옴
console.log(pIdAttr); //wrap

let textNode = pNode.firstChild;
console.log(textNode); //"content"

console.log(
  `${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`
); //3, #text, content

///////////////////////////////////////////////
//innerText, innerHTML : 요소의 컨텐츠

let bodyNode = document.getElementsByTagName("body")[0]; //여러개를 리턴하므로 인덱스 지정해서 가져와야 함.
console.log(bodyNode.innerText); //content__body에 있는 모든 텍스트 리턴

console.log(bodyNode.innerHTML); //body에 있는 모든 HTML 자원들(태그까지) 가져옴

//////////////////////////////////////////////
//value
let fname = document.querySelector("#fname");
console.log(fname.value); //홍길동
