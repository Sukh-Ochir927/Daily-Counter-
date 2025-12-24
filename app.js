const numbers = document.querySelector("#numbers");

const body = document.querySelector("#dark");

const container = document.querySelector("#container");

const minus = document.querySelector("#minus");

const sign = document.querySelector("#sign");

const icons = document.querySelector("#icons");

let num = 0;

const increase = () => {
  num += 1;
  renderNum();
};

const decrease = () => {
  if (num > 0) {
    num -= 1;
  }
  renderNum();
};

const reset = () => {
  num = 0;
  renderNum();
};

const renderNum = () => {
  numbers.innerHTML = num;
  icons.innerHTML = moon;
  theme();
};

let moon = `<i onclick="theme()" class="fa-solid fa-moon"></i>`;

const theme = () => {
  moon = `<i id="icons" onclick="toggle()" class="fa-solid fa-sun"></i>`;
  toggle();
  renderNum();
};

const toggle = () => {
  container.classList.toggle("light");
};
