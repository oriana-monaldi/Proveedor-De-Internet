import React from 'react';
import TablaConexion from './TablaConexion';
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Conexion() {
    return (
        <div>
            <h1 className='p-8 text-2xl'>Conexiones del cliente ......</h1>
            <Link to='/alta-conexion'>
                <div className='flex items-center justify-end pr-8 pb-4'>
                    <IoAddCircle size= {60} />
                </div>
            </Link>
            <TablaConexion/>
        </div>
    )
}

export default Conexion
