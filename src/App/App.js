import './App.css';
import React from "react";
import Home from '../Home/Home';
import Data from '../Data/Data';
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {

  const [listaEscenas, setListaEscenas] = React.useState([]);
  var numeroDeBailarinesIngresados = 22;
  var excitacion = 57;

  const bailarines =[
    {
      id:"0",
      escenas: ["0.3","0.3","0.4","0.6","0.7","1"],
    },
    {
      id:"0.1",
      escenas: ["0.3","0.5","0.8","0.9","1","1","1"],
    },
    {
      id:"0.2",
      escenas: ["0","0.3","0.4","0.4","0.7","0.7","1","1"],
    },
    {
      id:"0.3",
      escenas: ["0","0.2","0.2","0.3","0.3","0.3","0.3","0.3","0.4","0.7","1"],
    },
    {
      id:"0.4",
      escenas: ["0","0","0.1","0.2","0.5","0.6","1","1","1"],
    },
    {
      id:"0.5",
      escenas: ["0.1","0.3","0.6","1","1","1"],
    },
    {
      id:"0.6",
      escenas: ["0.2","0.2","0.4","0.6","0.6","0.9"],
    },
    {
      id:"0.7",
      escenas: ["0.2","0.3","0.4","0.9","1"],
    },
    {
      id:"0.8",
      escenas: ["0.2"],
    },
    {
      id:"0.9",
      escenas: ["0.1","0.6","end"],
    },
    {
      id:"1",
      escenas: ["0.1","0.1","0.1","0.3","0.4","0.4","0.4","0.5","0.5","0.5","0.5","0.7","1","1","1","1","1","1","1","1","1","1","end","end","end","end","end","end","end","end"],
    },

  ] 



function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}



function generar(){

  var numeros = [];

  bailarines.forEach((element,i) => {
    numeros.push(i);
  
  }); 
  numeros = shuffle(numeros);

  var indexNumeroRdm = numeros[0];

  var itemRdm = bailarines[bailarines.length-1]; /*PAra iniciar en rdm le damos IndexRdm*/

  var nEscenas = 5; /*Numero de escenas a generar*/

  var escenaSelect = [];

  
  console.log(itemRdm);

  for(let i=0; i<nEscenas; i++){ 
  
    escenaSelect.push(itemRdm.id);
    
    var escenaFinal = "end";
    
    while (escenaFinal=== "end"){
      
      itemRdm.escenas = shuffle(itemRdm.escenas);   
      escenaFinal=itemRdm.escenas[0];
    }

    console.log("Mi escena final: " , itemRdm.escenas[0]);

    for(let j=0; j<bailarines.length; j++){
      
      var bailarin = bailarines[j];

        
      if(bailarin.id==escenaFinal){
        itemRdm=bailarin;
        j=bailarines.length;
      }
    }


  }

    setListaEscenas(escenaSelect);

 /*
  const listItems = bailarines[bailarinesRdm].map((numeroBailarines, index) =>
  <li>Escena {index+1}: {numeroBailarines}</li>
  );

  console.log("Generaldo algo")

}
 

  console.log(bailarines);
  console.log("el random es: "  + bailarinesRdm + "  hhhhh:  " + bailarines[bailarinesRdm])
*/
}


  return (

    <div className="App">


      <Router>

        <Route path="/" exact component={Home}/>
        <Route path="/data" component={Data}/>    
    
    
    
      <header className="App-header">
  
        <button onClick={generar}>Generar</button>
        <p>
        Esta obra tendra: 
          
          {listaEscenas.map((numeroBailarinesEscena, index)=>{
            return(<li>Escena {index+1}: {Math.round( numeroBailarinesEscena * numeroDeBailarinesIngresados )} y una excitación de: {Math.round( numeroBailarinesEscena * excitacion )} % </li>)
          })
        }

        </p>

        
        
      </header>

        </Router>


    </div>
  );
}

export default App;
