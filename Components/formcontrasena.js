import { useState } from "react";
import Input from "./Input";

export default function Formcontrasena() {

    const [correo, setCorreo] = useState ("")
    const email = (e) => setCorreo(e.target.value);

    console.log(correo);

    const RecuperarC = (e) => {
        e.preventDefault()

        console.log(correo);

        if(correo === "")
        {
            console.log("No puede dejar vacio el campo de email...");
        }
        else{
            console.log("Entro al fetch");
            fetch("http://[::1]:3001/user/" + correo, {
                method: "GET",
                headers: {'Content-Type': 'application/json'}
            }) .then((res) => {
               if (res.status == 200) {
                console.log("Exito", "Se ha iniciado Sesion Correctamente", "Succes");
               } else if (422) {
                console.log();("Error", "Algo ha salido mal", "Error");
               }
            })
            .then((res) => console.log(res))
            .catch((err) => {
                console.log("Error", err, "Error");
            });
        }   
    }

    return (<div>
           
        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
            <section>
                <h3 className="font-bold text-gray-600 text-2xl">RECUPERAR CONTRASEÑA</h3>
                <p className="text-gray-600 pt-2">Por favor introduce tu cuenta de correo electronico</p>
            </section>

            <section className="mt-10">
                <form className="flex flex-col" method="POST" action="#">
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                        <Input  typeinput="email" onChange={email} />
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={RecuperarC}>RECUPERAR</button>
                    <br/>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={'http://localhost:3000/'}>Cancelar</button>
                    
                </form>
            </section>
        </main>

    </div>)
}