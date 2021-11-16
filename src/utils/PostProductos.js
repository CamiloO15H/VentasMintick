import axios from "axios"


export const insertarProductos = async(setInsertar)=>{
    
    const options = {
        method: "POST",
        url: "http://localhost:3001/productos/",
        params: {
            nombre : "Arroz de coco",
            estado : "sin stock",
            precio_unitario :20000,
            fecha :"2020-11-21"
        }
    };
    await axios
    .request(options)
    .then(resp =>{
        setInsertar(resp.data)
        console.log(resp);
    })   
    .catch(function(error){
        console.error(error)
    })
}

/*
export const insertarProductos = async(setInsertar) => {
    axios.post("http://localhost:3001/productos/", {
        params: {
            nombre : "Arroz de coco",
            estado : "sin stock",
            precio_unitario :20000,
            fecha :"2020-11-21"
        }
        })
        .then(res => {
            console.log(res);
            setInsertar(res);
        })
        .catch(err => {
            console.log(err);
        })
};*/