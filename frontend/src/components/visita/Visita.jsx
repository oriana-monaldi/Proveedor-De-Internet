import React from 'react';
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import TablaVisita from './TablaVisita';

function Visita() {
    return (
        <div>
            <h1 className='p-8 text-2xl'>Visitas del cliente ......</h1>
            <Link to='/alta-visita'>
                <div className='flex items-center justify-end pr-8 pb-4'>
                    <IoAddCircle size= {60} />
                </div>
            </Link>
            <TablaVisita/>
        </div>
    )
}

export default Visita
