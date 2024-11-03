import { ClienteModel } from "../models/clientes.js";

export class ClienteController {
    static async getAll(req, res) {
        try{
            const users = await ClienteModel.getAll();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json({message: err.message});
        }   
    }

    static async byId(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({message: "El id es obligatorio"});
        try{
            const user = await ClienteModel.byId(id);
            res.status(200).json(user);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async create(req, res) {
        const user = req.body;
        if (!user) return res.status(400).json({message: "El body es obligatorio"});

        try{
            const newUser = await ClienteModel.create(user);
            res.status(201).json(newUser);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const user = req.body;
        if (!id) return res.status(400).json({message: "El id es obligatorio"});
        if (!user) return res.status(400).json({message: "El body es obligatorio"});

        try{
            const updatedUser = await ClienteModel.update(id, user);
            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({message: "El id es obligatorio"});

        try{
            await ClienteModel.delete(id);
            res.status(204).end();
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}