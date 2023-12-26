// recupero gli elementi dalla pagina
const button = document.getElementById("check-me");
const form = document.getElementById("email-form");
const allowedEmails = ["pincopanco@gmail.com", "danielercoli@gmail.com", "bepperampons@gamil.com"];
// al click sul bottone recupero il valore dall'input

button.addEventListener ("click", function () {
    // recupero i dati dall'input
    const userEmail = form.value.trim();
    console.log(userEmail);

    // verifico almeno che il campo non sia vuoto
    if(!userEmail){
        alert("Non hai inserito nessun indirizzo, OCCCHIO!");
        return;
    }

    let isUserAllowed = false;
    for (let i = 0; i < allowedEmails; i++){
        if (!isUserAllowed = true){
            alert("L'e-mail non è consentita");
            return;
        } else {
            alert("L'email è consentita");
        }
    } 
})