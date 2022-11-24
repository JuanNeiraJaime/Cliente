import { noSSR } from "next/dynamic";
import {useState} from "react";
import Input  from "../Input";


export default function Registro({children}) {

	const [Nombres, setNombres] = useState ("")
    const [Apellidos, setApellidos] = useState ("")
	const [Telefono, setTelefono] = useState ("")
    const [Edad, setEdad] = useState ("")
	const [Sexo, setSexo] = useState ("")
    const [Alergia, setAlergia] = useState ("")

	const nombres = (e) => setNombres(e.target.value);
	const apellidos = (e) => setApellidos(e.target.value);
	const telefono = (e) => setTelefono(e.target.value);
	const edad = (e) => setEdad(e.target.value);
	const sexo = (e) => setSexo(e.target.value);
	const alergia = (e) => setAlergia(e.target.value);

	/* console.log(Nombres);
	console.log(Apellidos);
	console.log(Telefono);
	console.log(Edad);
	console.log(Sexo);
	console.log(Alergia); */

	const RegistrarPaciente = (e) => {
        e.preventDefault()

        console.log(Nombres, Apellidos, Telefono, Edad, Sexo, Alergia);



        if(Nombres === "" || Apellidos === "" || Telefono === "" || Edad === "" || Sexo === "" || Alergia === "")
        {
            console.log("No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.");
        }
        else{


            console.log("Entro al fetch");
			var edadint = parseInt(Edad)
            fetch("http://[::1]:3001/pacientes", {
                method: "POST",
                body: JSON.stringify({
                    Nombres: Nombres , 
                    Apellidos: Apellidos,
					Telefono: Telefono,
					Edad: edadint,
					Sexo: Sexo,
					Alergia: Alergia
				}),
                headers: {'Content-Type': 'application/json'}
            }) .then((res) => {
               if (res.status == 200) {
                console.log("Exito", "Se ha registrado el usuario correctamente", "Succes");
                window.location.replace("/home")
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


	return <div>
		<form className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl" >
		<section>
            <h3 className="font-bold text-2xl">Registro de pacientes</h3>
            <p className="text-gray-600 pt-2">Ingrese los datos correctamente</p>
        </section>
		<section className="mt-6">
		<div><label htmlFor="Nombres">Nombres:</label></div>
			<Input typeinput="text" name="Nombres" onChange={nombres}/>
			<div><label htmlFor="Nombres">Apellidos:</label></div>
			<Input typeinput="text" name="Apellidos" onChange={apellidos}/>
			<div><label htmlFor="Nombres">Telefono:</label></div>
			<Input typeinput="text" name="telefono" onChange={telefono}/>
			<div><label htmlFor="Nombres">Edad:</label></div>
			<Input typeinput="text" name="edad" onChange={edad}/>
			<div><label htmlFor="Nombres">Sexo:</label></div>
			<Input typeinput="text" name="sexo" onChange={sexo}/>
			<div><label htmlFor="Nombres">Alergia:</label></div>
			<Input typeinput="text" name="alergia" onChange={alergia}/>
		</section>
		<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={RegistrarPaciente}>Registrar Paciente</button>	

		</form>
	</div>
}


  