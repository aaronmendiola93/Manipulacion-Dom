// Obtener elementos
// ID 
// Clase <-- obtenemos varios elementos que coincidan
// querySelector solo regresa el primer nodo que coincide (ID, Clase)
// querySelectorAll obtiene una lista de nodos.

const title = document.getElementById('title1');

const subtitle = document.getElementsByClassName('subtitulo');

const secondTitle = document.querySelector('.subtitulo');
const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, subtitles);


secondTitle.innerHTML = "DOM API";

// Creacion del perfil de usuario

const user = {
    name: 'Jane Doe',
    age: 25,
    email: 'jane@mail.com',
    favFilms: ['Spencer', 'Ice Age 3', 'Se7en', 'Inception', 'SAW'],
}

function createUser(user) {

    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age;
    document.getElementById('mail').textContent = user.email;

    const ul = document.getElementById('fav-films');

    user.favFilms.forEach((film) => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    })
}

createUser(user);


// Eventos

const inputName = document.getElementById('name');
const userName = document.getElementById('username');
/*
inputName.addEventListener('input', e => {
    console.log(e.target.value);
    userName.textContent = e.target.value;
})
*/


const profileBtn = document.getElementById('ProfileBtn');

profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
})

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const CARD_SECTION = document.getElementById('profiles');

const setUserInfo = (usuarios) => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');

    const userElements = {
            user_name: document.createElement('h2'),
            age: document.createElement('h3'),
            description: document.createElement('p'),
            bandList: document.createElement('ul'),
            bands: []
        
    };

    userElements.user_name.textContent=usuarios.user_name;
    userElements.age.textContent=usuarios.age;
    userElements.description.textContent=usuarios.description;

    usuarios.fav_music.bands.forEach(textBand => {
        const elementList = document.createElement('li');
        elementList.textContent= textBand;
        userElements.bandList.appendChild(elementList);
    });

    card.append(userElements.user_name, userElements.age, userElements.description, userElements.bandList);
    return card;
}

users.forEach(user=> {
        const card = setUserInfo(user);
        CARD_SECTION.appendChild(card);
    })





// EVITAR LAS BANDAS PARA EL EJERCICIO 2


// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
// Al menos deben tener 2 commits

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('userAge');
const emailInput = document.getElementById('email');

const usernameDisplay = document.getElementById('username');
const ageDisplay = document.getElementById('age');
const emailDisplay = document.getElementById('mail');

const updateProfileButton = document.getElementById('ProfileBtn');


updateProfileButton.addEventListener('click', () => {
   
    const newName = nameInput.value;
    const newAge = ageInput.value;
    const newEmail = emailInput.value;

   
    usernameDisplay.textContent = `Nombre: ${newName}`;
    ageDisplay.textContent = `Edad: ${newAge}`;
    emailDisplay.textContent = `Correo: ${newEmail}`;
});