import { useReducer, useEffect } from 'react';
import { tareaPorHacerReducer } from '../08-useReducer/TareaPorHacerReducer';


const recuperarTareasPorHacer=()=>{
    return JSON.parse(localStorage.getItem('tareasPorHacer'))||[];
}

export const useTareasPorHacer = () => {

    const [tareasPorHacer,dispatch]=useReducer(tareaPorHacerReducer, [], recuperarTareasPorHacer);
     
    useEffect(() => {
        console.log(tareasPorHacer);
        localStorage.setItem('tareasPorHacer', JSON.stringify(tareasPorHacer));
    }, [tareasPorHacer]) // aqui se pone lo que dispara el use efect al cambiar
    


    const emitirNuevoPorHacer=(tareaPorHacer)=>{
       console.log('tarea por hacer ',{tareaPorHacer}) ;
       const accion={
        tipo:'[tareaPorHacer] Agregar Tarea',
        proceso: tareaPorHacer
       }
       dispatch( accion);
    }

    const borrarTareaPorHacer=(id)=>{
        console.log({id});
         dispatch({
            tipo: '[tareaPorHacer] Remover Tarea',
            proceso: id
        }); 
    }

    const onCambiarEstadoTarea=(id)=>{
        console.log({id});
        dispatch({
            tipo: '[tareaPorHacer] Cambiar Estado Tarea',
            proceso: id 
        }); 
    }

    //const totalTareasPendientes=tareasPorHacer.length;
    //const totalTareasPendientes=()=>
    return{
        tareasPorHacer,
        totalTareasPorHacer: tareasPorHacer.length, 
        totalTareasPendientes:tareasPorHacer.filter(tareaPorHacer=>!tareaPorHacer.estado).length,
        emitirNuevoPorHacer,
        borrarTareaPorHacer,
        onCambiarEstadoTarea,
    }
}
