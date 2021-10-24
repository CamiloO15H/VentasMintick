import React,{useState} from "react";
import { Navbar, Container, Nav, NavDropdown,Form,Row,Button,Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './style.css';
//import './main.css';



const Formulario=()=>{

    const history=useHistory();

    // state para manejar los valores sdel formulario, estado inicial con cadena vacía;

    const [formulario,setformulario]=useState({
        nombre:'',
        apellido:'',
        email:'',
        password:'',
        ciudad:''
    });

    /*
    const formChange=(e)=>{
        setformulario({
            ...formulario,
            [e.target.name]:e.targe.value

        })
    
    }

*/
    const returnHome=()=>{
        history.push('/Home');
    }

    return(
        <div className="row">
            <body>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand onClick={returnHome}>MintickVentas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link>Formulario usuarios</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
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

            <div className="form">
            <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                    name='nombre' 
                    placeholder="Nombres" 
                    //value={formulario.nombre}
                    //onChange={formChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control 
                    name='apellido' 
                    placeholder="Apellidos" 
                    //value={formulario.nombre}
                    //onChange={formChange}
                    />
                    
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Ingrese correo" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control name='ciudad'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>
                    
              {/*       
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                     */}

                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button id="boton" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
            </body>


            <div class="row justify-content-center text-center enlaces">
                    <div class="col-1"><a href="#">Tics.com</a></div>
                    <div class="col-1"><a href="#">google.com</a></div>
                    <div class="col-1"><a href="#">Misiontic.com</a></div>
            </div>

            <div className="separator-amiibos">
                <div className="content_01 bg-black"></div>
            </div>

        </div>
    );
}

export default Formulario;