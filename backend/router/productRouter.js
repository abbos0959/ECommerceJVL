const express = require("express");
const ProductController = require("../controller/productController");
const { Isauthentication, authoriseRoles } = require("../utils/isAuth");
const router = express.Router();

router.route("/all").get(Isauthentication, ProductController.GetallPRoduct);
router
   .route("/add")
   .post(Isauthentication, authoriseRoles("admin"), ProductController.CreateProduct);
router
   .route("/:id")
   .get(ProductController.GetSingleProduct)
   .patch(ProductController.UpdateProduct)
   .delete(ProductController.DeleteProduct);

module.exports = router;
