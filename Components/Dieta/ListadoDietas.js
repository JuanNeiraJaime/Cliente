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


function ListadoDietas({Dietas, setListUpdated,id, nombres, apellidos, telefono, edad, sexo, alergia}) {
  const router = useRouter()
  const [Id, setId] = useState(id)


  useEffect(()=> {
    setId(router.query.id)
  },[])

  console.log(Id)

    const RegistrarDieta = (e) => {
     // router.push({pathname:"/Pacientes/nuevoprogreso", query:{"id": Id } })  

    }

    const handleDelete = (id) => {
        const requestInit = {
            method: "DELETE"
        }
        console.log(id);

        fetch(URL + "/dietas/" + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            setListUpdated(true)

    }


    return (
      <Container>
        <br />
  
        <Button color="success" onClick={RegistrarDieta}>Insertar nueva Dieta:</Button>
  
        <Table>
          <thead>
            <tr>
              {/* <th>Id progreso</th> */}
              <th>Fecha Inicial</th>
              <th>Fecha Final</th>
              <th>Paciente</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miercoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sabado</th>
              <th>Domingo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Dietas.filter(x=>x.id_pac == Id).map((dieta) => (

              <tr key={dieta.iddieta}>
                <td>{dieta.fechai}</td>
                <td>{dieta.fechaf}</td>
                <td>{dieta.Nombre}</td>
                <td>Desayuno: {dieta.ldes} <br></br> Comida: {dieta.lcomida} <br></br> Cena: {dieta.lcena}</td>
                <td>Desayuno: {dieta.mdes} <br></br> Comida: {dieta.mcomida} <br></br> Cena: {dieta.mcena}</td>
                <td>Desayuno: {dieta.mides} <br></br> Comida: {dieta.micomida} <br></br> Cena: {dieta.micena}</td>
                <td>Desayuno: {dieta.jdes} <br></br> Comida: {dieta.jcomida} <br></br> Cena: {dieta.jcena}</td>
                <td>Desayuno: {dieta.vdes} <br></br> Comida: {dieta.vcomida} <br></br> Cena: {dieta.vcena}</td>
                <td>Desayuno: {dieta.sdes} <br></br> Comida: {dieta.scomida} <br></br> Cena: {dieta.scena}</td>
                <td>Desayuno: {dieta.ddes} <br></br> Comida: {dieta.dcomida} <br></br> Cena: {dieta.dcena}</td>
                <td><Button size="sm" onClick={() => handleDelete(dieta.iddieta)} color="danger">Eliminar</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
}

export default ListadoDietas;