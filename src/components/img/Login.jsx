import React,{useState} from 'react'
import { useHistory } from 'react-router';
import { GoogleLogin, responseGoogle} from 'react-google-login';
import './login.css';

const Login = () => {

    const history = useHistory();

    //estos son los states
    const [usuario,setUsuario] = useState({
        email:'',
        password:''
    });

    //db
    const [dbUsuarios] = useState([
            {email:'usuariogenerico@gmail.com',pass:'123456'},
        ]
    )

    //error
    const [error,setError] = useState('')

    //funciones
    const usuChange = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const sendForm = () => {
        dbUsuarios.forEach(function(elem) {
            if(elem.email === usuario.email && elem.pass === usuario.password){
                history.push('/home')
            }
        })
        setError('Usuario Incorrecto')
    }

    const responseGoogle=(respuesta)=>{
        const url=window.location.href;
        alert(url);
    }

    return ( 


            <div className='col-mg p-5 m-5 '>
                <form className='login'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            name='email'
                            value={usuario.email}
                            onChange={usuChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" 
                            name='password'
                            value={usuario.password}
                            onChange={usuChange}
                        />
                    </div>
                    <button id='botonGuardar' onClick={sendForm} type="button" className="btn btn-primary">Ingresar</button>
                    {
                        error !== '' &&
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>

                    }

                </form>

                <div id='loginGoogle'>
                    <GoogleLogin
                        clientId="997598353637-fhrjcmq3id79gckj0jp6vg6ge1d2aear.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}>
                        
                    </GoogleLogin>
                </div>
        </div>
    );
}
 
export default Login;