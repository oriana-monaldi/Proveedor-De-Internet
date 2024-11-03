import { prisma } from "../app.js";

export class VisitaModel{
    static async getAll(){
        return prisma.visita.findMany();
    }
    
    static async byId(id){
        return prisma.visita.findUnique({
            where: {
                ID: parseInt(id)
            }
        })
    }

    static async create(visita){
        return prisma.visita.create({
            data: visita
        })
    }

    static async update(id, visita){
        return prisma.visita.update({
            where: {
                ID: parseInt(id)
            },
            data: visita
        })
    }

    static async delete(id){
        return prisma.visita.delete({
            where: {
                ID: parseInt(id)
            }
        })
    }

}