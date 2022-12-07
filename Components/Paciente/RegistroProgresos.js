import { redirect } from "next/dist/server/api-utils";
import { noSSR } from "next/dynamic";
import { URL } from "../../constantes"
import { useState, useEffect } from "react";
import swal from "sweetalert";
import Input from "../Input";
import flatpickr from "flatpickr";
import { useRouter } from "next/router";

export default function RegistrarProg() {
	const router = useRouter()

	const [id, setId] = useState()

	useEffect(()=> {
		setId(router.query.id)
	  },[])

	const [Fecha, setFecha] = useState()
	const [Peso, setPeso] = useState()
	const [PorcentGrasa, setPorcentGrasa] = useState()
	const [PorcentMusculo, setPorcentMusculo] = useState()
	const [CmCintura, setCmCintura] = useState()
	const [CmBrazo, setCmBrazo] = useState()
	const [pacienteid, setPacienteid] = useState()

    console.log();

    const fecha = (e) => setFecha(e.target.value);
    const peso = (e) => setPeso(e.target.value)
	const porcentgrasa = (e) => setPorcentGrasa(e.target.value);
    const porcentmusculo = (e) => setPorcentMusculo(e.target.value)
	const cmcintura = (e) => setCmCintura(e.target.value);
    const cmbrazo = (e) => setCmBrazo(e.target.value)
	const paciente_id = (e) => setPacienteid(e.target.value)


const listadoprogreso = (e) => {
	e.preventDefault()
	router.push("/Paciente/Progreso/listadoprog")
}

const RegistrarProgreso = (e) => {
	e.preventDefault()

	console.log(Fecha, Peso, PorcentGrasa, PorcentMusculo, CmCintura, CmBrazo, pacienteid);

	if (Fecha === "" || Peso === "" || PorcentGrasa === "" || PorcentMusculo === "" || CmCintura === "" || CmBrazo === "" || pacienteid === "") {
		//console.log("No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.");
		swal({
			title: "Error al Registrar Progreso",
			text: "No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.",
			icon: "error",
			button: "Aceptar"
		});
	}
	else {
				console.log("Entro al fetch de registro");
	 			var intpeso =parseInt(Peso)
				// var fech = new Date(Fecha);

				// console.log(fech)
	 			fetch(URL + "/progresos", {
	 				method: "POST",
	 				body: JSON.stringify({
						Fecha: Fecha,
						Peso: intpeso,
						PorcentGrasa: PorcentGrasa,
						PorcentMusculo: PorcentMusculo,
						CmCintura: CmCintura,
						CmBrazo: CmBrazo,
	 					pacienteid: id
					}),
	 				headers: { 'Content-Type': 'application/json' }
	 			})
	 				.then((res) => {
	 					if (res.status == 200) {
	 						console.log("Exito", "Se ha registrado el progreso correctamente", "Succes");
	 						router.push({pathname:"/Pacientes/Progreso/listadoprog", query:{"id": id}})
							
	 					} else if (422) {
	 						console.log(); ("Error", "Algo ha salido mal", "Error");
	 						swal({
	 							title: "Error al Registrar progreso",
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
			<div><label htmlFor="Fecha">Fecha:</label></div>
			<Input typeinput="text" value={Fecha} name="setFecha" onChange={fecha} />			
			<div><label htmlFor="Peso">Peso:</label></div>
			<Input typeinput="text" value={Peso} name="setPeso" onChange={peso} />
			<div><label htmlFor="PorcentGrasa">Porcentaje de grasa:</label></div>
			<Input typeinput="text" value={PorcentGrasa} name="setPorcentGrasa"  onChange={porcentgrasa}/>
			<div><label htmlFor="PorcentMusculo">Porcentaje de musculo:</label></div>
			<Input typeinput="text" value={PorcentMusculo} name="setPorcentMusculo" onChange={porcentmusculo} />
			<div><label htmlFor="CmCintura">Centimetros cintura:</label></div>
			<Input typeinput="text" value={CmCintura} name="setCmCintura" onChange={cmcintura} />
			<div><label htmlFor="CmBrazo">Centimetros brazo:</label></div>
			<Input typeinput="text" value={CmBrazo} name="setCmBrazo"onChange={cmbrazo} />
			<input typeinput="text" value={id} name="setPacienteid" onChange={paciente_id} hidden/>
		</section>
		<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={RegistrarProgreso}>Registrar Progreso</button>
		<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-x1 transition duration-200" onClick={listadoprogreso}>Cancelar</button>
	</form>
</div>


}
