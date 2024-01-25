import dotenv from "dotenv";
import connectToDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

connectToDB()
    .then(() => {
        const PORT = process.env.PORT || 4000;
        app.on("error" , (error) => {
            console.error(`Can't start server ! ${error}`);
        })
        app.listen(PORT, () => {
            console.log(`Server started at ${PORT}`);
            console.log("****************************");
        })
    })
    .catch((error) => {
        console.error(`Database connection failed ! ${error}`);
    })

