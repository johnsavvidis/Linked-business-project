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
    </div>`
}

function getSearchedPokemon(allPokemon, input){
    return allPokemon.map(
        function(aPokemon){
            if(aPokemon.name === input){
                return getPokemonHtml(aPokemon)
            }
        }
    ).join('')
}

function searchPokemon(){
    let input = document.getElementById("search-bar").value
    input = input.toLowerCase()
    getAllPokemon().then(allPokemon => {
        const tempHTML = getSearchedPokemon(allPokemon, input)
        document.getElementById("search-results").innerHTML = `<div class="my-pokedex">
            ${tempHTML}
        </div>`
    })
}

function evolutionOfPokemon(){
    getAllPokemon().then(allPokemon => {
        document.getElementById("search-results").innerHTML = `<div class="my-pokedex">
            ${allPokemon.map(aPokemon => getPokemonHtml(aPokemon)).join('')}
        </div>`
    })
}

searchPokemon()
evolutionOfPokemon()