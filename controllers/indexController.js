const db = require("../db/queries");

async function getPokemon(req, res){
    const pokemon = await db.getAllPokemon();
    res.render("index", {pokemon:pokemon});
}

module.exports = {getPokemon};