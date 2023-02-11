const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, " product nomini kiritishingiz shart"],
         trim: true,
      },
      price: {
         type: Number,
         required: [true, "product narxini kiriting"],
         default: 0,
      },
      description: {
         type: String,
         required: [true, "description kiritishingiz shart"],
      },
      ratings: {
         type: Number,
         default: 0,
      },
      images: [
         {
            image: {
               required: true,
               type: String,
            },
         },
      ],
      category: {
         type: String,
         required: [true, "siz product categoriyasini kiritishingiz shart"],
         enum: {
            values: [
               "Electronic",
               "Mobile Phones",
               "Laptops",
               "HeadPhones",
               "Food",
               "Books",
               "Clothes/Shoes",
               "Beauty/Health",
               "Sport",
               "Outdoor",
               "Home",
            ],
            message: "Iltimos quyidagi categoriyalardan birini tanlang",
         },
      },
      seller: {
         type: String,
         required: true,
      },
      stock: {
         type: Number,
         required: true,
      },
      numofreviews: {
         type: Number,
         default: 0,
      },
      reviews: [
         {
            name: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
         },
      ],
      createdAt: {
         type: Date,
         default: Date.now(),
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("products", ProductSchema);
