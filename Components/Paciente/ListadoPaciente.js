/* import {useState, state} from "react";
import Input  from "../Input";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
import { data } from "autoprefixer";

const datos = [
    {id: 1, Nombres:"Prueba", Apellidos: "Prueba", Telefono: "8672256801", Edad: 19, Sexo: "Masculino", Alergia: "ninguna"},
]; 


export default function ListadoPaciente({children}) {

	 state={
        data: datos
    } 

	return<div>
    <form className="bg-white max-w-lg mx-auto p-8 md:p-20 my-10 rounded-lg shadow-2xl" >
    <section>
        <h3 className="font-bold text-2xl">Listado de pacientes</h3>
    </section>
        <Container>

        <br/>
        <Button color="primary">Insertar nuevo Paciente:</Button>


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
                    {this.state.data.map((elemento)=>{
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.Nombres}</td>
                            <td>{elemento.Apellidos}</td>
                            <td>{elemento.Telefono}</td>
                            <td>{elemento.Edad}</td>
                            <td>{elemento.Sexo}</td>
                            <td>{elemento.Alergia}</td>
                            <td><Button color="primary">Editar</Button>
                            <Button color="danger">Eliminar</Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>

        </Container> 
           
    </form>

   
</div>
} */