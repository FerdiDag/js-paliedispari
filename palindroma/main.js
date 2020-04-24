//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato


ispalin();

function ispalin() {
    //chiedo all'utente una parola
    var paroladivisa = prompt('Inserisci una parola');
    console.log(paroladivisa);
    // prendo la parola inserita dall'utente e la inserisco splittata all'interno di un array
    var paroladivisa = paroladivisa.split('');
    console.log(paroladivisa);
    //utilizzo la funzione reverse per invertire l'ordine delle lettere
    var paroladivisa2 = paroladivisa.reverse();
    console.log(paroladivisa2);
    // reinserisco le due parole in una stringa e verifico se sono palindrome con if ?
var parolaUnita = paroladivisa.join();
var parolaUnita2 = paroladivisa2.join();


}
