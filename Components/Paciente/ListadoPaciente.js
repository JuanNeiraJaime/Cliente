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
import {URL} from "../../constantes"

function ListadoPaciente({ pacientes, setListUpdated }) {


  const router = useRouter()
    //const [editar, setEditar] = useState([])


    const Registrar = (e) => {
        router.push("/Pacientes/registro")
    }

    const Prog =(paciente) =>{
      router.push({pathname: "/Pacientes/Progreso/listadoprog", query:{"id": paciente } })
    }

    function editar (p) {
      router.push({pathname: "/Pacientes/registro", query: p})
    }

    function handleCita (id) {
      router.push({pathname: "/Citas/registro", query: id})
    }

    const handleDelete = (id) => {
        const requestInit = {
            method: "DELETE"
        }
        console.log(id);

        fetch(URL + "/pacientes/" + id, requestInit)
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

      <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Nombres
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Apellidos
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Telefono
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Edad
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sexo
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Alergia
              </th>
            </tr>
          </thead>
          <tbody>

          {pacientes.map((paciente) => (
            <tr key={paciente.id_pac} class="border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{paciente.Nombres}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{paciente.Apellidos}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{paciente.Telefono}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{paciente.Edad}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{paciente.Sexo}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{paciente.Alergia}</td>  
                <td>
                  <Button size="sm"  onClick={() => editar(paciente)} color="primary">Editar</Button>
                  <Button size="sm" onClick={() => handleDelete(paciente.id_pac)} color="danger">Eliminar</Button>
                  <Button size="sm" onClick={() => Prog(paciente.id_pac)} color="primary">Progresos</Button>
                  {/* <Button onClick={() => editar(paciente)} color="primary">Editar</Button>
                  <Button onClick={() => handleDelete(paciente.id_pac)} color="danger">Eliminar</Button> */}
                  <Button size="sm" onClick={() => handleCita(paciente)} color="danger">Agendar Cita</Button>
                </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</Container>
)}

export default ListadoPaciente;
