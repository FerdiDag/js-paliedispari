//gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

var player = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(player);
var evenOdd = prompt('Pari o Dispari?');
evenOdd = evenOdd.toLowerCase();
console.log(evenOdd);

var min = 1;
var max = 6;
var cpu = Math.floor(Math.random() * (+max - +min) + +min);
console.log(cpu);


var total = (player + cpu);
console.log(total);

if (evenOdd == 'pari' && total % 2 == 0) {
    console.log('hai vinto');

} else if (evenOdd == 'pari' && total % 2 != 0) {
    console.log('hai perso');
} else if (evenOdd == 'dispari' && total % 2 != 0) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}
