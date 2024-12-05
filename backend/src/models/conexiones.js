import { prisma } from "../app.js";

export class ConexionModel{
    static async getAll(){
        const conexiones = await prisma.conexion.findMany({
            include: {
                servicio: true,
                cliente: true,
                domicilio: {
                    include: {
                        localidad: {
                            include: {
                                provincia: true
                            }
                        }
                    }
                }
            }
        });

        const conexionesFormatted = conexiones.map(conexion => ({
            ...conexion,
            fechaAlta: conexion.fechaAlta.toISOString().split('T')[0]  // Esto toma solo la parte de la fecha
        }));

        return conexionesFormatted;
    }
    
    static async byId(id){
        return await prisma.conexion.findMany({
            where: {
                ID: parseInt(id)
            },
            include: {
                servicio: true,
                domicilio: {
                    include: {
                        localidad: {
                            include: {
                                provincia: true
                            }
                        }
                    }
                }
            }
        })
    }

    static async create(conexion){
        return await prisma.conexion.create({
            data: conexion
        })
    }

    static async update(id, conexion){
        return await prisma.conexion.update({
            where: {
                ID: parseInt(id)
            },
            data: conexion
        })
    }

    static async delete(id){
        return await prisma.conexion.delete({
            where: {
                ID: parseInt(id)
            }
        })
    }

}