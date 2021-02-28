import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';
import CalendarOrder from './calendar/CalendarOrder';
import ProductCard from './ProductCard';
import whatsapp from '../images/whatsapp.png';
import llamada from '../images/llamada.png';



export class StepsOrder extends Component {
  render() {
    const { inputChange, nextStep, prevStep, step, onChange, order, addNewOrder} = this.props;
    return (
      <>
       <div className="form-container" hidden={step === 1 ? false : true }>
          <div className="div-cards">
                <p className="txt-card">Ingresa el nombre del cliente.</p>
                <hr/>
                <div className="form-group form-register">
                <input type="text" className="form-control input-register" placeholder="Ingresar nombre del cliente" name="name" onChange={inputChange('name')} value={order.name} />
            </div>
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
            <p className="txt-info-register">Registra aquí el monto al que estas comprando los productos en este pedido.</p>
            <h1 className="mb-5">Ingresar monto del pedido</h1>
          </div>
          <div className="form-group form-register">
          <input type="text" className="form-control input-register" placeholder="Ingresar Monto del pedido" name="amountPay" onChange={inputChange('amountPay')} value={order.amountPay} />
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
            <input type="email" className="form-control input-register" placeholder="Ingresar monto a cobrar" name="amountCharge" onChange={inputChange('amountCharge')} value={order.amountCharge} />
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

        <div className="form-container" hidden={step ===  4 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Ingresar fecha máxima,en la que estas acordando el pago de este pedido con tu cliente.</p>
            <h1 className="mb-5">Ingresa fecha de pago</h1>
          </div>
          <div className="form-group form-register">
            <p>Calendario</p>
            <div className="card">
              <CalendarOrder
              onChange={onChange}
                  order={order}
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

        <div className="form-container" hidden={step === 5 ? false : true }>
          <div className="div-cards">
            <p className="txt-card">Ingresa el nombre o código de producto</p>
            <hr/>
            <div className="form-group form-register">
            <ProductCard/>

            </div>
          </div>
          <br />
          <div className="div-btn">
          <button className="btn btn-danger btn-form" onClick={prevStep}>
              <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
              <p className="txt-btn-form">Volver</p>
              </button>
            <button className="btn btn-primary btn-form" onClick={nextStep}>
            <p className="txt-btn-form">Siguiente</p>
            <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
            </button>
          </div>
        </div>

        <div  className="container" hidden={step === 6 ? false : true }>
          <div>
            <hr/>
            <p className="txt-card">Detalle de pedido.</p>
            <hr/>
            <br/>
          </div>
          <p className="text-center">Cliente</p>
          <div className="form-group form-register">
            <input type="email" className="form-control input-register" placeholder="Natalia Gordillo" name="email" onChange={inputChange('email')} />
          </div>
          <div>
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <small className="text-muted">1</small>
                  <img src="" alt=""/>
                  <p className="mb-1">Elixir de ojos</p>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">2</small>
                <img src="" alt=""/>
                <p className="mb-1">Total block</p>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">3</small>
                <img src="" alt=""/>
                <p className="mb-1">Ccori</p>
                </div>
              </a>
              <div>
                <a><p>Monto de pedido</p><p>S/170.00</p></a>
                <p>Monto a cobrar</p>S/138.00<p></p>
              </div>
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
              <button className="btn btn-primary btn-form" onClick={()=>{addNewOrder(order);nextStep();}}>
                <p className="txt-btn-form">Registrar</p>
                <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
              </button>
            </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 7 ? false : true } >
          <div className="">
            <p>Tu Pedido se registró satisfactoriamente.</p>
          </div>
          <div className="modal-footer">
            <Link to="/home">
              <button type="button" className="btn btn-primary">¡OK!</button>
            </Link>
          </div>
        </div>
     </>
    );
  }
}

export default StepsOrder;