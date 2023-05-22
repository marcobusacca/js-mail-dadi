"use strict";

// ALERT DI BENVENUTO
alert(`Benvenuto! Questa applicazione si chiama "Gioco Dei Dadi": 

Generemo per te e per il Computer (il tuo avversario) un Numero Random da 1 a 6.


Se il Tuo Numero è MAGGIORE rispetto al Numero del Computer VINCI!

Se il Tuo Numero è MINORE rispetto al Numero del Computer PERDI!

Se entrambi i Numeri sono UGUALI, PAREGGIATE!


Clicca su "OK" per Incominciare a Giocare!`);

// VARIABILE NUMERO PARTITE DA SVOLGERE
let games = parseInt(prompt("Quante partite vuoi svolgere?"));

// VARIABILE CHE CONTEGGIA QUANTE VOLTE HA VINTO L'UTENTE
let user_win = 0;

// VARIABILE CHE CONTEGGIA QUANTE VOLTE HA PERSO L'UTENTE
let user_lose = 0;

// VARIABILE CHE CONTEGGIA QUANTE VOLTE UTENTE E COMPUTER HANNO PAREGGIATO
let draw = 0;


// CICLO FOR PER FAR GIOCARE L'UTENTE PER UN MASSIMO DI N VOLTE
for (let i = 1; i <= games; i++){

    // NUMERO RANDOM UTENTE
    const user_number = Math.floor(Math.random() * (7-1) + 1);
    const user_number_output = `Il Tuo Numero è : ${user_number}`;
    
    // NUMERO RANDOM COMPUTER
    const computer_number = Math.floor(Math.random() * (7-1) + 1);
    const computer_number_output = `Il Numero del Computer è : ${computer_number}`;

    // CONTROLLO NUMERI
    if (user_number > computer_number){ // L'UTENTE HA VINTO
    
    alert(` HAI VINTO!
    
    ${user_number_output}
    ${computer_number_output}
    
    Partita N° : ${i}
    `);

    // INCREMENTO VARIABILE USER WIN
    user_win++;
    
    } else if (user_number < computer_number){ // L'UTENTE HA PERSO
    
        alert(` HAI PERSO!
    
        ${user_number_output}
        ${computer_number_output}
        
        Partita N° : ${i}
        `);

        // INCREMENTO VARIABILE USER LOSE
        user_lose++;
    
    } else{ // L'UTENTE E IL COMPUTER HANNO PAREGGIATO
    
        alert(` AVETE PAREGGIATO!
    
        ${user_number_output}
        ${computer_number_output}
        
        Partita N° : ${i}
        `);

        // INCREMENTO VARIABILE PAREGGI
        draw++;
    }
}

// STAMPA ALL'UTENTE I DATI FINALI
if (user_win !== 1 && user_lose !== 1 && draw !== 1){ // COMBINAZIONE 1

    alert(`Hai vinto ${user_win} volte !
    
    Hai perso ${user_lose} volte !
    
    Avete pareggiato ${draw} volte !
    `);

} else if (user_win === 1 && user_lose !== 1 && draw === 1){ // COMBINAZIONE 2

    alert(`Hai vinto ${user_win} volta !
    
    Hai perso ${user_lose} volte !
    
    Avete pareggiato ${draw} volta !
    `);

}  else if (user_win !== 1 && user_lose === 1 && draw !== 1){ // COMBINAZIONE 3

    alert(`Hai vinto ${user_win} volte !
    
    Hai perso ${user_lose} volta !
    
    Avete pareggiato ${draw} volte !
    `);

}  else if (user_win === 1 && user_lose !== 1 && draw !== 1){ // COMBINAZIONE 4

    alert(`Hai vinto ${user_win} volta !
    
    Hai perso ${user_lose} volte !
    
    Avete pareggiato ${draw} volte !
    `);

}  else if (user_win !== 1 && user_lose === 1 && draw === 1){ // COMBINAZIONE 5

    alert(`Hai vinto ${user_win} volte !
    
    Hai perso ${user_lose} volta !
    
    Avete pareggiato ${draw} volta !
    `);

}  else if (user_win === 1 && user_lose === 1 && draw !== 1){ // COMBINAZIONE 6

    alert(`Hai vinto ${user_win} volta !
    
    Hai perso ${user_lose} volta !
    
    Avete pareggiato ${draw} volte !
    `);

}  else if (user_win !== 1 && user_lose !== 1 && draw === 1){ // COMBINAZIONE 7

    alert(`Hai vinto ${user_win} volte !
    
    Hai perso ${user_lose} volte !
    
    Avete pareggiato ${draw} volta !
    `);

} else{ // COMBINAZIONE 8 (SI PUÒ VERIFICARE SOLO SE LE PARTITE SVOLTE SONO 3)

    alert(`Hai vinto ${user_win} volta !
    
    Hai perso ${user_lose} volta !
    
    Avete pareggiato ${draw} volta !
    `);
}
