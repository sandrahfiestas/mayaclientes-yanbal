import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';

export class StepsOrder extends Component {
  render() {
    const { inputChange, nextStep, prevStep, step,} = this.props;
    return (
      <>
        <div className="form-container" hidden={step === 1 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Registra los datos de tu cliente para poder atenderlo mejor. No olvides escribir correctamente sus datos.</p>
            <h1 className="mb-5">¿Cómo se llama tu cliente?</h1>
          </div>
          <div className="form-group form-register">
            <input type="text" className="form-control input-register" placeholder="nombres" name="name" onChange={inputChange('name')}  />
            <input type="text" className="form-control input-register" placeholder="apellidos" name="lastName" onChange={inputChange('lastName')} />
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
            <input type="email" className="form-control input-register" placeholder="correo electrónico" name="email" onChange={inputChange('email')} />
            <input type="number" className="form-control input-register" placeholder="telefono" name="phone" onChange={inputChange('phone')} />
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
     </>
    );
  }
}

export default StepsOrder;