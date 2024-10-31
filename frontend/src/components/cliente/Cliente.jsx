import React from 'react'
import Tabla from './Tabla'
import { IoAddCircle } from "react-icons/io5";
import  {Link} from 'react-router-dom'

function Cliente() {
    return (
        <div>
            <h1 className='text-2xl mb-4'>Clientes</h1>
                <Link to='/alta-cliente'>
                <div className='flex items-center justify-end pr-8 pb-4'>
                    <IoAddCircle size= {60} />
                </div>
                </Link>
            <Tabla/>
        </div>
    )
}

export default Cliente