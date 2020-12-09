import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Contexto } from '../../Utils/Contexto'



function LineChart() {  

    
    var duraciones= [];
    var escenas = [];
    var bailarines = [];
    var bpms = [];
    var excitaciones = [];

    const contexto = React.useContext(Contexto);

    for (let index = 0; index < contexto.listaEscenasD.length; index++) {

        let escena = "Escena " + (index+1);

        escenas.push(
            escena
          )
    }

   
    for (let index = 0; index < contexto.listaEscenasD.length; index++) {
        
        let duracion = parseFloat(contexto.listaEscenasD[index])  * 100;

        let bailarin = parseFloat(contexto.listaEscenasB[index])  * contexto.bailarinesI;

        let excitacion = parseFloat(contexto.listaEscenasE[index])  * 100;

        let bpm = parseFloat(contexto.listaEscenasBPM[index]) * 169;

        console.log("Lista de bailarines", contexto.listaEscenasB[index])
        
        duraciones.push(
            duracion
          )

        bailarines.push(
              parseInt(bailarin) 
        )

        excitaciones.push(
            parseInt(excitacion)
        )

        bpms.push(
            parseInt(bpm)
        )
    }
    

   console.log("mis duraciones ", duraciones);
   console.log("Mis bailarines ", bailarines);
   console.log("Mis Excitaciones ", excitaciones);

    
    

    const data = {

        type: 'bar',
        defaultFontColor: '#ffffff',
    
        labels: escenas,
        
        datasets: [

           
            {
                label: 'Bailarines',
                type: 'line',
                data: bailarines,
                fill:false,
                borderColor: 'rgba(46,210,210,1)',
                backgroundColor:'rgba(46,210,210,1)',
                pointBackgroundColor: 'rgba(46,210,210,1)',
                pointBorderColor:'rgba(46,210,210,1)',
                borderDash: [10,5],
                pointRadius: 6,
                pointHitRadius:10,

                datalabels: {
            
                    color: 'rgba(46,210,210,1)',
                    fontSize: 25, 
                    anchor: 'end',
                    aling: 'start',
                    clamp: false,  
                    
                    
                    font: {
                        weight: 'bold',
                        size: 16,
                      }
                    },
            },
            {
                label: 'Exitación pronosticada',
                type: 'line',
                data: excitaciones,
                fill:false,
                borderColor: 'rgba(225,179,62,1)',
                backgroundColor:'rgba(225,179,62,1)',
                pointBackgroundColor:'rgba(225,179,62,1)',
                pointBorderColor:'rgba(225,179,62,1)',
                pointRadius: 6,
                pointHitRadius:10,

                datalabels: {
            
                    color: 'rgba(225,179,62,1)',
                    fontSize: 25, 
                    anchor: 'end',
                    aling: 'start',
                    clamp: false,  
                    
                    
                    font: {
                        weight: 'bold',
                        size: 16,
                      }
                    },
            },
            {
                label: 'BPMs de la musica',
                type: 'line',
                data: bpms,
                fill:false,
                borderColor: 'rgba(172,58,194,1)',
                backgroundColor:'rgba(172,58,194,1)',
                pointBackgroundColor:'rgba(172,58,194,1)',
                pointBorderColor:'rgba(172,58,194,1)',
                borderDash: [10,5],
                pointRadius: 6,
                pointHitRadius:10,

                datalabels: {
            
                color: 'rgba(172,58,194,1)',
                fontSize: 25, 
                anchor: 'end',
                aling: 'start',
                clamp: false,  
                
                
                font: {
                    weight: 'bold',
                    size: 16,
                  }
                },
                
               
            },
            {
                label: 'Escenas',
                type: 'bar',              
                barThickness: duraciones,
                data: ['200','200','200','200','200','200','200','200','200','200'],
                backgroundColor:'rgba(100,100,100,0.5)',
                borderDash: [10,5],
                hover: false,
                maxBarThickness: 80,
                datalabels: {
                    labels: {
                        title: null
                    },                 
                },
               
            },

        ],
    }

    const options={

        plugins: {
            datalabels: {
                color: '#ffffff',

                align: function(context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    var invert = Math.abs(value) <= 1;
                    return value < 1 ? 'end' : 'start'
                  },

                offset: -22,
            },
        },
        
        tooltips: {
            mode: 'nearest',
            
        },


        onAnimationComplete: function() {
            this.showTooltip(this.datasets[0].points, true);
          },
          tooltipEvents: [],

        title:{
            display: true,
        },
        scales:{
            yAxes:[
                {
                    ticks:{

                        display: false,
                        min: 0,
                        max: 170,
                        stepSize: 10,
                    },

                    gridLines:{
                        display: true,
                        zeroLineColor: '#ffffff',
                    }
                    
                }
            ],

            xAxes:[
                {
                    barPercentage:0.9,
                    categoryPercentage: 0.9,
                    stacked: true,
                   
              

                    ticks:{

                        display: true,
                        min: 0,
                        max: 1,
                        stepSize: 0.1,
                        fontColor: "#ffffff",
                    },

                    gridLines:{
                        display: false,
                        zeroLineColor: '#ffffff',
                    }
                    
                }
            ],
            
        },

        legend: {
            display: true,
            position: 'left',
            rtl: true,
            labels: {
                fontColor: 'white',
            }
            
            
        },
       
       
    }



    return (
        
            <Bar
                data={data}
                options={options}
            />

    )
}

export default LineChart
