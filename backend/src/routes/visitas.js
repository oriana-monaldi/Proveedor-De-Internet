import { Router } from "express";
import { VisitaController } from "../controllers/visitas.js";

export const visitaRouter = Router();

visitaRouter.get("/all", VisitaController.getAll)
visitaRouter.get("/:id", VisitaController.byId)
visitaRouter.post("/", VisitaController.create)
visitaRouter.put("/:id", VisitaController.update)
visitaRouter.delete("/:id", VisitaController.delete)