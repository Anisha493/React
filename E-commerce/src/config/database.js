import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const connectDb = async()=>{
    try{
    await mongoose.connect('mongodb+srv://user:user@cluster0.n2m4uuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("database connected successfully")
    const adminExist = await User.findOne({email: "admin@gmail.com"})
    const hashedPassword = await bcrypt.hash("admin123", 10);
    if(adminExist){
        console.log("Admin already exists")
        return
    }else{
        await User.create({
            userName: "AdminUser",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "ADMIN"
        })
        console.log("Admin seeded successfully")
    }

    } catch (error){
        console.log(error.message)
    }
}
export default connectDb;
