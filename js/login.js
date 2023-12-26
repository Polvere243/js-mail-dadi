// recupero gli elementi dalla pagina
const button = document.getElementById("check-me");
const form = document.getElementById("email-form");
const allowedEmails = ["pincopanco@gmail.com", "danielercoli@gmail.com", "bepperampons@gamil.com"];
// al click sul bottone recupero il valore dall'input

button.addEventListener ("click", function () {
    // recupero i dati dall'input
    const userEmail = form.value.trim();
    

    // verifico almeno che il campo non sia vuoto
    if(!userEmail){
        alert("Non hai inserito nessun indirizzo, OCCHIO!");
        return;
    }

    let isUserAllowed = false;
    for (let i = 0; i < allowedEmails; i++){
        if (isUserAllowed = true){
            alert("L'e-mail è consentita");
        } else {
            alert("L'email è consentita");
            return;
        }
    } 
})