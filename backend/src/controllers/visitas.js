import { VisitaModel } from "../models/visitas.js";

export class VisitaController {
    static async getAll(req, res) {
        try{
            const visits = await VisitaModel.getAll();
            res.status(200).json(visits);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async byId(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({message: "Se requiere el id de la visita"});

        try{
            const visit = await VisitaModel.byId(id);
            res.status(200).json(visit);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async create(req, res) {
        const visit = req.body;
        if (!visit) return res.status(400).json({message: "Se requiere la información de la visita"});

        try{
            const newVisit = await VisitaModel.create(visit);
            res.status(201).json(newVisit);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const visit = req.body;
        if (!id) return res.status(400).json({message: "Se requiere el id de la visita"});  

        try{
            const updatedVisit = await VisitaModel.update(id, visit);
            res.status(200).json(updatedVisit);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({message: "Se requiere el id de la visita"});

        try{
            await VisitaModel.delete(id);
            res.status(204).end();
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}