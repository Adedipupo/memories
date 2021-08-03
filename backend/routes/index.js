import express from 'express';
import testRoutes from './post.js';

const router = express.Router();

router.use('/posts',testRoutes)


export default router;