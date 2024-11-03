import { prisma } from "../app.js";

export class VisitaModel{
    static async getAll(){
        const visitas = await prisma.visita.findMany({
            include: {
                empleado: true,
            }
        })

        const visitasFormatted = visitas.map(visita => ({
            ...visita,
            fecha: visita.fecha.toISOString().split('T')[0],  
            hora: visita.hora.toISOString().split('T')[1].slice(0, 5)
        }));
        return visitasFormatted;
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