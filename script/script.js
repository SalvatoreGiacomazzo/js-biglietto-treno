console.log('JS OK')

// Calcolo del prezzo di un biglietto del treno 

/*Dovremo chiedere all'utente il numero dei chilometri che intende percorrere e la sua età.
L'obiettivo è calcolare il prezzo del biglietto del treno valutando che: il prezzo del biglietto è €0.21 per Km percorso, 
se l'utente ha meno di 18 anni sarà applicato uno sconto del 20%;
se l'utente ha più di 65 anni sarà applicato uno sconto del 40%.



/*TO DO LIST
1. Acquisizione dell'età dell'utente.
2. Acquisizione del numero di km che l'utente intende percorrere.
3. Calcolo del prezzo.
4. Applicazione di eventuale sconto.
5. Mostrare il risultato a schermo.
*/ 

//Fase di preparazione
const resultElement = document.getElementById('ticket')
console.log(resultElement)


//Fase di raccolta dati
const userAge = prompt('Indichi la sua età.')
const userKm = prompt('Indichi i chilometri che intende percorrere.')

console.log('userAge', userAge);
console.log('userKm', userKm);

//Validazione dei dati
//è obbligatorio che l'utente inserica dei numeri.

const isAgeInvalid = isNaN(userAge) || userAge < 1 || userAge > 99;
const isKmInvalid = isNaN(userKm) || userKm < 5;
 console.log('isAgeInvalid', isAgeInvalid);
 console.log('isKmInvalid', isKmInvalid);


if (isAgeInvalid || isKmInvalid){
  alert('Per favore, inserire un numero valido')
}




//Calcolo del prezzo


let ticketPrice = (userKm * 21 / 100)
console.log('ticketPrice', ticketPrice)

//Applicazione sconti e produzione risultato

if (userAge < 18) {
ticketPrice = ticketPrice -  ((20 / 100) * ticketPrice)
} else {
resultElement.innerHTML = `Il prezzo del biglietto è <strong> €${ticketPrice}</strong>`
}

if (userAge > 65) {
ticketPrice = ticketPrice - ((40 / 100) * ticketPrice)
} else {
resultElement.innerHTML = `Il prezzo del biglietto è <strong> €${ticketPrice}</strong>`
}


/*Produzione risultato */ 

  resultElement.innerHTML = `Il prezzo del biglietto è <strong> €${ticketPrice}</strong>`

