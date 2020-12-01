import * as React from 'react';

export const Contexto = React.createContext({


    nombreI: '',
    duracionI: '',
    bailarinesI: '',
    
    setBailarinesI: () => null,
    setDuracionI: () => null,
    setNombreI: () => null,


    listaEscenasD: [],
    setListaEscenasD: () => null,

    listaEscenasB: [],
    setListaEscenasB: () => null,

    listaEscenasE: [],
    setListaEscenasE: () => null,

    listaEscenasP: [],
    setListaEscenasP: () => null,
});