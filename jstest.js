let a = 2;

function squareNumber() {
  console.log(a * a);
}
squareNumber();
console.log("----------");
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
const rezultat = add(10, 5);
console.log(rezultat);

console.log("----------");

function substract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

console.log(substract(10, 2));

console.log("----------");

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
const ishod = multiply(20, 4);

console.log(ishod);
console.log("----------");

function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    console.log("Ne mozes deliti sa nulom");
    return;
  }
  return firstNumber / secondNumber;
}

/*const konacanRezultat = divide(50, 25);
console.log(konacanRezultat);*/
const konacanRezultat = divide(14, 0);
console.log(konacanRezultat);
console.log("----------");
