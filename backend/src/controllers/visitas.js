import { VisitaModel } from "../models/visitas.js";

export class VisitaController {
    static async getAll(req, res) {

        const visits = await VisitaModel.getAll();
        res.status(200).json(visits);
    }

    static async byId(req, res) {
        const { id } = req.params;

        const visit = await VisitaModel.byId(id);
        res.status(200).json(visit);
    }

    static async create(req, res) {
        const visit = req.body;

        const newVisit = await VisitaModel.create(visit);
        res.status(201).json(newVisit);
    }

    static async update(req, res) {
        const { id } = req.params;
        const visit = req.body;

        const updatedVisit = await VisitaModel.update(id, visit);
        res.status(200).json(updatedVisit);
    }

    static async delete(req, res) {
        const { id } = req.params;

        await VisitaModel.delete(id);
        res.status(204).end();
    }
}