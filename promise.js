// una PROMISE è un oggetto che rappresenta il risultato pendente di un’operazione asincrona

const promise = getMessaggio();
promise.done(sendMessaggio).done(function() {
    console.log("Messaggio inoltrato");
});
promise.fail(function(err) {
    console.log("Si è verificato un errore: " + err.message);
});

// I metodi done() e fail() di una promise consentono di specificare cosa fare
// dopo aver ottenuto il risultato positivo o negativo dell’elaborazione asincrona.
