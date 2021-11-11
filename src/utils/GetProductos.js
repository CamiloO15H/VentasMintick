import React from 'react'
import axios from "axios"


export const obtenerProductos = async(setConsulta)=>{
    
    const options = {
        method: "GET",
        url: "http://localhost:3001/productos/"

        
    };
    await axios
    .request(options)
    .then(function(response){
        setConsulta(response.data)
    })   
    .catch(function(error){
        console.error(error)
    })
    
}