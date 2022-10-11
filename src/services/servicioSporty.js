export async function servicioSporty(){
     
    const URI="https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=US"

    const TOKEN="Bearer BQC-XnVNe18j1ObAHA8Vzkb9TPGrSmWST4wtEgfhpZfYG1EmK9OhGoSAPMRsUCqStCrCQhExV8l33cANJyHGcKBK95oArG78rsvTrdDQA1iX9qmbkWC_qmtEnUlZBjdZGOCwDcgabhF01Aso8tUm8ogsWFOEG8Oi_HasNUez1OcK215DAjREyDh6MPomWammI54"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos

}