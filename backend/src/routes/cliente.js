import { Router } from "express";
import { ClienteController } from "../controllers/clienteController.js";

export const clienteRouter = Router();

clienteRouter.get("/all", ClienteController.getAll)
