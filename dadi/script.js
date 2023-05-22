"use strict";

// // ALERT DI BENVENUTO
// alert(`Benvenuto! Questa applicazione si chiama "Gioco Dei Dadi": 

// Generemo per te e per il Computer (il tuo avversario) un Numero Random da 1 a 6.


// Se il Tuo Numero è MAGGIORE rispetto al Numero del Computer VINCI!

// Se il Tuo Numero è MINORE rispetto al Numero del Computer PERDI!

// Se entrambi i Numeri sono UGUALI, PAREGGIATE!


// Clicca su "OK" per Incominciare a Giocare!`);

// NUMERO RANDOM UTENTE
const user_number = Math.floor(Math.random() * (7-1) + 1);
console.log(user_number);


// NUMERO RANDOM COMPUTER
const computer_number = Math.floor(Math.random() * (7-1) + 1);
console.log(computer_number);