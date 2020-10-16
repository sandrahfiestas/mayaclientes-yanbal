import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';
import CalendarOrder from './calendar/CalendarOrder';
import whatsapp from '../images/whatsapp.png';
import llamada from '../images/llamada.png';


export class StepsOrder extends Component {
  render() {
    const { inputChange, nextStep, prevStep, step,onChange,Order} = this.props;
    return (
      <>
       
       <div className="nav"   hidden={step === 1 ? false : true }>
              <button className="btn-nav" >
                <a>Clientes</a>
               </button>
                <button className="btn-nav">
                  <a>Cobranzas</a>
                </button>
                <button className="btn-nav">
                  <a>Oportunidades</a>
                </button>
            <div>
                </div>
            </div>
            <div className="div-cards">
                <p className="txt-card">Estos productos podría interesarle a tus clientes.</p>
           
                <div className="card">
                 <p className="description-card">A María Santos, podría interesarle estos productos</p>
                    <div className="div-items">
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071170-2b8ccc00-0e67-11eb-8613-071b328a064b.jpg' alt="imagen" /> 
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071166-2a5b9f00-0e67-11eb-9e17-4432c6b5154d.jpg' alt="imagen" /> 
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071048-fd0ef100-0e66-11eb-9da2-b148efcb2625.jpg' alt="imagen" /> 
                    </div>
                        <a href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" className="rounded icon-social"><img src={whatsapp} /></a>
                        <a href="tel:910469991" className="rounded  icon-social1"><img src={llamada} /></a>
                </div>
                <div className="card">
                 <p className="description-card">A María Santos, podría interesarle estos productos</p>
                    <div className="div-items">
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071139-1f087380-0e67-11eb-92ed-5a20b5ab383e.jpg' alt="imagen" /> 
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071226-46f7d700-0e67-11eb-8106-b8083fcf62cb.jpg' alt="imagen" /> 
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071052-fed8b480-0e66-11eb-8464-06ed4c9a3e0a.jpg' alt="imagen" /> 
                    </div>
                   
                        <a className="rounded   icon-social" href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" ><img src={whatsapp} /></a>
                        <a href="tel:+910469991" className="rounded  icon-social1"><img src={llamada} /></a>
     
                </div>

            </div>

        <div className="form-container" hidden={step === 2 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Registra aquí el monto al que estas comprando los productos en este pedido.</p>
            <h1 className="mb-5">Ingresar monto del pedido</h1>
          </div>
          <div className="form-group form-register">
            <input type="text" className="form-control input-register" placeholder="monto del pedido" name="name" onChange={inputChange('name')}  />
          </div>
          <br />
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
            <p className="txt-info-register">Registra aquí el monto al que estas dejando los productos a tu cliente.</p>
            <h1 className="mb-5">Ingresa monto a cobrar</h1>
          </div>
          <div className="form-group form-register">
            <input type="email" className="form-control input-register" placeholder="Ingresar monto a cobrar" name="email" onChange={inputChange('email')} />
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

        <div className="form-container" hidden={step ===  4? false : true }>
          <div className="App">
            <p className="txt-info-register">Ingresar fecha máxima,en la que estas acordando el pago de este pedido con tu cliente.</p>
            <h1 className="mb-5">Ingresa fecha de pago</h1>
          </div>
          <div className="form-group form-register">
            <p>Calendario</p>
            <div className="card">
              <CalendarOrder
              onChange={onChange}
                  Order={Order}
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
     </>
    );
  }
}

export default StepsOrder;