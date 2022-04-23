import { Router } from "express";
import authRouter from "./authRouter";

const routers = Router();
routers.use(authRouter);

export default routers;
