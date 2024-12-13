const url = "https://api.attackontitanapi.com/characters"

async function characterPlug() {
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector(".container");

    for (const character of data.splice(0,30)) {
        element.innerHTML += `
        <div class="item">
            <img src="${character.image}" alt="">
            <div>
                <h1>${character.name}</h1>
                <p>${character.age}</p>
                <p>${character.species}</p>
                <p>${character.hight} </p>
                <p>${character.occupation}</p>
            </div>
        </div>
        `
    
    }
    

characterPlug();
