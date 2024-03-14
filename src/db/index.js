import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
console.log(`${process.env.MONGODB_URI}/${DB_NAME}`, "mongodb://localhost")
const connectDB = async () => {
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDb connected !! DB Host: ${connectionInstance.connection.host}`);

    }catch(err){
        console.log(err, "Mongodb connection error");
        process.exit(1);;
    }
}

export default connectDB;
