import { useState } from "react";
import Input from "./Input";
import swal from "sweetalert";

export default function Formlogin() {
    const [correo, setCorreo] = useState ("")
    const [contraseña, setContraseña] = useState ("")

    console.log();

    const email = (e) => setCorreo(e.target.value);
    const password = (e) => setContraseña(e.target.value)

    const Logueo = (e) => {
        e.preventDefault()

        console.log(correo, contraseña);

        if(correo === "" || contraseña === "")
        {
            //console.log("No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.");
           swal({
                title: "Contraseña Incorrecta",
                text: "No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.",
                icon: "error",
                button: "Aceptar"
           });
        }
        else{
            console.log("Entro al fetch");
            fetch("http://[::1]:3001/users/login", {
                method: "POST",
                body: JSON.stringify({
                    email: correo , 
                    password: contraseña}),
                headers: {'Content-Type': 'application/json'}
            }) .then((res) => {
               if (res.status == 200) 
               {
                //console.log("Exito", "Se ha iniciado Sesion Correctamente", "Succes");
                /* swal({
                    title: "Exito",
                    text: "Se ha iniciado Sesion Correctamente",
                    icon: "Succes",
                    button: "Aceptar"
               }); */
                window.location.replace("/home")
               } 
               else if (422) 
               {
                //console.log();("Error", "Algo ha salido mal", "Error");
                swal({
                    title: "Contraseña Incorrecta",
                    text: "Algo ha salido mal, verifique que este escrito bien sus datos y vuelva a intentar gracias.",
                    icon: "error",
                    button: "Aceptar"
               });
               }
            })
            .then((res) => console.log(res))
            .catch((err) => {
                console.log("Error", err, "Error");
            });
    

        }
        

       
    }

    return (
        <div>
           
        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 className="font-bold text-2xl">Bienvenido a Nutridiet</h3>
            <p className="text-gray-600 pt-2">Inicie Sesion en su cuenta.</p>
        </section>

        <section className="mt-10">
            <form className="flex flex-col">
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label  className="block text-gray-700 text-sm font-bold mb-2 ml-3">Correo:</label>
                    <Input typeinput="email" onChange={email}/>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" >Contraseña</label>
                    <Input typeinput="password" onChange={password}/>
                </div> 
                <a href="/contrasenarecuperar" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={Logueo}>Iniciar Sesion</button>
            </form>
        </section>
    </main>

</div>
    )
  }