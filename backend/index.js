import express from 'express';
import cors from 'cors';
import logger from "morgan";
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import indexRoute from './routes/index.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use('/api/v1/memories', indexRoute)

app.get('/',(req, res) => {
  res.send('Welcome to memories API')
})


app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
});