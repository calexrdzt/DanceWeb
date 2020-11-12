import './App.css';
import * as React from "react";
import {HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Views/Home/Home';
import { Data } from '../Views/Data/Data';
import { Contexto } from '../Utils/Contexto';


function App() {

  const [nombre, setNombre] = React.useState('');
  const [duracion, setDuracion] = React.useState('');
  const [bailarines, setBailarines] = React.useState('');
  
  const valoresIngresados = {
      nombre: nombre,
      duracion: duracion,
      bailarines: bailarines,
  }

  return (

    <div className="App">


      <Contexto.Provider value={valoresIngresados}>

        <Router>

          <Route path="/" exact component={Home}/>
          <Route path="/data" component={Data}/>    
    

        </Router>

      </Contexto.Provider>

    </div>
  );
}

export default App;
