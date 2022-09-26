let myNode = document.getElementById("p1");

//parentNode
let ptNode = myNode.parentNode;
console.log(ptNode); //<div id="wrap"></div>
console.log(`parentNode: ${ptNode}`); //parentNode: [object HTMLDivElement]
ptNode.style.color = "blue"; // 자식들 상속 받음

//////////////////////////////////////////////
//previousSibing
let prevNode = myNode.previousSibling;
console.log(`prevNode: ${prevNode}`); //prevNode:[object Text] 줄바꿈을 하나의 공백으로 인식해서 Text로 나옴

prevNode = prevNode.previousSibling;
console.log(`prevNode: ${prevNode}`); //[object HTMLParagraphElement]

///////////////////////////////////////////////////
//nextSibling
let nextNode = myNode.nextSibling;
console.log(`nextNode: ${nextNode}`); //nextNode: [object Text]

nextNode = nextNode.nextSibling;
console.log(`nextNode: ${nextNode}, ${nextNode.innerText}`); //nextNode: [object HTMLParagraphElement], content2

///////////////////////////////////////////////////
//previousElementSibling
let prevEleNode = myNode.previousElementSibling; //내 앞에 있는 요소의 이웃
console.log(`prevEleNode: ${prevEleNode}, ${prevEleNode}`);

/////////////////////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode: ${nextEleNode}, ${nextEleNode.innerText}`); //nextEleNode: [object HTMLParagraphElement], content2

/////////////////////////////////////////////////////
//childNodes
let divNode = document.getElementById("wrap");
console.log(`divNode:${divNode}`); //divNode:[object HTMLDivElement]

let divChildesNode = divNode.childNodes;
console.log(`divChildesNode = ${divChildesNode}`); //divChildesNode = [object NodeList]
console.log(divChildesNode); //NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]

/////////////////////////////////////////////////////////
//children
let divChildren = divNode.children;
console.log(`divChildren = ${divChildren}`); //divChildren = [object HTMLCollection]
console.log(divChildren); //HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
console.log("----");
console.log(divChildren[0]); //<p id="p1">content1</p>
console.log(divChildren.item(0)); //<p id="p1">content1</p>
console.log(divChildren.namedItem("p1")); //<p id="p1">content1</p>

/////////////////////////////////////////////////////////
//firstChild, firstElementChild
let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
console.log(aNode); //#text

aNode = pNode.firstElementChild;
console.log(aNode); //<img src="images/gosu.jpg" alt="영화배우 고수"></img>

////////////////////////////////////////////
//getAttribute("속성명"), 객체.setAttribute("속성명","값")
//객체.속성명 , 객체.속성명 = "값"
let aAttrNode = aNode.getAttribute("src");
console.log(aAttrNode); //images/gosu.jpg

aAttrNode = aNode.src;
console.log(aAttrNode); //http://127.0.0.1:5500/images/gosu.jpg

aNode.setAttribute("title", "스타배우");
console.log(aNode.getAttribute("title"));

aNode.id = "imgGosu";
console.log(aNode.id);
