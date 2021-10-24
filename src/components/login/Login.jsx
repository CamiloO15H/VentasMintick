import React,{useState} from 'react'
import { useHistory } from 'react-router';

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

    return ( 
        <div className='col-mg p-5 m-5'>
            <form>
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
                <button onClick={sendForm} type="button" className="btn btn-primary">Submit</button>
                {
                    error !== '' &&
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>

                }

            </form>
        </div>
     );
}
 
export default Login;