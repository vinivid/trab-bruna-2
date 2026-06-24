import { Router } from "express";
import { getAll, create, remove } from "../controllers/produtoController.js";
import { requireAuth } from "../midlewares/adm.js";

const produtoRouter = Router();

produtoRouter.get("/", getAll);
produtoRouter.post("/", requireAuth, create);
produtoRouter.delete("/:nome", requireAuth, remove);

export default produtoRouter;
