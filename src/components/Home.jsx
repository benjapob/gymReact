export function Home() {
    return (
        <div class="bg-dark">
                    <div class="container text-center">
                    <div class="row">
                        <div class="header">
                            <h2 class="text-light">Disciplinas</h2>
                            <p class="text-danger">Ven y entrena con nosotros</p>
                        </div>
                        <div class="container mt-3">
                            <div class="d-flex justify-content-between mb-3">
                            <div class="card" style={{width: 18 + 'rem'}}>
                                <img src={require('../img/calis.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">Calistenia</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet?</p>
                                </div>
                            </div>

                            <div class="card" style={{width: 18 + 'rem'}}>
                                <img src={require('../img/box.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">Boxeo</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eum.</p>
                                </div>
                            </div>
                            
                            <div class="card" style={{width: 18 + 'rem'}}>
                                <img src={require('../img/crossfit.png')} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">Crossfit</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, incidunt!</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>   
                </div>
    )
}