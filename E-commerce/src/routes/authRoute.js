import express from "express";
import { forgotPassword, login, register } from "../controllers/authController.js";
import generateOtp from "../config/generateOtp.js";

const router = express.Router()

router.post('/register', register);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.post('/generateOtp', generateOtp);



export default router
