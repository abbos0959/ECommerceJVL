const express = require("express");
const app = express();

const DB = require("../db/db");
DB();
app.use(express.json());
app.use("/", (req, res) => {
   res.send("salom");
});
module.exports = app;
