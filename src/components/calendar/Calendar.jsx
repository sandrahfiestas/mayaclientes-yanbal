
import React, { Component} from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);


class Calendar extends Component {
    state={
      fecha: new Date("2020", "10", "16")
    }
    
    onChange=fecha=>{
      this.setState({fecha: fecha});
    }
    
    mostrarFecha = fecha=>{
      const options = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};
      alert(fecha.toLocaleDateString('es-ES', options));
    }
    
      render() {
        return (
          <>
            <div className="contenedor">
              <div className="center">
               <DatePicker selected={this.state.fecha} onChange={this.onChange} locale="es" className="pickers box" dateFormat="dd 'de' MMMM 'de' yyyy"/>
               <br /><br />
               <input type="button" value="Mostrar Fecha" className="btn btn-ligth color" onClick={()=>this.mostrarFecha(this.state.fecha)}/>
              </div>
            </div>
          </>
        );
      }
    }
    
    export default Calendar;