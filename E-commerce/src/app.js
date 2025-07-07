import express from 'express';
import productRoutes from './routes/productRoutes.js'
import connectDb from './config/database.js';

const app = express()

connectDb()

app.use('/product',productRoutes)

app.listen(4000, () => {
    console.log("port started successfully")
})

