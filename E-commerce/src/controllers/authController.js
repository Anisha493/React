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
        });

        sendMail("nogepa5391@coderdir.com", "Hello")
        
        res.json({message: "Otp sent successfully", data});
    } catch(error){
        console.log(error.message)
        res.send(error.message)
    }
};

const verifyOtp = async (req,res) =>{
    try{
        const {email,otp} = req.body;

        if (!email || !otp) {
            throw new Error("Email and otp are required for verification!");
        }

        const doesEmailMatch = await User.findOne({email:email});

        if (!doesEmailMatch){
            throw new Error("User is not registered");
        }

        const doesHaveOtp = await Otp.findOne({email:email, otp:otp});

        if (!doesHaveOtp){
            throw new Error("User doesn't have OTP!");
        }

        if(doesHaveOtp.otp !== otp){
            throw new Error("OTP does not match!");
        }

        res.status(200).json({message:"OTP verified", data: doesHaveOtp});
    } catch(error){
    console.log(error.message);
    res.send(error.message)
    }
};

const resetPassword = async (req,res) =>{
    try{
        const {email, password} = req.body;
        if (!email || !password){
            throw new Error("Email and password are required!");
        }

        const doesUserExist = await User.findOne({email:email});
        if (!doesUserExist) {
            throw new Error("User is not registered");
        }

        const data = await User.findOneAndUpdate({email},
            {password: password},
            {new: true},);
        res.status(200).json({message:"Password changed successfully", data});
        }catch(error){
            console.log(error.message);
            res.send(error.message);
        }

}


export {register, login, forgotPassword, verifyOtp, resetPassword}; 
