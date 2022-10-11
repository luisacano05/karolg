import "./Musicos.css"
export function Musicos(){

    //un arreglo de objetos es formato comun al consumir un api
   let musicos=[
        {
            nombre:"En 2006 compitió en el reality show Factor X, gracias a su participación en el concurso obtuvo su primer contrato discográfico, eligiendo el nombre artístico de Karol G.",
            rol:"2006-2007",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-385bf.appspot.com/o/karol%20g%202006.webp?alt=media&token=6f91f008-dd49-4a14-a035-65a2505dbf0c"
        },
        {
            nombre:"2008 lanzaría su segundo sencillo titulado «Por ti» con un video musical acompañado.​ Durante 2009, lanzó más sencillos como «Dime que si», «Así es el amor» y «Me ilusioné», pero sin éxito alguno.​",
            rol:"2008-2009",
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/monadd.webp?alt=media&token=19be9c23-689c-490f-945f-2f13ca6fdaec"
        },
        {
            nombre:"Al año siguiente, lanzó una nueva versión de la canción «Mil horas» de Los Abuelos de la Nada llamada «Ya no te creo​ «Ricos besos» y «Ya no te creo» alcanzaron el top en Colombia, y fue entonces cuando la discográfica Universal Latin firmó con ella en diciembre de 2015, tras ello lanzó el sencillo «Casi nada» en Estados Unidos,​ y recibió una nominación a los Premios Heat Latin Music Awards de 2016​ Durante 2016, obtuvo mayor reconocimiento musical, y lanzó diferentes sencillos. El sencillo «Casi nada» alcanzó el puesto 33 de Hot Latin Songs, y su sencillo «Hello» con Ozuna el puesto ​ En «Hello», ella mostró un lado más atrevido, y comentó que «cuenta con un toque extra de sensualidad También tuvo colaboraciones con Sebastián Yatra en «Lo que siento por ti Daddy Yankee en «Código de amor»",
            rol:"2010-2015",
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/azulh.webp?alt=media&token=c5716070-2e5c-4916-ae33-843ce3721fc0"
        },
        {
            nombre:"En febrero de 2021, lanzó «Location» junto a Anuel AA y J Balvin con un videoclip adjunto. La canción, producida por Ovy on the Drums, debutó en la posición 6 de la lista Hot Latin Songs de Billboard​ Karol G estrenó su tercer álbum de estudio llamado KG0516 el 26 de marzo de 2021. Cuenta con colaboraciones de J Balvin, Anuel AA, Wisin & Yandel, Camilo, Nicky Jam, Ozuna entre otros artistas. El disco tiene un total de 16 canciones​ KG0516 se posicionó en el primer lugar de la lista de los 10 discos que debutaron esa semana a nivel global en Spotify​ Luego del lanzamiento de su Álbum, se lanza el sencillo Poblado (Remix), el cuál fue lanzado por el artista J Balvin y está es una colaboración junto a él, Nicky Jam, Crissin, Totoy el Frío, Nathan & Shander. El 12 de Agosto de ese mismo año se lanza junto a Tiësto el sencillo Don't Be Shy el cual tuvo mucho éxito. Poco tiempo después se lanza por la artista latina su sencillo SEJODIOTO.",
            rol:"2021-2022",
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/pelirojaaaa.jfif?alt=media&token=fe6ed976-b475-4b4b-bc37-e6c37e90d609"
        }

        
    ]

    let conciertosMemorables=[
      
        {
            fecha:"12-12-2019",
            pais:"Mexico/Pueblo Mágico de Cholula ",
            descripcion:"La colombiana, Karol G interpretando en vivo Mi mala y Punto G como parte de su presentación en el Festival Catrina en su edición 2019.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/mexico.jpg?alt=media&token=042160d5-7e1b-43d0-9ab5-ef19c2179a25",
        },
        {
            fecha:"08-abril-2020",
            pais:"Guatemala",
            descripcion:"Karol G estará en Guatemala durante la Semana Santa 2020, ¡qué buena noticia! Te contamos todos los detalles revelados hasta el momento, será una de las fiestas más esperadas del verano.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/guatemala.jpg?alt=media&token=51fbfa21-959a-4b36-aaf8-fd050447ca0d",
        },
        {
            fecha:"05-12-2021",
            pais:"Colombia/Medellin",
            descripcion:"La música se silenció, se apagaron las luces y Karol G salió al escenario del estadio Atanasio Girardot sobre las 11:20 de la noche. Vestida con un pantalón negro con brillos y una camiseta verde con la palabra Bichota estampada, la reguetonera interpretó Sejodioto, la canción que abrió un show que se extendió por dos horas y media",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/KAROLGMEDELLIN.webp?alt=media&token=387cc576-e6dc-4501-8a98-db75d1ce0092",
        },
        {
            fecha:"21-08-2022",
            pais:"Puerto Rico",
            descripcion:"2022 ha estado lleno de momentos gratificantes para la artista paisa. En abril, tuvo un show doble en el marco del mítico festival Coachella y hace unas semanas se presentó por primera vez en Tomorrowland, el festival de música electrónica más grande del mundo.",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/karolgpeliroja.jpg?alt=media&token=563ba766-6143-42b6-a3c5-f410631558ba",
        }
    ]

    //mapeando un arreglo para hacer render
    return(
        <>
           <div className="row row-cols-1 row-cols-md-4 g-3 arriba">
            {
               musicos.map(function(musico){
                   return(
                        <>
                         <div className="col mt-3">
                            <div className="card h-100">
                                <img src={musico.url}
                                 className=""
                                 height="300" 
                                 alt="foto"/>
                                 <h3 className="text-center mt-5">{musico.rol}</h3>
                                 <p className="text-center mt-5">{musico.nombre}</p>  
                            </div>
                         </div>
                        </>
                   )
               })
            }
        </div>
        <div className="musicos">
            <h1>Conciertos Memorables</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-3 abajo">
            {
               conciertosMemorables.map(function(conciertomemorable){
                   return(
                        <>
                         <div className="col mt-3">
                            <div className="card h-100">
                                <img src={conciertomemorable.foto} className="" height="300" alt="foto"/>
                                <h2 className="text-center mt-5">{conciertomemorable.pais}</h2>
                                <h5 className="text-center">{conciertomemorable.fecha}</h5> 
                                <p className="text-center">{conciertomemorable.descripcion}</p>
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