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

//****************************************************************************************************************/
//CHAPTER 2 - BINDINGS:

let numero = 5;
//"numero" è il nome della variabile
console.log(numero);
//il risultato sarà 5

numero = 7;
console.log(numero);
//il risultato sarà adesso 7

console.log("seconda assegnazione della variabile numero", numero);
//aggiungendo delle stringhe di spiegazione alla console, so a quale mi riferisco. per aggiungere una stringa basta fare ("stringa" , nome della variabile)

const costante = 12;
//la differenza tra una let e una const è che una può variare, mentre l'altra resta costante.
console.log(costante);

// costante = 15;
// console.log(costante);

//Uncaught TypeError: invalid assignment to const 'costante' - ci sarà un errore nella console che dice che la costante non può essere cambiata!!! (in questo caso commentata perchè blocca il flusso del programma)

var numero2 = 27;
console.log(numero2);

numero2 = 134;
console.log(numero);
//var e let sono praticamente simili ma var ha dei comportamenti strani per cui è stata introdotta let (che useremo per tutto il corso al posto di var).

let pippo = "ciao a tutti";
console.log(pippo);

pippo = "ciao ad alcuni";
console.log(pippo);
//la console nel primo caso avrà come risultato "ciao a tutti" e nel secondo "ciao ad alcuni" (come ci aspettiamo)

// pippo = "ciao ad alcuni";
// console.log(pippo);

// let pippo = "ciao a tutti";
// console.log(pippo);

//in questo caso il codice si rompe perchè cerco di cambiare una variabile che non è ancora stata definita. se invece al posto di let uso var, il programma funziona
//perchè var legge il codice, si studia tutte le variabili e poi lo esegue!! Questo può essere utile in alcuni casi ma di solito crea problemi perchè non è come il codice dovrebbe funzionare.

let pluto = "pluto", paperino = "paperino";
console.log(pluto, paperino);
//si possono dichiarare più variabili nello stesso let (NON RACCOMANDABILE PERCHE' CREA DEI PROBLEMI DI LETTURA)

let operazione = 5 + 6;
console.log(operazione);
//il risultato sarà 11 perchè il codice prima esegue il let poi assegna il risultato al nome.

//******************************************************************************************************************************/
//CONTROL FLOW:

if (true) {
    console.log("sono passato dall'IF");    
}
//in questo caso la condizione è sempre vera quindi in risultato sarà "sono passato dall'IF"

if (false) {
    console.log("Non sono passato dall'IF");
}
//il codice non verrà eseguito perchè non sarà mai vera

let somma = 5 + 2

if (somma < 10) {
    console.log("sono passato dall'IF perchè la somma è 7");
}
//risultato sarà "sono passato dall'IF perchè la somma è 7"

if (somma > 10) {
    console.log("sono passato dall'IF");
} else {
    console.log("non sono passato dall'IF");
}
//risultato sarà IF ELSE

if (somma < 10) {
    console.log("sono passato dall'IF");
} else {
    console.log("non sono passato dall'IF");
}
//risultato sarà IF

if (!(somma < 10)) {
    console.log("sono passato dall'IF");
} else {
    console.log("non sono passato dall'IF");
}
//risultato sarà IF ELSE perche ! ribalta il risultato

if ((somma < 10) && (somma === 7)) {
    console.log("sono passato dall'IF");
} else {
    console.log("non sono passato dall'IF");
}
//entrambe sono vere per cui il risultato sarà IF

if ((somma > 10) && (somma === 7)) {
    console.log("sono passato dall'IF");
} else {
    console.log("non sono passato dall'IF");
}
//la prima è falsa quindi non valuta nemmeno la seconda e va direttamente all'IF ELSE

if ((somma > 10) || (somma === 7)) {
    console.log("sono passato dall'IF");
} else {
    console.log("non sono passato dall'IF");
}
//la prima è falsa ma la seconda è vera quindi andrà all'IF - se la prima fosse stata vera, non avrebbe neanche valutato la seconda e sarebbe comunque andato all'IF direttamente


let numero3 = 5;
if (numero3 > 0) {
    console.log("il numero è positivo");
} else {
    console.log("il numero è negativo");
}
//risultato "il numero è positivo"

