import React, { Component} from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);


class CalendarOrder extends Component {
   
      render() {
          const {onChange, Order} = this.props;
        return (
          <>
            <div className="contenedor">
              <div className="center">
               <DatePicker selected={Order.date} onChange={onChange} locale="es" className="pickers box" dateFormat="dd 'de' MMMM 'de' yyyy"/>
               <br /><br />
              </div>
            </div>
          </>
        );
      }
    }
    
    export default CalendarOrder;