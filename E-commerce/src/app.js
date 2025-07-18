import express from 'express';
import productRoutes from './routes/productRoutes.js'
import authRoute from './routes/authRoute.js'
import connectDb from './config/database.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDb()

app.get("/hello",(req, res)=>{
    console.log("hello")
    res.send("Server is running")
})

app.use('/product',productRoutes)
app.use('/auth', authRoute)

app.listen(4000, () => {
    console.log("port started successfully")
})

