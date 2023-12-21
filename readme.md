Ciao ragazzi,
esercizio di oggi: Gioco dei dadi e Finta Login
Nome repo: js-mail-dadi
Oggi due esercizi al prezzo di uno, perchè "a Natale a Natale  si può fare di piùùùùù" :christmasparrot2::note:
Potete svolgere entrambi gli esercizi in un unico file HTML e JS, se la cosa vi confonde, separateli, purchè siano sulla stessa repo.
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che la mail inserita sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:avviso: NOTE:
è vietato utilizzare il metodo includes()
La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
Non è necessario usare il tag <form>, ma se lo usate, ricordate di impostare il type="button" sul <button>altrimenti il form ricaricherà la pagina.
L'esito del controllo deve essere stampato in pagina
-----------------------------------------------------------------
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

Gioco dei dadi:
1 - dichiarare due costanti per avere i valori massimo e minimo dei dadi; 
2 - usare la formula per generare casualmente un numero da 1-6 per l'utente;
3 - ripetere il punto 2, ma per il computer;
4 - comparare i due risultati per avere un vincitore;
5 - usare il template literal e il DOM API (da commentare successivamente) per stampare il risultato in pagina.

Falso log-in:

1 - creare un input e-mail e un bottone nell'html;
2 - recuperare il bottone e agganciarlo coll'addEventListener;
4 - creare un array di e-mail consentite;
5 - verificare se l'e-mail inserita nell'input sia consentite o meno;
6 - quale che sia il risultato dev'essere mostrato in pagina, magari con un alert.