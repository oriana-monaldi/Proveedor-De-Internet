import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import swal from 'sweetalert'; 

function alertDelete() {
    swal({
        title: "¿Está seguro que desea eliminar la visita?",
        text: "Si decide eliminarla no podrá recuperarla",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal("Se ha eliminado exitosamente", {
                icon: "success",
            });
        } else {
            swal("La visita no se ha eliminado");
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

function createData(numero, fecha, hora, tecnico, observacion) {
    return { numero, fecha, hora, tecnico, observacion };
}

const rows = [
    createData(1, '2024-01-15', '10:00', 'Técnico A', 'Observación 1'),
    createData(2, '2024-02-10', '11:00', 'Técnico B', 'Observación 2'),
    createData(3, '2024-03-05', '12:00', 'Técnico C', 'Observación 3'),
    createData(4, '2024-04-20', '13:00', 'Técnico D', 'Observación 4'),
    createData(5, '2024-05-15', '14:00', 'Técnico E', 'Observación 5'),
];

export default function CustomizedTables() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Número</StyledTableCell>
                            <StyledTableCell>Fecha</StyledTableCell>
                            <StyledTableCell>Hora</StyledTableCell>
                            <StyledTableCell>Técnico</StyledTableCell>
                            <StyledTableCell>Observación</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.numero}>
                                <StyledTableCell component="th" scope="row">
                                    {row.numero}
                                </StyledTableCell>
                                <StyledTableCell>{row.fecha}</StyledTableCell>
                                <StyledTableCell>{row.hora}</StyledTableCell>
                                <StyledTableCell>{row.tecnico}</StyledTableCell>
                                <StyledTableCell>{row.observacion}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className='flex'>
                                        <Link to='/editar-visita'>
                                            <CiEdit size={30} style={{ cursor: 'pointer', marginRight: '10px' }} />
                                        </Link>
                                        <MdDeleteForever onClick={alertDelete} size={30} style={{ cursor: 'pointer' }} />
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
