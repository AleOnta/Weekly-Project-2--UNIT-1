/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("------------------------------ EX. N. 1 ------------------------------");
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("------------------------------ EX. N. 2 ------------------------------");

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("------------------------------ EX. N. 3 ------------------------------");

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("------------------------------ EX. N. 4 ------------------------------");

const fromIndex = pets.indexOf("redfish");
const toIndex = 3;
const element = pets.splice(fromIndex, 1)[0];

pets.splice(toIndex, 0, element);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("------------------------------ EX. N. 5 ------------------------------");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const licensePlate = "FG " + i + (i + 1) + (i + 2) + " TN";
  cars[i].licenseplate = licensePlate;
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("------------------------ EX. N. 6 first part -------------------------");

cars.push({
  brand: "Toyota",
  model: "Yaris",
  color: "gray",
  trims: ["hybrid", "X-F1", "nice-car"],
  licenseplate: "FG 567 TN",
});

console.log(cars);
console.log("------------------------ EX. N. 6 second part -------------------------");

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("------------------------------ EX. N. 7 ------------------------------");

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("------------------------------ EX. N. 8 ------------------------------");
for (let i = 0; i < cars.length; i++) {
  const carColor = cars[i].color.split("");
  if (carColor[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("------------------------------ EX. N. 9 ------------------------------");

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let i = 0;

while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("------------------------------ EX. N. 10 ------------------------------");

const charactersArray = ["g", "n", "u", "z", "d"];
const numericCharactersArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const element = charactersArray[i];
  switch (element) {
    case "a":
      numericCharactersArray.push(1);
      break;
    case "b":
      numericCharactersArray.push(2);
      break;
    case "c":
      numericCharactersArray.push(3);
      break;
    case "d":
      numericCharactersArray.push(4);
      break;
    case "e":
      numericCharactersArray.push(5);
      break;
    case "f":
      numericCharactersArray.push(6);
      break;
    case "g":
      numericCharactersArray.push(7);
      break;
    case "h":
      numericCharactersArray.push(8);
      break;
    case "i":
      numericCharactersArray.push(9);
      break;
    case "l":
      numericCharactersArray.push(10);
      break;
    case "m":
      numericCharactersArray.push(11);
      break;
    case "n":
      numericCharactersArray.push(12);
      break;
    case "o":
      numericCharactersArray.push(13);
      break;
    case "p":
      numericCharactersArray.push(14);
      break;
    case "q":
      numericCharactersArray.push(15);
      break;
    case "r":
      numericCharactersArray.push(16);
      break;
    case "s":
      numericCharactersArray.push(17);
      break;
    case "t":
      numericCharactersArray.push(18);
      break;
    case "u":
      numericCharactersArray.push(19);
      break;
    case "v":
      numericCharactersArray.push(20);
      break;
    case "z":
      numericCharactersArray.push(21);
      break;
  }
}

console.log(charactersArray);
console.log(numericCharactersArray);
