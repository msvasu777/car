import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Rental Cars
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Local</Button>
          <Button color="inherit">Carslist</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default withStyles(styles)(ButtonAppBar);
