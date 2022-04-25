import { Router } from "express";
import {ensureAuthenticatedMiddleware} from "../middlewares/ensureAuthenticatedMiddleware.js"
import * as disciplineController from "../controllers/disciplineController.js"

const disciplineRouter: Router = Router();
disciplineRouter.get("/discipline",ensureAuthenticatedMiddleware, disciplineController.getAllDisciplines)


export default disciplineRouter