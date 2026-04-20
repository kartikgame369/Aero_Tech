import expess from 'express';
const AuthRouter = expess.Router();
import bcrypt from 'bcrypt';
import User  from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import validateSignupData from '../utils/Validation.js';

const epp = expess();

AuthRouter.post("/signup", async(req, res) => {
  try {
   validateSignupData(req);
    const { firstName, lastName, password, emailId } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId
      }
    });
  } catch(error){
    res.status(400).json({
      success: false,
      message: error.message || "Signup failed"
    });
  }
});
AuthRouter.post("/login", async(req,res)=>{

    try{
        const { emailId , password } = req.body;
        if(!emailId || !password){
            return res.status(400).json({
              success: false,
              message: "Please provide email and password"
            });
        }
        const user = await User.findOne({emailId:emailId})
        if(!user){
            return res.status(401).json({
              success: false,
              message: "User not found. Please sign up first"
            });
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(isPasswordValid){
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET,{ expiresIn: "1d" });
            res.cookie("token",token,{
                httpOnly:true
            });
            res.status(200).json({
              success: true,
              message: "Login successful",
              token: token,
              user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                emailId: user.emailId
              }
            });
        }
        else{
            res.status(401).json({
              success: false,
              message: "Password is incorrect"
            });
        }

    }catch(error){
        res.status(400).json({
          success: false,
          message: error.message || "Login failed"
        });
    }

});
AuthRouter.post("/logout", async(req,res)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now())
    });
    res.status(200).json({
      success: true,
      message: "Logout successful"
    });
});
AuthRouter.post("/forgot-password", async(req, res)=>{
    try{
        const { emailId } = req.body;
        if(!emailId){
            throw new Error("please provide email id");
        }
    }catch(error){
        res.status(400).send("error"+ error.message)

    }

})

export default AuthRouter;