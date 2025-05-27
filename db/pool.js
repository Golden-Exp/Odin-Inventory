require('dotenv').config(); 
const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", 
  user: "infernape",
  database: "pokemon",
  password: process.env.password,
  port: 5432 
})