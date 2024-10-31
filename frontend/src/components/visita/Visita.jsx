import React from 'react';
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import TablaVisita from './TablaVisita';
import Buscar from '../Buscar'

function Visita() {
    return (
        <div>
            <h1 className='text-3xl mt-6 mb-20'>Visitas de la conexión</h1>
            <div className='flex flex-row justify-between '>
                <Buscar placeholder='Buscar...'/>
                <Link to='/alta-visita'>
                    <IoAddCircle size= {45} />
                </Link>
            </div>
            <TablaVisita/>
        </div>
    )
}

export default Visita
