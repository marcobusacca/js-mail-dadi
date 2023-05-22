"use strict";

// ARRAY LISTA MAIL CON PERMESSO DI ACCESSO
let mail_list = ["luca@gmail.com", "marco@gmail.com", "paolo@gmail.com"];

// PROMPT RICHIESTA EMAIL ALL'UTENTE
const user_mail = prompt('Inserisci la tua email:');

// DICHIARAZIONE VARIABILE ESITO CONTROLLO
let control_result = false;

// CICLO FOR ARRAY MAIL LIST
for (let i = 0; i < mail_list.length; i++){

    // CONFRONTO EMAIL ARRAY CON EMAIL INSERITA DALL'UTENTE
    if (mail_list[i] === user_mail.trim().toLowerCase()){
        
        // ESITO CONTROLLO POSITIVO
        control_result = true;
    }
}

// SE L'ESITO DEL CONTROLLO È STATO POSITIVO, ALLORA AVVERTI L'UTENTE CHE PUÒ ACCEDERE
if(control_result === true){

    alert("La tua email ci risulta! Hai il permesso per accedere, clicca 'OK' per proseguire!");

} else{ // L'ESITO DEL CONTROLLO È STATO NEGATIVO, AVVERTI L'UTENTE CHE NON PUÒ ACCEDERE

    alert("La tua email non risulta nei nostri Database. Non hai il permesso per accedere!");
}