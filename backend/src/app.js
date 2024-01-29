import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOptions.js";
import MainRouter from "./routes/index.js";
import { globalError } from "./middlewares/globalError.middleware.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1", MainRouter);

app.use(globalError);

export default app;