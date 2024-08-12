

export const tareaPorHacerReducer=(estadoInicial=[],accion)=>{

    switch (accion.tipo) {
        case '[tareaPorHacer] Agregar Tarea':
            return [...estadoInicial, accion.proceso];
        
        case '[tareaPorHacer] Remover Tarea':
            return estadoInicial.filter( tareaPorHacer=> tareaPorHacer.id!==accion.proceso)
        
        case '[tareaPorHacer] Cambiar Estado Tarea':
            return estadoInicial.map(tareaPorHacer=>  {
                if(tareaPorHacer.id===accion.proceso){
                    return {
                        ...tareaPorHacer,
                        estado: !tareaPorHacer.estado
                    }
                }
                return tareaPorHacer
                });

        default:
            return estadoInicial;
        
    }
}