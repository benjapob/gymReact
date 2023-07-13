import React,{useState, useEffect} from "react"
import {Trash3} from 'react-bootstrap-icons'

export function Reserva() {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registrosls");
    if(datos){
        return JSON.parse(datos);
    }else{
        return [];
    }
  }

  const [registrosls, setRegistrosLS] = useState(obtenerRegistros());
  
  useEffect(() => {
    localStorage.setItem("registrosls", JSON.stringify(registrosls));
  }, [registrosls]);



  const [disciplina, setDisciplina]= useState();
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [fecha, setFecha] = useState();
  const [hora, setHora] = useState();

  const botonGuardar = (e) => {
    if (disciplina && nombre && email && fecha && hora){
      e.preventDefault();
      var miObjeto = {disciplina,nombre,email,fecha,hora}
      setRegistrosLS([...registrosls, miObjeto])
      alert("Cita registrada")
      limpiarFormulario();
    }
  }

  const limpiarFormulario = () => {
      setDisciplina(null);
      setNombre(null);
      setEmail(null);
      setFecha(null);
      setHora(null);
      document.getElementById("form").reset();
  }


  const botonEliminar = (miIndex) => {
      if(window.confirm("¿Está seguro de querer eliminar la reserva?")){
          var registrosFiltrados = registrosls.filter((e, index) => {
              return miIndex !== index
          });
          setRegistrosLS(registrosFiltrados);
      }
  
  }



    useEffect(()=> {
      let form = document.getElementById("form");
      function handleForm(event) { event.preventDefault(); } 
      form.addEventListener('submit', handleForm);

      let fechaInput = document.getElementById('fecha');
      fechaInput.min = new Date().toISOString().split('T')[0];
      
    }, []); 
    
    return (
      <div class="container bg-dark">
        <div class="card text-bg-secondary text-center mt-3">
          <div class="card-header">
            <ul class="nav nav-pills card-header-pills d-flex justify-content-evenly">
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active bg-success" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Reserva de horas
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="reservarHora">Reservar Horas</a></li>
                  <li><a class="dropdown-item disabled" href="buscarHora">Anular Horas</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active disabled bg-success" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Inscribir disciplina
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="gestionProductos">Mantenedor de productos</a></li>
                  <li><a class="dropdown-item" href="ingresoProductos">Ingreso de productos</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active disabled bg-success" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Modificar perfil
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="">Mantenedor de usuarios</a></li>
                  <li><a class="dropdown-item" href="">Ingreso usuarios</a></li>
                </ul>
              </li>

            </ul>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="content-wrapper">
            
                <section class="content">
            
                  <div class="card">
                    <h3 class="card-title">Reservar una Hora</h3>
                    <div class="card-header d-flex justify-content-center">
                      <form class="col-6 needs-validation" id="form" autocomplete="off" onSubmit={botonGuardar }>
                        <div class="form-floating mb-3">
                          <select required class="form-select"  id="disciplina" aria-label="Floating label select example" onChange={(e)=>setDisciplina(e.target.value)}>
                            <option selected value = ''></option>
                            <option value="Calistenia">Calistenia</option>
                            <option value="Boxing">Boxing</option>
                            <option value="Crossfit">Crossfit</option>
                          </select>
                          <label for="floatingSelect">Disciplina</label>
                        </div>

                        <div class="form-floating mb-3">
                          <input required type="text" class="form-control"  id="nombre" placeholder="nombre"  onChange={(e)=>setNombre(e.target.value)}/>
                          <label for="floatingInput">Nombre</label>
                        </div>

                        <div class="form-floating mb-3">
                          <input required type="email" class="form-control"  id="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                          <label for="floatingInput">Email</label>
                        </div>

                        <div class="form-floating mb-3">
                          <input required type="date" class="form-control"  id="fecha" placeholder="name@example.com" onChange={(e)=>setFecha(e.target.value)}/>
                          <label for="floatingInput">Fecha</label>
                        </div>

                        <div class="form-floating mb-3">
                          <input required type="time" class="form-control"  id="hora" placeholder="name@example.com" onChange={(e)=>setHora(e.target.value)}/>
                          <label for="floatingInput">Hora</label>
                        </div>

                        <button onClick={botonGuardar} type="submit" class="btn btn-primary">Registrar</button>
                      </form>
                    </div>
                    <div class="card-body p-0">
                      <table class="table table-striped projects">
                          <thead>
                              <tr>
                                  <th>
                                      Nombre completo
                                  </th>
                                  <th>
                                      Disciplina
                                  </th>
                                  <th>
                                      Fecha
                                  </th>
                                  <th>
                                      Hora
                                  </th>
                                  <th>
                                      Eliminar
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                          {
                            registrosls.map((miObjeto, index)=> (
                              <tr>
                                  <td>{miObjeto.nombre}</td>
                                  <td>{miObjeto.disciplina}</td>
                                  <td>{miObjeto.fecha}</td>
                                  <td>{miObjeto.hora}</td>
                                  <td className="text-center">
                                    <button type="button" className="btn btn-outline-danger" onClick={()=>botonEliminar(index)}>
                                      <Trash3/>
                                    </button>
                                  </td>
                              </tr>
                            ))

                          }
                              
                              
                          </tbody>
                          
                      </table>
                    </div>
                  </div>
            
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>


    )

}