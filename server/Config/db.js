import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(` MONGODB CONNETED`.underline.italic.blue);
    }
    catch(error)  {
        console.log(`Error: ${error.message}.bold.red`);
    }
}