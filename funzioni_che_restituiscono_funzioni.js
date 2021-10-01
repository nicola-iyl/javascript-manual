const incrementatore = function(incremento) {
    return function(valore) {
        return incremento + valore;
    };
};

const incrementatore = (incremento) => {
    return (valore) => incremento + valore;
};

const incrementaDiCinque = incrementatore(5);

console.log( incrementaDiCinque(4) );  // 9
console.log( incrementaDiCinque(16) ); // 21
