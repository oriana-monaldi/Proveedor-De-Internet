import { Router } from "express";
import { ClienteController } from "../controllers/clientes.js";
import { validationIdCliente } from "../middlewares/validationsIds.js";

export const clienteRouter = Router();

clienteRouter.get("/all", ClienteController.getAll)
clienteRouter.get("/:id", validationIdCliente, ClienteController.byId)
clienteRouter.post("/", ClienteController.create)
clienteRouter.put("/:id", validationIdCliente, ClienteController.update)
clienteRouter.delete("/:id", validationIdCliente, ClienteController.delete)