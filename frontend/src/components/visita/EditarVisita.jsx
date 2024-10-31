import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link } from 'react-router-dom';
import Boton from '../Boton';
import Buscar from '../Buscar';

function EditarVisita() {
    const [opcion, setOpcion] = useState("");

    const handleChange = (e) => {
        setOpcion(e.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-3xl w-full p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl text-center font-semibold mb-8">Editar información acerca de la visita</h1>

                <div className="flex flex-col space-y-8">
                    <div className="flex justify-around items-center space-x-4">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Fecha de visita" />
                        </LocalizationProvider>

                        <select
                            id="opciones"
                            value={opcion}
                            onChange={handleChange}
                            className="w-64 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-200"
                        >
                            <option value="">Hora</option>
                            <option value="opcion1">09:00</option>
                            <option value="opcion2">09:15</option>
                            <option value="opcion3">09:30</option>
                            <option value="opcion4">10:00</option>
                            <option value="opcion5">10:10</option>
                            <option value="opcion6">10:15</option>
                            <option value="opcion7">10:30</option>
                            <option value="opcion8">10:45</option>
                            <option value="opcion9">11:00</option>
                            <option value="opcion10">11:15</option>
                            <option value="opcion11">11:30</option>
                            <option value="opcion12">11:45</option>
                            <option value="opcion13">12:00</option>
                        </select>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <Buscar placeholder="Buscar por Técnico" className="w-64"/>
                    </div>

                    <div className="mt-4">
                        <TextField
                            variant="filled"
                            label="Observación"
                            fullWidth
                        />
                    </div>

                    <div className="flex justify-end space-x-4 mt-12">
                        <Link to="/visita">
                            <Boton nombre="Aceptar" className="px-8 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"/>
                        </Link>
                        <Link to="/visita">
                            <Boton nombre="Cancelar" className="px-8 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition duration-300"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarVisita;
