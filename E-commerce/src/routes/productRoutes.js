import express from 'express';
import {createProduct, getAllProduct, getAllProductById} from '../controllers/productControllers.js';

const router = express.Router()

router.get('/products',getAllProduct)
router.post('/', createProduct)

router.get('/product/:id',getAllProductById)



export default router;
