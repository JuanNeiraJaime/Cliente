import React, {Fragment, useState, useEffect} from "react";
import Navbar from '../../Components/NavbarNutri'
import ListadoAlimento from "../../Components/Alimento/Listado";

export default function ListadoView() {

    const [alimento, setAlimento] = useState([])

    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getAlimento = () => {
            fetch("http://[::1]:3001/alimentos")
            .then(res => res.json())
            .then(res => setAlimento(res))
        }

        getAlimento()
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
                        <h2 style={{textAlign: 'center'}}>Listado de Alimentos</h2>
                        
                        <ListadoAlimento Alimentos={alimento} setListUpdated={setListUpdated}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
  }