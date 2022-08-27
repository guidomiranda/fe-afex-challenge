import { useEffect, useState } from 'react';
import { getDelivery } from './../../api/get-delivery';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export const DeliveryData = () => {

    const [deliveryList, setDeliveryList] = useState([])
    
    useEffect(() => {
        getDelivery(setDeliveryList);
    }, [])
    
    console.log(deliveryList);


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">FECHA</StyledTableCell>
                        <StyledTableCell align="right">NOMBRE Y APELLIDO</StyledTableCell>
                        <StyledTableCell align="right">MONTO</StyledTableCell>
                        <StyledTableCell align="right">PAIS</StyledTableCell>
                        <StyledTableCell align="right">TIPO DE AGENTE</StyledTableCell>
                        <StyledTableCell align="right">ESTADO</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {deliveryList.map((delivery: any) => (
                        <StyledTableRow key={delivery.id}>
                        <StyledTableCell component="th" scope="row">
                            {delivery.id}
                        </StyledTableCell>
                        <StyledTableCell align="right">{delivery.fecha}</StyledTableCell>
                        <StyledTableCell align="right">{delivery.nombre_apellido}</StyledTableCell>
                        <StyledTableCell align="right">{delivery.monto}</StyledTableCell>
                        <StyledTableCell align="right">{delivery.pais}</StyledTableCell>
                        <StyledTableCell align="right">{delivery.agente_tipo}</StyledTableCell>
                        <StyledTableCell align="right">{delivery.estado}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </>
  )
}

