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

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

console.log(subtract(10, 2));

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

const konacanRezultat = divide(14, 0);
console.log(konacanRezultat);
console.log("----------");

function isEmptyString(text) {
  if (text === "") {
    console.log("Input je prazan string!");
  } else {
    console.log("Sve je ok!");
  }
}

isEmptyString("zdravo!");
isEmptyString("");
console.log("----------");
//how to check if string ends with / izmenjeno
function checkEndsWithDot(text) {
  if (text.endsWith(".")) {
    console.log("Recenica se pravilno zavrsava tackom.");
  } else {
    console.log("Recenica se ne zavrsava tackom");
  }
}
checkEndsWithDot("Ovo je recenica.");
checkEndsWithDot("Ovo nije recenica");

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

console.log("-------------");
console.log("-------------");
console.log("-------------");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Ne može se deliti sa nulom");
    return;
  }
  return a / b;
}

function operate(a, b, operation) {
  return operation(a, b);
}

console.log(operate(10, 5, add));
console.log(operate(10, 5, subtract));
console.log(operate(10, 5, multiply));
console.log(operate(10, 5, divide));
console.log(operate(10, 0, divide));

console.log("------------");
console.log("------------");

function convertDistance(broj, jedinica) {
  if (jedinica === "km") {
    let km = broj * 1.609;
    console.log(broj + " milja je " + km + " kilometara");
    console.log(`${Broj} milja je${km} kilometara`);
  } else if (jedinica === "m") {
    let milje = broj / 1.609;
    console.log(broj + " kilometara je " + milje + " milja");
  } else {
    console.log("Nepoznata distanca");
  }
}

convertDistance(10, "km");
convertDistance(5, "m");

console.log("------------");
console.log("------------");

function convertToKilometers(broj) {
  console.log(broj + " milja je " + broj * 1.609 + " kilometara");
}

function convertToMiles(broj) {
  console.log(broj + " kilometara je " + broj / 1.609 + " milja");
}

function throwErrorWrongDistance() {
  console.log("Nepoznata distanca");
}

function convertDistance(broj, tip) {
  if (tip === "km") {
    convertToKilometers(broj);
  } else if (tip === "m") {
    convertToMiles(broj);
  } else {
    throwErrorWrongDistance();
  }
}

convertDistance(20, "km");
convertDistance(14, "m");
convertDistance(7, "d");

console.log("-----------------");

let ime = "Marko";
let prezime = "Markovic";
let godine = 32;
let plata = 3000;
let godinaZaposlenja = 2004;
let poslednjaPovisica = 2020;
let zemlja = "Crna Gora";
let ulica = "Vukosava Bozovica 25";
let brojTelefona = 069620720;

function getInfo() {
  console.log(`
Ime i prezime: ${ime} ${prezime}
Godine: ${godine}
Plata: ${plata} EUR
Godina zaposlenja: ${godinaZaposlenja}
Poslednja povisica: ${poslednjaPovisica}
Adresa: ${ulica}, ${zemlja}
Broj telefona: ${brojTelefona}
`);
}

getInfo();

console.log("-----------------");

function calculateWorkYears() {
  return new Date().getFullYear() - godinaZaposlenja;
}
let staz = calculateWorkYears();
console.log(`Zaposleni radi u firmi ${staz} godina.`);

function calculateYearsUntilRetreat() {
  return 65 - godine;
}

let preostaloGodina = calculateYearsUntilRetreat();
console.log(`Do penzije mu je ostalo još ${preostaloGodina} godina.`);

console.log("-----------------");

function getSalary() {
  console.log(`plata je ${plata} evra`);
  return plata;
}

getSalary();
console.log("-----------------");

function setSalary(novaPlata) {
  plata = novaPlata;
  console.log(`nova plata: ${plata}  evra`);
}

setSalary(3700);
console.log("-----------------");

function setLastYearsRaise(novaGodina) {
  poslednjaPovisica = novaGodina;
}

function getLastYearRaise() {
  console.log(`poslednja povisica je bila ${poslednjaPovisica} godine`);
  return poslednjaPovisica;
}

setLastYearsRaise(2023);
getLastYearRaise();
console.log("-----------------");

function calculateRaise() {
  let povisica = plata * 0.15;
  console.log(`Povisica iznosi ${povisica} evra`);
  return povisica;
}
calculateRaise();
console.log("-----------------");

function isEligibleForRaise() {
  let trenutnaGodina = new Date().getFullYear();
  let razlika = trenutnaGodina - poslednjaPovisica;

  if (razlika > 1) {
    console.log("Ima pravo na povisicu.");
    return true;
  } else {
    console.log("nema prav na povisicu.");
    return false;
  }
}
isEligibleForRaise();

console.log("-----------------");

function raiseSalary() {
  if (isEligibleForRaise()) {
    let povisica = plata * 0.15;
  }
}

console.log();
<h3>maian title</h3>;
