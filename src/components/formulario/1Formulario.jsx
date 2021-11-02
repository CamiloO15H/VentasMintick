import React,{useState} from "react";
import { Navbar, Container, Nav, NavDropdown,Form,Row,Button,Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './style.css';
import Menu from '../navbar/Menu';

const Formulario=()=>{

    const history=useHistory();
    // state para manejar los valores sdel formulario, estado inicial con cadena vacía;

    /*
    const [formulario,setformulario]=useState({
        nombre:'',
        apellido:'',
        email:'',
        password:'',
        ciudad:''
    });
 
    const llenandoFormulario=(e)=>{
        setformulario({
            ...formulario,
            [e.target.name]:[e.target.value]

        }
        )
    }
    */


    /**
   *Name:Función para guardar información del formulario; 
   * Author:Carlos Junco
   * */
  
    const guardarInformacion=()=>{

        const nombre=document.querySelector('#nombre').value;
        const apellido=document.querySelector('#apellido').value;
        const email=document.querySelector('#email').value;
        const password=document.querySelector('#password').value;
        const ciudad=document.querySelector('#ciudad').value;
        console.log('capturo la información:  nombre ' + nombre + ' apellido ' + apellido + ' email ' + email + ' password ' + password + ' ciudad ' + ciudad );
    }

    /**
   *Name:Funciones para redireccionar a los otros componentes dentro del navbar; 
   * Author:Carlos Junco
   * */
    const returnHome=()=>{
        history.push('/Home');
    }
    const sendForm=()=>{
        history.push('/Formulario');
    }
    const sentEstados=()=>{
        history.push('/Estados');
    }

    return(
        <div className="row">
            <div>
                <header>
                    <Menu/>
                </header>
                
                <div className="form">
                <Form className="textForm">
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        id='nombre'
                        name='nombre' 
                        placeholder="Nombres" 
                        //value={formulario.nombre}
                        //onChange={llenandoFormulario}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control 
                        id='apellido'
                        name='apellido' 
                        placeholder="Apellidos" 
                        //value={formulario.apellido}
                        //onChange={llenandoFormulario}
                        />
                        
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email"
                        id='email'
                        name='email' 
                        placeholder="Ingrese correo"
                        //value={formulario.email}
                        //onChange={llenandoFormulario} 
                        />
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                        id='password'
                        type="password"
                        name='password'
                        placeholder="Contraseña"
                        //value={formulario.password}
                        //onChange={llenandoFormulario}
                        />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control
                        id='ciudad'
                        name='ciudad'
                        //value={formulario.ciudad}
                        //onChange={llenandoFormulario}
                        />
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Departamento</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>
                        

                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button id="boton" variant="primary" type="" onClick={guardarInformacion}>
                        Enviar
                    </Button>
                </Form>
                </div>
            </div>

            <div className="row justify-content-center text-center enlacesss">
                    <div className="col-1"><a href="#">Tics.com</a></div>
                    <div className="col-1"><a href="#">google.com</a></div>
                    <div className="col-1"><a href="#">Misiontic.com</a></div>
            </div>

            <div className="separator-amiibos">
                <div className="content_01 bg-black"></div>
            </div>

        </div>
    );
}
export default Formulario;