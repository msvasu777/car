import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Addcar.css';
import Button from '@material-ui/core/Button';
import { getCarById } from '../Services/Services';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default class Addcar extends React.Component {

    constructor(props) {
        super(props)
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
        axios.post('http://localhost:3000/cars', this.state)
        .then(data => {
            window.alert('Success')
        })
        .catch(error => {
            window.alert('Failed')
        })
        
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
                <Typography gutterBottom variant="h5" component="h1">
            Addcar
          </Typography>
                    <div>
                        <TextField
                            id="outlined-email-input"
                            label="brand"
                            onChange={this.handleChange}
                            type="text"
                            name="brand"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-email-input"
                            label="seats"
                            onChange={this.handleChange}
                            type="number"
                            name="seats"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            required
                            inputProps={{ min: "3", max: "5", step: "1" }}
                           
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-email-input"
                            label="price"
                            onChange={this.handleChange}
                            type="number"
                            name="price"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            required
                        />
                    </div>
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




