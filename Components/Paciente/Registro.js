import { redirect } from "next/dist/server/api-utils";
import { noSSR } from "next/dynamic";
//import { Router } from "next/router";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import Input from "../Input";
import { useRouter } from "next/router";

export default function Registro({ id = "", nombre = "", apellido = "", telefono = "", edad = "", sexo = "", alergia = "" }) {
	var Estado;
	const router = useRouter()


	const [Id, setId] = useState(id)
	const [Nombres, setNombres] = useState(nombre)
	const [Apellidos, setApellidos] = useState(apellido)
	const [Telefono, setTelefono] = useState(telefono)
	const [Edad, setEdad] = useState(edad)
	const [Sexo, setSexo] = useState(sexo)
	const [Alergia, setAlergia] = useState(alergia)

	const onChangeId = (e) => setId(e.target.value);
	const onChangeNom = (e) => setNombres(e.target.value);
	const onChangeApellidos = (e) => setApellidos(e.target.value);
	const onChangeTelefono = (e) => setTelefono(e.target.value);
	const onChangeEdad = (e) => setEdad(e.target.value);
	const onChangeSexo = (e) => setSexo(e.target.value);
	const onChangeAlergia = (e) => setAlergia(e.target.value);



	useEffect(() => {

		console.log(router.query);
		setId(router.query.id_pac)
		setNombres(router.query.Nombres)
		setApellidos(router.query.Apellidos)
		setTelefono(router.query.Telefono)
		setEdad(router.query.Edad)
		setSexo(router.query.Sexo)
		setAlergia(router.query.Alergia)

	}, [])

	//console.log(Nombres);


	const listadopacientes = (e) => {
		e.preventDefault()
		router.push("/Pacientes/Listado")
	}

	const RegistrarPaciente = (e) => {
		e.preventDefault()

		console.log(Nombres, Apellidos, Telefono, Edad, Sexo, Alergia);

		if (Nombres === "" || Apellidos === "" || Telefono === "" || Edad === "" || Sexo === "" || Alergia === "") {
			//console.log("No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.");
			swal({
				title: "Error al Registrar Paciente",
				text: "No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.",
				icon: "error",
				button: "Aceptar"
			});
		}
		else {

			console.log(Id);

			if (Id != undefined) {
				Estado = "E";
			} else {
				Estado = "R";
			}

			switch (Estado) {
				case "R":

					console.log("Entro al fetch de registro");
					var edadint = parseInt(Edad)
					fetch("http://[::1]:3001/pacientes", {
						method: "POST",
						body: JSON.stringify({
							Nombres: Nombres,
							Apellidos: Apellidos,
							Telefono: Telefono,
							Edad: edadint,
							Sexo: Sexo,
							Alergia: Alergia
						}),
						headers: { 'Content-Type': 'application/json' }
					})
						.then((res) => {
							if (res.status == 200) {
								console.log("Exito", "Se ha registrado el usuario correctamente", "Succes");
								router.push("/Pacientes/Listado")
							} else if (422) {
								console.log(); ("Error", "Algo ha salido mal", "Error");
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


					break;

				case "E":

					console.log("Entro al fetch de actualizar");
					var edadint = parseInt(Edad)
					fetch("http://[::1]:3001/pacientes/"+ Id, {
						method: "PUT",
						body: JSON.stringify({
							Nombres: Nombres,
							Apellidos: Apellidos,
							Telefono: Telefono,
							Edad: edadint,
							Sexo: Sexo,
							Alergia: Alergia
						}),
						headers: { 'Content-Type': 'application/json' }
					})
						.then((res) => {
							if (res.status == 204) {
								console.log("Exito", "Se actualizo el usuario correctamente", "Succes");
								router.push("/Pacientes/Listado")
							} else if (422) {
								console.log(); ("Error", "Algo ha salido mal", "Error");
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

					break;
				default:
					break;
			}


		}
	}
	return <div>
		<form className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl" >
			<section>
				<h3 className="font-bold text-2xl text-gray-600">Registro de pacientes</h3>
				<p className="text-gray-600 pt-2">Ingrese los datos correctamente</p>
			</section>
			<section className="mt-6">
				{/* <div><label htmlFor="ID">ID:</label></div> */}
				<input typeinput="text"  value={Id} name="Nombres" onChange={onChangeId} hidden/>
				<div><label className="text-gray-600" htmlFor="Nombres">Nombres:</label></div>
				<Input typeinput="text"  value={Nombres} name="Nombres" onChange={onChangeNom} />
				<div><label className="text-gray-600" htmlFor="Nombres">Apellidos:</label></div>
				<Input typeinput="text"  value={Apellidos} name="Apellidos" onChange={onChangeApellidos} />
				<div><label className="text-gray-600" htmlFor="Nombres">Telefono:</label></div>
				<Input typeinput="text"  value={Telefono} name="telefono" onChange={onChangeTelefono} />
				<div><label className="text-gray-600" htmlFor="Nombres">Edad:</label></div>
				<Input typeinput="text"  value={Edad} name="edad" onChange={onChangeEdad} />
				<div><label className="text-gray-600" htmlFor="Nombres">Sexo:</label></div>
				<Input typeinput="text"  value={Sexo} name="sexo" onChange={onChangeSexo} />
				<div><label className="text-gray-600" htmlFor="Nombres">Alergia:</label></div>
				<Input typeinput="text"  value={Alergia} name="alergia" onChange={onChangeAlergia} />
			</section>
			<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={RegistrarPaciente}>Registrar Paciente</button>
			<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-x1 transition duration-200" onClick={listadopacientes}>Cancelar</button>
		</form>

	</div>
}


