import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { useHistory } from "react-router";
import { useAuth0 } from "@auth0/auth0-react"
import './navbar.css'
const Menu=()=>{
    const { logout } = useAuth0();


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
                    <Navbar.Brand onClick={returnHome}>MintickFood</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link  href="#">Otras funciones</Nav.Link>
                        <Nav.Link href="#pricing">Precios</Nav.Link>
                        <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={sendEstados}>Ventas</NavDropdown.Item>
                        <NavDropdown.Item onClick={sendForm}>Productos</NavDropdown.Item>
                        <NavDropdown.Item onClick={sendProductos}>Usuario</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://github.com/CamiloO15H/VentasMintick" target="_blank">Github</NavDropdown.Item>
                        <NavDropdown.Item href="https://trello.com/invite/b/U3IZRXpl/e8ea97a9e0e1eab000c4236345ced0a6/spring-6" target="_blank">Trello</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión</Nav.Link>
        
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