import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../Boton';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import swal from 'sweetalert'; 

function alertDelete() {
    swal({
        title: "¿Esta seguro que desea eliminar el cliente?",
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
            swal("El cliente no se ha eliminado");
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

function createData(apellido, nombre, dni, telefono) {
    return { apellido, nombre, dni, telefono };
}

const rows = [
    createData('González', 'Juan', '12345678', '1234-5678'),
    createData('Martínez', 'Ana', '87654321', '5678-1234'),
    createData('Pérez', 'Carlos', '45678912', '4321-8765'),
    createData('Rodríguez', 'Lucía', '23456789', '9876-5432'),
    createData('Gómez', 'María', '34567891', '6789-4321'),
];

export default function CustomizedTables() {
    return (
        <div className='m-6 mt-16'>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Apellido</StyledTableCell>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>DNI</StyledTableCell>
                        <StyledTableCell>Teléfono</StyledTableCell>
                        <StyledTableCell align="center">Acciones</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.dni}>
                            <StyledTableCell component="th" scope="row">
                                {row.apellido}
                            </StyledTableCell>
                            <StyledTableCell>{row.nombre}</StyledTableCell>
                            <StyledTableCell>{row.dni}</StyledTableCell>
                            <StyledTableCell>{row.telefono}</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className='flex'>
                                    <Link to='/editar-cliente'>
                                        <CiEdit size={30} />
                                    </Link>
                                    <MdDeleteForever onClick={alertDelete} size={30} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                                    <Link to='/conexion'>
                                        <Button nombre="Conexión" />
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
