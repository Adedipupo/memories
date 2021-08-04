import express from 'express';
import { createPost, getPosts, updatePost } from '../controllers/post.js';

const router = express.Router()


router.post('/create', createPost);
router.get('/', getPosts);
router.patch('/edit/:id', updatePost);


export default router;