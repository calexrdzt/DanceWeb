import * as React from 'react';

export const Contexto = React.createContext({


    nombreI: '',
    duracionI: '',
    bailarinesI: '',

    nEscenas: '',
    
    setBailarinesI: () => null,
    setDuracionI: () => null,
    setNombreI: () => null,
    setNEscenas: () => null,

    listaEscenasD: [],
    setListaEscenasD: () => null,

    listaEscenasB: [],
    setListaEscenasB: () => null,

    listaEscenasE: [],
    setListaEscenasE: () => null,

    listaEscenasP: [],
    setListaEscenasP: () => null,

    listaEscenasBPM: [],
    setListaEscenasBPM: () => null,

    listaEscenasResultado: [],
    setListaEscenasResultado: () => null,

    anchoEscena: [],
    setAnchoEscena: () => null,
});