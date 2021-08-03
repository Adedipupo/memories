import express from 'express';
import cors from 'cors';
import logger from "morgan";
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3030;

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
});