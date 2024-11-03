import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button  from '../Boton';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import swal from 'sweetalert'; 
import { getConexiones } from '../../../services/conexiones';
import { useEffect, useState } from 'react';

function alertDelete() {
    swal({
        title: "¿Está seguro que desea eliminar la conexión del cliente?",
        text: "Si decide eliminarlo no podrá recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal("Se ha eliminado exitosamente", {
                icon: "success",
            });
        } else {
            swal("La conexión no se ha eliminado");
        }
    });
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables() {
    const [conexiones, setConexiones] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);
        getConexiones().then( (data) => {
            setConexiones(data)
                console.log(data)
        }).finally( () => {
            setLoading(false);
        })
    },[])
    
    if (loading) {
        return (
            <div className="m-6 mt-16 flex justify-center items-center">
                <p className='text-white'>Cargando conexiones...</p>
            </div>
        );
    }

    return (
        <div className='m-6 mt-16'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Número</StyledTableCell>
                            <StyledTableCell>Fecha Alta</StyledTableCell>
                            <StyledTableCell>Servicio</StyledTableCell>
                            <StyledTableCell>Domicilio</StyledTableCell>
                            <StyledTableCell>Localidad</StyledTableCell>
                            <StyledTableCell>Provincia</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {conexiones.map((row) => (
                            <StyledTableRow key={row.ID}>
                                <StyledTableCell component="th" scope="row">
                                    {row.numero}
                                </StyledTableCell>
                                <StyledTableCell>{row.fechaAlta}</StyledTableCell>
                                <StyledTableCell>{row.servicio.nombre}</StyledTableCell>
                                <StyledTableCell>Calle {row.domicilio.calle} N {row.domicilio.numero} P {row.domicilio.piso && row.domicilio.piso} Dpto {row.domicilio.departamento && row.domicilio.departamento}</StyledTableCell>
                                <StyledTableCell>{row.domicilio.localidad.nombre}</StyledTableCell>
                                <StyledTableCell>{row.domicilio.localidad.provincia.nombre}</StyledTableCell>
                                <StyledTableCell align="center">
                                <div className='flex item-center justify-center'>
                                        <Link to='/editar-conexion'>
                                            <CiEdit size={30} style={{ cursor: 'pointer', marginRight: '10px' }} />
                                        </Link>
                                        <MdDeleteForever onClick={alertDelete} size={30} style={{ cursor: 'pointer' }} />
                                        <Link to='/visita'>
                                            <Button nombre="Visita" />
                                        </Link>
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
