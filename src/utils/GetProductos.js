import axios from "axios"


export const obtenerProductos = async(setConsulta)=>{
    
    const options = {
        method: "GET",
        url: "https://api-rest-udea.herokuapp.com/productos/"

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