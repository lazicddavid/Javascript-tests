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
console.log("rezultat je:", rezultat);

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
//pogledaj lekciju type coercion
const a = 2;
const b = "2";
console.log(a == b);

const konacanRezultat = divide(14, 0);
console.log(konacanRezultat);
console.log("----------");

function isEmptyString(text) {
  if (text === "") {
    console.log("Inut je prazan string!");
  } else {
    console.log("Sve je ok!");
  }
}

isEmptyString("zdravo!");
isEmptyString("");
console.log("----------");
//how to check if string ends with
function checkEndsWithDot(text) {
  if ((ends = ".")) {
    console.log("Recenica se pravilno zavrsava tackom.");
  } else {
    console.log("Recenica se ne zavrsava tackom");
  }
}

checkEndsWithDot("Danas je suncan dan.");

console.log("----------");

function greetByTime(time) {
  if (time >= 5 && time <= 11) {
    console.log("Dobro jutro");
  } else if (time >= 12 && time <= 17) {
    console.log("Dobar dan");
  } else if (time >= 18 && time <= 21) {
    console.log("Dobro vece");
  } else {
    console.log("Laku noc");
  }
}

greetByTime(7);
greetByTime(12);
greetByTime(10);
greetByTime(22);
console.log("----------");

function logIn(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    console.log("Inputi moraju biti stringovi");
    return;
  }

  if (username === "admin") {
    return true;
  } else if (username === "monkey" && password === "123") {
    return true;
  } else if (username === "moomoo" && password === "farm") {
    return true;
  } else {
    return false;
  }
}
const test = logIn("hello", "meow");
const test2 = logIn("admin", "lol");
const test3 = logIn("monkey", "123");
const test4 = logIn("moomoo", "farm");
const test5 = logIn("moomoo", "moo");

console.log(test, test2, test3, test4, test5);

console.log("----------");

console.log();
padding: 20pageXOffset;
margin: 0;