'use strict';

const arraySquadreCalcio = [
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
let squadres = [];

for (let z = 0; z < arraySquadreCalcio.length; z++) {
    const element = arraySquadreCalcio[z];
    const generaNumeriCasualiPunti = Math.floor(Math.random()* 120 + 1);
    const generaNumeriCasualiFalli = Math.floor(Math.random()* 50 + 1);

    element.puntiFatti = generaNumeriCasualiPunti;
    element.falliSubiti = generaNumeriCasualiFalli;

    squadres.push(element);
    
}
console.log(squadres);