'use strict';

const main = document.querySelector('main')

let user = {
                firstname: 'John',
                lastname: 'Doe',
                age: 32, 
                height: 180,
                weight: 85,
                alive: true,
            }

let user2 = {
                firstname: 'John',
                lastname: 'Doe',
                age: 22, 
                height: 160,
                weight: 115,
                alive: false,
            }
function createCard(szemely) {


//console.table(user);

let container = document.createElement('div');
container.classList.add('card');

let header = document.createElement('h2');
//header.textContent = user.firstname + ' ' + user.lastname;
header.textContent = `név: ${szemely.firstname}  ${szemely.lastname}`;
container.appendChild(header);

let age = document.createElement('div');
age.textContent = szemely.age +' éves';
container.appendChild(age);

let magassag = document.createElement('div');
magassag.textContent = szemely.height +' cm';
container.appendChild(magassag);


let elo = document.createElement('div');
let kiiras = '';
if(szemely.alive == true) {
    kiiras ='Ez az ember még él.';
} else {
    kiiras = 'Szegény már nem él.';
} 

elo.textContent = kiiras
container.appendChild(elo);

main.appendChild(container);

}