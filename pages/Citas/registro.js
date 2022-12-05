
import RegistraCita from '../../Components/Cita/Registro'
import Layout from '../../Components/Layout'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import esLocale from 'date-fns/locale/es'

export default function registrocita() {
    return (<Layout>
		<div><MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}><RegistraCita></RegistraCita></MuiPickersUtilsProvider></div>
		</Layout>
    
    )
  }