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

//Fase di raccolta dati
const userAge = prompt('Indichi la sua età.')
const userKm = prompt('Indichi i chilometri che intende percorrere.')

console.log('userAge', userAge);
console.log('userKm', userKm);

//Validazione dei dati
//è obbligatorio che l'utente inserica dei numeri.

const isAgeInvalid = isNaN(userAge) || userAge != 1 || userAge > 99;
const isKmInvalid = isNaN(userKm) || userKm != 5;
 
if(isAgeInvalid || isKmInvalid){
    const errorWarning = isAgeInvalid || isKmInvalid ? 'Per favore, inserisca un numero valido' :
alert(errorWarning);
}
        
