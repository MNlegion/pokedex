// var pokemonFormEl = document.querySelector("#pokemon-form");
// var pokemonInputEl = document.querySelector("#pokemon");
// var pokedexContainerEl = document.querySelector("#pokedex-container");
// var pokemonSearchTerm = document.querySelector("#pokemon-search-term");

// var formSubmitHandler = function (event) {
//   event.preventDefault();

//   var pokemonName = pokemonInputEl.value.trim();

//   if (pokemonName) {
//     getPokemon(pokemonName);
//     pokemonInputEl.value = "";
//   } else {
//     alert("Please enter a Pokemon Name");
//   }
// };

// // logic for pokemon api calls

// var getPokemon = function (pokemon) {
//   // format the pokeapi url
//   var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

//   // make a request to the url
//   fetch(apiUrl).then(function (response) {
//     response.json().then(function (data) {
//     //   displayPokemon(data, pokemon);
//     });
//   });
// };

// var displayPokemon = function (pokedexEntry, searchTerm) {
//   if (pokedexEntry.length === 0) {
//     pokedexContainerEl.textContent = "No Pokemon Found.";
//     return;
//   }

//   // console.log("Height: " + pokedexEntry.height + " meters");
//   pokemonSearchTerm.textContent = searchTerm;

//   for (var i = 0; i < pokedexEntry.length; i++) {

//     var statsName = pokedexEntry[i];

//     // container to hold pokemon data
//     var containerEl = document.createElement("div");
//     containerEl.classList =
//       "list-item flex-row justify space-beteen align-center";

//     // span element to hold pokemon name
//     var titleEl = document.createElement("span");
//     titleEl.textContent = statsName[i];

//     // append to container
//     containerEl.appendChild(titleEl);

//     // append container to dom
//     pokedexContainerEl.appendChild(containerEl);
//   }
// };

// pokemonFormEl.addEventListener("submit", formSubmitHandler);
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#pokemon");

var formSubmitHandler = function(event) {
    event.preventDefault();

    // get value from input element
    var pokemonName = nameInputEl.value.trim();

    if (pokemonName) {
        getPokemon(pokemonName);
        nameInputEl.value = "";
    } else {
        alert("Please Enter a Pokemon!");
    }
};

var getPokemon = function(pokemon) {

    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayPokemon(data, pokemon);
        });
    });
};

var displayPokemon = function(pokemonArr, searchTerm) {
    console.log(pokemonArr);
    console.log(searchTerm);
};

userFormEl.addEventListener("submit", formSubmitHandler);