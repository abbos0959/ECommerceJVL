const express = require("express");
const ProductController = require("../controller/productController");
const { Isauthentication } = require("../utils/isAuth");
const router = express.Router();

router.route("/all").get( Isauthentication,ProductController.GetallPRoduct);
router.route("/add").post(Isauthentication, ProductController.CreateProduct);
router
   .route("/:id")
   .get(ProductController.GetSingleProduct)
   .patch(ProductController.UpdateProduct)
   .delete(ProductController.DeleteProduct);

module.exports = router;
