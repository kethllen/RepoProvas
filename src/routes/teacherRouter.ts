import { Router } from "express";
import {ensureAuthenticatedMiddleware} from "../middlewares/ensureAuthenticatedMiddleware.js"
import * as teacherController from "../controllers/teacherController.js"

const teacherRouter: Router = Router();
teacherRouter.get("/teacher", ensureAuthenticatedMiddleware, teacherController.getAllTeachers)


export default teacherRouter