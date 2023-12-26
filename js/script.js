// recupero l'elemento dalla pagina
const button = document.getElementById("button");
const paragraph = document.getElementById("outcome");
const diceNumber = document.getElementById( "roll");
// dichiaro due costanti: una per il valore minimo e una per il valore massimo dei dadi
const max = 6;
const min = 1;
// faccio generare due numeri casuali da 1 a 6
button.addEventListener("click", function() {
    const userDie = Math.floor(Math.random() * (max + 1 - min)) + min;
    const computerDie = Math.floor(Math.random() * (max + 1 - min)) + min;

const numbers = `${userDie} - ${computerDie}`;

diceNumber.innerText = numbers;

// collaziono i due risultati


// preparo un messaggio per comunicare il risultato

let message = "Che sfiga, siete pari XD"; 

if(userDie > computerDie){
    message = "Daje, hai vinto, seeeeeeeeeee!";
} else if (userDie < computerDie) {
    message = "Fra', riprova, ché hai perso:*(";
}
paragraph.innerText = message;
})


