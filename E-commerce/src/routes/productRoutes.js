import express from 'express';
import { sayHello } from '../controllers/productControllers.js';

const router = express.Router()

router.get('/', sayHello)



export default router;