import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '../Boton';
import { Link, useNavigate} from 'react-router-dom';
import { addCliente } from '../../../services/clientes';

function AltaCliente() {
    const navigate = useNavigate();
    function handleForm(e) {
        e.preventDefault()
        const nombre = document.getElementById("nombre").value
        const apellido = document.getElementById("apellido").value
        const dni = document.getElementById("dni").value
        const telefono = document.getElementById("telefono").value
        addCliente({
            nombre,
            apellido,
            dni: Number(dni),
            telefono: Number(telefono),
        })
        navigate('/cliente');
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-lg w-full p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl text-center font-semibold mb-8">Alta de cliente</h1>
                <form onSubmit={(e) => handleForm(e)}>
                    <div className="flex flex-col space-y-6">
                        <TextField
                            id= "nombre"
                            variant="filled"
                            label="Nombre"
                            fullWidth
                        />
                        <TextField
                            id= "apellido"
                            variant="filled"
                            label="Apellido"
                            fullWidth
                        />
                        <TextField
                            id="dni"
                            variant="filled"
                            label="DNI"
                            fullWidth
                        />
                        <TextField
                            id="telefono"
                            variant="filled"
                            label="Teléfono"
                            fullWidth
                        />
                    </div>
                    <div className="flex justify-end space-x-4 mt-12">
                        <button type="submit" nombre="Aceptar" className="px-8 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">ACEPTAR</button>
                    <Link to="/cliente" nombre="Cancelar" className="px-8 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">CANCELAR </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AltaCliente;
