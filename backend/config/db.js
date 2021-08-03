import mongoose from 'mongoose';


export const connectDB = async(req,res,next) => {
    const url = process.env.DATABASE_URL;

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => {
        console.log("info,"`Succesfully connected to mongoDB`);
      })
      .catch((error) => {
        console.log("error", error.message);
      });


}