// Poiché le funzioni JavaScript sono oggetti di prima classe,
// possono essere passate come parametri di un’altra funzione

function calcola(func, arg1, arg2) {
    return func(arg1, arg2);
}

const somma = (x, y) => x + y;
const divisione = (x, y) => x/y;

console.log(calcola(somma, 13, 25));	// 38
console.log(calcola(divisione, 8,2)); // 4

// L’uso di funzioni di callback è molto frequente nella programmazione JavaScript.
// Ad esse si ricorre ad esempio, nell’esecuzione di alcuni metodi e
// funzioni predefinite, nelle azioni asincrone come nelle chiamate HTTP o nella gestione di eventi.

const numeri = [11, 3, 24];

numeri.forEach(function(valore, indice) {
    console.log(valore);
});

// con arrow function
numeri.forEach(valore => console.log(valore));
