export function Carrusel(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-385bf.appspot.com/o/KAROLG51.jpg?alt=media&token=c44e9a50-861f-4ee1-bbf7-c03557bf0f58" class="d-block
                        w-100" height="600" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-385bf.appspot.com/o/KAROLG50.jpg?alt=media&token=353a0823-9ec9-45c2-8810-51e08556c4a0" class="d-block w-100" height="600" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-385bf.appspot.com/o/KAROLG52.jpg?alt=media&token=4d8239d8-02a9-4941-90dd-80c4874e036e" class="d-block w-100" height="600" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-385bf.appspot.com/o/karolg2.jpg?alt=media&token=d2250fff-145a-4b9a-a28f-cd8be0223a4d" class="d-block w-100" height="600" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" 
                data-bs-target="#carouselExampleControls"data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}