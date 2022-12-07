import React, {Fragment, useState, useEffect} from "react";
import ListadoPaciente from "../../Components/Paciente/ListadoPaciente";
import Layout from "../../Components/layoutinicio";
import { URL } from "../../constantes";

export default function Listado() {

    const [pacientes, setPacientes] = useState([])

    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getPacientes = () => {
            fetch(URL + "/pacientes")
            .then(res => res.json())
            .then(res => setPacientes(res))
        }

        getPacientes()
        setListUpdated(false)
    }, [listUpdated]);

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 style={{textAlign: 'center'}}>Listado de pacientes</h2>
                        
                        <ListadoPaciente pacientes={pacientes} setListUpdated={setListUpdated}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
  }