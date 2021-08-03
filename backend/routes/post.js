import express from 'express';
import { createPost } from '../controllers/post.js';

const router = express.Router()


router.get('/all', createPost);


export default router;