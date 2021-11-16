import React from 'react'
import { useSeleccionado } from '../../Context/seleccion';
import Menu from '../navbar/Menu';
import './style.css';
import { useState } from 'react';
import axios from 'axios';
import {Form,Button,Row,Col} from 'react-bootstrap';

const Formulario = () => {
  const {consulta}=useSeleccionado();
  /*
  *****Creación de método post para consumo de api*** 
  Carlos Junco - Jhon Zuñiga 
  */ 

  // state que se encarga de capturar los valores de los input 
  const [usuario,setUsuario]=useState({
    nombre:"",
    estado : "",
    precio_unitario :"" ,
    fecha : ""}
  );

  //funciones para realizar el método post;
  const handleChange = (event) => {
    setUsuario({ 
      ...usuario,
      [event.target.name] : event.target.value
    }
    );
    console.log(usuario);
  }

  // evento que envía la petición a la api
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nombre: usuario.nombre,
      estado:usuario.estado,
      precio_unitario:usuario.precio_unitario,
      fecha:usuario.fecha
    };

    axios.post( "https://api-rest-udea.herokuapp.com/productos/",data)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert('Producto registrado exitosamente');
      })
  }

  return (
  <div>
    <Menu />
      <div className="form">
        <div className="mt-2">                      
        <table className="table-fixed w-full bg-white border-solid border-gray-300 border my-5">
          <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Precio unitario</th>
                <th>Fecha</th>  
            </tr>
            </thead>
                        
            {consulta.map((i)=>{
              console.log(i._id)
              return(
                <tr>
                <td align="center">{i._id}</td>
                <td align="center">{i.nombre}</td>
                <td align="center">{i.estado}</td>
                <td align="center">{i.precio_unitario}</td>
                <td align="center">{i.fecha}</td>
                </tr>
          )})}
        </table>
        </div>  
      </div>

  <div>

 {/*  /*
  *****Formulario que captura información para enviar a la api*** 
  Jhon Zuñiga 
  */ }
    <Form className="formulario" onSubmit={handleSubmit}>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Nombre producto</Form.Label>
        <Form.Control type="text" name="nombre"  onChange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Estado</Form.Label>
        <Form.Control type="text" name="estado" onChange={handleChange}   />
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" name="precio_unitario"  onChange={handleChange} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="text" name="fecha"  onChange={handleChange}   />
      </Form.Group>
    </Row>

    <Button variant="primary" type="submit">
      Enviar
    </Button>
    </Form>
  </div>

  </div>
  )
}
export default Formulario