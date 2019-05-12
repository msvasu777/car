import React, {Component} from 'react';


class Editcomponent extends Component{
    data = [];
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        console.log(event.target.value)
        this.data[event.target.name]=event.target.value

    }

    handleSubmit(event) {
   event.preventDefault();

    }
render() {
    return(
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}
}

export default Editcomponent