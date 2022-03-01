import express from "express";
import * as LoginController from "../controllers/moduleOne/productionLogin.controller";

const moduleOneRouter = express.Router();

moduleOneRouter.post("/api/login/", LoginController.ProductionLogin);

export { moduleOneRouter };
