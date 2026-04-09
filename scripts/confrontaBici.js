'use strict';

const bottoneConfrontaBici = document.querySelector('#confrontaBici');

const arrayBici = [
    {
        nomeBici: 'BlastBike-400',
        peso: 14.325
    },
    {
        nomeBici: 'VAN RYSEL EDR',
        peso: 7.5
    },
    {
        nomeBici: 'TRIBAN RC120',
        peso: 12.54
    },
    {
        nomeBici: 'CLARIS EDR AF',
        peso: 10.20
    },
    {
        nomeBici: 'SUZUKI GRVL 500',
        peso: 3.45
    },
    {
        nomeBici: 'SRAM RIVAL AXS RCR-F PRO 12 E1 2X12V DI4 Levar 2.0 VAN RYSEL',
        peso: 1.80
    }
];

// creo un ciclo for per scorrere gli oggetti all'interno dell'arrray
// poi devo confrontare i pesi delle bici e mostrare quella più leggera
// per confrontarli posso prendere solo la proprietà del peso
// pushare questa proprietà dentro un oggetto vuoto
let pesoBiciMin = arrayBici[0];

for (let z = 0; z < arrayBici.length; z++) { // scorre l'array
    if (arrayBici[z].peso < pesoBiciMin.peso) { // confronta il peso della bici nella posizione dell'array [z] con la prima bici dell'array
        pesoBiciMin = arrayBici[z]; // ogni volta la bici che pesa meno viene assegnata alla variabile pesoBiciMin e viene rifatto il confronto
    }    
}
console.log(pesoBiciMin);

// oppure
// creare una funzione che confronta la più leggera con un min e un max

function mostraBiciLeggera () {
    const mostraBici = document.querySelector('#mostraBiciConfronto');

    mostraBici.textContent = `LA BICI PIù LEGGERA DI TUTTE è: ${pesoBiciMin.nomeBici}
    CON PESO: ${pesoBiciMin.peso}KG`

}

bottoneConfrontaBici.addEventListener('click', mostraBiciLeggera)