import React,{useState} from 'react';
import Comida from './comida/Comida';
import { Carousel } from 'react-bootstrap';
import Img from '../img/Img';
import './main.css';
<<<<<<< HEAD
import { useAuth0 } from "@auth0/auth0-react"

const Home = () => {

        const history=useHistory(); 
        const { logout } = useAuth0();

        // función que me abre el formulario; 
        const returnHome=()=>{
            history.push('/Home');
        }
        const sendForm=()=>{
            history.push('/Formulario');
        }

        const sentEstados=()=>{

            history.push('/Estados');
        }
        
        const sendProductos=()=>{

            history.push('/Productos');
        }

=======
import Menu from '../navbar/Menu';

const Home = () => {

>>>>>>> 619daa1a08e067a1cd589bd90222d99c6cf51237
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
            <header>
              <Menu/>
            </header>
            <body>
        
<<<<<<< HEAD
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand onClick={returnHome}>MintickVentas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link  href="#">Another function</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={sentEstados}>Estados</NavDropdown.Item>
                    <NavDropdown.Item onClick={sendForm}>Formulario usuarios</NavDropdown.Item>
                    <NavDropdown.Item >Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <button onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                    </button>
                    </Nav>
                    <Nav>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   

=======
>>>>>>> 619daa1a08e067a1cd589bd90222d99c6cf51237
            <div className="carousel slide" id="mainSlider" data-ride="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Img[1]}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Sabores únicos</h3>
                    <p>Nos esforzamos cada día para hacerlos felices!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Img[2]}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Descuentos cada semana</h3>
                    <p>Cada semana tenemos los mejores descuentos para que puedas disfrutar</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Img[3]}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Ingredientes 100% naturales</h3>
                    <p>Nos aseguramos de que todos los platos, tengas los mejores ingredientes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel> 
            </div>      

            <div className="container-fluid_1" id="contenedor-logo">
                <div className="container_1 w-25 pl-5 row justify-content-center">
                    <div className="">
                        <div className="col-sm p-3">
                            <img src={Img[0]} 
                            className="w-75 mx-auto d-block" alt="">  
                            </img>
                        </div>
                    </div>
                    <div className="container_2 col-sm p-1 text-center">
                        <div className="textos">
                            <h4>Compras</h4>
                            <p>Eficientes & seguras</p>
                        </div>
                        
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

