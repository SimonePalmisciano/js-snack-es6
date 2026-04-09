'use strict';

let arraySquadreCalcio = [
    {
        nome: 'Barnsley',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Hull City',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Charlton',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Bristol City',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Millwall',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Oxford Utd',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// scorrere l'array un oggetto alla volta
let squadres = []; // ho creato un array di appoggio

for (let z = 0; z < arraySquadreCalcio.length; z++) { // creato un ciclo che genera un numero casuale per i punti e falli e lo pusha all'interno del nuovo array
    const element = arraySquadreCalcio[z];
    const generaNumeriCasualiPunti = Math.floor(Math.random()* 120 + 1); 
    const generaNumeriCasualiFalli = Math.floor(Math.random()* 50 + 1);

    element.puntiFatti = generaNumeriCasualiPunti;
    element.falliSubiti = generaNumeriCasualiFalli;

    squadres.push(element); // qui pusha sia il nome rimasto invariato che i punti e falli con numeri casuali
    
}

// for (let z = 0; z < arraySquadreCalcio.length; z++) {
//     const generaNumeriCasualiPunti = Math.floor(Math.random()* 120 + 1);
//     const generaNumeriCasualiFalli = Math.floor(Math.random()* 50 + 1);

//     arraySquadreCalcio[z].puntiFatti = generaNumeriCasualiPunti;
//     arraySquadreCalcio[z].falliSubiti = generaNumeriCasualiFalli;
    
// }

// array che conterrà solo i nomi e i falli
const arraySquadreNomiFalli = [];

for (const squadra of squadres) { // ciclo che scorre l'array e crea un nuovo oggeto che contiene il nome e i falli e viene pushato dentro il nuovo array

    const squadraNuova = {
        nome : squadra.nome,
        falliSubiti : squadra.falliSubiti
    };

    arraySquadreNomiFalli.push(squadraNuova)
    // arraySquadreNomiFalli.push(squadra.nome, squadra.falliSubiti);

}

console.log(arraySquadreNomiFalli);