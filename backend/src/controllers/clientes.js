import { ClienteModel } from "../models/clientes.js";

export class ClienteController {
    static async getAll(req, res) {

        const users = await ClienteModel.getAll();
        res.status(200).json(users);
    }

    static async byId(req, res) {
        const { id } = req.params;


        const user = await ClienteModel.byId(id);
        res.status(200).json(user);
    }

    static async create(req, res) {
        const user = req.body;

        const newUser = await ClienteModel.create(user);
        res.status(201).json(newUser);
    }

    static async update(req, res) {
        const { id } = req.params;
        const user = req.body;

        const updatedUser = await ClienteModel.update(id, user);
        res.status(200).json(updatedUser);
    }

    static async delete(req, res) {
        const { id } = req.params;

        await ClienteModel.delete(id);
        res.status(204).end();
    }
}