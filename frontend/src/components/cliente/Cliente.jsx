import React from 'react'
import Tabla from './Tabla'
import { IoAddCircle } from "react-icons/io5";
import  {Link} from 'react-router-dom'
import Buscar from '../Buscar'

function Cliente() {
    return (
        <div className='max-w-[1400px] mx-auto '>
            <h1 className='text-3xl mt-10 mb-20 text-center font-bold text-white'>Clientes</h1>
            <div className='flex flex-row justify-between m-6  '>
                <Buscar placeholder='Buscar por apellido del cliente'/>
                <Link to='/alta-cliente'>
                    <IoAddCircle className='text-white' size= {45} />
                </Link>
            </div>
            <Tabla/>
        </div>
    )
}

export default Cliente