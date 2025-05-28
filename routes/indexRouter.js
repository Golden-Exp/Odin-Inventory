const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();
indexRouter.get("", indexController.getPokemon);
indexRouter.post("/delete/:id", indexController.deletePokemon);
indexRouter.get("/edit/:id", indexController.fetchPokemon);
indexRouter.post("/edit/:id", indexController.editPokemon);

module.exports = indexRouter;