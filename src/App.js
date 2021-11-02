import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Home from './components/home/Home'
import Formulario from './components/formulario/Formulario';
import Estados from './components/Estados/Estados';
import Productos from './components/productos/Productos';


function App() {
  return (
    <>
      <Router>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/Formulario' component={Formulario}/>
              <Route exact path='/Estados' component={Estados}/>
              <Route exact path='/Productos' component={Productos}/>
              {/* <Route exact path='/Productos' component={Productos}/> */}
            </Switch>
      </Router>
    </>
  );
}

export default App;