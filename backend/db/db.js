const mongoose = require("mongoose");

const DB = async (req, res) => {
   try {
      await mongoose.connect(process.env.URL);
      console.log("mongodb ulandi uraaa".bgGreen.bold);
   } catch (error) {
      console.log("afsus mongodb ulanmadi".bgRed.bold, error.message);
   }
};

module.exports = DB;
