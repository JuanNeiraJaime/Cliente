import { useState, useEffect } from "react";
import swal from "sweetalert";
import Input from "../Input";
import { useRouter } from "next/router";

export default function Registro({ ID = "", NOMBRE = "", TIPO = ""}) {
	var Estado;
	const router = useRouter()


	const [Id, setId] = useState(ID)
	const [Nombre, setNombre] = useState(NOMBRE)
	const [Tipo, setTipo] = useState(TIPO)

	const onChangeId = (e) => setId(e.target.value);
	const onChangeNom = (e) => setNombre(e.target.value);
	const onChangeTipo = (e) => setTipo(e.target.value);




	useEffect(() => {

		console.log(router.query);
		setId(router.query.idalimento)
		setNombre(router.query.nombre)
		setTipo(router.query.tipo)

	}, [])

	//console.log(Nombres);


	const listadoalimentos = (e) => {
		e.preventDefault()
		router.push("/Alimento/ListadoView")
	}

	const RegistrarAlimento = (e) => {
		e.preventDefault()

		console.log(Nombre,Tipo);

		if (Nombre === "" || Tipo === "" ) {
			//console.log("No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.");
			swal({
				title: "Error al Registrar Aliemento",
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
					
					fetch("http://[::1]:3001/alimentos", {
						method: "POST",
						body: JSON.stringify({
							nombre: Nombre,
							tipo: Tipo,
						}),
						headers: { 'Content-Type': 'application/json' }
					})
						.then((res) => {
							if (res.status == 200) {
								console.log("Exito", "Se ha registrado el alimento correctamente", "Succes");
								router.push("/Alimento/ListadoView")
							} else if (422) {
								console.log(); ("Error", "Algo ha salido mal", "Error");
								swal({
									title: "Error al Registrar Alimento",
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
					
					fetch("http://[::1]:3001/alimentos/"+ Id, {
						method: "PUT",
						body: JSON.stringify({
							nombre: Nombre,
							tipo: Tipo,
						}),
						headers: { 'Content-Type': 'application/json' }
					})
						.then((res) => {
							if (res.status == 204) {
								console.log("Exito", "Se actualizo el alimento correctamente", "Succes");
								router.push("/Alimento/ListadoView")
							} else if (422) {
								console.log(); ("Error", "Algo ha salido mal", "Error");
								swal({
									title: "Error al Registrar Alimento",
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
		<form className="bg-white max-w-lg mx-auto text-gray-600 p-8 md:p-12 my-10 rounded-lg shadow-2xl" >
			<section>
				<h3 className="font-bold text-2xl">Registro de Alimentos</h3>
				<p className="text-gray-600 pt-2">Ingrese los datos correctamente</p>
			</section>
			<section className="mt-6">
				{/* <div><label className="text-gray-600 pt-2" htmlFor="ID">ID Alimento:</label></div> */}
				<input typeinput="text" value={Id} name="ID" onChange={onChangeId} hidden />
				<div><label className="text-gray-600 pt-2" htmlFor="Nombres">Nombre:</label></div>
				<Input typeinput="text" value={Nombre} name="Nombre" onChange={onChangeNom} />
				<div><label className="text-gray-600 pt-2" htmlFor="Tipo">Tipo:</label></div>
				<Input typeinput="text" value={Tipo} name="Tipo" onChange={onChangeTipo} />
			</section>
			<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={RegistrarAlimento}>Registrar Alimento</button>
			<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-x1 transition duration-200" onClick={listadoalimentos}>Cancelar</button>
		</form>

	</div>
}


