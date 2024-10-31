import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link } from 'react-router-dom';
import Button from '../Boton';
import Buscar from '../Buscar';

function AltaConexion() {
    const [opcion, setOpcion] = useState("");

    const handleChange = (e) => {
        setOpcion(e.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-3xl w-full p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl text-center font-semibold mb-8">Alta de conexión</h1>

                <div className="flex flex-col space-y-8">
                    <div className="flex justify-around items-center space-x-4">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Fecha de conexión" />
                        </LocalizationProvider>
                        <TextField
                            variant="filled"
                            label="Número de Cliente"
                            fullWidth
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="opciones" className="text-lg font-medium text-gray-700 mb-2">Tipo de Servicio</label>
                        <select
                            id="opciones"
                            value={opcion}
                            onChange={handleChange}
                            className="w-64 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-200"
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="opcion1">50 megas</option>
                            <option value="opcion2">100 megas</option>
                            <option value="opcion3">200 megas</option>
                        </select>
                    </div>

                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-center mb-4">Domicilio</h2>
                        <div className="flex justify-around space-x-4">
                            <TextField
                                variant="filled"
                                label="Calle"
                                fullWidth
                            />
                            <TextField
                                variant="filled"
                                label="Número"
                                fullWidth
                            />
                        </div>
                        <div className="flex justify-around space-x-4 mt-4">
                            <TextField
                                variant="filled"
                                label="Piso"
                                fullWidth
                            />
                            <TextField
                                variant="filled"
                                label="Depto"
                                fullWidth
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <Buscar placeholder="Provincia" className="w-64"/>
                        <Buscar placeholder="Localidad" className="w-64"/>
                    </div>

                    <div className="flex justify-end space-x-4 mt-12">
                        <Link to="/conexion">
                            <Button nombre="Aceptar" className="px-8 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"/>
                        </Link>
                        <Link to="/conexion">
                            <Button nombre="Cancelar" className="px-8 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition duration-300"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AltaConexion;
