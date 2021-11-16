import React,{useState} from 'react'
import { useHistory } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";
import './login.css';
import Img from '../img/Img'

const Login = () => {

   const { loginWithRedirect } = useAuth0();

    return ( 
        <div className='col-mg p-5 m-5 '>

          
            <div id='loginGoogle'>
                
            <img id='google' src={Img[4]}/>

            </div>

            <div id='loginGoogle'>
                <br/>                
                <button className="login" onClick={() => loginWithRedirect()}>Log In</button>
            </div>
        </div>
    );
}
 
export default Login;