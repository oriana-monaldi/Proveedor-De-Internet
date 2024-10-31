import { ConexionModel } from "../models/conexiones.js";

export class ConexionController {
    static async getAll(req, res) {

        const connections = await ConexionModel.getAll();
        res.status(200).json(connections);
    }

    static async byId(req, res) {
        const { id } = req.params;

        const connection = await ConexionModel.byId(id);
        res.status(200).json(connection);
    }

    static async create(req, res) {
        const connection = req.body;

        const newConnection = await ConexionModel.create(connection);
        res.status(201).json(newConnection);
    }

    static async update(req, res) {
        const { id } = req.params;
        const connection = req.body;

        const updatedConnection = await ConexionModel.update(id, connection);
        res.status(200).json(updatedConnection);
    }

    static async delete(req, res) {
        const { id } = req.params;

        await ConexionModel.delete(id);
        res.status(204).end();
    }
}