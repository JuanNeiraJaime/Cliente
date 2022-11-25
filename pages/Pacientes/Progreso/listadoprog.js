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
  {
    id: 1,
    Fecha: "24/11/2022",
    Peso: "90.0",
    Porcentaje_grasa: "25%",
    Porcentaje_musculo: "24%",
    Cm_cintura: "90",
    Cm_brazo: "33",
    Id_paciente: "1",
  },
  {
    id: 2,
    Fecha: "24/11/2022",
    Peso: "95.0",
    Porcentaje_grasa: "20%",
    Porcentaje_musculo: "28%",
    Cm_cintura: "99",
    Cm_brazo: "36",
    Id_paciente: "2",
  },
];

class Listado extends React.Component {
  state = {
    data: datos,
    form:{
        id: 1,
        Fecha: '',
        Peso: '',
        Porcentaje_grasa: '',
        Porcentaje_musculo: '',
        Cm_cintura: '',
        Cm_brazo: '',
        Id_paciente: '',
    },
    modalinsertar: false
  };

  handleChange=e=>{
    this.setState({
        form:{
            ...this.state.form,
            [e.tarjet.name]: e.tarjet.value,
        }
    });
  }

  mostrarModalInsertar=()=>{
    this.setState({modalinsertar: true});
  }

  ocultarModalInsertar=()=>{
    this.setState({modalinsertar: false});
  }


  render() {
    return (
      <div>
        <form className="bg-white ">
          <section>
            <br />
            <br />
            <br />
            <center>
              <h3 className="font-bold text-2xl">Listado de progresos</h3>
            </center>
          </section>
          <Container>
            <br />
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar nuevo Progreso:</Button>

            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fecha</th>
                  <th>Peso</th>
                  <th>Porcentaje_grasa</th>
                  <th>Porcentaje_musculo</th>
                  <th>Centimetros de cintura</th>
                  <th>Centimetros de brazo</th>
                  <th>Id paciente</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((elemento) => (
                  <tr>
                    <td>{elemento.id}</td>
                    <td>{elemento.Fecha}</td>
                    <td>{elemento.Peso}</td>
                    <td>{elemento.Porcentaje_grasa}</td>
                    <td>{elemento.Porcentaje_musculo}</td>
                    <td>{elemento.Cm_cintura}</td>
                    <td>{elemento.Cm_brazo}</td>
                    <td>{elemento.Id_paciente}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>

                    <Modal isOpen={this.state.modalinsertar}>
                        <ModalHeader>
                            <div>
                                <h3>Insertar Progreso</h3>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <label>ID:</label>
                                <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
                            </FormGroup>

                            <FormGroup>
                                <label>Fecha:</label>
                                <input className="form-control" name="fecha" type="text" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label>Peso:</label>
                                <input className="form-control" name="peso" type="text" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label>Porcentaje grasa:</label>
                                <input className="form-control" name="porcentajegrasa" type="text" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label>Porcentaje musculo:</label>
                                <input className="form-control" name="porcentajemusculo" type="text" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label>Cm cintura:</label>
                                <input className="form-control" name="cmcintura" type="text" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label>Cm brazo:</label>
                                <input className="form-control" name="cmbrazo" type="text" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label>Id paciente:</label>
                                <input className="form-control" name="idpaciente" type="text" onChange={this.handleChange}/>
                            </FormGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary">Insertar</Button>
                            <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
        </form>
      </div>
    );
  }
}

export default Listado;