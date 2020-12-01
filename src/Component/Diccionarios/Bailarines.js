import React, { forwardRef, useImperativeHandle} from 'react'
import bailarines from '../../Utils/BailarinesDic'
import { Contexto } from '../../Utils/Contexto';

  
const shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}


export function Bailarines (props , ref){

  const contexto = React.useContext(Contexto);
  
  console.log(ref , props);
  console.log(bailarines);
    const [listaEscenas, setListaEscenas] = React.useState([]);
    var numeroDeBailarinesIngresados = contexto.bailarinesI;
    var excitacion = 57;
  
    
  
    useImperativeHandle(ref, () => ({
      generar:generar,
      

    }));
  
  
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
  
    
    // console.log(itemRdm);

  
    for(let i=0; i<nEscenas; i++){ 
    
      escenaSelect.push(itemRdm.id);
      
      var escenaFinal = "end";
      
      while (escenaFinal=== "end"){
        
        itemRdm.escenas = shuffle(itemRdm.escenas);   
        escenaFinal=itemRdm.escenas[0];
      }
  
      // console.log("Mi escena final: " , itemRdm.escenas[0]);
  
      for(let j=0; j<bailarines.length; j++){
        
        var bailarin = bailarines[j];
  
          
        if(bailarin.id==escenaFinal){
          itemRdm=bailarin;
          j=bailarines.length;
        }
      }
  
    }
    setListaEscenas(escenaSelect);
    contexto.setListaEscenasB(listaEscenas);
  }

    return( <div className="bailarines"></div>);
}

export default forwardRef(Bailarines);