import { ConexionModel } from "../models/conexiones.js";

export class ConexionController {
    static async getAll(req, res) {
        try{
            const connections = await ConexionModel.getAll();
            res.status(200).json(connections);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async byId(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({message: "Se requiere el id de la conexión"});

        try{
            const connection = await ConexionModel.byId(id);
            res.status(200).json(connection);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async create(req, res) {
        const connection = req.body;
        if (!connection) return res.status(400).json({message: "Se requiere la información de la conexión"});

        try{
            const newConnection = await ConexionModel.create(connection);
            res.status(201).json(newConnection);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const connection = req.body;
        if (!id) return res.status(400).json({message: "Se requiere el id de la conexión"});
        if (!connection) return res.status(400).json({message: "Se requiere la información de la conexión"}); 

        try{
            const updatedConnection = await ConexionModel.update(id, connection);
            res.status(200).json(updatedConnection);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({message: "Se requiere el id de la conexión"});

        try{
            await ConexionModel.delete(id);
            res.status(204).end();
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}