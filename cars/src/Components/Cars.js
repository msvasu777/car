import React from 'react';


const axios = require('axios');






export default class Cars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Carlist: []
        }

    }

    componentDidMount() {
        this.getCars();
    }
    getCars = async () => {
        let res = await axios.get('http://localhost:3000/Cars')
        let  data = await res.data
        try {
            this.setState({
                Carlist:data
            });
        }
        catch {
            console.log("error");
        }

    }


    render() {
        return (

            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Carlist.map(car => {
                        return <tr key={car.id}>
                             <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.price}</td>
                            <td> edit</td> 
                        </tr> 
                    })}

                </tbody>


            </table>




        )
    }

}
