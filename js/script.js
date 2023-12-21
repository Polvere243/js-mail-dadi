const max = 6;
const min = 1;

let userDie = Math.floor(Math.random() * (max + 1 - min)) + min;
let computerDie = Math.floor(Math.random() * (max + 1 - min)) + min;

console.log(userDie, computerDie);