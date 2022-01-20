console.log("Ciao a tutti!");
//verrà viasualizzata nella console ma non influirà sulla pagina web
// prompt("ciao a tutti!")
//aprirà una finestra con il testo scritto
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 ** 2);
console.log(1 % 2);
console.log(1e27);
//indica la nozione scientifica ovvero 1 * 10^27 in questo caso

console.log((1 + 2) * 5);
//si usano solo le parentesi tonde

console.log(Math.sqrt(9));
//per avere tutte le operazioni matematiche a disposizione basta scrivere nella parentesi Math . e apparirà una finestra con le operazioni matematiche possibili

console.log(Infinity);
console.log(-Infinity);
//numeri particolari che servono a definire i valori massimi (il più piccolo o il più grande in assoluto)

console.log(NaN);
//Not a number

console.log("Ciao a tutti");
console.log('Ciao a tutti');
console.log(`Ciao a tutti`);
//le stringhe possono essere espresse in 3 modi "" '' oppure il backtick (alt+96) ``

console.log(`Half of 100 is ${100/2}`);
//NB il ` (backtick) serve ad incorporare un altro carattere in una stringa. in questo caso il risustato sarà "half of 100 is 50"


console.log("Ciao" + "a" + "tutti");
//string concatenation 

console.log("Ciao" * 6);
//risulta NaN
console.log("3" * 6);
//risulta 18 nonostante sia una stringa ed un valore perchè Javascript forza le conversioni per evitare errori.

console.log("Ciao a tutti"[2]);
//risultato è la lettera A ovvero il terzo carattere (perchè si parte a contare da 0) della stringa.

console.log(typeof 5);
console.log(typeof "ciao");
console.log(typeof false);
//il risultato del primo sarà NUMBER e il risultato del secondo sarà STRING mentre il terzo sarà BOOLEAN

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(5 == 3);
console.log(5 != 3);
console.log(5 === 3);
console.log(5 !== 3);
console.log(NaN == NaN);
//risulta FALSE perchè NaN non è definito 

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

console.log(true ? 1 : 2);
//se è vero, prenderà il primo valore (1) se è falso prenderà il secondo valore (2)
console.log((5 > 7) ? 1 : 2);
//risulterà 2
console.log((5 < 7) ? 1 : 2);
//risulterà 1

console.log(null);
//usato dai programmatori per indicare che qualcosa è VUOTO
console.log(undefined);
//usato da Javascript per indicare che sia vuoto o indefinito





