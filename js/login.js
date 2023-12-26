// recupero gli elementi dalla pagina
const button = document.getElementById("check-me");
const form = document.getElementById("email-form");
const allowedEmails = ["pincopanco@gmail.com", "danielercoli@gmail.com", "bepperampons@gamil.com"];
// al click sul bottone recupero il valore dall'input

button.addEventListener ("click", function () {
    const userEmail = form.value.trim();
    console.log(userEmail);

    
})