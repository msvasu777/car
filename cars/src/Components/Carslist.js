import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import './Carslist.css';
import { Link } from 'react-router-dom';
import { getcar } from '../Services/Services';
//import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize:18,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});





function Carslist() {


  // const [users, setUsers] = useState(userData)
  // const deleteUser = user => {
  //     const state = users.filter(item => item !== user);
  //     setUsers(state);


  const [Carslist, setCars] = useState(getcar);
  const deleteCar = car => {
    const state = Carslist.filter(item => item !== car);
    setCars(state);
    // console.log(state);
  }

  if (!Carslist || Carslist.length === 0) {
    return <mark>No Data Found</mark>
  }
  return (
    <div>
      <Paper >
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>Brand</CustomTableCell>
              <CustomTableCell align="right">Seats</CustomTableCell>
              <CustomTableCell align="right">Price</CustomTableCell>
              <CustomTableCell align="right">Edit</CustomTableCell>
              <CustomTableCell align="right">Delete</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Carslist.map(car => (
              <TableRow key={car.id}>
                <CustomTableCell component="th" scope="row">
                  {car.brand}
                </CustomTableCell>
                <CustomTableCell align="right">{car.seats}</CustomTableCell>
                <CustomTableCell align="right">{car.price}</CustomTableCell>
                <CustomTableCell align="right"> <Link to={`/Editcar/${car.id}/Edit`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton></Link></CustomTableCell>
                <CustomTableCell align="right" onClick={() => deleteCar(car)}>
                  <IconButton aria-label="Delete" >
                    <DeleteIcon />
                  </IconButton>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div className="fabbutton-container-right">
        <Fab color="primary" aria-label="Add"   >
          <Link to="/Addcar/new"> <AddIcon /></Link>
        </Fab>
      </div>
    </div>

  );
}




export default withStyles(styles)(Carslist);
