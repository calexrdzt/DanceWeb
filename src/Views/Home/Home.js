import * as React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Component/Header/Header'

const Home = () =>{
    
    
    
    return <div className="home" style={{backgroundImage: 'url(./images/FondoHome.jpg)'}}>

    <Header/>
        <div className="home_in"> 

            <p className="home_titulo">Mejora tu creación</p>
        <button className="button btn_ingresar" component={Link} to="/data">Ingresar</button>

        </div>
        <div className="home_que">
            <p>¿Que es dance?</p>
        </div>
 
    </div>

}

export default Home;