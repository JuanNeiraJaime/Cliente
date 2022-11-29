import React, {Fragment, useState, useEffect} from "react";
import Navbar from '../../Components/NavbarNutri'
import ListadoPaciente from "../../Components/Paciente/ListadoPaciente";

export default function Listado2() {

    const [pacientes, setPacientes] = useState([])

    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getPacientes = () => {
            fetch("http://[::1]:3001/pacientes")
            .then(res => res.json())
            .then(res => setPacientes(res))
        }

        getPacientes()
        setListUpdated(false)
    }, [listUpdated]);

    return (
        <Fragment>
            <Navbar brand='Nutridiet App'/>
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
        </Fragment>
    )
  }