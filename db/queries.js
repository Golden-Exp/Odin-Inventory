pool = require("./pool");

async function insertPokemon(pokemon, type, type2, region, trainer, sprite){
    await pool.query("INSERT INTO pokemons (pokemon, type, type2, region, trainer, sprite) VALUES ($1, $2, $3, $4, $5, $6)", [pokemon, type, type2, region, trainer, sprite]);
}

async function getAllPokemon(){
    const {rows} = await pool.query("SELECT * FROM pokemons");
    return rows;
}

module.exports = {insertPokemon, getAllPokemon};