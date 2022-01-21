//************************************************************************************************

//FUNZIONI: 

function divideByTwo (myNumber) {
    let result = myNumber / 2
    console.log(result);
}

divideByTwo(8);
divideByTwo(300);
divideByTwo(563723911);
//una funzione ha la struttura - function (name) (parameter) { (actions)} - e viene poi chiamata con i parametri che mi servono.
//in questo caso la funzione non è PURA ma ha un SIDE EFFECT che è il risultato che produce

function divideByTwo (myNumber) {
    let result = myNumber / 2
    return result;
}

console.log(divideByTwo(28));
//in questo caso la funzione viene definita PURA perchè ha un RETURN e il console.log è ciò che richiama la funzione vera e propria. 
//i side effect possono creare problemi quindi si preferisce la funzione PURA

//entrambe le funzioni precedenti hanno un nome mentre nel caso sotto il nome viene dato alla variabile che la contiene!!



//*****************************ALTRO MODO PER DEFINIRE UNA FUNZIONE***********************/

let capitalize = function (myString) {
    return myString.toUpperCase()
}

console.log(capitalize("pippo"));

//In questo caso la funzione anonima viene assegnata ad una variabile ed è molto utile perchè posso assegnare alla variabile un altro valore come nel caso sotto:

capitalize = divideByTwo;

console.log(capitalize(20));

//così facendo la funzione capitalize diventa divideByTwo e posso usarla per svolgere la funzione di divisione di un altra funzione precedentemente definita!!!


//*****************************ALTRO MODO PER DEFINIRE UNA FUNZIONE***********************/

let multiplyByTwo = (myNumber) => myNumber * 2;

console.log(multiplyByTwo(40));

//oppure:

let multiplyByThree = (myNumber) => {
    let result = myNumber * 3
    return result;
}

console.log(multiplyByThree(10));
//Il primo caso è utile se la funzione è scritta su una sola riga e ha un risultato ottenuto direttamente senza troppe righe, altrimenti utilizzo il secondo metodo per multiline functons.



//************************************************************************************************

//SCOPE:

//Gli scope sono definiti dalle parentesi graffe delle funzioni:

let pippo = 8;

function scriviPippo() {
    let pippo = "Pippo" //commentando questo pippo, il risultato sarebbe 8 perchè puù vedere la variabile globale
    console.log(pippo);
}

scriviPippo(pippo) //risultato "Pippo"

console.log(pippo); //risultato 8

//le due variabili hanno lo stesso nome "pippo" ma una ha valore 8 l'altra ha valore "Pippo". Se fossero state messe entrambe come variabili GLOBALI ci sarebbe stato conflitto tra le due (BUG).
//In questo caso invece, la prima variabile pippo=8 è GLOBALE mentre la variabile pippo="Pippo" è RELATIVA alla funzione.
//NB: la funzione può usare Pippo=8 se non ci fosse al suo interno la variabile pippo definita con un altro valore. Ma il caso contrario non è possibile.

function multiplyBy4 (firstNumber) {
    function multiplyBy2(secondNUmber) {
        return secondNUmber * 2;
    }
    
    let result = multiplyBy2(firstNumber) * 2;
    return result;
}

console.log(multiplyBy4(5));

//QUesti sono due modi per esprimere la stessa funzione ma nel secondo caso anzichè moltiplicare di nuovo * 2, ri-utilizzo la prima funzione che aveva già questa capacità!!!

function multiplyBy4 (firstNumber) {
    function multiplyBy2(secondNUmber) {
        return secondNUmber * 2;
    }
    
    let result = multiplyBy2(multiplyBy2(firstNumber));
    return result;
}

console.log(multiplyBy4(5));

//************************************************************************************************

//FIBONACCI:

// F0=0 F1=1
// Fn=Fn-1 + Fn-2

function fibonacci(number) {
    if (number === 0){
        return 0;
    }
    if (number === 1){
        return 1;
    }
    return fibonacci(number-1) + fibonacci(number-2)
}

console.log(fibonacci(15));

//Questa funzione avrà come risultato la sequenza di fibonacci alla posizione (number) data. A posizione 15 la sequenza di Fibonacci ha valore 610.
//Il problema delle funzioni ricursive, è che richiamano se stesse molte volte e quindi occupa tantissima memoria nel computer per essere risolta. 


//************************************************************************************************

//PARAMETRI:

//Le funzioni ritornano sempre un solo valore mentre i parametri dati alla funzione possono essere sempre più di uno (tuttavia non è sempre obbligatorio passare tutti i parametri chiamando la funzione):

function somma(primoNumero, secondoNumero) {
    return primoNumero + secondoNumero;
}

let risultato = somma();

console.log(risultato); //questo risulterà NaN perchè non ho dato parametri. primonumero = undefined e secondonumero = undefined -- risultato = NaN




function minus(primoNumero, secondoNumero) {
    if (secondoNumero === undefined) {
        return -primoNumero;
    }
    else {
        return primoNumero - secondoNumero
    }    
}

console.log(minus(20,5)); //risultato = 15
console.log(minus(20)); //risultato = -20





function multiplyBy(firstNumber, secondNumber = 2) {
    return firstNumber * secondNumber;
}

console.log(multiplyBy(5, 7)); //risultato = 35
console.log(multiplyBy(5)); //risultato = 10 perchè ho dato a secondNumber il valore di default 2 che viene usato solo nel caso in cui il secondo valore non viene dato.




let variable = 4;
let myFunction; //questa va definita nello scope globale altrimenti non può essere chiamata come risultato

if (variable > 0) {
    let multiplier = 2;
    myFunction = function (number){
        return number * multiplier;
    }
}else{
    let multiplier = 3;
    myFunction = function (number){
        return number * multiplier;
    }
}

let result = myFunction(4);
console.log(result);


//************************************************************************************************

//FUNZIONI CHE RITORNANO ALTRE FUNZIONI:

function multiplyByNumber(moltiplicatore) {
    return (number) => number * moltiplicatore;
}

let moltiplicaPer2 = multiplyByNumber(2);
let moltiplicaPer3 = multiplyByNumber(3);
let moltiplicaPer4 = multiplyByNumber(4);
let moltiplicaPer5 = multiplyByNumber(5);

console.log(moltiplicaPer2(5));
console.log(moltiplicaPer3(5));
console.log(moltiplicaPer4(5));
console.log(moltiplicaPer5(5));