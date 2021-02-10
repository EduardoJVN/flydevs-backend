const axios = require("../config/axios");
const routePokeApi = require("../config/routePokeApi");

const amountOfPokemon = async () => {
    const data = await axios.get(routePokeApi+'pokemon').then(res=>{
        return res.data.count;
    }).catch(err=>{
        return [];
    })

    return data
}

const getAllPokemons = async () => {
    const quantity = await amountOfPokemon();
    const data = await axios.get(`${routePokeApi}pokemon?limit=${quantity}&offset=0`).then(res=>{
        return res.data.results;
    }).catch(err=>{
        return [];
    })
    return data
}

const getImagePokemon = ()=>{
    return "https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336"
}
module.exports = {
    amountOfPokemon,
    getAllPokemons,
    getImagePokemon
}