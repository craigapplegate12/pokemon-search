const axios = require('axios');

function getPokemonData(pokeId){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((response) => {
        const pokemon = response.data
        const newObj = {
            name = pokemon.name,
            type = pokemon.types,
            height = pokemon.height,
            weight = pokemon.weight
        }

        return newObj;
        })
        .catch((error) => {
            console.error(error.response.status, error.response.statusText);
        })
    }
