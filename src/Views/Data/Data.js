import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Component/Header/Header';

const Data = () =>{


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
  



    return <div className="data">

      <Header/>

      <div className="data_contenido">


          <div className="data_inputs">
              <div className="data_inputs-nombre">
                
                <label className="etiqueta">Nombra tu proyecto</label>
                <input className="inputs data_inputs-nombreInput" type="text" placeholder="Nombre del proyecto"></input> 
              
              </div>
              <div className="data_inputs-byd">
                
                <div className="contenedor cont_bailarines"> 
                
                <label>Número de bailarines</label> 
                <input placeholder="00" className="input_pequeño" type="number"></input>
              
                </div>

                <div className="contenedor cont_bailarines"> 
                
                <label>Duración</label> 
                <input placeholder="00:00" className="input_pequeño" type="number"></input>
              
                </div>
                
              
              
              </div>
              
              <div className="data_inputs-btn"><button className="button btn-generar" onClick={generar}>Generar</button></div>
              
          </div>
          
          <div className="data_mezcla"> 
          
            <div className="contenedor contenedor_mezcla"> <p>Subir mezcla</p></div> 
          
          </div>

          <p className="data_msj">
            Aquí será creado el modelo a partir de los datos que ingreses arriba.
        </p>

          <div className="data_resultados"> 

              <div className="data_resultados-escenas">

                    <p className="titulo">Número de escenas</p>
                    <p>
                    Esta obra tendra: 
                      
                      {listaEscenas.map((numeroBailarinesEscena, index)=>{
                        return(<li className="li_contenedor">Escena {index+1}: {Math.round( numeroBailarinesEscena * numeroDeBailarinesIngresados )} </li>)
                      })
                    }

                    </p>

              </div>
              
              <div className="data_resultados-excitacion">

              <p className="titulo">Excitación del público</p>
              <p>
                    Esta obra tendra: 
                      
                      {listaEscenas.map((numeroBailarinesEscena, index)=>{
                        return(<li className="li_contenedor">Escena {index+1}: {Math.round( numeroBailarinesEscena * numeroDeBailarinesIngresados )} </li>)
                      })
                    }

                    </p>
              </div>
              
              <div className="data_resultados-bailarines">

              <p className="titulo">Bailarines en escena</p>
              <p>
                    Esta obra tendra: 
                      
                      {listaEscenas.map((numeroBailarinesEscena, index)=>{
                        return(<li className="li_contenedor">Escena {index+1}: {Math.round( numeroBailarinesEscena * numeroDeBailarinesIngresados )} </li>)
                      })
                    }

                    </p>
              </div>
          
            
          
        </div>
        
      
      </div>



    </div>

}

export default Data;