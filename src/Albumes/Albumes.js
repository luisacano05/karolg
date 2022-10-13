import { servicioSpoty } from "../services/servicioSpoty.js"
import {servicioTOKEN} from "../services/servicioTOKEN.js"

import { useState, useEffect } from "react"


export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){

        servicioSpoty()
     .then(function(respuesta){
        console.log(respuesta);
        setCanciones(respuesta.tracks)
        setCarga(false)

     })
      console.log(canciones)

    },[])

    if(carga==true){
        <>
             <h1>Estoy cargando...</h1>
        </>
    }else{
        return(

            <>
                <div className="row row-cols-1 rowl-cols-md-4 g-3 mt-3 bg-dark">

                    {
                        canciones.map(function(cancion){
                            return(
                                <>
                                    <div className="col mt-3">
                                        <div className="card h-100">
                                            <img src={cancion.album.images[0].url}className="img-fluid w-25 h-50" 
                                            alt="foto"/>
                                            <audio src={cancion.preview_url} className="w-25" controls="controls"></audio>
                                            <h1 className="text-center">{cancion.album.nombre}</h1>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </>
        )

        

    }

   
}