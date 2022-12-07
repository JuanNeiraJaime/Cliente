import { useState, useEffect } from "react";
import Input from "./Input";
import {URL} from "../constantes"


export default function Formcorreoconfirmado() {

    var token ="";

    const [contraseña, setContraseña] = useState ("")
    const pass = (e) => setContraseña(e.target.value);
    const [confcontraseña, setConfcontraseña] = useState ("")
    const confpass = (e) => setConfcontraseña(e.target.value);
    console.log(contraseña)
    console.log(confcontraseña)

    useEffect(()=>{
        // console.log(location)      
     token = window.location.search.split("=")[1];
     console.log(token);
     },[]) 

     

    const CambiarContra = (e) => {
        e.preventDefault()
        
        if(contraseña =="" || confcontraseña =="")
        {

            console.log("No puede dejar vacio ningun campo favor de ingresar los datos que se solicitan..");
        }
    else{
        if (contraseña == confcontraseña) {

            console.log("Entro al fetch");
            console.log(token)
            fetch(URL+"/changePass/" + token, {
                method: "POST",
                body: JSON.stringify({ 
                    password: confcontraseña
                }),
                headers: {'Content-Type': 'application/json'}
            }) .then((res) => {
               if (res.status == 200) {
                console.log("Exito", "Se ha enviado la nueva contraseña", "Succes");
               } else if (422) {
                console.log();("Error", "Algo ha salido mal", "Error");
               }
            })
            .then((res) => console.log(res))
            .catch((err) => {
                console.log("Error", err, "Error");
            }); 
            
        }

        else{
            console.log("Las contraseñas no son iguales favor de verificar que esten iguales porfavor...");
        }
    }


    }
    
    return (<div>
           
        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 className="font-bold text-gray-600 pt-2 text-2xl">CAMBIAR CONTRASEÑA</h3>
            <p className="text-gray-600 pt-2">Por favor introduce tu nueva contraseña</p>
        </section>

        <section className="mt-10">
            <form className="flex flex-col" method="POST" action="#">
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Contraseña Nueva:</label>
                    <Input  typeinput="password" onChange={pass}/>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Confirmar Contraseña:</label>
                    <Input  typeinput="password" onChange={confpass} />
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={CambiarContra}>Confirmar Contraseña</button>
            </form>
        </section>
    </main>

</div>)
}