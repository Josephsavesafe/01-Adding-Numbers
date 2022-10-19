function add(numberOne, numberTwo) {
  let sum = 0;
  if (numberOne === "" || numberTwo === "" || numberOne === null || numberTwo === null) {
    return "Invalid Operation";
  }
  else{
    sum = Number(numberOne) + Number(numberTwo);
    return String(sum);
  }
}

console.log(add("111", "111"));
console.log(add("10", "80"));
console.log(add("", "20"));

console.log(typeof add("111", "111"));
console.log(typeof add("10", "80"));
console.log(typeof add("", "20"));

