const axios = require('../config/axios')
const {amountOfPokemon} = require('../helpers')
const routePokeApi = require("../config/routePokeApi");
exports.index = async (req, res) => {
    axios.get(routePokeApi+'pokemon').then((response=>{
        const data = response.data.results
        let responseData = []
        for(let index in  data){
            responseData.push({name:data[index].name,image:"https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336"}) 
        }
        
        return res.json(responseData);
    })).catch(()=>{
        return res.status(404).json({message:"Sin resultados de pokemons"});
    })


    
}

exports.show = async (req, res) => {
    const quantity = await amountOfPokemon();

    axios.get(`${routePokeApi}pokemon?limit=${quantity}&offset=0`).then((responseGetData)=>{
        const responseListPokemons = responseGetData.data.results
        let array = []
        responseListPokemons.find(data=> {
            if(data.name.includes(req.params.name)){
                array.push({name:data.name,image:"https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336"})
            }
        })
        return res.json(array);
    }).catch(()=>{
        return res.status(404).json({message:"Sin resultados de pokemons"});
    })   
}


