import React from 'react'
import { Card } from 'react-bootstrap';
import Img from '../comida/Img';


const Comida = ({plato,comprar}) => {
    return ( 
        <div className='col-m-5 w-25 text-center col-sm'>
            <div class="card bg-light container">
                <Card.Img variant="top w-25 mx-auto d-block" src={Img[0]}/>
                <div class="card-body">
                    <h5 class="card-title">{plato.nombre}</h5>
                    <p>{plato.precio}</p>
                    <p>{plato.def}</p>
                    <button onClick={() => comprar(plato)} class="btn bg-black btn-primary w-100">Agregar al carrito</button>
                </div>
            </div> 
        </div>
     );
}
 
export default Comida;