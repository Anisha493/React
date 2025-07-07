import mongoose from "mongoose";

const connectDb = async()=>{
    try{
    await mongoose.connect('mongodb+srv://user:user@cluster0.n2m4uuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("database connected successfully")
} catch (error){
    console.log("error.message")
}
    
}

export default connectDb;