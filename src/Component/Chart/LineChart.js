import React from 'react';
import { Line } from 'react-chartjs-2';
import { Contexto } from '../../Utils/Contexto'


function LineChart() {

    const contexto = React.useContext(Contexto);
    
    const labelsN = contexto.listaEscenasD.toString();
    
    
    var escenas = [];
    

    console.log('contexto en line ', escenas);

    console.log('contexto jjjjje ', contexto.listaEscenasP);

    for (let index = 0; index < contexto.listaEscenasD.length; index++) {

        let escena = "Escena " + (index+1);

        escenas.push(
            escena
          )
    }



    const data = {

        

        labels:escenas,
        datasets: [
            {
                label: 'Bailarines',
                data: contexto.listaEscenasB,
                borderColor: ['rgba(46,210,210,0.3)'],
                backgroundColor:['rgba(46,210,210,0.3)'],
                pointBackgroundColor:['rgba(46,210,210,0.3)'],
                pointBorderColor:['rgba(46,210,210,0.3)'],
            },
            {
                label: 'Exitación pronosticada',
                data: contexto.listaEscenasE,
                borderColor: ['rgba(225,179,62,0.3)'],
                backgroundColor:['rgba(225,179,62,0.3)'],
                pointBackgroundColor:['rgba(225,179,62,0.3)'],
                pointBorderColor:['rgba(225,179,62,0.3)'],
            },
            {
                label: 'BPMs de la musica',
                data: contexto.listaEscenasD,
                borderColor: ['rgba(172,58,194,0.3)'],
                backgroundColor:['rgba(172,58,194,0.3)'],
                pointBackgroundColor:['rgba(172,58,194,0.3)'],
                pointBorderColor:['rgba(172,58,194,0.3)'],
            },

        ]
    }

    const options={
        title:{
            display: true,
            text: 'Resultados',
        },
        scales:{
            yAxes:[
                {
                    ticks:{

                        display: false,
                        weight: 10,
                        min: 0,
                        max: 1,
                        stepSize: 0.1,
                    },

                    gridLines:{
                        display: false,
                    }
                    
                }
            ],
            
        },

       
    }


    return (

            <Line
                data={data}
                options={options}
            />

    )
}

export default LineChart
