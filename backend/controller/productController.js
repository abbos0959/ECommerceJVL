const ProductModel = require("../models/productModel");
const mongoose = require("mongoose");
const ApiFeatures = require("../utils/ApiFeatures");
const GetallPRoduct = async (req, res, next) => {
   try {
      const resultperpage = 2;
      const features = new ApiFeatures(ProductModel.find(), req.query)
         .search()
         .filter()
         .pagination(resultperpage);
      const product = await features.query;

      res.status(200).json({
         message: `all product ${product.length}`,
         product,
      });
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};

const CreateProduct = async (req, res) => {
   try {
      const product = await ProductModel.create(req.body);
      res.status(200).json({
         message: "product yaratildi",
         product,
      });
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};

const GetSingleProduct = async (req, res) => {
   try {
      const id = req.params.id;
      const checkId = mongoose.Types.ObjectId.isValid(id);
      if (!checkId) {
         return res.status(400).json({
            message: "bunday id mavjud emas",
         });
      }
      const product = await ProductModel.findById(id);

      if (!product) {
         return res.status(400).json({
            message: "bunday product mavjud emas",
         });
      }
      res.status(200).json({
         message: "success",
         product,
      });
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};

const UpdateProduct = async (req, res) => {
   try {
      const id = req.params.id;
      const checkId = mongoose.Types.ObjectId.isValid(id);
      if (!checkId) {
         return res.status(400).json({
            message: "bunday id mavjud emas",
         });
      }
      const product = await ProductModel.findByIdAndUpdate(id, req.body);
      if (!product) {
         return res.status(400).json({
            message: "bunday product mavjud emas",
         });
      }

      res.status(200).json({
         message: "product yangilandi",
         product,
      });
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};
const DeleteProduct = async (req, res) => {
   try {
      const id = req.params.id;
      const checkId = mongoose.Types.ObjectId.isValid(id);
      if (!checkId) {
         return res.status(400).json({
            message: "bunday id mavjud emas",
         });
      }
      const product = await ProductModel.findByIdAndDelete(id);
      if (!product) {
         return res.status(400).json({
            message: "bunday product mavjud emas",
         });
      }

      res.status(200).json({
         message: "product O'chirildi",
         product,
      });
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};

module.exports = { GetallPRoduct, CreateProduct, GetSingleProduct, UpdateProduct, DeleteProduct };
