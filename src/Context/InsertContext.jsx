// contexto para insertar elementos en el array

import { createContext,useContext } from "react";

export const InsertContext=createContext(null);


export const useInsert=()=>{
    return useContext(InsertContext);
}