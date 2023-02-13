const express = require("express");
const app = express();
const cookie = require("cookie-parser");
const ErorController = require("../controller/errorController");
const DB = require("../db/db");
DB();

const ProductRouter = require("../router/productRouter");
const AuthRouter = require("../router/authRouter");
app.use(express.json());
app.use(cookie());
app.use("/api/product", ProductRouter);
app.use("/api/user", AuthRouter);

app.all("*", (req, res, next) => {
   res.status(404).json({
      message: `bunday  ${req.originalUrl} router mavjud emas`,
   });
});

app.use(ErorController);
module.exports = app;
