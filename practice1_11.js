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
  for (let i = 0; i < arr.length; i++) {
    arr[i] = getRandomInt(0, 20);
  }
  console.log(Math.max(arr));
  console.log(Math.min(arr));
};
