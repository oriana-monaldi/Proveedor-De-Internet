import { ClienteModel } from "../models/clientes.js";

export class ClienteController {
    static async getAll(req, res) {

        const users = await ClienteModel.getAll();
        res.status(200).json(users);
    }
}