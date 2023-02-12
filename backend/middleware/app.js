const express = require("express");
const app = express();
const ErorController = require("../controller/errorController");
const DB = require("../db/db");
DB();

const ProductRouter = require("../router/productRouter");
app.use(express.json());
app.use("/api/product", ProductRouter);

app.all("*", (req, res, next) => {
   res.status(404).json({
      message: `bunday  ${req.originalUrl} router mavjud emas`,
   });
});

app.use(ErorController);
module.exports = app;
