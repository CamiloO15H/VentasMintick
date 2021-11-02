import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { useHistory } from "react-router";

const Menu=()=>{

    const history=useHistory();
    // función que me abre el formulario; 
    const returnHome=()=>{
        history.push('/Home');
    }
    const sendForm=()=>{
        history.push('/Formulario');
    }

    const sendEstados=()=>{

        history.push('/Estados');
    }

    const sendProductos=()=>{
        history.push('/productos');
    }
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                    <Navbar.Brand onClick={returnHome}>MintickVentas</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link  href="#">Otras funciones</Nav.Link>
                        <Nav.Link href="#pricing">Precios</Nav.Link>
                        <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={sendEstados}>Estados</NavDropdown.Item>
                        <NavDropdown.Item onClick={sendForm}>Usuarios</NavDropdown.Item>
                        <NavDropdown.Item onClick={sendProductos}>Productos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Github</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Trello</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar> 

            
 
        </div>
    );
}

export default Menu;