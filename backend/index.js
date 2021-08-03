import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

const port = process.env.PORT || 3030;

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
});