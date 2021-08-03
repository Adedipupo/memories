import express from 'express';
import testRoutes from './post.js';

const router = express.Router();

router.use('/post',testRoutes)


export default router;