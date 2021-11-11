import React from 'react'
import { useSeleccionado } from '../../Context/seleccion';


import Menu from '../navbar/Menu';

const Formulario = () => {
  const {consulta}=useSeleccionado()


  
     
  return (
   <>
    <Menu />
                <div className="mt-2">                      
                <table className="table-fixed w-full bg-white border-solid border-gray-300 border my-5">
                  <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Precio unitario</th>
                        <th>Fecha</th>  
                    </tr>
                    </thead>
                                
                    {  consulta.map((i)=>{
                      console.log(i._id)
                      return(
                           <tr>
                          <td align="center">{i._id}</td>
                          <td align="center">{i.nombre}</td>
                          <td align="center">{i.estado}</td>
                          <td align="center">{i.precio_unitario}</td>
                          <td align="center">{i.fecha}</td>
                           </tr>
                    )})}
                        

                </table>
            </div>

   </>
  )
}

export default Formulario

