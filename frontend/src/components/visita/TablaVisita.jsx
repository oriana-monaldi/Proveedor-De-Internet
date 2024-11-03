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
import { useEffect, useState } from 'react';
import { getVisitas } from '../../../services/visitas';

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

export default function CustomizedTables() {
    const [visitas, setVisitas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);
        getVisitas().then( (data) => {
            setVisitas(data)
            console.log(visitas)
        }).finally( () => {
            setLoading(false);
        })
    },[])

    if (loading) {
        return (
            <div className="m-6 mt-16 flex justify-center items-center">
                <p>Cargando visitas...</p>
            </div>
        );
    }
    return (
        <div className='m-6 mt-16'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Fecha</StyledTableCell>
                            <StyledTableCell>Hora</StyledTableCell>
                            <StyledTableCell>Técnico</StyledTableCell>
                            <StyledTableCell>Observación</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visitas.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {row.fecha}
                                </StyledTableCell>
                                <StyledTableCell>{row.hora}</StyledTableCell>
                                <StyledTableCell>{row.tecnico}</StyledTableCell>
                                <StyledTableCell>{row.observacion}</StyledTableCell>
                                <StyledTableCell align="center">
                                <div className='flex item-center justify-center'>
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
