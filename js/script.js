// recupero l'elemento dalla pagina
const paragraph = document.getElementById("outcome");
const diceNumber = document.getElementById( "roll");
// dichiaro due costanti: una per il valore minimo e una per il valore massimo dei dadi
const max = 6;
const min = 1;
// faccio generare due numeri casuali da 1 a 6
let userDie = Math.floor(Math.random() * (max + 1 - min)) + min;
let computerDie = Math.floor(Math.random() * (max + 1 - min)) + min;

const numbers = `<p>  ${userDie} - ${computerDie}  </p>`;

diceNumber.innerHTML = numbers;

// collaziono i due risultati


// preparo un messaggio per comunicare il risultato

let message = "<p>"; 

if(userDie > computerDie){
    message += "Daje, hai vinto, seeeeeeeeeee!";
} else {
    message += "Fra', riprova, ché hai perso:*(";
}

message += "</p>";

outcome.innerHTML = message;

// secondo esercizio

const addresses = [
    coddoproffuqua-7201@yopmail.com,
    rerolloisura-7708@yopmail.com,
    gretrabreffeucroi-9997@yopmail.com,
    lessissuprajei-9280@yopmail.com
]




