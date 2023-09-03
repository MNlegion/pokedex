var pokemonFormEl = document.querySelector("#pokemon-form");
var pokemonInputEl = document.querySelector("#pokemon");
var pokedexContainerEl = document.querySelector("#pokedex-container");
var pokemonSearchTerm = document.querySelector("#pokemon-search-term");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var pokemonName = pokemonInputEl.value.trim();

    if (pokemonName) {
        getPokemon(pokemonName);
        pokemonInputEl.value = "";
    } else {
        alert("Please enter a Pokemon Name");
    }
    console.log(event);
};

// logic for pokemon api calls

var getPokemon = function(pokemon) {
    // format the pokeapi url
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayPokemon(data, pokemon)
        });
    });
};

var displayPokemon = function(pokedexEntry, searchTerm) {
    if (pokedexEntry.length === 0) {
        pokedexContainerEl.textContent = "No Pokemon Found.";
        return;
    }
    
    pokemonSearchTerm.textContent = searchTerm;
};

pokemonFormEl.addEventListener("submit", formSubmitHandler);