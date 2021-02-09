const axios = require("axios");
exports.index = async (req, res) => {
    axios.defaults.headers.common["Content-type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response=>{
        let data = response.data.results
        let responseData = []
        // console.log(data)
        for(let index in  data){
            responseData.push({name:data[index].name,image:"https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336"}) 
        }
        
        return res.json(responseData);
    })).catch((err)=>{
        console.log(err)
        return res.status(404).json({message:"Sin resultados de pokemons"});
    })


    
}

exports.show = async (req, res) => {
    axios.defaults.headers.common["Content-type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
    // const cantidad = await cantidad();
    axios.get('https://pokeapi.co/api/v2/pokemon/'+req.params.name).then((response=>{
        const responseData = [{
            image:response.data.sprites.front_default,
            name:response.data.name
        }]
        return res.json(responseData);
    })).catch((err)=>{
        // console.log("dios error pero busco")
        // axios.get('https://pokeapi.co/api/v2/pokemon?limit=&offset=0').then((responseGetData)=>{
        //     console.log(responseGetData.data.results)
        //     return res.json(responseData);
        // }).catch(err=>{
        //     console.log(err)
        //     return res.status(404).json({message:"Sin resultados de pokemons"});
        // })
        return res.status(404).json({message:"Sin resultados de pokemons"});
    })

    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0').then((responseGetData)=>{
    //         console.log(responseGetData.data.results)
    //         return res.json(responseData);
    //     }).catch(err=>{
    //         console.log(err)
    //         return res.status(404).json({message:"Sin resultados de pokemons"});
    //     })
    
}


