import express from "express";
import AuthRouter from "./auth.routes.js";

const router = express.Router();

router.use("/auth", AuthRouter);

export default router;