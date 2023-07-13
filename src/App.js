import * as React from "react";
import {Home} from "./components/Home"
import {Login} from "./components/Login"
import {Reserva} from "./components/Reserva"
import {Routes, Route, Navigate} from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
    if (token.length == 0) {
      return <Navigate to="/" replace />;
    }
  
    return children;
};

const Logeado = ({ token, children }) => {
    if (token.length == 1) {
      return <Navigate to="/reservarHora" replace />;
    }
  
    return children;
};

export function App(){

    const obtenerToken = () => {
        var datos = localStorage.getItem("token");
        if(datos){
            return JSON.parse(datos);
        }else{
            return [];
        }
    }

    const [token, setToken] = React.useState(obtenerToken());

    const handleLogout = () => {
        setToken([])
        window.location = '/'
    };

    React.useEffect(() => {
        localStorage.setItem("token", JSON.stringify(token));
    }, [token]);

    return (
        
        <div>
            {/* header */}
            <div>
                <nav class="navbar navbar-expand-lg bg-dark">
                    <div class="container-fluid">
                        <a href="/" type="button" class="btn btn-dark navbar-brand">
                            <img src={require('./img/logo.png')} alt="Bootstrap" width="110" height="110"/>
                        </a>
                        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            </li>
                        </ul>
                        <form class="d-flex justify-content-between" role="search">
                            <a href="login" type="button" class="btn btn-dark m-2">
                            <p>Iniciar sesión</p>
                            </a>
                            {token.length == 1 && (
                                <a type="button" class="btn btn-dark m-2 text-danger" onClick={handleLogout}>
                                Cerrar sesión
                                </a>
                            )}
                        </form>
                        </div>
                    </div>
                </nav>
                <div class="row">
                    <div class="col p-0">
                        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={require('./img/1.jpeg')} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={require('./img/2.jpeg')} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={require('./img/3.jpeg')} class="d-block w-100" alt="..."/>
                            </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*  content */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="login" element={
                        <Logeado token={token}>
                            {<Login/>}
                        </Logeado>
                    } 
                />            
                <Route 
                    path="reservarHora" 
                    element={
                        <ProtectedRoute token={token}>
                            <Reserva/>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<h3 className="text-center text-danger">No hay nada aquí: error 404</h3>}/>
            </Routes>
            {/* footer */}
            <div class="row text-center">
                <div class="col">
                    <div class="row mt-3">
                    <div class="col">
                        <iframe title="map1" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6656.155260469269!2d-70.65062390223032!3d-33.47332959412321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1682697264681!5m2!1ses-419!2scl" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <p>Dirección 1</p>
                    </div>

                    
                    <div class="col">
                        <iframe title="map2" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6656.155260469269!2d-70.65062390223032!3d-33.47332959412321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1682697264681!5m2!1ses-419!2scl" width="400" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <p>Dirección 2</p>
                    </div>
                    </div>
                    <p>Derechos reservados</p>
                    <p>Benjamín Poblete - Gerardo Gonzalez - Iver Olivares - 2023</p>
                    <div class="mb-3">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com" type="button" class="btn btn-light">
                        <img src={require('./img/facebook.png')} alt="Bootstrap" width="40" height="40"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.twitter.com" type="button" class="btn btn-light">
                        <img src={require('./img/twitter.png')} alt="Bootstrap" width="40" height="40"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com" type="button" class="btn btn-light">
                        <img src={require('./img/instagram.png')} alt="Bootstrap" width="40" height="40"/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



