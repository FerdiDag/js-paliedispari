//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato



ispalin();

function ispalin() {
    //chiedo all'utente una parola
    var parola = prompt('Inserisci una parola');
    parola = parola.toLowerCase();
    console.log(parola);
    // prendo la parola inserita dall'utente e la inserisco splittata all'interno di un array(per poter utilizzare la funzione reverse sugli array), e la ritrasdormo in stringa
    var reverse = parola.split('').reverse().join('');

    // confronto se le parole sono palindrome
    if (parola == reverse) {
        alert('la parola è palindroma');
    } else {
        alert('la parola NON è palindroma');
    }
}


// //chiedo all'utente una parola
// var parola = prompt('Inserisci una parola');
// ispalin();
//
// function ispalin() {
//     parola = parola.toLowerCase();
//     console.log(parola);
//     // prendo la parola inserita dall'utente e la inserisco splittata all'interno di un array(per poter utilizzare la funzione reverse sugli array), e la ritrasdormo in stringa
//     var reverse = parola.split('').reverse().join('');
//
//     //confronto se le parole sono palindrome
//     if (parola == reverse) {
//         alert('la parola è palindroma');
//     } else {
//         alert('la parola NON è palindroma');
//     }
// }
//





// var parolaUnita = paroladivisa.join('');
// console.log(parolaUnita);
// //utilizzo la funzione reverse per invertire l'ordine degli elemnti dell'array, e ristrasformo in stringa
// var paroladivisa2 = paroladivisa.reverse();
// var parolaUnita2 = paroladivisa2.join('');
// console.log(parolaUnita2);
