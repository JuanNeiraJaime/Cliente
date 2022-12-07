import Layoutinicio from '../../Components/layoutinicio'
import RegistroProgresos from '../../Components/Paciente/RegistroProgresos'
import styles from '../../styles/Home.module.css'
import Layout from '../../Components/layoutinicio'
import ListadoProgreso from '../../Components/Paciente/ListadoProgresos'

export default function Registro() {
    return (<Layout>
		<div><RegistroProgresos></RegistroProgresos></div>
		</Layout>
    
    )
  }