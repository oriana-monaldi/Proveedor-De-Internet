import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '../Boton';
import  {Link} from 'react-router-dom'

function EditarCliente() {
    return (
        <div>
            <h1 className='text-2xl'> Editar datos del cliente </h1>
            <div className='flex flex-col p-6 '>
                <div className='p-4 flex items-center justify-center'>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        label="Nombre"
                    />
                </div>
                <div className='p-4'>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        label="Apellido"                        
                    />
                </div>
                <div className='p-4'>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        label="DNI"
                    />
                    
                </div>                
                <div className='p-4'>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        label="Telefono"
                    />
                </div>
                <div className='flex justify-end p-8'>
                    <div className='p-4'>
                        <Link to='/cliente'>
                            <Button nombre="Aceptar"/>
                        </Link>
                    </div>
                    <div className='p-4'>
                        <Link to='/cliente'>
                            <Button nombre="Cancelar"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarCliente