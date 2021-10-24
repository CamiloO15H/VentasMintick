import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Home from './components/home/Home'
import Formulario from './components/formulario/Formulario';

function App() {
  return (
    <>
     <home/>
      <Router>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/Formulario' component={Formulario}/>
            </Switch>
      </Router>
    </>
  );
}

export default App;