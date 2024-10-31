import { prisma } from "../app.js";

export class ClienteModel{
    static async getAll(){
        return prisma.cliente.findMany();
    }
    
    static async byId(id){
        return prisma.cliente.findUnique({
            where: {
                ID: parseInt(id)
            }
        })
    }

    static async create(cliente){
        return prisma.cliente.create({
            data: cliente
        })
    }

    static async update(id, cliente){
        return prisma.cliente.update({
            where: {
                ID: parseInt(id)
            },
            data: cliente
        })
    }

    static async delete(id){
        return prisma.cliente.delete({
            where: {
                ID: parseInt(id)
            }
        })
    }

}