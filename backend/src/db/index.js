import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDB = async () => {
    const DB_URI = process.env.MONGO_URI;
    try {
        const connectionInstance = await mongoose.connect(`${DB_URI}`);
        const host = connectionInstance.connection.host;
        if (host) {
            console.log("****************************");
            console.log('*    Starting Server');
            console.log(`*    Port: ${process.env.PORT || 4000}`);
            console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`);
            console.log(`*    Database: MongoDB`);
            console.log(`*    Host : ${host}`);
            console.log("****************************");
        }
    } catch (error) {
        console.log("****************************");
        console.error("Error connecting to MongoDB: " + error);
        console.log(DB_URI + DB_NAME);
        console.log("****************************");
        process.exit(1);
    }
}

export default connectToDB;