const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");
const jwtToken = require("../utils/jwtToken");

const Register = catchErrorAsync(async (req, res, next) => {
   try {
      const { name, email, password, avatar } = req.body;
      const hashPassword = await bcrypt.hash(password.toString(), 12);

      const checkUser = await UserModel.findOne({ email });
      if (checkUser) {
         return next(new AppError("bunday user allaqachon mavjud", 400));
      }

      const user = await UserModel.create({
         name,
         email,
         avatar,
         password: hashPassword,
      });
      jwtToken(user, 200, res);
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
});

const Login = catchErrorAsync(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await UserModel.findOne({ email });

   if (!user) {
      return next(new AppError("bunday user mavjud emas", 400));
   }
   const comparePassword = await bcrypt.compare(password.toString(), user.password);
   if (!comparePassword) {
      return next(new AppError("Parol yoki email xatoligi", 400));
   }

   jwtToken(user, 200, res);
});

module.exports = { Register, Login };
