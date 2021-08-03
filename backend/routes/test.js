import express from 'express';
import { getAll } from '../controllers/test.js';

const router = express.Router()


router.get('/all', getAll);


export default router;