// dichiaro due costanti: una per il valore minimo e una per il valore massimo dei dadi
const max = 6;
const min = 1;
// faccio generare due numeri casuali da 1 a 6
let userDie = Math.floor(Math.random() * (max + 1 - min)) + min;
let computerDie = Math.floor(Math.random() * (max + 1 - min)) + min;

console.log(userDie, computerDie);
// collaziono i due risultati
if(userDie > computerDie){
    console.log("hai vinto");
} else {
    console.log("hai perso");
}