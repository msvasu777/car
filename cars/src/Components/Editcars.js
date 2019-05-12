import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Editcars.css';
import Button from '@material-ui/core/Button';
import { getCarById } from '../Services/Services';
import Grid from '@material-ui/core/Grid';

export default class Editcar extends React.Component {

  constructor(props) {
    super()
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.car = getCarById(+props.match.params.id);
  }

  handleChange(event) {
    // console.log(event.target.value)
    // this.data[event.target.name] = event.target.value
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {


    return (

      <form onSubmit={this.handleSubmit}>

        <Grid 
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div className="Container">
            <TextField
              id="standard-password-input"
              name="brand"
              label="brand"
              // defaultValue={this.car.brand}
              onChange={this.handleChange}
              type="text"

            />
          </div>
          <div className="Container">
            <TextField
              id="standard-password-input"
              name="seats"
              label="seats"
              // defaultValue={this.car.seats}
              onChange={this.handleChange}
              type="text"
              autoComplete="current-password"
              margin="normal"
            />
          </div>
          <div className="Container">
            <TextField
              id="standard-password-input"
              name="price"
              label="price"
              // defaultValue={this.car.price}
              onChange={this.handleChange}
              type="text"
              autoComplete="current-password"
              margin="normal"
            />
          </div>
          <TextField
          id="outlined-email-input"
          label="Email"
         
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />


          <Button
            variant="contained"
            color="primary" type="submit">
            Submit
      </Button>
        </Grid>
       

      </form>
    );
  }
}




