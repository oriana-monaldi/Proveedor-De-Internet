import React from 'react'
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '../Boton'

function EditarConexion() {
    const [opcion, setOpcion] = useState("");

    const handleChange = (e) => {
    setOpcion(e.target.value);
    };
    return (
        <div>
            <h1 className='text-2xl'> Editar datos de la conexión </h1>
            <div className='flex flex-col p-6 '>
                <div className='flex justify-around'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                    </LocalizationProvider>                
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        label="Numero"
                    />
                </div>

                <div className="flex flex-col items-center p-6">
                    <label htmlFor="opciones" className="text-lg font-medium text-gray-700 mb-2"> </label>
                    <select
                        id="opciones"
                        value={opcion}
                        onChange={handleChange}
                        className="w-48 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-200"
                    >
                        <option value="">Servicio</option>
                        <option value="opcion1">50 megas</option>
                        <option value="opcion2">100 megas</option>
                        <option value="opcion3">200 megas</option>
                    </select>

                </div>
                <div className='p-4'>
                    <h2 className='text-lg p-4'>Domicilio</h2>
                    <div className='flex justify-around p-4'>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        label="Calle"
                    />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            variant="filled"
                            label="Numero"
                        />
                    </div>
                    <div className='flex justify-around p-4'>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            variant="filled"
                            label="Piso"
                        />
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                variant="filled"
                                label="Depto"
                            />
                    </div>
                    <div>
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
                            <Link to='/conexion'>
                                <Button nombre="Aceptar"/>
                            </Link>
                        </div>
                        <div className='p-4'>
                            <Link to='/conexion'>
                                <Button nombre="Cancelar"/>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>  
            </div>
        </div>
    )
}

export default EditarConexion