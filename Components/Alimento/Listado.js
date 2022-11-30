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


function Listadoa({ Alimentos, setListUpdated }) {


  const router = useRouter()
    //const [editar, setEditar] = useState([])


    const Registrar = (e) => {
        router.push("/Alimento/RegistroView")
    }

    function editar (a) {
      router.push({pathname: "/Alimento/RegistroView", query: a})
    }

    const handleDelete = (id) => {
        const requestInit = {
            method: "DELETE"
        }
        console.log(id);

        fetch("http://[::1]:3001/alimentos/" + id, requestInit)
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

      <Button color="success" onClick={Registrar}>Insertar nuevo Alimento:</Button>

      <Table>
        <thead>
          <tr>
            <th>Nombre del Alimento</th>
            <th>Tipo de Alimento</th>
          </tr>
        </thead>
        <tbody>
          {Alimentos.map((Alimento) => (
            <tr key={Alimento.idalimento}>
              <td>{Alimento.nombre}</td>
              <td>{Alimento.tipo}</td>
                <td>
                  <Button onClick={() => editar(Alimento)} color="primary">Editar</Button>
                  <Button onClick={() => handleDelete(Alimento.idalimento)} color="danger">Eliminar</Button>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Listadoa;