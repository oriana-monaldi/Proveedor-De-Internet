import { Router } from "express";
import { ConexionController } from "../controllers/conexiones.js";

export const conexionRouter = Router();

conexionRouter.get("/all", ConexionController.getAll)
conexionRouter.get("/:id", ConexionController.byId)
conexionRouter.post("/", ConexionController.create)
conexionRouter.put("/:id", ConexionController.update)
conexionRouter.delete("/:id", ConexionController.delete)