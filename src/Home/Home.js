import "./Home.css"
import { SubMenu } from "../SubMenu/SubMenu"
import { Footer } from "../Footer/Footer.js"
import { Carrusel } from "../Carrusel/Carrusel"
export function Home(){

    let descripcionCantante="Carolina Giraldo Navarro (Medellín, Colombia; 14 de febrero de 1991), conocida artísticamente como Karol G, es una cantante y compositora colombiana de reguetón, pop y trap latino.Se lanzó internacionalmente con la canción «301» junto con el cantante Reykon el líder en 2012, posicionado en el top de varias estaciones de radios y canales de televisión, y le permitió realizar conciertos en países como Aruba, Colombia, Ecuador y Estados Unidos. Obtuvo mayor reconocimiento en 2013, cuando lanzó la canción «Amor de dos» junto con Nicky Jam.En 2016, luego de que lanzó varios sencillos, firmó un contrato con la discográfica Universal Music Latin Entertainment, y hubo un ascenso en su carrera. A inicios de 2017, lanzó el sencillo «Ahora me llama» junto con Bad Bunny, que rápidamente se convirtió en un hit.​ Meses más tarde, realizó un remix junto con Quavo, y le dio a la cantante su primer ingreso al top 10 de la lista Hot Latin Songs de Billboard.​ Ese mismo año, lanzó su álbum debut Unstoppable.​ El álbum obtuvo el puesto dos en la lista Top Latin Albums de Billboard.Lanzó su primer sencillo en 2007 llamado «En la playa» bajo el sello Diamond Music, el cual tuvo un video musical.​ Fue invitada por DJ Kio a abrir los conciertos de Daddy Yankee en su gira por Colombia, el cual se dio durante finales de 2007.​ En 2008, lanzaría su segundo sencillo titulado «Por ti» con un video musical acompañado.​ Durante 2009, lanzó más sencillos como «Dime que si», «Así es el amor» y «Me ilusioné», pero sin éxito alguno.​ Lanzó la canción «Mil maneras» junto a Alexander DJ en 2010 y empezó a trabajar como corista para Reykon y posteriormente lanzaron dos temas en conjunto, uno de ellos fue «Tu juguete» que se lanzó en 2011, y en 2012 realizó el sencillo «301» junto con él, ganando gran notoriedad internacional con este último.​ Renunció a trabajar con él para enfocarse en su proyecto como solista. En 2013, logró mayor notoriedad con «Bajo control» y «Amor de dos», este último con el artista Nicky Jam.​ En 2014, lanzó los sencillos «Ricos besos» y «Mañana», este último con colaboración de Andy Rivera.​​"

    return(
        <>
            <div className="Home"></div>

            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">Karol G</h1>
                            <p className="text-center">{descripcionCantante}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SubMenu/>
            </div>
            <div>
                <Footer/>
            </div>
            
        </>
    )

}