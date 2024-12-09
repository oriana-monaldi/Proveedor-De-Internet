import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getClienteById } from '../../../services/clientes';
import { apiUrl } from '../../../services/constants';


const updateClient = async (updatedClient) => {
    try {
        const response = await fetch(`${apiUrl}/clientes/${updatedClient.ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apellido: updatedClient.apellido,
                dni: updatedClient.dni,
                nombre: updatedClient.nombre,
                telefono: updatedClient.telefono,
            }),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el cliente');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

function EditarCliente() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [clientData, setClientData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getClienteById(id).then((data) => {
            setClientData(data);
            setLoading(false);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateClient(clientData).then(() => {
            navigate('/cliente');
        });
    };

    if (loading) {
        return <div className="text-center">Cargando datos del cliente...</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-lg w-full p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl text-center font-semibold mb-8">Editar información del cliente</h1>

                <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
                    <TextField
                        variant="filled"
                        label="Nombre"
                        name="nombre"
                        value={clientData.nombre}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        variant="filled"
                        label="Apellido"
                        name="apellido"
                        value={clientData.apellido}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        variant="filled"
                        label="DNI"
                        name="dni"
                        value={clientData.dni}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        variant="filled"
                        label="Teléfono"
                        name="telefono"
                        value={clientData.telefono}
                        onChange={handleChange}
                        fullWidth
                    />

                    <div className="flex justify-end space-x-4 mt-12">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Aceptar
                        </Button>
                        <Link to="/cliente">
                            <Button
                                variant="outlined"
                                color="secondary"
                            >
                                Cancelar
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarCliente;
