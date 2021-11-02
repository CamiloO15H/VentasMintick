import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react";

const Private = ({children}) => {
    const{isAuthenticated,loginWithRedirect}=useAuth0();
    useEffect(()=>{

        if(!isAuthenticated){
            return loginWithRedirect();
        
        } 
        else {return null} 
    })


    return (
        <>
        {children}  
        </>
    )
}

export default Private
