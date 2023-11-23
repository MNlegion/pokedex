let userFormEl = document.getElementById("user-form");
let pokemonInputEl = document.getElementById("pokedexname");
let pokedexContainerEl = document.getElementById("pokedex-container");
let pokedexSearchTerm = document.getElementById("pokedex-search-term");

let formSubmitHandler = function (event) {
  event.preventDefault();

  let userSearch = pokemonInputEl.value.trim();

  if (userSearch) {
    getPokemon(userSearch);
    pokemonInputEl.value = "";
  } else {
    alert("Please enter a pokemon name!");
  }

  console.log(event);
};

let getPokemon = function (user) {
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/" + user;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function(data) {
        displayPokemon(data, user);
      });
    } else {
      alert("Error: Pokemon Not Found");
    }
  })
  .catch(function(error) {
    alert("Unable to connect to PokeApi");
  });
};

let displayPokemon = function (pokedex, searchTerm) {
  console.log(pokedex);
  console.log(searchTerm);

  pokedexContainerEl.textContent = "";
  pokedexSearchTerm.textContent = searchTerm;

  let baseExperience = pokedex.base_experience;

  let abilityEl = document.createElement("p");
  abilityEl.innerText = "Base Experience: "
  abilityEl.classList = "list-item flex-row justify-space-between align-center";

  let imageEl = document.createElement("img");
  imageEl.src = pokedex.sprites.other.dream_world.front_default;

  let titleEl = document.createElement("span");
  titleEl.textContent = baseExperience + " xp";

  abilityEl.appendChild(titleEl);
  abilityEl.appendChild(imageEl);

  pokedexContainerEl.appendChild(abilityEl);
};

userFormEl.addEventListener("submit", formSubmitHandler);
