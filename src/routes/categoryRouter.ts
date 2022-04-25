import { Router } from "express";
import {ensureAuthenticatedMiddleware} from "../middlewares/ensureAuthenticatedMiddleware.js"
import * as categoryController from "../controllers/categoryController.js"

const categoryRouter: Router = Router();
categoryRouter.get("/",ensureAuthenticatedMiddleware, categoryController.getAllCategories)


export default categoryRouter