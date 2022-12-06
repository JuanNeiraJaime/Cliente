import React, { useState,useEffect } from "react";
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
import { useRouter } from "next/router";

function ListadoC({ Citas, setListUpdated }) {
  const router = useRouter();
  //const [editar, setEditar] = useState([])
  const [Paciente, setPaciente] = useState([])
  const [listUpdated, setlistUpdated] = useState(false);

  var today = new Date();
  var now = today.toLocaleDateString();


  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    console.log(id);

    fetch("http://[::1]:3001/citas/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };

  return (
    <Container>
      <br />
      <Table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Paciente a consultar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Citas.filter(x=>x.Fecha == now).map((cita) => (
            <tr key={cita.id_cita}>
              <td>{cita.Hora}</td>
              <td>{cita.Fecha}</td>
              <td>{cita.NamePaciente}</td>
              <td><Button onClick={() => handleDelete(cita.id_cita)}color="danger">
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListadoC;
