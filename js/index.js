let teams = [
    {
        name: "Loveth Omokaro",
        picture: "img/loveth.png",
        skill: "html, css, bootstrap, js",
        bestMovie: "Engraved Herein",
        bestFood: "Starch with Black Soup",
        age: 26,
        displayName: "@Nutjob"
    },
    {
        name: "Stanley Chijioke Acholonu",
        picture: "img/stanley.jpg",
        skill: "html, css, bootstrap, js",
        bestMovie: "Clash of the Titans",
        bestFood: "Pizza",
        age: 30,
        displayName: "@StanleyCeejay"
    }, 
    {
        name: "Avwunudiogba Ogaga Andrew",
        picture: "img/Andrew.jpg",
        skill: "html, css, bootstrap, js",
        bestMovie: "Titanic",
        bestFood: "Chips and Chicken",
        age: 36,
        displayName: "@drew"
    },
    {
        name: "Ifeoma Okafor",
        picture: "img/ifoma.jpg",
        skill: "html, css, bootstrap, js",
        bestMovie: "Coming to America",
        bestFood: "Yam and Egg",
        age: 28,
        displayName: "@E4ma"
    },
    {
        name: "Kasie Ugwu",
        picture: "img/kasie.jpg",
        skill: "html, css, bootstrap, js",
        bestMovie: "The Guardians of the Galaxy",
        bestFood: "Sandwich",
        age: 25,
        displayName: "@Kasie"
    },
    {
        name: "Shodipe Oladele",
        picture: "img/oladele.jpg",
        skill: "html, css, bootstrap, js",
        bestMovie: "The Avatar",
        bestFood: "Rice and Chicken",
        age: 36,
        displayName: "@Ladel"
    },
    {
        name: "Anyanwu Chukwuemeka Clinton",
        picture: "img/khrisemeka.jpg",
        skill: "html, css, bootstrap, js",
        bestMovie: "The Avengers",
        bestFood: "Yam and Beans",
        age: 34,
        displayName: "@Khrisemeka"
    }, 
    {
        name: "Onyemenam Charles",
        picture: "img/charles.jpg",
        skill: "html, css, bootstrap, js",
        bestMovie: "The Dark Knight",
        bestFood: "Rice and Salad",
        age: 30,
        displayName: "@Charles"
    }

];


let container = document.querySelector(".container");


let card = '';

teams.forEach(team => {
    card += `
    <div class="card">
        <div class="card-header">
            <img src="${team.picture}" class="card-pics">
        </div>
        <div class="card-body">
            <h3 class="card-title"> ${team.name}</h3>
            <p class="card-text">Display Name: ${team.displayName}</p>
            <p class="card-text">Skill: ${team.skill}</p>
            <p class="card-text">Best Movie: ${team.bestMovie}</p>
            <p class="card-text">Best Food: ${team.bestFood}</p>
            <p class="card-text">Age: ${team.age}</p>
            
        </div>
    </div>
`;

});

container.innerHTML = card;
