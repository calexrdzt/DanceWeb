import React from 'react';
import {useRef} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Bailarines from '../../Component/Diccionarios/BailarinesDic'

export const Data = () =>{

  var refBailarines = useRef();

  function generarTodos(){
 //   refBailarines.current.generar();
   
   // console.log('Funciona ' + refBailarines.current.generar())
  }

  


    return( <div className="data">

      <Header/>

      <div className="data_contenido">


          <div className="data_inputs">
              <div className="data_inputs-nombre">
                
                <label className="etiqueta" >Nombra tu proyecto</label>
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
              
              <div className="data_inputs-btn"><button className="button btn-generar" onClick={generarTodos}>Generar</button></div>
              
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
              
                      
                      <Bailarines ref={refBailarines}/>

              </div>
              
              <div className="data_resultados-excitacion">

              <p className="titulo">Excitación del público</p>
          
                      
                     

                    <button className="button btn_mas">Más</button>


              </div>
              
              <div className="data_resultados-bailarines">

              <p className="titulo">Bailarines en escena</p>
            
                      
                     
                   

              </div>
        </div>
      </div>
    </div>
  );
}

export default Data;