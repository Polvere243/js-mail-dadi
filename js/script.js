// recupero l'elemento dalla pagina
const paragraph = document.getElementById("outcome");

// dichiaro due costanti: una per il valore minimo e una per il valore massimo dei dadi
const max = 6;
const min = 1;
// faccio generare due numeri casuali da 1 a 6
let userDie = Math.floor(Math.random() * (max + 1 - min)) + min;
let computerDie = Math.floor(Math.random() * (max + 1 - min)) + min;

console.log(userDie, computerDie);
// collaziono i due risultati

// preparo un messaggio per comunicare il risultato
/* 
let message = "<p>"; 

if(userDie > computerDie){
    message += "Daje, hai vinto, seeeeeeeeeee!";
} else {
    message += "Fra', riprova, ché hai perso:*(";
}

message += "</p>";

outcome.innerHTML = message; */

const message = document.createElement("p");
console.log(message);