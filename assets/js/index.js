var userFormEl = document.getElementById("user-form");
var pokemonInputEl = document.getElementById("pokedexname");
var pokedexContainerEl = document.getElementById("pokedex-container");
var pokedexSearchTerm = document.getElementById("pokedex-search-term");

var formSubmitHandler = function (event) {
  event.preventDefault();

  var userSearch = pokemonInputEl.value.trim();

  if (userSearch) {
    getPokemon(userSearch);
    pokemonInputEl.value = "";
  } else {
    alert("Please enter a pokemon name!");
  }

  console.log(event);
};

var getPokemon = function (user) {
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + user;

  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      displayPokemon(data, user);
    });
  });
};

var displayPokemon = function (pokedex, searchTerm) {
  console.log(pokedex);
  console.log(searchTerm);

  pokedexContainerEl.textContent = "";
  pokedexSearchTerm.textContent = searchTerm;

  var baseExperience = pokedex.base_experience;

  var abilityEl = document.createElement("p");
  abilityEl.innerText = "Base Experience: "
  abilityEl.classList = "list-item flex-row justify-space-between align-center";

  var imageEl = document.createElement("img");
  imageEl.src = pokedex.sprites.other.dream_world.front_default;

  var titleEl = document.createElement("span");
  titleEl.textContent = baseExperience + " xp";

  abilityEl.appendChild(titleEl);
  abilityEl.appendChild(imageEl);

  pokedexContainerEl.appendChild(abilityEl);
};

userFormEl.addEventListener("submit", formSubmitHandler);
