import { Router } from "express";
import { ConexionController } from "../controllers/conexiones.js";
import { validationIdConexion } from "../middlewares/validationsIds.js";

export const conexionRouter = Router();

conexionRouter.get("/all", ConexionController.getAll)
conexionRouter.get("/:id", validationIdConexion, ConexionController.byId)
conexionRouter.post("/", ConexionController.create)
conexionRouter.put("/:id", validationIdConexion, ConexionController.update)
conexionRouter.delete("/:id", validationIdConexion, ConexionController.delete)