import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
import { Contexto } from '../../Utils/Contexto'


export default class LineGraph extends Component {

    chartRef = React.createRef();

    static contexto = Contexto;
    
    componentDidMount() {

        const dataContexto = this.context;
        
        const myChartRef = this.chartRef.current.getContext("2d");

        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Escena 1", "Escena 2", "Escena 3", "Escena 4"],
                datasets: [
                    {
                        label: "Bailarines",
                        data: [86, 67, 91],
                        backgroundColor: "rgba(255,0,255,0.5)"
                    },
                    {
                        label: "Exitación",
                        data: [10, 15, 20],
                        backgroundColor: "rgba(255,0,0,0.5)"
                    },
                    {
                        label: "BPM",
                        data: [0, 50, 90],
                        backgroundColor: "rgba(110,110,100,0.5)"
                    }
                ]
            },
            options: {
               title:{
                    display:true,
                    text: 'Resultados'
               },

               scales:{
                    yAxes:[
                        {
                            tricks: {
                                min: 0,
                                max: 200,
                                stepSize: 50,
                            }
                        }
                    ]
               }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}