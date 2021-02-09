const axios = require("../config/axios");
const routePokeApi = require("../config/routePokeApi");
exports.amountOfPokemon = async () => {
    const data = await axios.get(routePokeApi+'pokemon').then(res=>{
        return res.data.count;
    }).catch(err=>{
        return err.response;
    })

    return data
}