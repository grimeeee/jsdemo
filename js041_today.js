let today = document.getElementsByTagName("button")[0];
today.onclick = function setInnerHTML() {
  let date = new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  let hh = date.getHours();
  let mn = date.getMinutes();
  let ss = date.getSeconds();

  let element = document.getElementsByTagName("p")[0];
  element.innerHTML =
    yyyy + "-" + mm + "-" + dd + "- " + " " + hh + ":" + mn + ":" + ss;
};
