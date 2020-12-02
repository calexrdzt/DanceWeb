import './App.css';
import * as React from "react";
import {HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Views/Home/Home';
import Data from '../Views/Data/Data';
import { Contexto } from '../Utils/Contexto';


function App() {

  const [nombre, setNombre] = React.useState('Este es mi proyecto');
  const [duracion, setDuracion] = React.useState('04:22');
  const [bailarines, setBailarines] = React.useState('15');
  const [listaEscenasD, setlistaEscenasD] = React.useState([]);
  const [listaEscenasB, setlistaEscenasB] = React.useState([]);
  const [listaEscenasE, setlistaEscenasE] = React.useState([]);
  const [listaEscenasP, setlistaEscenasP] = React.useState([]);
  const [nEscenas, setNEscenas] = React.useState(1);
  
  const valoresIngresados = {
      nombreI: nombre,
      duracionI: duracion,
      bailarinesI: bailarines,
      nEscenas: nEscenas,
      
      setBailarinesI: setBailarines,
      setNombreI: setNombre,
      setDuracionI: setDuracion,
      setNEscenas: setNEscenas,

      listaEscenasD: listaEscenasD,
      setListaEscenasD: setlistaEscenasD,
      
      listaEscenasB:listaEscenasB,
      setListaEscenasB: setlistaEscenasB,

      listaEscenasE:listaEscenasE,
      setListaEscenasE: setlistaEscenasE,

      listaEscenasP:listaEscenasP,
      setListaEscenasP: setlistaEscenasP,
  }

  return (

    <div className="App">


        <Router>
          <Contexto.Provider value={valoresIngresados}>


          <Route path="/" exact component={Home}/>
          <Route path="/data" component={Data}/>    
    


          </Contexto.Provider>
        </Router>

    </div>
  );
}

export default App;
