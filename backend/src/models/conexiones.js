import { prisma } from "../app.js";

export class ConexionModel{
    static async getAll(){
        return prisma.conexion.findMany();
    }
    
    static async byId(id){
        return prisma.conexion.findUnique({
            where: {
                ID: parseInt(id)
            }
        })
    }

    static async create(conexion){
        return prisma.conexion.create({
            data: conexion
        })
    }

    static async update(id, conexion){
        return prisma.conexion.update({
            where: {
                ID: parseInt(id)
            },
            data: conexion
        })
    }

    static async delete(id){
        return prisma.conexion.delete({
            where: {
                ID: parseInt(id)
            }
        })
    }

}