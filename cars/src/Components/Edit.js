import React from 'react';
//import './Allstyle.css';
import { withRouter } from 'react-router-dom'
import { getCarById } from '../Services/Services';


function Editbook(props) {
    console.log(props.match.params.id);
    const book = getCarById(+props.match.params.id);
    console.log(book)
    return (
        <div className="container">
        <div className="row">
            <div className="mt-5 col-md-4 offset-md-4">
                <p className="heading-text"> EDIT BOOK </p>
                <form>
                    <div className="form-group">
                        <label className="bold-text" htmlFor="exampleInputEmail1">Edit Book Name</label>
                        <input type="text" defaultValue={book.bookname} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label className="bold-text" htmlFor="exampleInputPassword1">Edit Author</label>
                        <input type="text" defaultValue={book.author} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Save Update</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    );
}
export default withRouter(Editbook);