import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';
import Calendar from './calendar/Calendar';

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
            <input type="text" className="form-control input-register" placeholder="nombres" name="name" onChange={inputChange('name')} value={client.name} />
            <input type="text" className="form-control input-register" placeholder="apellidos" name="lastName" onChange={inputChange('lastName')} value={client.lastName}/>
          </div>
          <br />
          <div className="div-btn">
            <button className="btn btn-primary btn-form" onClick={nextStep}>
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
            <input type="email" className="form-control input-register" placeholder="correo electrónico" name="email" onChange={inputChange('email')} value={client.email} />
            <input type="number" className="form-control input-register" placeholder="telefono" name="phone" onChange={inputChange('phone')} value={client.phone} />
          </div>
          <div className="div-btn btn-dorwn">
            <div className="">
              <button className="btn btn-danger btn-form" onClick={prevStep}>
                  <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                  <p className="txt-btn-form">Volver</p>
              </button>
            </div>
            <div className="">
              <button className="btn btn-primary btn-form" onClick={nextStep}>
                <p className="txt-btn-form">Siguiente</p>
                <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
              </button>
            </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 3 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Agrega su fecha de nacimiento y te recordaremos saludarlos en su cumpleaños, con ideas para llevarles algún obsequio.</p>
            <h1 className="mb-5">¿Qué día cumpleaños tu cliente?</h1>
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
                  <button className="btn btn-danger btn-form" onClick={prevStep}>
                      <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                      <p className="txt-btn-form">Volver</p>
                  </button>
              </div>
              <div className="">
                  <button className="btn btn-primary btn-form" onClick={nextStep}>
                      <p className="txt-btn-form">Siguiente</p>
                      <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                  </button>
              </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 4 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Elige las preferencias y necesidades de tu cliente y te daremos promociones y sugerencias para ofrecerle nuevos productos.</p>
            <h1 className="mb-5 txt-subtitle">¿Qué tipo de productos prefiere <br></br> tu cliente?</h1>
            <div className="">
              {client.preferences.map((element,index) => {
                  return (<button className="btn-preference" key={index}>{element}</button>);
              })}
            </div>
          </div>
          <div className="form-group form-register div-preferences">
            {/* <div className="div-preferences"> */}
                <div className="preference">
                  {subCats.map((element,index) => {
                    if(client.preferences.indexOf(element)===-1){
                      return (<button className="btn-preference" key={index} onClick={()=>addPreferences(element)}>{element}</button>);
                    }
                  })}
                </div>
                <div className="add-preference">
                  <button className="btn-preference" onClick={stateInput}>Agregar Preferencias</button>
                </div>
                <input type="text" hidden={changeState} className="form-control input-register" placeholder="nombres" name="name" onChange={(e)=>addPreferenceText(e)} value={newPreference}/>
                <button type="button" hidden={changeState} onClick={()=>addPreferences(newPreference)}>Agregar</button>
            {/* </div> */}
          </div>

          <div className="div-btn btn-dorwn">
              <div className="">
                  <button className="btn btn-danger btn-form" onClick={prevStep}>
                      <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                      <p className="txt-btn-form">Volver</p>
                  </button>
              </div>
              <div className="">
                  <button className="btn btn-primary btn-form" onClick={nextStep}>
                      <p className="txt-btn-form">Siguiente</p>
                      <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                  </button>
              </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 5 ? false : true } >
          <div className="App">
            <p className="txt-info-register">Si deseas, agrega más información de tu cliente que te servirá para asesorarlo mejor. Por ejemplo: Datos sobre su familia, etc</p>
            <h1 className="mb-5 text-main">Agregar comentarios o información de cliente</h1>
          </div>
          <div className="form-group">
            <textarea className="form-control box-des" type="text" placeholder ="Aquí puedes describir mejor a tu cliente" name="description" onChange={inputChange('description')} value={client.description} />
          </div>
          <div className="div-btn btn-dorwn">
            <div className="">
                <button className="btn btn-danger btn-form" onClick={prevStep}>
                    <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                    <p className="txt-btn-form">Volver</p>
                </button>
            </div>
            <div className="">
              <button className="btn btn-primary btn-form" onClick={()=>{addNewClient(client);nextStep();}}>
                  <p className="txt-btn-form">Enviar</p>
                  <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
              </button>
            </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 6 ? false : true } >
          <div className="">
            <p>Tu cliente se registró satisfactoriamente.</p>
            <p>¿Deseas ingresar pedidos?.</p>
          </div>
          <div className="modal-footer">
            <Link to="/pedidos">
              <button type="button" className="btn btn-primary">¡SÍ!</button>
              </Link>
            <Link to="/home">
              <button type="button" className="btn btn-primary">¡Después!</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default FormClient;