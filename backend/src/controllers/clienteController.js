import { Cliente } from "../models/cliente.js"


export class ClienteController{
    
    static async getAll(req, res){


        const user = new Cliente(1,"jose","arce", "josefranciscoarce@gmail.com", 2214445320, 2)
        res.status(200).json({users: [user]})
    }
}