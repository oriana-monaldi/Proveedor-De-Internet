import React from 'react'
import Tabla from './Tabla'
import { IoAddCircle } from "react-icons/io5";
import  {Link} from 'react-router-dom'
import Buscar from '../Buscar'

function Cliente() {
    return (
        <div>
            <h1 className='text-3xl mt-6 mb-20 text-center'>Clientes</h1>
            <div className='flex flex-row justify-between m-6  '>
                <Buscar placeholder='Buscar por apellido del cliente'/>
                <Link to='/alta-cliente'>
                    <IoAddCircle size= {45} />
                </Link>
            </div>
            <Tabla/>
        </div>
    )
}

export default Cliente