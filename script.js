const rutina = (tarea, callback, duracion) =>{
    setTimeout(()=>{
        callback(tarea);
    }, duracion)
}

rutina("Levantarse", (tarea)=>{
    console.log("Accion: "+tarea);
    rutina("Tender cama", (tarea)=>{
        console.log("Accion: "+tarea);
        rutina("Bañarse", (tarea)=>{
            console.log("Accion: "+tarea);
            rutina("Tomar Clase  de paradigmas", (tarea)=>{
                console.log("Accion: "+tarea);
                rutina("Desayunar", (tarea)=>{
                    console.log("Accion: "+tarea);
                    rutina("Jugar videojuegos", (tarea)=>{
                        console.log("Accion: "+tarea);
                    }, 10000)
                }, 8000)
            }, 5000)
        }, 3000)
    }, 3000)
}, 5000)