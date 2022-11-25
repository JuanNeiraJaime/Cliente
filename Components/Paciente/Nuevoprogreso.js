import { noSSR } from "next/dynamic";
import {useState} from "react";
import Input  from "../Input";


export default function Registro({children}) {

	const [Fecha, setFecha] = useState ("")
    const [Peso, setPeso] = useState ("")
	const [Porcentajegrasa, setPorcentajegrasa] = useState ("")
    const [Porcentajemusculo, setPorcentajemusculo] = useState ("")
	const [Cmcintura, setCmcintura] = useState ("")
    const [Cmbrazo, setCmbrazo] = useState ("")
    const [Idpaciente, setIdpaciente] = useState ("")

	const fecha = (e) => setFecha(e.target.value);
	const peso = (e) => setPeso(e.target.value);
	const porcentajegrasa = (e) => setPorcentajegrasa(e.target.value);
	const porcentajemusculo = (e) => setPorcentajemusculo(e.target.value);
	const cmcintura = (e) => setCmcintura(e.target.value);
	const cmbrazo = (e) => setCmbrazo(e.target.value);
    const idpaciente = (e) => setIdpaciente(e.target.value);


	/* console.log(Nombres);
	console.log(Apellidos);
	console.log(Telefono);
	console.log(Edad);
	console.log(Sexo);
	console.log(Alergia); */

	const RegistrarPaciente = (e) => {
        e.preventDefault()

        console.log(Fecha, Peso, Porcentajegrasa, Porcentajemusculo, Cmcintura, Cmbrazo, Idpaciente);



        if(Fecha === "" || Peso === "" || Porcentajegrasa === "" || Porcentajegrasa === "" || Cmcintura === "" || Cmbrazo === "" || Idpaciente === "")
        {
            console.log("No puede dejar vacio los campos, favor de llenar los campos correctamente con sus datos.");
        }
        else{


            console.log("Entro al fetch");
			var edadint = parseInt(Edad)
            fetch("http://[::1]:3001/pacientes", {
                method: "POST",
                body: JSON.stringify({
                    Fecha: Fecha , 
                    Peso: Peso,
					Porcentajegrasa: Porcentajegrasa,
					Porcentajemusculo: Porcentajemusculo,
					Cmcintura: Cmcintura,
					Cmbrazo: Cmbrazo,
                    Idpaciente: Idpaciente
				}),
                headers: {'Content-Type': 'application/json'}
            }) .then((res) => {
               if (res.status == 200) {
                console.log("Exito", "Se ha registrado el progreso correctamente", "Succes");
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
            <h3 className="font-bold text-2xl text-black">Registro de progreso</h3>
            <p className="text-gray-600 pt-2">Ingrese los datos correctamente</p>
        </section>
		<section className="mt-6 text-black" >
		    <div><label htmlFor="Fecha">Fecha:</label></div>
			<Input typeinput="text" name="Fecha" onChange={fecha}/>
			<div><label htmlFor="Peso">Peso:</label></div>
			<Input typeinput="text" name="Peso" onChange={peso}/>
			<div><label htmlFor="Porcentaje de grasa">Porcentaje de grasa:</label></div>
			<Input typeinput="text" name="porcentajegrasa" onChange={porcentajegrasa}/>
			<div><label htmlFor="porcentajemusculo">Porcentaje de musculo:</label></div>
			<Input typeinput="text" name="porcentajemusculo" onChange={porcentajemusculo}/>
			<div><label htmlFor="cmcintura">Centimetros de cintura:</label></div>
			<Input typeinput="text" name="cmcintura" onChange={cmcintura}/>
			<div><label htmlFor="cmbrazo">Centimetros de brazo:</label></div>
			<Input typeinput="text" name="cmbrazo" onChange={cmbrazo}/>
            <div><label htmlFor="idpaciente">Id paciente:</label></div>
			<Input typeinput="text" name="idpaciente" onChange={idpaciente}/>
		</section>
		<button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={RegistrarPaciente}>Registrar Progreso</button>	

		</form>
	</div>
}