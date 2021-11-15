import { createContext,useContext } from "react";

export const SeleccionadoContext=createContext(null);


export const useSeleccionado=()=>{
    return useContext(SeleccionadoContext);
}