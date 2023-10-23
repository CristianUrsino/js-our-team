// creo un array di oggetti con i dati inseriti
// stampo su console
// creo una funzione di stampa delle card che prende come paramentro l'oggetto da stampare, all'interno utilizzo un innerHTML += della row 
'use strict';
ourTeam();

function ourTeam(){

const row = document.querySelector('.row');
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(team);

for (let i=0;i<team.length;i++){
    row.append(newCard(team[i]));
}

function newCard(teammate){
    const card = document.createElement('div');
    card.className = 'col-4';
    card.innerHTML += `
         <div class="card text-center">
            <img class="card-img-top" src="img/${teammate.picture}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${teammate.name}</h4>
                <div class="card-text">
                    ${teammate.role}
                </div>
            </div>
        </div>
        `
    return card;
}

}