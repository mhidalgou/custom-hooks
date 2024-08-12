import { useState } from "react"

//custom hooks
export const useContador=(valorInicial=1)=>{
    const [contador, setContador]= useState(valorInicial)

    //varias forma de exponerlo
    const incremento =(valor=1)=>{
        setContador((contador)=>contador+valor);
    }
    //valor sería el valor por defecto 
    const restar =(valor=1)=>{
        if(contador<1) return;

        setContador((contador)=>contador-valor);
    }

    const resetear =()=>{
        setContador(valorInicial);
    }


    return{
        contador,
        incremento,
        restar,
        resetear,
    };
};