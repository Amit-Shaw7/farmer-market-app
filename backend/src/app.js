import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOptions.js";
import MainRouter from "./routes/index.js";
import { globalError } from "./middlewares/globalError.middleware.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use("/api/v1", MainRouter);
app.use("/api/development", MainRouter);

app.use(globalError);

export default app;