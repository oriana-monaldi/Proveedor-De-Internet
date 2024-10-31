import { Router } from "express";
import { ClienteController } from "../controllers/clientes.js";

export const clienteRouter = Router();

clienteRouter.get("/all", ClienteController.getAll)