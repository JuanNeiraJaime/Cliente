import React, {useState} from "react";
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


function ListadoPaciente({ pacientes, setListUpdated }) {


  const router = useRouter()
    //const [editar, setEditar] = useState([])


    const Registrar = (e) => {
        router.push("/Pacientes/registro")
    }

    function editar (p) {
      router.push({pathname: "/Pacientes/registro", query: p})
    }

    const handleDelete = (id) => {
        const requestInit = {
            method: "DELETE"
        }
        console.log(id);

        fetch("http://[::1]:3001/pacientes/" + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            setListUpdated(true)

    }

    const handleUpdate = (id) => {
       // e.preventDefault()
        //window.location.replace("/Pacientes/registro" + "/" + id)
    }

    
  return (
    <Container>
      <br />

      <Button color="success" onClick={Registrar}>Insertar nuevo Paciente:</Button>

      <Table>
        <thead>
          <tr>
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
          {pacientes.map((paciente) => (
            <tr key={paciente.id_pac}>
              <td>{paciente.Nombres}</td>
              <td>{paciente.Apellidos}</td>
              <td>{paciente.Telefono}</td>
              <td>{paciente.Edad}</td>
              <td>{paciente.Sexo}</td>
              <td>{paciente.Alergia}</td>  
                <td>
                  <Button onClick={() => editar(paciente)} color="primary">Editar</Button>
                  <Button onClick={() => handleDelete(paciente.id_pac)} color="danger">Eliminar</Button>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListadoPaciente;
