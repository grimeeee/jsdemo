//약관 동의
document.frm.onsubmit = () => {
  //frm에서 submit이벤트가 발생이 되면~

  let admin = document.frm.admin; //약관 동의 체크박스 (html.15)
  if (!admin.checked) {
    //admin이 checked가 안되있으면(= !admin)
    alert("약관에 동의해야 합니다.");
    return false; //서버에 가지 못하도록
  }
};

//전체 선택
document.frm.allCheck.onclick = function () {
  // console.log(this.checked); //현재 이벤트가 발생된 객체 checked라는 속성을 받아옴 선택되어있으면 true 아니면 false

  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll(".checkgroup");
  console.log(checkgroup.length);

  /* 
   //Arrow Function : this는 상위객체인 document.frm.allCheck을 의미함 
  checkgroup.forEach((element) => {
    // console.log(this);
    element.checked = this.checked;
  });
*/
  ///////////////////////////////////////////////////////////////////
  let myThis = this; //document.frm.allCheck 의미
  //Anonymous Function : this는 Window 객체를 의미함
  /* checkgroup.forEach(function (element) {
    // console.log(this);
    element.checked = myThis.checked;
  });
  */
  /////////////////////////////////////////////////////////////////
  //Array.from() : NodeList을 Array로 변경
  /* console.log(`${checkgroup}`);

  let myArray = Array.from(checkgroup);
  console.log(`${myArray}`);

  myArray.map(function (element) {
    //NodeList는 map을 사용할 수 없음. 사용하려면 배열로 변경해야함.
    // console.log(this); //this = Window
    element.checked = myThis.checked;
  });
  */
  ///////////////////////////////////////////////////////////////////
  //ES6 Spread Operator : NodeList을 Array로 변경
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    // console.log(this);
    element.checked = myThis.checked;
  });
};
