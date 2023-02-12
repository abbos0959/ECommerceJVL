const productData = require("../Data/ProductData.json");
const ProductModel = require("../models/productModel");
const colors = require("colors");

require("dotenv").config();
const DB = require("../db/db");
DB();

const AllSeedProduct = async (req, res) => {
   try {
      await ProductModel.deleteMany({});
      console.log("hamma product o'chirildi");
      await ProductModel.insertMany(productData);

      console.log("hamma product qo'shildi");
   } catch (error) {
      console.log(error.message);
   }
   process.exit(1);
};

AllSeedProduct();
