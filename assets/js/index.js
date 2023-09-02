// logic for pokemon api calls

var getPokemon = function(pokemon) {
    // format the pokeapi url
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getPokemon("mew");