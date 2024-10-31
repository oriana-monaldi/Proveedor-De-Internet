import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '../Boton';
import { Link } from 'react-router-dom';

function EditarCliente() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-lg w-full p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl text-center font-semibold mb-8">Editar datos del cliente</h1>
                
                <div className="flex flex-col space-y-6">
                    <TextField
                        variant="filled"
                        label="Nombre"
                        fullWidth
                    />
                    <TextField
                        variant="filled"
                        label="Apellido"
                        fullWidth
                    />
                    <TextField
                        variant="filled"
                        label="DNI"
                        fullWidth
                    />
                    <TextField
                        variant="filled"
                        label="Teléfono"
                        fullWidth
                    />
                </div>

                <div className="flex justify-end space-x-4 mt-12">
                    <Link to="/cliente">
                        <Button nombre="Aceptar" className="px-8 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"/>
                    </Link>
                    <Link to="/cliente">
                        <Button nombre="Cancelar" className="px-8 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition duration-300"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default EditarCliente;
