import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import { data } from "autoprefixer";

const datos = [
  /*   {
    id: 1,
    Nombres: "Prueba",
    Apellidos: "Prueba",
    Telefono: "8672256801",
    Edad: 19,
    Sexo: "Masculino",
    Alergia: "ninguna",
  },
  {
    id: 2,
    Nombres: "Prueba2",
    Apellidos: "Prueba",
    Telefono: "8672256801",
    Edad: 19,
    Sexo: "Masculino",
    Alergia: "ninguna",
  },  */
];

const API_URL = "http://[::1]:3001/pacientes";

const getPacientes = () =>{
  fetch(API_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.status == 200) {
        console.log(
          "Exito",
          "Se han obtenido los datos correctamente",
          "Succes"
        );
        window.location.replace("/Pacientes/Listado");
      } else if (422) {
        console.log();
        "Error", "Algo ha salido mal", "Error";
        swal({
          title: "Error al Registrar Paciente",
          text: "Verifique que los datos que ingreso estan correctos y vuelva a intentar.",
          icon: "error",
          button: "Aceptar",
        });
      }
    })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log("Error", err, "Error");
    });
}

//getPacientes();
  
  

class Listado extends React.Component {
  state = {
    data: datos,
    form: {
      id: "",
      Nombres: "",
      Apellidos: "",
      Telefono: "",
      Edad: "",
      Sexo: "",
      Alergia: "",
    },
    modalinsertar: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.tarjet.name]: e.tarjet.value,
      },
    });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalinsertar: true });
  };

  ocultarModalInsertar = () => {
    this.setState({ modalinsertar: false });
  };

 
  
 

  render() {
    return (
      <div>
        <form className="bg-white ">
          <section>
            <br />
            <br />
            <br />
            <center>
              <h3 className="font-bold text-2xl">Listado de pacientes</h3>
            </center>
          </section>
          <Container>
            <br />
            
            <Button color="success" onClick={() => this.mostrarModalInsertar()}>
              Insertar nuevo Paciente:
            </Button>

            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Telefono</th>
                  <th>Edad</th>
                  <th>Sexo</th>
                  <th>Alergia</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((elemento) => (
                  <tr>
                    <td>{elemento.id}</td>
                    <td>{elemento.Nombres}</td>
                    <td>{elemento.Apellidos}</td>
                    <td>{elemento.Telefono}</td>
                    <td>{elemento.Edad}</td>
                    <td>{elemento.Sexo}</td>
                    <td>{elemento.Alergia}</td>
                    <td>
                      <Button color="primary">Editar</Button>
                      <Button color="danger">Eliminar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>

          <Modal isOpen={this.state.modalinsertar}>
            <ModalHeader>
              <div>
                <h3>Insertar Registro</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <label>ID:</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data.length + 1}
                />
              </FormGroup>

              <FormGroup>
                <label>Nombres:</label>
                <input
                  className="form-control"
                  name="Nombres"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Apellidos:</label>
                <input
                  className="form-control"
                  name="Apellidos"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Telefono:</label>
                <input
                  className="form-control"
                  name="Telefono"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Edad:</label>
                <input
                  className="form-control"
                  name="Edad"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Sexo:</label>
                <input
                  className="form-control"
                  name="Sexo"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Alergia:</label>
                <input
                  className="form-control"
                  name="Alergia"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button color="primary">Insertar</Button>
              <Button
                color="danger"
                onClick={() => this.ocultarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </form>
      </div>
    );
  }
}

export default Listado;
