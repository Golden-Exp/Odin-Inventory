pool = require("./pool");

async function insertPokemon(pokemon, type, type2, region, trainer, sprite){
    await pool.query("INSERT INTO pokemons (pokemon, type, type2, region, trainer, sprite) VALUES ($1, $2, $3, $4, $5, $6)", [pokemon, type, type2, region, trainer, sprite]);
}

async function getAllPokemon(){
    const {rows} = await pool.query("SELECT * FROM pokemons");
    return rows;
}

async function getPokemon(id){
    const {rows} = await pool.query("SELECT * FROM pokemons where id=$1", [id]);
    return rows;
}

async function deletePokemon(id){
    await pool.query("DELETE FROM pokemons where id=( $1 )", [id]);
}

async function editPokemon(id, pokemon, type, type2, region, trainer){
    await pool.query("UPDATE pokemons SET pokemon=$1, type=$2, type2=$3, region=$4, trainer=$5 WHERE id=$6", [pokemon, type, type2, region, trainer, id])
}

module.exports = {insertPokemon, getAllPokemon, getPokemon, deletePokemon, editPokemon};