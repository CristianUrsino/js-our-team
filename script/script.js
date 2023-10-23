// creo un array di oggetti con i dati inseriti
// stampo su console
// creo una funzione di stampa delle card che prende come paramentro l'oggetto da stampare, all'interno utilizzo un innerHTML += della row 
// al click del pulsante: appaiono gli input e vengono salvati
// con un secondo pulsante vengono madati alla funzione newCard per la creazione della carta 
'use strict';
ourTeam();

function ourTeam(){

const form = document.querySelector('.my-form');
let errorForm;
let input = [];
const row = document.querySelector('.row');
const btnNewTeammate = document.querySelector('.btn-primary');
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

btnNewTeammate.addEventListener('click', createForm);

function createForm(){
    form.innerHTML += `
        <div class="mb-3">
            <label for="name" class="form-label">enter name</label>
            <input type="text" class="form-control cardInput" placeholder="name and surname">
        </div>
        <div class="mb-3">
            <label for="role" class="form-label">enter role</label>
            <input type="text" class="form-control cardInput" placeholder="teammate role">
        </div>
        <div>
                <label for="picture" class="form-label">send picture</label>
                <input type="file" class="form-control cardInput">
        </div>
        <button class="mt-3 btn btn-success">send info</button>
        <div id="error-form" class="text-danger mt-2"><div>
    `;
    errorForm = document.getElementById('error-form');
    input = document.querySelectorAll('.cardInput');
    const btnSend = document.querySelector('.btn-success');
    console.log(input);
    btnSend.addEventListener('click', send);
} 

function send(){
    const teammate = {
        name:'',
        role:'',
        picture:''
    };
    const keys = ['name', 'role', 'picture'];
    for(let i=0; i<input.length;i++){
        if(input[i].getAttribute('type') === 'text'){
            if(!isNaN(input[i].value)){
                errorForm.innerHTML = 'ERRORE inserire valori coerenti';
                return;
            }
        }
        teammate[keys[i]] = input[i].value;
    }
    console.log(teammate);
    row.append(newCard(teammate));
}

function newCard(teammate){
    const card = document.createElement('div');
    card.className = 'col-4';
    let src = ''
    if(input.length === 0) src = 'img/' + teammate.picture;
    else src = teammate.picture;
    card.innerHTML += `
         <div class="card text-center">
            <img class="card-img-top" src="${src}" alt="Title">
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