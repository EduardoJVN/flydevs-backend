var express = require('express');
var router = express.Router();
const PokemonController = require('../controllers/PokemonController')
/* GET home page. */
router.get('/pokemons',PokemonController.index);
router.get('/pokemon/:name',PokemonController.show);
module.exports = router;
