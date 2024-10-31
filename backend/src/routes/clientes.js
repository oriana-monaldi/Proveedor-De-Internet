import { Router } from "express";
import { ClienteController } from "../controllers/clientes.js";

export const clienteRouter = Router();

clienteRouter.get("/all", ClienteController.getAll)
clienteRouter.get("/:id", ClienteController.byId)
clienteRouter.post("/", ClienteController.create)
clienteRouter.put("/:id", ClienteController.update)
clienteRouter.delete("/:id", ClienteController.delete)