import { Router } from "express";
import {ensureAuthenticatedMiddleware} from "../middlewares/ensureAuthenticatedMiddleware.js"
import * as termController from "../controllers/termController.js"

const termRouter: Router = Router();
termRouter.get("/term", ensureAuthenticatedMiddleware, termController.getAllTerms)


export default termRouter