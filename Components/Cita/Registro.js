
import { useState, useEffect } from "react";
import swal from "sweetalert";
import Input from "../Input";
import Router, { useRouter } from "next/router";
import { DatePicker, TimePicker } from "@material-ui/pickers";
import { data } from "autoprefixer";
import { parse } from "date-fns";

export default function RegistroCita({ id = "", nombre = "", apellido = "", telefono = "", edad = "", sexo = "", alergia = ""}) {

 
	
	const router = useRouter()
    const opciones ={}

    
    

	const [Id, setId] = useState(id)
    const [Nombre, setNombre] = useState(nombre)
	const [Ape, setApe] = useState(apellido)
	const [Hora, setHora] = useState(new Date())
	const [Fecha, setFecha] = useState(new Date())
	

	/* const onChangeId = (e) => setId(e.target.value);
    const onChangeNombre = (e) => setNombre(e.target.value);
	const onChangeHora = (e) => setHora(e.target.value);
	const onChangeFecha = (e) => setFecha(e.target.value); */
	

    /* console.log(Id);
    console.log(Fecha);
    console.log("hola"); */
   

    



	useEffect(() => {

		console.log(router.query);
		setId(router.query.id_pac)
        setNombre(router.query.Nombres)
		setApe(router.query.Apellidos)
	}, [])

	//console.log(Nombres);


	const listadopacientes = (e) => {
		e.preventDefault()
		router.push("/Pacientes/Listado")
	}

	const RegistrarCita = (e) => {
		e.preventDefault()

		console.log(Hora, Fecha);

		if (Hora === "" || Fecha === "") {
			//console.log("No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.");
			swal({
				title: "Error al Registrar la Cita",
				text: "No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.",
				icon: "error",
				button: "Aceptar"
			});
		}
		else {
	
                    var intfecha = Fecha.toLocaleDateString();
                    var inthora = Hora.toLocaleTimeString();
                    var intID = parseInt(Id)
					var nombres = Nombre + " " + Ape
                   
                   

					fetch("http://[::1]:3001/citas", {
						method: "POST",
						body: JSON.stringify({
							Hora: inthora,
							Fecha: intfecha,
							id_pac: intID,
							NamePaciente: nombres
						}),
						headers: { 'Content-Type': 'application/json' }
					})
						.then((res) => {
							if (res.status == 200) {
								console.log("Exito", "Se ha registrado la cita correctamente", "Succes");
								router.push("/Pacientes/Listado")
							} else if (422) {
								console.log(); ("Error", "Algo ha salido mal", "Error");
								swal({
									title: "Error al Registrar Cita",
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
				<h3 className="font-bold text-2xl">Registrar Cita de  {Nombre}</h3>
				<p className="text-gray-600 pt-2">Ingrese los datos correctamente</p>
			</section>
			<section className="mt-6">
				<div><label htmlFor="Nombres">Hora:</label></div>
				{/* <Input typeinput="time" value={Hora} name="Nombres" onChange={onChangeHora} /> */}
                <DatePicker value={Fecha} onChange={setFecha}/>
				<div><label htmlFor="Nombres">Fecha:</label></div>
                <TimePicker value={Hora} onChange={setHora}/>
				{/* <Input typeinput="date" value={Fecha} name="Apellidos" onChange={onChangeFecha} /> */}
				
			</section>
			<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={RegistrarCita}>Registrar Cita</button>
			<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-x1 transition duration-200" onClick={listadopacientes}>Cancelar</button>
		</form>

	</div>
}
