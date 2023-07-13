
export function Registro() {
    return (
        <div class="bg-dark">
    <div class="accordion row justify-content-center">
      <div class="accordion-item col-4 mt-3 p-3 mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Registro
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <form class="accordion-body needs-validation" action="login.html" novalidate>
              <div class="form-floating mb-3">
                  <input required type="text" class="form-control" id="floatingInput" placeholder="Nombre Completo"/>
                  <label for="floatingInput">Nombre completo</label>
                  <div class="invalid-feedback">
                    Por favor, ingresa tu nombre.
                  </div>
                  <div class="valid-feedback">
                    Se ve bien!
                  </div>
              </div>
              <div class="form-floating mb-3">
                  <input required type="text" class="form-control" id="floatingEdad" placeholder="Edad"/>
                  <label for="floatingPassword">Edad</label>
                  <div class="invalid-feedback">
                    Por favor, ingresa tu edad.
                  </div>
                  <div class="valid-feedback">
                    Se ve bien!
                  </div>
              </div>
              <div class="form-floating mb-3">
                <input required type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email</label>
                <div class="invalid-feedback">
                  Por favor, ingresa un email.
                </div>
                <div class="valid-feedback">
                  Se ve bien!
                </div>
            </div>
            <div class="form-floating mb-3">
              <input required type="password" class="form-control" id="floatingPassword" placeholder="password"/>
              <label for="floatingInput">Password</label>
              <div class="invalid-feedback">
                Por favor, ingresa una constraseña.
              </div>
              <div class="valid-feedback">
                Se ve bien!
              </div>
            </div>
              <button type="submit" class="btn btn-primary mt-3">Registrar</button>
          </form>
        </div>
          
      </div>  
  </div>
  </div>
    )
}
