import React, {Fragment, useState, useEffect} from "react";
import ListadoDietas from "../../Components/Dieta/ListadoDietas";
import Layout from "../../Components/layoutinicio"
import { URL } from "../../constantes";
import { useRouter } from "next/router";
import { Nav } from "reactstrap";

export default function ListadoDiet() {

    

    const [Dietas, setDietas] = useState([])

    const [listUpdated, setListUpdated] = useState(false);
     useEffect(() => {

         const getDietas = () => {
    
             fetch(URL+"/dietas")
             .then(res => res.json())
             .then(res => setDietas(res))

         }
         getDietas()
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
                         <h2 style={{textAlign: 'center'}}>Listado de Dietas</h2>
                        
                         <ListadoDietas Dietas={Dietas} setListUpdated={setListUpdated}/>
                     </div>
                 </div>
             </div>
         </Layout>
     )

  }