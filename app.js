const numbers = document.querySelector("#numbers");

const body = document.querySelector("#dark");

const container = document.querySelector("#container");

const minus = document.querySelector("#minus");

const sign = document.querySelector("#sign");

console.log(sign);

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

const minusIcon = () => {
  if (num === 0) {
    console.log(num);

    minus.classList.add("display-block");
  }
};
minusIcon();

const renderNum = () => {
  numbers.innerHTML = num;
  minusIcon();
};

const reset = () => {
  num = 0;

  renderNum();
};

const toggle = () => {
  container.classList.toggle("light");
};

// 2 dark bas ligth gesen 2 modetoi baina.
// Tedgeeriig sar bolon narnii iconoor tolooluulj.
// Default mode n har, saaral ongote bogood, default mode deer baih uyd UI deer narnii icon bairlana.
// Tuhain narnii icon deer darah uyd tuhain icon sar bolon oorchlogdoj, ligth mode ruu shiljih buyu,
// Tsagaaan tsaivari ongotei boloh ba ter uyd UI deer haragdah icon sarnii icon bolon oorchlogdnoo.
