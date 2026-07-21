import mongoose from "mongoose";
import {DB_name} from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`);
       console.log(`MONGO DB CONNECTED !! Db host: ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("MONOGO DB Connection error", error)
        process.exit(1);
    }
}

export default connectDB;