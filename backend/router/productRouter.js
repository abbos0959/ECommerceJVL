const express = require("express");
const ProductController = require("../controller/productController");

const router = express.Router();

router.route("/all").get(ProductController.GetallPRoduct);
router.route("/add").post(ProductController.CreateProduct);
router
   .route("/:id")
   .get(ProductController.GetSingleProduct)
   .patch(ProductController.UpdateProduct)
   .delete(ProductController.DeleteProduct);

module.exports = router;
