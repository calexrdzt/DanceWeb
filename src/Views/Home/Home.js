import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../Component/Header/Header'

export const Home = () =>{

    const history = useHistory();
    
    
    
    function click (){

        history.push('/data');

        console.log('click');
      
    }
    return <div className="home">

    <Header/>
        <div className="home_in"> 

            <p className="home_titulo">Mejora tu creación</p>
        <button className="button btn_ingresar"  onClick={click}>Ingresar</button>

        </div>
        <div className="home_que">
            <p>¿Que es dance?</p>
        </div>
 
    </div>

}

export default Home;