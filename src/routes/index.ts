import { Router } from "express";
import authRouter from "./authRouter.js";
import categoryRouter from "./categoryRouter.js";
import disciplineRouter from "./disciplineRouter.js";
import teacherRouter from "./teacherRouter.js";
import termRouter from "./termRouter.js";
import testRouter from "./testRouter.js";

const routers = Router();
routers.use(authRouter);
routers.use(categoryRouter);
routers.use(disciplineRouter);
routers.use(teacherRouter);
routers.use(termRouter);
routers.use(testRouter);

export default routers;
