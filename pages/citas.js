import React, {useState} from 'react';
import Layoutinicio from "../Components/layoutinicio";

export default function Formulario() {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputEdad, cambiarInputEdad] = useState('');
	const [inputTelefono, cambiarInputTelefono] = useState('');
	const [inputSexo, cambiarInputSexo] = useState('');


	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputTelefono
	const handleInputTelefono = (e) => {
		cambiarInputTelefono(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputEdad
	const handleInputEdad = (e) => {
		cambiarInputEdad(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputSexo
	const handleInputSexo = (e) => {
		cambiarInputSexo(e.target.value);
	}

return (
	<Layoutinicio>
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

				<div>
					<label htmlFor="edad">Edad</label>
					<input
						type="text"
						name="edad"
						placeholder="Edad"
						id="edad"
						value={inputEdad}
						onChange={handleInputEdad}
					/>
				</div>

				<div>
					<label htmlFor="telefono">Telefono</label>
					<input
						type="text"
						name="telefono"
						placeholder="Telefono"
						id="telefono"
						value={inputTelefono}
						onChange={handleInputTelefono}
					/>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</>
		</Layoutinicio>
	);
}