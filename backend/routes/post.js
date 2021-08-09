import express from 'express';
import { createPost, deletePost, getPosts, likeAPost, updatePost } from '../controllers/post.js';
import auth from '../middleware/auth.js';

const router = express.Router()


router.post('/create', auth, createPost);
router.get('/', getPosts);
router.patch('/edit/:id', auth, updatePost);
router.delete('/delete/:id', auth, deletePost);
router.patch('/like/:id', auth, likeAPost);


export default router;