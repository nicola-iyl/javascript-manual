// Una funzione nella maggior parte dei linguaggi di programmazione è
// intesa come un meccanismo per identificare un gruppo di istruzioni da eseguire su richiesta

// una funzione JavaScript è in realtà un oggetto (first class object)

// una funzione ha come oggetto base Function

//Ad esempio, possiamo assegnare una funzione ad un nome:

const somma = function(x, y) {
    return x + y;
};

// oppure
const somma2 = (x, y) => {
    return x + y;
};

// oppure
const somma3 = (x, y) => x + y;

// Possiamo invocare una funzione associata ad una variabile accostando
// semplicemente al nome della variabile le parentesi tonde con gli eventuali
// parametri, come mostrato nel seguente esempio:

const z = somma(4, 8);
console.log(z);	// 12
