
export async function servicioTOKEN(){

    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATOS1="grant_type=client_credentials"
    const DATOS2="client_secret=aa54c6f0a2c4434bacab4014c1a3db47"
    const DATOS3="client_id=891fd9d90ed04f50b54e73ad2826b075"

    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATOS1+"&"+DATOS2+"&"+DATOS3

    }


    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+" "+datos.access_token;
    console.log(datos);
    return datos
    
    
}