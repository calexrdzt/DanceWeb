import './App.css';
import * as React from "react";
import {HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Views/Home/Home';
import Data from '../Views/Data/Data';
import { Contexto } from '../Utils/Contexto';


function App() {

  const [nombre, setNombre] = React.useState('');
  const [duracion, setDuracion] = React.useState('');
  const [bailarines, setBailarines] = React.useState('');
  const [listaEscenasD, setlistaEscenasD] = React.useState([]);
  const [listaEscenasB, setlistaEscenasB] = React.useState([]);
  const [listaEscenasE, setlistaEscenasE] = React.useState([]);
  const [listaEscenasP, setlistaEscenasP] = React.useState([]);
  const [listaEscenasBPM, setlistaEscenasBPM] = React.useState([]);
  const [listaEscenasResultado, setListaEscenasResultado] = React.useState([]);
  const [nEscenas, setNEscenas] = React.useState(3);
  const [anchoEscena, setAnchoEscena] = React.useState([]);

  
  
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
      
      listaEscenasBPM:listaEscenasBPM,
      setListaEscenasBPM: setlistaEscenasBPM,

      listaEscenasResultado:listaEscenasResultado,
      setListaEscenasResultado: setListaEscenasResultado,

      anchoEscena: anchoEscena,
      setAnchoEscena: setAnchoEscena,
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
