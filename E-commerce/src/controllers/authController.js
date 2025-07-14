import User from '../models/User.js'; 
import jwt from 'jsonwebtoken';
import generateOtp from '../config/generateOtp.js';
import Otp from '../models/Otp.js';

const register = async (req,res) =>{
    try{
        const {userName, email, password, phone, confirmPassword} = req.body

     if(!userName || !email  || !password || !phone || !confirmPassword){
        throw new Error('User Credentials missing')
     }
     if(password !== confirmPassword){
        throw new Error("Password don't match")
     }
     const userFound = await User.find({email: email})
     // userFound =[ {}]
     if(userFound.length > 0)
     {
        throw new Error("User already exist")
     }

     const data = User.create({
     userName,
     email,
     password,
     phone
     })
     res.status(200).json({message:"user registered successfully" , data})
    } catch(error){
    console.log(error.message)
        res.status(400).send(error.message)
}
}

const login = async (req,res) =>{
    try{
        const {email, password}= req.body
    const userExist = await User.findOne({email: email})
    
    if (!userExist){throw new Error("Invalid User")}
    
    console.log(userExist.password,password)
     if(password !== userExist.password){throw new Error("Invalid Credentials")}

     const payload = {
        email: userExist.email,
        id:userExist._id,
        role:userExist.role,
        userName:userExist.userName
     }

     const token = jwt.sign(payload,"secretKey")
     res.cookie('authtoken',token)



res.status(200).json({message: "userLoggedIN Successfully", token})
} catch(error){
    console.log(error.message)
    res.status(400).send(error.message)
}
}

const forgotPassword = async (req, res) =>{
    try{
        const {email} = req.body

        if(!email){
            throw new Error("Email is required")
        }

        const doesUserExist = await User.findOne({email});
        if(!doesUserExist){
         throw new Error("User does not exist")
        }
        const otp = generateOtp();

        const data = await Otp.create({
            email,
            otp,
        })
        
        res.json({message: "Otp sent successfully", data});
    } catch(error){
        console.log(error.message)
        res.send(error.message)
    }
};


export {register, login, forgotPassword};
