const numbers = document.querySelector("#numbers");

let num = 0;

const increase = () => {
  num += 1;
  console.log(num);
  renderNum();
};

const decrease = () => {
  if (num > 0) {
    num -= 1;
  }
  renderNum();
};

const renderNum = () => {
  numbers.innerHTML = num;
};

const reset = () => {
  num = 0;
  console.log(num);
  renderNum();
};
