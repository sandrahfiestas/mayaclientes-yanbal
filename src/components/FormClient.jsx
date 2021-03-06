import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';
import Calendar from './calendar/Calendar';
import checkRegister from '../images/icon_check_register.png'

export class FormClient extends Component {
 
  render() {
    const { client, inputChange, addNewClient, nextStep, prevStep, step,onChange, subCats, addPreferences, stateInput, changeState,addPreferenceText,newPreference} = this.props;
   
   
    return (
      <>
        <div className="form-container" hidden={step === 1 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Registra los datos de tu cliente para poder atenderlo mejor. No olvides escribir correctamente sus datos.</p>
            <h1 className="mb-5">¿Cómo se llama tu cliente?</h1>
          </div>
          <div className="form-group form-register">
            <input type="text" className="form-control input-register" placeholder="Nombres" name="name" onChange={inputChange('name')} value={client.name} autoComplete="off"/>
            <input type="text" className="form-control input-register" placeholder="Apellidos" name="lastName" onChange={inputChange('lastName')} value={client.lastName} autoComplete="off"/>
          </div>
          <br />
          <div className="div-btn">
            <button className="btn-form" onClick={nextStep}>
            <p className="txt-btn-form">Siguiente</p>
            <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
            </button>
          </div>
        </div>

        <div className="form-container" hidden={step === 2 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Al ingresar su correo y su teléfono podrás contactarlos rápidamente para ofrecerle productos y recordarle sus fechas de pago.</p>
            <h1 className="mb-5">Datos de contacto</h1>
          </div>
          <div className="form-group form-register">
            <input type="email" className="form-control input-register" placeholder="Correo electrónico" name="email" onChange={inputChange('email')} value={client.email} autoComplete="off"/>
            <input type="text" className="form-control input-register" placeholder="Telefono" name="phone" onChange={inputChange('phone')} value={client.phone} autoComplete="off"/>
          </div>
          <div className="div-btn btn-dorwn">
            <div className="">
              <button className="btn-form" onClick={prevStep}>
                  <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                  <p className="txt-btn-form">Volver</p>
              </button>
            </div>
            <div className="">
              <button className="btn-form" onClick={nextStep}>
                <p className="txt-btn-form">Siguiente</p>
                <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
              </button>
            </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 3 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Agrega su fecha de nacimiento y te recordaremos saludarlo(a) con ideas para llevarle algún obsequio.</p>
            <h1 className="mb-5">¿Qué día cumple años tu cliente?</h1>
          </div>
          <div className="form-group form-register">
            <p>Calendario</p>
            <div className="card">
              <Calendar
              onChange={onChange}
              client={client}
              />
            </div>
          </div>

          <div className="div-btn btn-dorwn">
              <div className="">
                  <button className="btn-form" onClick={prevStep}>
                      <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                      <p className="txt-btn-form">Volver</p>
                  </button>
              </div>
              <div className="">
                  <button className="btn-form" onClick={nextStep}>
                      <p className="txt-btn-form">Siguiente</p>
                      <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                  </button>
              </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 4 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Elige las preferencias de tu cliente y te daremos promociones para ofrecerle nuevos productos.</p>
            <h1 className="mb-5 txt-subtitle">¿Qué productos prefiere <br></br> tu cliente?</h1>
          </div>

          <div className="div-addPreferences px-3">
            <input type="text" className="form-control input-register" placeholder="Ingrese preferencias" name="name" onChange={(e)=>addPreferenceText(e)} value={newPreference} autoComplete="off"/>
            <button type="button" onClick={()=>addPreferences(newPreference)} className="btn-addPreference p-1">AGREGAR</button>
          </div>

           <div className="div-preferences p-3 text-center">
              {client.preferences.map((element,index) => {
                  return (<button className="btn-preference" key={index}>{element}</button>);
              })}
            </div>


          <div className="div-btn btn-dorwn">
              <div className="">
                  <button className="btn-form" onClick={prevStep}>
                      <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                      <p className="txt-btn-form">Volver</p>
                  </button>
              </div>
              <div className="">
                  <button className="btn-form" onClick={nextStep}>
                      <p className="txt-btn-form">Siguiente</p>
                      <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                  </button>
              </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 5 ? false : true } >
          <div className="App">
            <p className="txt-info-register">Si deseas, agrega más información de tu cliente que te servirá para asesorarlo mejor. Por ejemplo: Datos sobre su familia, etc</p>
            <h1 className="mb-5 text-main">Agregar comentarios o información de tu cliente</h1>
          </div>
          <div className="form-group">
            <textarea className="form-control box-des p-3 mt-3" type="text" placeholder ="Aquí puedes describir mejor a tu cliente" name="description" onChange={inputChange('description')} value={client.description} />
          </div>
          <div className="div-btn btn-dorwn">
            <div className="">
                <button className="btn-form" onClick={prevStep}>
                    <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                    <p className="txt-btn-form">Volver</p>
                </button>
            </div>
            <div className="">
              <button className="btn-form" onClick={()=>{addNewClient(client);nextStep();}}>
                  <p className="txt-btn-form">Enviar</p>
                  <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
              </button>
            </div>
          </div>
        </div>

        <div className="form-container div-modal-register text-center p-3" hidden={step === 6 ? false : true } >

          <div className="mt-4">
            <img src={checkRegister} className="icon-check" alt="icon check" />
          </div>

          <div className="modal-register-text mt-4">
            <h5>Tu cliente se registró satisfactoriamente.</h5>
            <p>¿Deseas ingresar pedidos?</p>
          </div>

          <div className="modal-register-btns mt-4">
            <Link to="/order">
              <button type="button" className="btn-modal">¡Sí!</button>
              </Link>
            <Link to="/home">
              <button type="button" className="btn-modal">Después</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default FormClient;