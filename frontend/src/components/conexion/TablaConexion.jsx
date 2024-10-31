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

function createData(numero, fechaAlta, servicio, domicilio, localidad, provincia) {
    return { numero, fechaAlta, servicio, domicilio, localidad, provincia };
}

const rows = [
    createData(1, '2024-01-15', 'Servicio A', 'Calle Falsa 123', 'Ciudad A', 'Provincia A'),
    createData(2, '2024-02-10', 'Servicio B', 'Calle Verdadera 456', 'Ciudad B', 'Provincia B'),
    createData(3, '2024-03-05', 'Servicio C', 'Avenida Siempre Viva 789', 'Ciudad C', 'Provincia C'),
    createData(4, '2024-04-20', 'Servicio D', 'Boulevard Ficticio 321', 'Ciudad D', 'Provincia D'),
    createData(5, '2024-05-15', 'Servicio E', 'Plaza Imaginaria 654', 'Ciudad E', 'Provincia E'),
];

export default function CustomizedTables() {
    return (
        <div>
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
                        {rows.map((row) => (
                            <StyledTableRow key={row.numero}>
                                <StyledTableCell component="th" scope="row">
                                    {row.numero}
                                </StyledTableCell>
                                <StyledTableCell>{row.fechaAlta}</StyledTableCell>
                                <StyledTableCell>{row.servicio}</StyledTableCell>
                                <StyledTableCell>{row.domicilio}</StyledTableCell>
                                <StyledTableCell>{row.localidad}</StyledTableCell>
                                <StyledTableCell>{row.provincia}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className='flex'>
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
