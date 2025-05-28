const db = require("../db/queries");
const { param } = require("../routes/newPokemonRouter");

async function getPokemon(req, res){
    const pokemon = await db.getAllPokemon();
    res.render("index", {pokemon:pokemon});
}

async function deletePokemon(req, res){
    const params = req.params;
    await db.deletePokemon(params.id);
    res.redirect("/");
}

async function fetchPokemon(req, res){
    const params = req.params;
    const details = await db.getPokemon(params.id);
    res.render("form", {details:details[0]});
}

async function editPokemon(req, res){
    const params = req.params;
    const { pokemon, type, type2, region, trainer } = req.body
    await db.editPokemon(params.id, pokemon, type, type2, region, trainer);
    res.redirect("/");
}

module.exports = {getPokemon, deletePokemon, fetchPokemon, editPokemon};