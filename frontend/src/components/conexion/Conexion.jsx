import React from 'react';
import TablaConexion from './TablaConexion';
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Buscar from '../Buscar'

function Conexion() {
    return (
        <div>
            <h1 className='text-3xl mt-6 mb-20 text-center'>Conexión</h1>
            <div className='flex flex-row justify-between m-6  '>
                <Buscar placeholder='Buscar por numero de conexión'/>
                <Link to='/alta-conexion'>
                    <IoAddCircle size= {45} />
                </Link>
            </div>
            <TablaConexion/>
        </div>
    )
}

export default Conexion

