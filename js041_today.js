let chk = true;
let today = document.getElementsByTagName("button")[0];
today.onclick = process;

function process() {
  let date = new Date();
  let ptoday = document.getElementsByTagName("p")[0];
  if (chk) {
    ptoday = today;
    chk = false;
    ptoday = document.querySelector("#ptoday");
    console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }
}
