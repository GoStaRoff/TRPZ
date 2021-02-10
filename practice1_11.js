const prompt = require("prompt-sync")();

const seconds = (total) => total % 60;
const perimetr = (side, count) => side * count;
const FBF = (n) => {
  for (let i = 1; i < n; i++) {
    let log = "";
    if (n % 3 === 0) log += "fizz";
    if (n % 5 === 0) log += "buzz";
    console.log(log);
  }
};
const calculate = (a, b, c) => (a + b + c) / 3;
const isDivisibleIF = (n, x, y) => {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else return false;
};
const isDivisibleTERN = (n, x, y) =>
  n % x === 0 ? (n % y === 0 ? true : false) : false;
const isDivisibleWithout = (n, x, y) => n % x === 0 && n % y === 0;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const arrayTask = (n) => {
  let arr = new Array(n);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = getRandomInt(0, 20);
    sum += arr[i];
    if (arr[i] % 2 !== 0) console.log(arr[i]);
  }
  console.log(sum);
  console.log(sum / n);
  console.log(Math.max(arr));
  console.log(Math.min(arr));
};
const array2D = () => {
  let arr = [[], [], [], [], []];
  for (let i = 0; i < 5; i++) {
    let log = "";
    for (let j = 0; j < 5; j++) {
      arr[i][j] = getRandomInt(-20, 20);
      log += arr[i][j];
    }
    console.log(log);
  }
  for (let i = 0; i < 5; i++) {
    let log = "";
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] < 0) arr[i][j] = 0;
      else arr[i][j] = 1;
      log += arr[i][j];
    }
    console.log(log);
  }
};

//const a = Number(prompt("Enter a"));
//const b = Number(prompt("Enter b"));

const Add = (a, b) => a + b;
const Sub = (a, b) => a - b;
const Mul = (a, b) => a * b;
const Div = (a, b) => (b === 0 ? 0 : a / b);

const MagicNumber = (a) => {
    a<0?console.log("Negative"):console.log("Positive");
    
}
