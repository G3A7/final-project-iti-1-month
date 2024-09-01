/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import {reducer} from './reducer';

const initialState ={
    data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
} 
export const dataContext  = createContext(initialState); 
const  ContextProvider =({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
       localStorage.setItem('data',JSON.stringify(state.data));
    },[state])
    return <dataContext.Provider value={{data:state.data,dispatch}} >
        {children}
    </dataContext.Provider>
}


export const useData = ()=>{
    return useContext(dataContext);
}
export default ContextProvider;