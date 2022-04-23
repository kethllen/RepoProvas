import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";

const authRouter = Router();
authRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema),
  userController.signUp
);
authRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  userController.signIn
);

export default authRouter;
