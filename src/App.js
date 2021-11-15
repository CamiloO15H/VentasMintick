import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Home from './components/home/Home'
import Formulario from './components/formulario/Formulario';
import Estados from './components/Estados/Estados';
import { Auth0Provider } from "@auth0/auth0-react";
import Private from "./Context/Private"
import Productos from './components/productos/Productos';
import { obtenerProductos } from './utils/GetProductos';
import { useEffect,useState } from 'react';
import { SeleccionadoContext } from './Context/seleccion';


function App() {

 const [consulta, setConsulta] = useState([]); 
  const [, setEjecutarConsulta] = useState(true);
   useEffect(() => {
      obtenerProductos(setConsulta)
      setEjecutarConsulta(false);
    
      },[]);
  
  return (
    <>
    <Auth0Provider
    domain="dev-5gowkpfx.us.auth0.com"
    clientId="B6aa2exizVuH7TA86kloyG0a0OAZpHI4"
    redirectUri="http://localhost:3000/home"
    >
    <SeleccionadoContext.Provider value={{consulta, setConsulta}}>
      <Router>
            <Switch>
              
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/Formulario'>
                <Formulario consulta={consulta} />
              </Route>
              <Route exact path='/Estados' component={Estados}/>
              
              <Route exact path='/' component={Login} />
              <Route exact path='/Productos' component={Productos}/>
              {/* <Route exact path='/Productos' component={Productos}/> */}
            </Switch>
      </Router>
      </SeleccionadoContext.Provider>
      </Auth0Provider>
    </>
  );
}

export default App;