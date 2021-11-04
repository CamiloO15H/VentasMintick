import React from "react";
import { Form, Button,Label,Control, Text, Group,Dropdown,DropdownItem,DropdownMenu,Modal} from 'react-bootstrap';
import { Navbar, Container, Nav, NavDropdown,Row,Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import './Estilos.css';


const Estado = ()=>{


  /**
   *Name:Funciones para manipular modaL 
   * Author:Carlos Junco 
   * */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   *Name:Funciones para manipular estado 
   * Author:Jhon Wick
   * */
    var varEstado="no selecciono ningun estado";
    const history=useHistory();
    const mostrarAlerta=()=>{
        var id=document.getElementById("Identificador").value;
       
        alert("Identificador: "+id+" Estado: " + varEstado);
    }

    /**
   *Name:Funciones para redireccionar a los otros componentes
   * Author:Carlos Junco
   * */
    const accionEstado=(estado)=>{
          varEstado=estado;
    }

    const returnHome=()=>{
      history.push('/Home');
    }
    const sendForm=()=>{
          history.push('/Formulario');
    }

    const sentEstados=()=>{

        history.push('/Estados');
    }

    // vamos a intentar crear un objeto con la información que captura el input 

    const guardarProducto=()=>{

      const proveedor=document.querySelector('#proveedor').value;
      const producto=document.querySelector('#producto').value;
      const precio=document.querySelector('#precio').value;
      const cantidad=document.querySelector('#cantidad').value;
      console.log( 'proveedor ' + proveedor +' producto ' + producto  + ' precio ' + precio + ' cantidad ' + cantidad  );
    }

    return(
    
    <div className="formulario">
      <header>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand onClick={returnHome}>MintickVentas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link>Another function</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={sentEstados} >Estados</NavDropdown.Item>
                    <NavDropdown.Item onClick={sendForm}>Formulario usuarios</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>   

      </header>


        <section className="tabla" >
                  <div className="tabla-ancho" >
                    <table className="table table-light"  >
                      <thead>
                        <tr>
                          <th scope="col">Id Venta</th>
                          <th scope="col">Valor Total</th>
                          <th scope="col">identificador</th>
                          <th scope="col">cantidad</th>
                          <th scope="col">Precio Unitario</th>
                          <th scope="col">Fecha de Venta</th>
                          <th scope="col">Documento Cliente</th>
                          <th scope="col">Nombre Cliente</th>
                          <th scope="col">Encargado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>100.000</td>
                          <td>1</td>
                          <td>10</td>
                          <td>10.000</td>
                          <td>12/03/2021</td>
                          <td>109862389</td>
                          <td>Jhon</td>
                          <td>1</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>150.000</td>
                          <td>1</td>
                          <td>15</td>
                          <td>10.000</td>
                          <td>12/03/2021</td>
                          <td>10336439</td>
                          <td>Carlos</td>
                          <td>2</td>
                          
                        </tr>
                          <tr>
                          <th scope="row">3</th>
                          <td>200.000</td>
                          <td>1</td>
                          <td>10</td>
                          <td>20.000</td>
                          <td>12/03/2021</td>
                          <td>4568322</td>
                          <td>Julia</td>
                          <td>3</td>
                          
                        </tr>
                        
                      </tbody>
                    </table>

                  </div>
        </section>
        
        <Form>
          <center>
              <Form.Group className="mb-3" >
              <Form.Label>Identificador</Form.Label>
              <Form.Control  id="Identificador" type="Text" placeholder="Identificador" />
              
          </Form.Group>
            <Form.Label>Estado</Form.Label>
            <Dropdown id="Estado">
            <Dropdown.Toggle caret>
              Estados
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item  onClick={()=>accionEstado("Proceso")}  >Proceso</Dropdown.Item>
              <Dropdown.Item onClick={()=>accionEstado("Cancelada")} >Cancelada</Dropdown.Item>
              <Dropdown.Item onClick={()=>accionEstado("Entregada")} >Entregada</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            <div>
              <button id="actualizar" type="button" onClick={()=>mostrarAlerta()} className="btn btn-outline-success">Guardar</button>
            </div>
            

          </center>   
        </Form>


        {/* 
        Estamos creando un modal que tendrá la información para registrar un producto; */}

        <section id='modall'>
          <div>
            <Button variant="primary" onClick={handleShow}>
              Agregar Producto
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Adicionar productos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form className="textForm">

                    <Form.Group className="mb-3">
                      <Form.Label>proveedor</Form.Label>
                      <Form.Control 
                      id='proveedor'
                      name='proveedor' 
                      placeholder="Proveedor" 
                      />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>producto</Form.Label>
                        <Form.Control 
                        id='producto'
                        name='producto' 
                        placeholder="Nombre un producto" 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control 
                        id='cantidad'
                        name='cantidad' 
                        placeholder="cantidad" 
                        />
                        
                    </Form.Group>
                    

                    <Form.Group className="mb-3" >
                        <Form.Label>Precio</Form.Label>
                        <Form.Control 
                        id='precio'
                        name='precio' 
                        placeholder="precio" 
                        />
                        
                    </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Salir
                </Button>
                <Button variant="primary" onClick={guardarProducto}>
                  Guardar producto
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
   
        </section>

        <div className="row justify-content-center text-center enlacess">
            <div className="col-1"><a href="#">Tics.com</a></div>
            <div className="col-1"><a href="#">google.com</a></div>
            <div className="col-1"><a href="#">Misiontic.com</a></div>
        </div>

        <div className="separator-amiibos">
            <div className="content_01 bg-black"></div>
        </div>

    </div>);
}

export default Estado;

    
 

   
