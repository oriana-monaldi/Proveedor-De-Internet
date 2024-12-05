import TablaConexion from './TablaConexion';
import { IoAddCircle } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import Buscar from '../Buscar'

function Conexion() {
    const { id } = useParams();

    return (
        <div className='max-w-[1400px] mx-auto '>
            <h1 className='text-3xl mt-10 mb-20 text-center text-white font-bold'>Conexión</h1>
            <div className='flex flex-row justify-between m-6  '>
                <Buscar placeholder='Buscar por numero de conexión'/>
                <Link to='/alta-conexion'>
                    <IoAddCircle className='text-white' size= {45} />
                </Link>
            </div>
            <TablaConexion id={id}/>
        </div>
    )
}

export default Conexion

