import React,{useState} from 'react';
import Comida from './comida/Comida';
import { Navbar, Container, Nav, NavDropdown, Carousel } from 'react-bootstrap';
import {Formulario} from '../formulario/Formulario';
import { useHistory } from "react-router";
import './main.css';

const Home = () => {


        const history=useHistory();

        // función que me abre el formulario;

        const sendForm=()=>{
            history.push('/Formulario');
        }

        const [comidas,setComidas] = useState([
            {nombre:'Ceviche',precio:15,def:'Por plato'},
            {nombre:'Torta tres leches',precio:20,def:'Por unidad'},
            {nombre:'Torta de zanahoria',precio:12,def:'Por unidad'},
            {nombre:'Churrasco',precio:13,def:'Por unidad'},
            {nombre:'Coctel marino',precio:15,def:'Por unidad'},
            {nombre:'Picada gourmet',precio:15,def:'Por unidad'}
        ])
        const [carrito,setCarrito] = useState([])


        //funciones
        const comprar = (plato) =>{
            setCarrito([...carrito,plato])
        }

    
    return ( 
        <div className='row'>           
            <body>
        
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>MintickVentas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link  onClick={sendForm}>Formulario usuarios</Nav.Link>
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

            <div className="carousel slide" id="mainSlider" data-ride="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://fondosmil.com/fondo/17027.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://fondosmil.com/fondo/17012.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.wallpaperscraft.com/image/single/street_night_wet_155637_3840x2160.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel> 
            </div>      

            <div className="container-fluid_1">
                <div className="container_1 w-25 pl-5 row justify-content-center">
                    <div className="">
                        <div className="col-sm p-3">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo-design-template-5e3d4fd2fb94e028469b27c3fc842c92_screen.jpg?ts=1570593625" 
                            className="w-75 mx-auto d-block" alt="">  
                            </img>
                        </div>
                    </div>
                    <div className="container_2 col-sm p-1 text-center">
                        <p>Compras</p>
                        <h4>Eficientes & seguras</h4>
                    </div>
                </div>
            </div>      

            <div className="separator-ribbon">
                <div className="content_00 bg-black"></div>
            </div>

            <h3 className="text-center pb-5 pt-5 h1">Algunos productos que se encuentran a la venta:</h3>
            </body>
            
            {
                comidas.map((comida) =>{
                    return(
                        <Comida 
                            plato={comida}
                            comprar={comprar}
                        />  
                    )
                })
            }
             <h3 className="text-center pb-5 pt-5 h1">Su carrito de compras:</h3>

            {
                carrito.map((elem)=>{
                    return(
                        <h1 className='text-center card' >{elem.nombre}</h1>
                    )
                })
            }
            <div className="row py-5">
                <div class="col">
                    <h3 class="text-center">MintickVentas.Com</h3>
                </div>

            </div>

            
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
 
export default Home;

