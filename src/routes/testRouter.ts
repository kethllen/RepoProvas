import { Router } from "express";
import {ensureAuthenticatedMiddleware} from "../middlewares/ensureAuthenticatedMiddleware.js"
import * as testController from "../controllers/testController.js"

const testRouter: Router = Router();
testRouter.get("/",ensureAuthenticatedMiddleware, testController.getAllTests)


export default testRouter