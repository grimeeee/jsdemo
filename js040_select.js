document.frm.onsubmit = () => {
  let optFruit = document.frm.fruit;
  console.log(optFruit);

  let optSelect = optFruit.selectedIndex + " " + optFruit.value;
  console.log(`${optSelect}`);

  return false; //서버에 페이지요청하는걸 진행X
};
