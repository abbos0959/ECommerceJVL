require("dotenv").config();
const app = require("./middleware/app");
const colors = require("colors");

const PORT = process.env.PORT || 3002;

app.listen(PORT, console.log(`server ishladi ${process.env.PORT} `.bgYellow.bold));
