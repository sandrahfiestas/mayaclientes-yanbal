
import React, { Component} from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);


class Calendar extends Component {
   
      render() {
          const {onChange, mostrarFecha, client} = this.props;
        return (
          <>
            <div className="contenedor">
              <div className="center">
               <DatePicker selected={client.date} onChange={onChange} locale="es" className="pickers box" dateFormat="dd 'de' MMMM 'de' yyyy"/>
               <br /><br />
               {/* <input type="button" value="Mostrar Fecha" className="btn btn-ligth color" onClick={()=>mostrarFecha(client.date)}/> */}
              </div>
            </div>
          </>
        );
      }
    }
    
    export default Calendar;