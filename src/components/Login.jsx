import {useState, useEffect, useRef } from "react"

export function Login() {
    const obtenerToken = () => {
        var datos = localStorage.getItem("token");
        if(datos){
            return JSON.parse(datos);
        }else{
            return [];
        }
    }

    const [token, setToken] = useState(obtenerToken());

    const handleLogin = () => setToken(['123']);

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(token));
    }, [token]);


    const[usuario, setUsuario] = useState([]);

    useEffect(()=> {
      fetch('http://localhost/json/usuarios.json')
      .then((response) => {
        return response.json();
      })
      .then((usuario) =>{
        setUsuario(usuario);
      })
    }, []);

    const email = useRef();
    const contra = useRef();

    const validar = ()=> {
    
      if (email.current.value !== '' && contra.current.value !== ''){
        let form = document.getElementById("form");
        function handleForm(event) { event.preventDefault(); } 
        form.addEventListener('submit', handleForm);

        let correo = usuario.find(o => o.correo === email.current.value);
        let contraseña = usuario.find(o => o.contraseña === contra.current.value);

        if (correo && contraseña) {
          handleLogin()
          window.location = '/reservarHora';
        }
        else {
          alert("Usuario o contraseña incorrecto")
        }
      }
    };

    return (
      <div class="bg-dark">
        <div class="accordion row justify-content-center">
          <div class="accordion-item col-4 mt-3 p-3 mb-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Login
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <form id="form" class="accordion-body needs-validation" action="reservarHora" novalidate>
                <div class="form-floating mb-3">
                    <input required type="email" class="form-control" ref={email} id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email</label>
                    <div class="invalid-feedback">
                      Por favor, ingresa un email.
                    </div>
                    <div class="valid-feedback">
                      Se ve bien!
                    </div>
                </div>
                <div class="form-floating mb-3">
                  <input required type="password" class="form-control" ref={contra} id="floatingPassword" placeholder="password"/>
                  <label for="floatingInput">Password</label>
                  <div class="invalid-feedback">
                    Por favor, ingresa un email.
                  </div>
                  <div class="valid-feedback">
                    Se ve bien!
                  </div>
                </div>
                  <button type="submit" onClick={validar} class="btn btn-primary mt-3">Ingresar</button>
              </form>
            </div>
              
          </div>  
        </div>
      </div>
    )
}
