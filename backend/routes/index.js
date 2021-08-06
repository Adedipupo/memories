import express from 'express';
import postRoutes from './post.js';
import userRoutes from './user.js';

const router = express.Router();

router.use('/posts',postRoutes)
router.use('/users',userRoutes)


export default router;