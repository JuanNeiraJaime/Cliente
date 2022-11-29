import { redirect } from "next/dist/server/api-utils";
import { noSSR } from "next/dynamic";
//import { Router } from "next/router";
import {useState, useEffect} from "react";
import swal from "sweetalert";
import Input  from "../Input";
import { useRouter } from "next/router";

export default function Registro({nombre="",apellido="",telefono="",edad="",sexo="", alergia=""}) {

	const router = useRouter()

	
	 
	const [Nombres, setNombres] = useState (nombre)
    const [Apellidos, setApellidos] = useState (apellido)
	const [Telefono, setTelefono] = useState (telefono)
    const [Edad, setEdad] = useState (edad)
	const [Sexo, setSexo] = useState (sexo)
    const [Alergia, setAlergia] = useState (alergia)

	const onChangeNom = (e) => setNombres(e.target.value);
	const onChangeApellidos = (e) => setApellidos(e.target.value);
	const onChangeTelefono = (e) => setTelefono(e.target.value);
	const onChangeEdad = (e) => setEdad(e.target.value);
	const onChangeSexo = (e) => setSexo(e.target.value);
	const onChangeAlergia = (e) => setAlergia(e.target.value);

	
	useEffect(()=>{
		
		console.log(router.query);
		setNombres(router.query.Nombres)

	},[]) 
	/* console.log(Nombres);
	console.log(Apellidos);
	console.log(Telefono);
	console.log(Edad);
	console.log(Sexo);
	console.log(Alergia); */

	const listadopacientes = (e) => {
		e.preventDefault()
		window.location.replace("/Pacientes/Listado2")
	}

	const RegistrarPaciente = (e) => {
        e.preventDefault()

        console.log(Nombres, Apellidos, Telefono, Edad, Sexo, Alergia);

        if(Nombres === "" || Apellidos === "" || Telefono === "" || Edad === "" || Sexo === "" || Alergia === "")
        {
            //console.log("No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.");
			swal({
					title: "Error al Registrar Paciente",
					text: "No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.",
               		icon: "error",
                	button: "Aceptar"
			});
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
            }) 
			.then((res) => {
               if (res.status == 200) {
                console.log("Exito", "Se ha registrado el usuario correctamente", "Succes");
                window.location.replace("/Pacientes/Listado2")
               } else if (422) {
                console.log();("Error", "Algo ha salido mal", "Error");
				swal({
					title: "Error al Registrar Paciente",
					text: "Verifique que los datos que ingreso estan correctos y vuelva a intentar.",
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
	return <div>
		<form className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl" >
		<section>
            <h3 className="font-bold text-2xl">Registro de pacientes</h3>
            <p className="text-gray-600 pt-2">Ingrese los datos correctamente</p>
        </section>
		<section className="mt-6">
		<div><label htmlFor="Nombres">Nombres:</label></div>
			<Input typeinput="text" value={"nombre"} name="Nombres" onChange={onChangeNom}/>
			<div><label htmlFor="Nombres">Apellidos:</label></div>
			<Input typeinput="text" name="Apellidos" onChange={onChangeApellidos}/>
			<div><label htmlFor="Nombres">Telefono:</label></div>
			<Input typeinput="text" name="telefono" onChange={onChangeTelefono}/>
			<div><label htmlFor="Nombres">Edad:</label></div>
			<Input typeinput="text" name="edad" onChange={onChangeEdad}/>
			<div><label htmlFor="Nombres">Sexo:</label></div>
			<Input typeinput="text" name="sexo" onChange={onChangeSexo}/>
			<div><label htmlFor="Nombres">Alergia:</label></div>
			<Input typeinput="text" name="alergia" onChange={onChangeAlergia}/>
		</section>
		<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={RegistrarPaciente}>Registrar Paciente</button>
		<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-x1 transition duration-200"  onClick={listadopacientes}>Cancelar</button>
	</form>
		
	</div>
}


  