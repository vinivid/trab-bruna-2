import { Router } from "express";
import { checkAdm } from "../controllers/admController.js";
import { requireAuth } from "../midlewares/adm.js";

const admRouter = Router();

admRouter.post('/adm', checkAdm);

export default admRouter;
