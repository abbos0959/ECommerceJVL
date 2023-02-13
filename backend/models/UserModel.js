const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "siz ism kiritishingiz shart"],
         trim: true,
      },
      email: {
        
         type: String,
         required: [true, "siz email kiritishingiz shart"],
         validate: [validator.isEmail ,"Siz to'g'ri email kiritganingizga ishonch hosil qiling"],
      },
      password: {
         type: String,
         required: [true, "siz password kiritishingiz shart"],
      },
      avatar: {
         type: String,
      },
      role: {
         type: String,
         default: "user",
      },
      createdAt: {
         type: Date,
         default: Date.now(),
      },

      resetpasswordtoken: String,
      resetpasswordexpires: Date,
   },
   { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
