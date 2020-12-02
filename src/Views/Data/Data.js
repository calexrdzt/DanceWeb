import React from 'react';
import { useRef } from 'react';
import Header from '../../Component/Header/Header';
import Bailarines from '../../Component/Diccionarios/Bailarines';
import Excitacion from '../../Component/Diccionarios/Excitacion';
import Duracion from '../../Component/Diccionarios/Duracion';
import Posicion from '../../Component/Diccionarios/Posicion'

import LineGraph from '../../Component/Graficas/myLineGraph'
import { managerData, yearLabels } from '../../Component/Graficas/mockData';

import { Contexto } from '../../Utils/Contexto';
import TimeField from 'react-simple-timefield';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import LineChart from '../../Component/Chart/LineChart';

function map(n, start1, stop1, start2, stop2) {
  let value = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (value >= stop2) {
    value = stop2;
  }
  return value;
}

const Data = () => {

  const refBailarines = useRef();
  const refExcitacion = useRef();
  const refDuracion = useRef();
  const refPosicion = useRef();

  var bailarinesListos = [];
  var excitacionesListas = [];
  var duracionesListas = [];
  var posicionesListas = [];




  const contexto = React.useContext(Contexto);

  console.log('this is my state   ', LineGraph);

  bailarinesListos = contexto.listaEscenasB.map((numeroBailarinesEscena, index) => {
    return (<p> {Math.round(numeroBailarinesEscena * contexto.bailarinesI)} </p>)
  })





  duracionesListas = contexto.listaEscenasD.map((numeroBailarinesEscena, index) => {
    //    return (<p>{index + 1}  |  {total}  {tiempoBailarin} </p>)
  })




  excitacionesListas = contexto.listaEscenasE.map((numeroBailarinesEscena, index) => {
    return (<p>Excitación escena {index + 1}: {Math.round(numeroBailarinesEscena * 100)} % </p>)
  })

  posicionesListas = contexto.listaEscenasP.map((numeroBailarinesEscena, index) => {
    return (<p>Posicion: {Math.round(numeroBailarinesEscena * 10)} puesto </p>)
  })



  const handleBailarines = (ev) => {
    contexto.setBailarinesI(ev.target.value);
  }

  const handleDuracion = (ev) => {
    contexto.setDuracionI(ev.target.value);
  }

  function tiempoSegs() {
    console.log('duracion escenas', contexto.listaEscenas);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const tiempoString = contexto.duracionI.split(':');

  const mins = parseInt(tiempoString[0]);
  const segs = parseInt(tiempoString[1]);


  const tiempo = ((mins * 60) + segs) - (contexto.listaEscenasD.length * 30);

  function generarTodos() {

    let nEscenasRamdon = Math.round(tiempo/getRandomInt(30, 90))+2;

    let minEscenas = nEscenasRamdon > 0 ? nEscenasRamdon :1;
    let maxEscenas = minEscenas > 10 ? 10 :minEscenas;

    contexto.setNEscenas(maxEscenas);

    refBailarines.current.generar();
    refExcitacion.current.generar();
    refDuracion.current.generar();
    refPosicion.current.generar();

    tiempoSegs();





    //console.log('tiempo string', tiempo);
    //   console.log('referecnia ' , refBailarines.current.generar());

  }

  let resultList = []



  let totalEscenaD = 0;
  contexto.listaEscenasD.forEach(d => { totalEscenaD += (d * 90) })

  //console.log(totalEscenaD)

  for (let index = 0; index < contexto.listaEscenasD.length; index++) {
    
    let escenaD = contexto.listaEscenasD[index];
    let escenaB = contexto.listaEscenasB[index];
    let escenaE = contexto.listaEscenasE[index];
    let escenaP = contexto.listaEscenasP[index];

    //  console.log('mi tiempo  ', tiempo)

    let tiempoBailarin = escenaD * 90;

    console.log(tiempoBailarin, tiempo, totalEscenaD)

    let total = ((tiempoBailarin * tiempo) / totalEscenaD) + 30;
   
   
    // console.log('tiempooo total ', total , 'tiempo');


    let escenaDObj = {
      nLista: index + 1,
      result: Math.round(total),
    }

    let escenaBObj = {
      nLista: index + 1,
      result: Math.round(escenaB * contexto.bailarinesI)
    }

    let escenaEObj = {
      nLista: index + 1,
      result: Math.round(escenaE * 100)
    }

    let escenaPObj = {
      nLista: index + 1,
      result: Math.round(escenaP * 10)
    }

    resultList.push({
      escenaD: escenaDObj,
      escenaB: escenaBObj,
      escenaE: escenaEObj,
      escenaP: escenaPObj,
    })

  }


  return (<div className="data">


    <Duracion ref={refDuracion} />
    <Excitacion ref={refExcitacion} />
    <Bailarines ref={refBailarines} />
    <Posicion ref={refPosicion} />

    <Header />

    <div className="data_contenido">


      <div className="data_inputs">
        <div className="data_inputs-nombre">

          <label className="etiqueta" >Nombra tu proyecto</label>
          <input value={contexto.nombreI} className="inputs data_inputs-nombreInput" type="text" placeholder="Nombre del proyecto"></input>

        </div>
        <div className="data_inputs-byd">

          <div className="contenedor cont_bailarines">

            <label>Número de bailarines</label>
            <input value={contexto.bailarinesI} placeholder="00" className="input_pequeño" type="number" onChange={handleBailarines}></input>

          </div>

          <div className="contenedor cont_bailarines">

            <label>Duración</label>


            <input
              className="input_pequeño inputTime"
              min="00:30"
              max="10:00"
              type="time"
              placeholder="00:00"
              value={contexto.duracionI}  // {String}   required, format '00:00' or '00:00:00'
              onChange={handleDuracion}
              colon=":"
              showSeconds='true'
            />

          </div>

        </div>

        <div className="data_inputs-btn"><button className="button btn-generar" onClick={generarTodos}>Generar</button></div>

      </div>

      <div className="data_mezcla">

        <div className="contenedor contenedor_mezcla"> <p>Subir mezcla</p></div>

      </div>

      <p className="data_msj">
        Aquí será creado el modelo a partir de los datos que ingreses arriba.
        </p>

      <div className="data_resultados-titulos">

        <div className="data_resultados-cont">
          <p className="titul">Escena</p>
        </div>

        <div className="data_resultados-cont">
          <p className="titul">Duración</p>
        </div>


        <div className="data_resultados-cont">
          <p className="titul">BPM</p>
        </div>


        <div className="data_resultados-cont">
          <p className="titul">Bailarines</p>
        </div>


        <div className="data_resultados-cont">
          <p className="titul">Excitacion</p>
        </div>



      </div>


      <div>



        {resultList.map((r, index) => {
          return (<div className="li_contenedor">
            <div className="data_resultados-cont">
              <p> {index + 1}</p>
            </div>

            <div className="data_resultados-cont">
              <p> {r.escenaD.result} segs</p>
            </div>

            <div className="data_resultados-cont">
              <p> {r.escenaD.result}</p>
            </div>

            <div className="data_resultados-cont">
              <p> bailarines {r.escenaB.result}</p>
            </div>



            {/*
            <div>
             <p>| | {r.escenaE.result}%</p> 
            </div>
              */}

            <div className="data_resultados-cont">
              <Progress percent={r.escenaE.result} status="default" theme={{ default: { color: 'hsl(35,' + r.escenaE.result + '%,50%)' } }} />
            </div>

            <div className="data_resultados-cont">
              <p> Posición {r.escenaP.result}</p>
            </div>

          </div>)
        })}










      </div>

      <div className="data_resultados-grafica">
        <div className="data_resultados-posicion">
          <div className="titulos_grafica">Posiciones</div>
          <div>Posiciones</div>
        </div>

        <div className="data_resultados-abajo">

          <div className="titulos_grafica-grande">
            <p>Cantidad de bailarines</p>
            <p>Pronostico de excitación</p>
            <p>BPMs de la musica</p>
          </div>

          <div className="data_resultados-escenas">

            <div className="chart">
              <LineChart />

            </div>

            {/*  <LineGraph/>*/}
          </div>
        </div>

      </div>




    </div>
  </div>
  );
}

export default Data;