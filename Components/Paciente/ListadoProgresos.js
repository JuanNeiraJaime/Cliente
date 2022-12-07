import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { URL } from "../../constantes";
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


function ListadoProgresos({progresos, setListUpdatedid,id, nombres, apellidos, telefono, edad, sexo, alergia}) {
  const router = useRouter()
  const [Id, setId] = useState(id)


  useEffect(()=> {
    setId(router.query.id)
  },[])

  console.log(Id)

    const RegistrarProg = (e) => {
      router.push({pathname:"/Pacientes/nuevoprogreso", query:{"id": Id } })  
    }


    return (
      <Container>
        <br />
  
        <Button color="success" onClick={RegistrarProg}>Insertar nuevo Progreso:</Button>
  
        <Table>
          <thead>
            <tr>
              {/* <th>Id progreso</th> */}
              <th>Fecha</th>
              <th>Peso</th>
              <th>Porcentaje grasa</th>
              <th>Porcentaje musculo</th>
              <th>Centimetros cintura</th>
              <th>Centimetros brazo</th>
            </tr>
          </thead>
          <tbody>
            {progresos.filter(x=>x.pacienteid == Id).map((progreso) => (

              <tr key={progreso.id_progreso}>
                <td>{progreso.Fecha}</td>
                <td>{progreso.Peso}</td>
                <td>{progreso.PorcentGrasa}</td>
                <td>{progreso.PorcentMusculo}</td>
                <td>{progreso.CmCintura}</td>
                <td>{progreso.CmBrazo}</td>  
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
}

export default ListadoProgresos;