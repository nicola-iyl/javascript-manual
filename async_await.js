// async/await.
// Si tratta di due parole chiave che abilitano
// la gestione di funzioni asincrone eseguite tramite un approccio sincrono.

// In particolare, la parola chiave async consente di dichiarare una
// funzione come asincrona, cioè che contiene un’operazione asincrona,
// mentre la parola chiave await sospende l’esecuzione di una funzione in
// attesa che la Promise associata ad un’attività asincrona venga risolta o rigettata.


// Per chiarire il concetto, consideriamo la seguente funzione.

function getUtente(userId) {
    fetch("/utente/" + userId).then(response => {
        console.log(response);
    }).catch(error => console.log("Si è verificato un errore!"));
}

// Possiamo riscrivere la funzione utilizzando async e await come mostrato di seguito:
async function getUtente(userId) {
    try {
        let response = await fetch("/utente/" + userId);
        console.log(response);
    } catch (e) {
        console.log("Si è verificato un errore!");
    }
}
