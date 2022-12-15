const searchResults = document.getElementById("search-results")
const evolutionEl = document.getElementById("evolutionButton")

async function getAllPokemon() {
    let response = await fetch("pokemon.json")
    let data = await response.json()
    return data    
}

function getPokemonHtml(aPokemon) {
    return `<div class="a-pokemon">
        <div class="a-pokemon-id">${aPokemon.id}</div>
        
        <div class="a-pokemon-name">${aPokemon.name.english}</div>
        <div class="a-pokemon-type">${aPokemon.type.join(' / ')}</div>
        
        <div class="a-pokemon-stat">HP: ${aPokemon.base.HP}</div>
        <div class="a-pokemon-stat">Attack: ${aPokemon.base.Attack}</div>
        <div class="a-pokemon-stat">Defense: ${aPokemon.base.Defense}</div>
        <div class="a-pokemon-stat">Speed: ${aPokemon.base.Speed}</div>
        <button id="evolutionButton">See its evolution!</button>
    </div>`
}

function getSearchedPokemon(allPokemon, input){
    return allPokemon.map(
        function(aPokemon){
            if(aPokemon.name.english.toLowerCase() === input.toLowerCase()){
                return getPokemonHtml(aPokemon)
            }
        }
    ).join('')
}

function searchPokemon(){
    let input = document.getElementById("search-bar").value
    console.log(input)
    input = input.toLowerCase()
    getAllPokemon().then(allPokemon => {
        const tempHTML = getSearchedPokemon(allPokemon, input)
        searchResults.innerHTML = `<div class="my-pokedex">
            ${tempHTML}
        </div>`
    })
}

searchPokemon()