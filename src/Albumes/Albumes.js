import { servicioSporty } from "../services/servicioSporty"
import { useState } from "react"

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    servicioSporty()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)
        
    })
    console.log(canciones)



    return(

        <>
            <h1>Hola soy albumes y soy un componente</h1>
        </>
    )
}