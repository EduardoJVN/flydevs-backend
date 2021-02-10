const axios = require('../config/axios')
const {amountOfPokemon , getAllPokemons, getImagePokemon} = require('../helpers')
const routePokeApi = require("../config/routePokeApi");
exports.index = async (req, res) => {
    axios.get(routePokeApi+'pokemon').then((response=>{
        const data = response.data.results
        let responseData = []
        for(let index in  data){
            responseData.push({name:data[index].name,image:getImagePokemon()}) 
        }
        return res.json(responseData);
    })).catch(()=>{
        return res.status(404).json({message:"Sin resultados de pokemons"});
    })
}

exports.show = async (req, res) => {
    /*the entered value is passed to lowercase since the api does not recognize if a word does not match one of its database*/
    const name = req.params.name.toLowerCase()
    axios.get(`${routePokeApi}pokemon/${name}`).then((responseGetData)=>{
        const response = [
            {name:responseGetData.data.name,image:getImagePokemon()}
        ]
        return res.json(response);
    }).catch(async (err)=>{
        /*In case you don't get the specific pokemon, it brings all the existing pokemons and they are filtered to get matches*/
        const pokemons = await getAllPokemons()
        let response = []
        pokemons.find(data=> {
            if(data.name.includes(name)){
                response.push({name:data.name,image:getImagePokemon()})
            }
        })
        return res.json(response);
    })
}


