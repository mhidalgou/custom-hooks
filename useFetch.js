import  { useEffect, useState } from 'react'

//cache
const localCache={};


export const useFetch = (url) => {
    const[estado, setEstado]= useState({
        datos:null,
        estaCargando: true,
        tuvoError: false,
        error: null,
        
    });

    useEffect(()=>{
        realizarPeticionHttp();
    },[url]);
    
    const setEstadoFormulario=()=>{
        setEstado({
            datos: null,
            estaCargando: true,
            tuvoError: false,
            error: null,
        });
    };
    // tener el uso de dependecias vacio [] no se recargará en forma automática
    // cuando tiene valor significa que al cambiar ese valor se hace la peticion http


    const realizarPeticionHttp= async()=>{
        //recuperar cache
        if (localCache[url]){
            console.log("Usando caché");
            setEstado({
                datos:localCache[url],
                estaCargando:false,
                tuvoError: false,
                error:null,
            });
        return;
        }
        
        setEstadoFormulario();
        const respuesta = await fetch(url);

        await new Promise(resolve=>setTimeout(resolve,1500));

        if(!respuesta.ok){
            setEstado({
                datos:null,
                estaCargando: false,
                tuvoError: true,
                error:{
                    code: respuesta.status,
                    message: respuesta.statusText,
                }
            });
            console.log('nulos',{datos});
            return;
        }

        const datos = await respuesta.json();
        setEstado({
            datos:datos,
            estaCargando: false,
            tuvoError: false,
            error: null,
        })
        console.log('json',{datos});
        //manejo del caché
        localCache[url]=datos;
  
    }
    
    return {
        datos: estado.datos,
        estaCargando: estado.estaCargando,
        tuvoError: estado.tuvoError,
    }
  
  }
