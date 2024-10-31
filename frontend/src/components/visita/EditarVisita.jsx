import React from 'react'
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Button  from '../Boton';

function EditarVisita() {
    const [opcion, setOpcion] = useState("");

    const handleChange = (e) => {
    setOpcion(e.target.value);
    };
    return (
        <div>
            <h1 className='text-2xl'> Editar visita </h1>
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
    )
}

export default EditarVisita