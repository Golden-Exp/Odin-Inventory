const { Router } = require("express");
const db = require("../db/queries");

const newPokemonRouter = Router();

newPokemonRouter.get("", (req, res) => {
    res.render("form", {})
});

newPokemonRouter.post("", async (req, res) => {
    const { pokemon } = req.body;
    await db.insertPokemon(pokemon, "fire", "water", "kanto", "red");
    res.redirect("/");
});

module.exports = newPokemonRouter;