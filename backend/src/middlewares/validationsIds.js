import { ClienteModel } from "../models/clientes.js";
import { ConexionModel } from "../models/conexiones.js";
import { VisitaModel } from "../models/visitas.js";

export const validationIdCliente = async (req, res, next) => {
    try{
        const cliente = await ClienteModel.byId(req.params.id);
        if (!cliente) return res.status(404).json({error: "Cliente no encontrado"});
        next();
    }catch(err){
        return res.status(404).json({error: "Cliente no encontrado"});
    }
}

export const validationIdConexion = async (req, res, next) => {
    try {
        const conexion = await ConexionModel.byId(req.params.id);
        if (!conexion) return res.status(404).json({error: "Conexion no encontrada"});
        next();
    }catch{
        return res.status(404).json({error: "Conexion no encontrada"});
    }
}

export const validationIdVisita = async (req, res, next) => {
    try {
        const visita = await VisitaModel.byId(req.params.id);
        if (!visita) return res.status(404).json({error: "Visita no encontrada"});
        next();
    }catch{
        return res.status(404).json({error: "Visita no encontrada"});
    }
}