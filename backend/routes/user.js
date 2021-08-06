
import express from 'express';
import { signIn, signUp } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router()


router.post('/register', signUp);
router.post('/login',auth, signIn);



export default router;