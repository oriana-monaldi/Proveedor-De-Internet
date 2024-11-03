import { Router } from "express";
import { VisitaController } from "../controllers/visitas.js";
import { validationIdVisita } from "../middlewares/validationsIds.js";

export const visitaRouter = Router();

visitaRouter.get("/all", VisitaController.getAll)
visitaRouter.get("/:id", validationIdVisita, VisitaController.byId)
visitaRouter.post("/", VisitaController.create)
visitaRouter.put("/:id",validationIdVisita, VisitaController.update)
visitaRouter.delete("/:id", validationIdVisita, VisitaController.delete)