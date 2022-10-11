import "./Integrantes.css"
import "animate.css"
import WOW from "wowjs";
import { useEffect } from "react";


export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return(
        <>
            <div className="fondo">
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 align-self-center border-start text-center ">
                    <h2>Karol G </h2>
                    <h3><i class="bi bi-music-note"></i>200COPAS<i class="bi bi-music-note-beamed"></i></h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotify-385bf.appspot.com/o/karolgmona12.jpg?alt=media&token=62a98612-f4e8-4a6b-8772-934521e26bdf" alt="" className="img-fluid w-75 animate__animated animate__backInLeft wow" data-bs-toggle="collapse"   data-bs-target="#collapseExample"/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div class="card card-body">
                        En '200 Copas', Karol G deja bien claro que cuando una de sus amigas (o amigos) están sufriendo por amor, siempre habrá otro amigo con quien pueda apoyarse y quien le va levantar la autoestima y verá esa 'tragedia' con otros ojos, simplemente diciéndole: "Amiga, deja solo a ese payaso.
                        </div>
                    </div>
                </div> 
            </div>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom"> 
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotify-385bf.appspot.com/o/karolfff.jpeg?alt=media&token=cc3dd812-197e-4671-9d4d-ea8388e012a6" alt="" className="img-fluid w-75 animate__animated animate__backInLeft wow"data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className="col-12 col-md-4 align-self-center border-start text-center">
                    <h2>Karol G </h2>
                    <h3><i class="bi bi-music-note"></i>MAMIII<i class="bi bi-music-note-beamed"></i></h3>
                </div>
            </div>
           
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div class="card card-body">
                        es una canción grabada por la cantante estadounidense Becky G y la cantante colombiana Karol G. Lanzada a través de Kemosabe Records, RCA Records y Sony Music Latin el 10 de febrero de 2022 como tercer sencillo del segundo álbum de estudio de Becky G, Esquemas.​ Está escrito por Gomez, Giraldo, Elena Rose y Daniel Echavarría Oviedo y producido por el último. Es la segunda colaboración de ambas, después de «Mi mala (Remix)» de Mau & Ricky que se lanzó en febrero de 2018. Logró posicionarse como el sencillo más alto de ambas artistas en el Billboard.
                        </div>
                    </div>
                </div> 
            </div>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 align-self-center border-start text-center">
                    <h2>Karol G </h2>
                    <h3><i class="bi bi-music-note"></i>GATUBELA<i class="bi bi-music-note-beamed"></i></h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotify-385bf.appspot.com/o/karolg5.webp?alt=media&token=21e6fe14-26b1-4dd4-920e-62bfcfc7506c" alt="" className="img-fluid w-75 animate__animated animate__backInLeft wow" data-bs-toggle="collapse"   data-bs-target="#collapseExample"/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div class="card card-body">
                        Karol G están de enhorabuena. Su artista favorita ha anunciado el lanzamiento de Gatúbela, su nuevo tema tras el éxito de Provenza.
                        Pero lo cierto es que la colombiana ya estaba avisando de que se venía un nuevo hit internacional, y no cualquier hit internacional. Iba a tratarse de una canción de reggaeton que no va a salir de la pista de baile y que se va a convertir en la reina de todas las fiestas. ©copyright los40.com
                        </div>
                    </div>
                </div> 
            </div>
            </div>
            
            
        </>
     )
}