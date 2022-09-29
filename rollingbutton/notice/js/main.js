//첫 번째 배너를 제외하고 숨김
let wrapList = document.querySelectorAll("#roll_banner_wrap dd");
console.log(wrapList);

wrapList.forEach((element, index) => {
  element.style.display = "none";
});

wrapList[0].style.display = "block";

//첫번째 버튼의 <a>를 저장
let onBtn = document.querySelector("#roll_banner_wrap td a");

//1~4버튼을 클릭할때
let bannerList = document.querySelectorAll("#roll_banner_wrap dt a");
bannerList.forEach();
