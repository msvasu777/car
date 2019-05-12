import React, { Component } from 'react';
import { getCarById } from '../Services/Services';

class Editcar extends Component {
    // data = [];
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
                <div className="container col-md-4">
                    <div className="form-group " >
                        <label htmlFor="">Model:</label>
                        <input type="text" className="form-control" defaultValue={this.car.brand} name="model" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Seats:</label>
                        <input type="text" className="form-control" name="seats" defaultValue={this.car.seats} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price:</label>
                        <input type="text" className="form-control" name="Price" defaultValue={this.car.price} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        )
    }
}

export default Editcar