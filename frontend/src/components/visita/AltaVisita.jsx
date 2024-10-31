import React from 'react'
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";
import {Link} from 'react-router-dom'
import Boton from '../Boton'
import Buscar from '../Buscar'

function ProgramarVisita() {
    const [opcion, setOpcion] = useState("");

    const handleChange = (e) => {
    setOpcion(e.target.value);
    };
    return (
        <div>
            <h1 className='text-2xl p-4'> Programar visita </h1>
            <div className='flex flex-col p-20 '>
                <div className='flex justify-around'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                    </LocalizationProvider>                
                    <label htmlFor="opciones" className="text-lg font-medium text-gray-700 mb-2"> </label>
                    <select
                        id="opciones"
                        value={opcion}
                        onChange={handleChange}
                        className="w-64 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-200"
                    >
                        <option value="">Hora</option>
                        <option value="opcion1">09:00</option>
                        <option value="opcion1">09:15</option>
                        <option value="opcion1">09:30</option>
                        <option value="opcion1">10:00</option>
                        <option value="opcion1">10:10</option>
                        <option value="opcion1">10:15</option>
                        <option value="opcion1">10:30</option>
                        <option value="opcion1">10:45</option>
                        <option value="opcion1">11:00</option>
                        <option value="opcion1">11:15</option>
                        <option value="opcion1">11:30</option>
                        <option value="opcion1">11:45</option>
                        <option value="opcion1">12:00</option>
                    </select>
                </div>

                <div className='flex items-center justify-center mt-20 mb-20'>
                    <Buscar placeholder='Buscar por Técnico'/>
                </div>
                <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        label="Observación"
                />

                <div className='flex justify-end pt-28'>
                    <div className='p-4'>
                        <Link to='/visita'>
                            <Boton nombre="Aceptar"/>
                        </Link>
                    </div>
                    <div className='p-4'>
                        <Link to='/visita'>
                            <Boton nombre="Cancelar"/>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProgramarVisita