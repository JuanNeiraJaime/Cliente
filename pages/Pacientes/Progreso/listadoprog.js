import React, {Fragment, useState, useEffect} from "react";
import ListadoProgresos from "../../../Components/Paciente/ListadoProgresos";
import Layout from "../../../Components/layoutinicio"
import { URL } from "../../../constantes";
import { useRouter } from "next/router";
import { Nav } from "reactstrap";

export default function ListadoProg() {

    

    const [progresos, setProgresos] = useState([])

    const [listUpdated, setListUpdated] = useState(false);
     useEffect(() => {

         const getProgresos = () => {
    
             fetch(URL+"/progresos")
             .then(res => res.json())
             .then(res => setProgresos(res))

         }
         getProgresos()
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
                         <h2 style={{textAlign: 'center'}}>Listado de progresos</h2>
                        
                         <ListadoProgresos progresos={progresos} setListUpdated={setListUpdated}/>
                     </div>
                 </div>
             </div>
         </Layout>
     )

  }
