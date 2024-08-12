import { useState } from "react";

export const useForm = (formularioInicial={}) => {
    // asi el estadoFormulario se envia parametricamente con formularioInicial

    const [estadoFormulario, setEstadoFormulario]=useState(formularioInicial);

    const onCambioEntrada=({target})=>{
        const {name, value}= target;
        setEstadoFormulario({
            ...estadoFormulario,
            [name]: value
        });
    };

    const limpiarFormulario=()=>{
        setEstadoFormulario(formularioInicial);
    }

    return {
        ...estadoFormulario,
        estadoFormulario,
        onCambioEntrada,
        limpiarFormulario,
    }
}
