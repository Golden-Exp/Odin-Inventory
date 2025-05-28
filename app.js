express = require("express");
const path = require("node:path");
app = express();

app.use(express.static(path.join(__dirname, "")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
const newPokemonRouter = require("./routes/newPokemonRouter");

app.use("/", indexRouter);
app.use("/new", newPokemonRouter);


app.listen(3000, () => {
    console.log("listening in on port number 3000!");
})
