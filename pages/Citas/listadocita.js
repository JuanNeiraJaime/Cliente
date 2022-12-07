import React, {Fragment, useState, useEffect} from "react";
import Layout from "../../Components/layoutinicio"
import ListadoCitas from "../../Components/Cita/Listado";

export default function ListadoCita() {

    const [cita, setcita] = useState([])

    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getCita = () => {
            fetch("http://[::1]:3001/citas")
            .then(res => res.json())
            .then(res => setcita(res))
        }
        getCita()
        setListUpdated(false)
    }, [listUpdated]);

    return (
        <Layout>
            {/* <Navbar brand='Nutridiet App'/> */}
            <div className="container">
                <div className="row">
                    <div className="">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 style={{textAlign: 'center'}}>Citas para el dia de hoy:</h2>
                        
                        <ListadoCitas Citas={cita} setListUpdated={setListUpdated}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
  }