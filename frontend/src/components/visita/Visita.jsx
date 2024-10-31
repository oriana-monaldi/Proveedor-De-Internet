import React from 'react';
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import TablaVisita from './TablaVisita';
import Buscar from '../Buscar'

function Visita() {
    return (
        <div className='max-w-[1400px] mx-auto '>
            <h1 className='text-3xl mt-10  mb-20 text-center font-bold text-white'>Visitas de la conexión</h1>
            <div className='flex flex-row justify-between m-6  '>
                <Buscar placeholder='Buscar...'/>
                <Link to='/alta-visita'>
                    <IoAddCircle className='text-white' size= {45} />
                </Link>
            </div>
            <TablaVisita/>
        </div>
    )
}

export default Visita
