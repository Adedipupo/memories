import express from 'express';
import { createPost, deletePost, getPosts, updatePost } from '../controllers/post.js';

const router = express.Router()


router.post('/create', createPost);
router.get('/', getPosts);
router.patch('/edit/:id', updatePost);
router.delete('/delete/:id', deletePost);


export default router;