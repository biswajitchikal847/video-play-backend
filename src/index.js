import dotenv from "dotenv"
import mongoose from 'mongoose';
import { DB_NAME } from './constant.js';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})




connectDB()

























// import  express  from 'express';
// const app = express();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} ` );
//         console.log("Connected to MongoDB"); 
//         app.on('error',(e) => {
//            console.log("Error",e)
//            throw e
//         });

//         app.listen(process.env.PORT , () => {
//             console.log(`Server is running on port ${process.env.PORT }`);
//         });
//     }
//     catch (e) {
//         console.log("Error",e);
//         throw e
//     }
// })()