let numero4 = 0;
if (numero4 < 0) {
    console.log("il numero è positivo");
} else {
    console.log("il numero è negativo");
}
//il risultato sarà "il numero è negativo" MA E' SBAGLIATO PERCHE' 0 NON E' NE POSITIVO NE NEGATIVO. quindi:

if (numero4 < 0) {
    console.log("il numero è positivo");
} else if (numero4 === 0){
    console.log("il numero è zero");
} else {
    console.log("il numero è negativo");
}
//il risultato è "il numero è zero" perchè entra nell'ELSE IF.



//NB: LE CONDIZIONI PIù RESTRITTIVE VANNO SCRITTE PER PRIME ALTRIMENTI IL CODICE NON ARRIVERà NEMMENO A CONSIDERARLE:

let numero5 = 16;

if (numero5 >= 0) {
    console.log("maggiore o uguale a 0");
} else if (numero5 > 10) {
    console.log("maggiore di 10");
} else if (numero5 > 20) {
    console.log("maggiore di 20");
} else {
    console.log("minore di zero");
}
//il problema è che il codice si fermerà alla prima condizione perchè verrà soddisfatta e le altre non saranno neanche considerate.
if (numero5 > 20) {
    console.log("maggiore di 20");
} else if (numero5 > 10) {
    console.log("maggiore di 10");
} else if (numero5 >= 0) {
    console.log("maggiore o uguale a 0");
} else {
    console.log("minore di zero");
}
//il risultato a questo punto non sarà piu maggiore o uguale a zero ma sarà maggiore di 10!!! che è più vicino alla realtà


let numero6 = 12;

if (numero6 % 2 === 0) {
    console.log("divisibile per 2");
} else if (numero6 % 3 === 0){
    console.log("divisibile per 3");
}
//12 è divisibile sia per 2 che per 3 quindi per avere entrambi i risultati devo fare un doppio if statement:
if (numero6 % 2 === 0) {
    console.log("divisibile per 2");
}
if (numero6 % 3 === 0){
    console.log("divisibile per 3");
}



//******************************************************************************************************************************************/

//WHILE LOOP:
let i = 0
console.log("WHILE");

while (i < 10) {
    console.log(i);
    i = i + 1
}
//il while loop prima guarda la condizione e se viene soddisfatta entra nel ciclo finchè la condizione è vera



//DO WHILE LOOP:
console.log("DO WHILE");
let j = 0


do {
    console.log(j);
    j = j + 1

} while (j < 10);
//il do while loop funziona esattamente come il while ma prima esegue il codice almeno una volta e poi verifica se la condizione è soddisfatta.


//FOR LOOP:
console.log("FOR");

for (let k = 0; k < 10; k++) {
    
    console.log(k);
}
//il FOR LOOP funziona come gli altri ma ha tutte le variabili e condizioni specificate in una linea.


//k = K + 1 è INTECAMBIABILE CON I SEGUENTI:
//K++
//K+=1

//K = K - 1
//K--
//K-=1

let y = 10;

console.log("funzione scritta male");
while (!(y % 7 === 0)) {
    y = y + 1
    if (!(y % 7 === 0)) {
        console.log(y);
    }
}

console.log("funzione scritta bene");
while (true) {
    if (y % 7 === 0) {
        console.log(y);
        break
    }
    y+=1
}



//*********************************************************************************
// SWITCH:

//gli switch servono per eliminare i vari IF e IF ELSE e rendere il codice più leggibile!!

let type = 0;

switch (type) {
    case 0:
        console.log("Hai comprato un cosmetico");
        break;
    case 1:
        console.log("Hai comprato un balsamo");
        break;
    case 2:
        console.log("Hai comprato uno shampoo");
        break;
    default:
        console.log("Errore di tipologia");
        break;
}
//risultato è 0 "Hai comprato un cosmetico" - cambiando il TYPE cambierà il log alla console ed un valore non accettato andrà direttamente al default.

let kind = 0;

switch (kind) {
    case kind > 10:
        console.log("Hai comprato un cosmetico");
        break;
    case kind > 20:
        console.log("Hai comprato un balsamo");
        break;
    case 2:
        console.log("Hai comprato uno shampoo");
        break;
    default:
        console.log("Errore di tipologia");
        break;
}


// let value = 8;

// switch (value) {
//     case (value % 2 ===0):
//         console.log("pari");
//     case (value % 3 ===0):
//         console.log("dispari");
// } NON FUNZIONA PER ADESSO