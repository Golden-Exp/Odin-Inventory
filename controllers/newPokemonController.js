const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const types = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", 
    "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];


const validatePokemon = [
  body("pokemon").trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).custom(async (pokemonName) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!res.ok) {
            throw new Error("Not a Valid Pokemonn");
        }
        return true;
  }).withMessage("Not a Valid Pokemon"),
  body("type").trim()
    .isAlpha().toLowerCase().isIn(types).withMessage("Not a Valid Type"),
  body("type2").trim()
  .isAlpha().toLowerCase().isIn(types.concat(["none"])).withMessage("Not a Valid Type"),
];

exports.newPokemon = [
    validatePokemon,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                title: "Add Pokemon",
                errors: errors.array(),
            });
        }
        const { pokemon, type, type2, region, trainer } = req.body;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await response.json();

        await db.insertPokemon(pokemon, type, type2, region, trainer, data.sprites.other.showdown.front_default);
        res.redirect("/");
    }
];
