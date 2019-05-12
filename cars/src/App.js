import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import './App.css';
//import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './Components/ButtonAppBar';
import Cars from './Components/Cars';
//import Image from 'material-ui-image'
//import SimpleTable from './Components/SimpleTable';
import Addcar from './Components/Addcar';
import Editcar from "./Components/Editcars";
import Home from './Components/Home';
import Local from './Components/local';
//import Edit from './edit/index.js';
//import Cars from './Components/Cars';




function App() {
  return (
    <div className="App">



      <Router>
        <div>
          <ButtonAppBar />
          {/* <Cars/> */}

          {/* <Home /> */}
          {/* <Local/> */}
          {/* <Carslist /> */}

        </div>

        <Switch>
          <Route path="/" exact component={Cars}></Route>
          <Route path="/Addcar/new" exact component={Addcar}></Route>
          <Route path="/Home" exact component={Home}></Route>
          <Route path="/Editcar/:id/edit" component={Editcar}></Route>
          <Route path="/Local" exact component={Local}></Route>
          {/* <Route path="/edit" component={Edit}></Route> */}
          {/* <Route path="/Editcar" component={Editcar}></Route> */}
          {/* <Redirect to="/Carslist"></Redirect> */}
        </Switch>

      </Router>

    </div>

  );
}

export default App;
