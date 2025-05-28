const { Router } = require("express");
const db = require("../db/queries");
const newPokemonController = require("../controllers/newPokemonController");

const newPokemonRouter = Router();

newPokemonRouter.get("", (req, res) => {
    res.render("form", {})
});

newPokemonRouter.post("", newPokemonController.newPokemon);

module.exports = newPokemonRouter;