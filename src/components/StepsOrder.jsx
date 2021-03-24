import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';
import CalendarOrder from './calendar/CalendarOrder';
import ProductCard from './ProductCard';
import iconDelete from '../images/icon_delete.png';
import checkRegister from '../images/icon_check_register.png'



export class StepsOrder extends Component {
  render() {
    const { inputChange, nextStep, prevStep, step, onChange, order, addNewOrder} = this.props;
    return (
      <>
       <div className="form-container" hidden={step === 1 ? false : true }>
          <div className="div-cards">
            <p className="txt-card">Ingresa el nombre de tu cliente</p>
            <hr/>
            <div className="form-group form-register">
              <input type="text" className="form-control input-register" placeholder="Lourdes Figueroa" name="name" onChange={inputChange('name')} value={order.name} />
            </div>
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
            <p className="txt-info-register">Registra aquí el monto al que estas comprando los productos en este pedido.</p>
            <h1 className="mb-5">Ingresar monto del pedido</h1>
          </div>
          <div className="form-group form-register">
          <div className="d-flex align-items-center">
          S/.
          <input type="text" className="form-control input-register" placeholder="Monto del pedido" name="amountPay" onChange={inputChange('amountPay')} value={order.amountPay} />
          </div>
          </div>
          <br />
          <div className="div-btn btn-dorwn">
            <div>
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
            <p className="txt-info-register">Registra aquí el monto al que estas dejando los productos a tu cliente.</p>
            <h1 className="mb-5">Ingresa monto a cobrar</h1>
          </div>
          <div className="form-group form-register">
            <div className="d-flex align-items-center">
               S/.
              <input type="text" className="form-control input-register" placeholder="Monto a cobrar" name="amountCharge" onChange={inputChange('amountCharge')} value={order.amountCharge} />
            </div>
          </div>
          <div className="div-btn btn-dorwn">
            <div>
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

        <div className="form-container" hidden={step ===  4 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Ingresa la fecha en la que estas acordando el pago de este pedido con tu cliente.</p>
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
            <div>
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

        <div className="form-container" hidden={step === 5 ? false : true }>
          <div className="div-cards">
            <p className="txt-card">Ingresa el nombre o código de producto:</p>
            <hr/>
            <div className="form-group form-register d-flex">
             <ProductCard/>
            </div>
          </div>
          <br />
          <div className="div-btn">
          <button className="btn-form" onClick={prevStep}>
              <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
              <p className="txt-btn-form">Volver</p>
              </button>
            <button className="btn-form" onClick={nextStep}>
            <p className="txt-btn-form">Siguiente</p>
            <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
            </button>
          </div>
        </div>

        <div  className="form-container" hidden={step === 6 ? false : true }>
          <div className="px-2">
          <div>
            <p className="txt-card">Detalle de pedido</p>
          </div>
          <div className="form-group">
            <div className="d-flex">
              <p className="txt-client-detail">Cliente:</p>
              <input type="text" className="form-control input-register" placeholder="Lourdes Figueroa" name="email" onChange={inputChange('email')} />
            </div>
          </div>
            <div className="card-detail-order px-2 py-3 border">
              <h6>1</h6>
              <img src="https://user-images.githubusercontent.com/60890508/96071205-3f383280-0e67-11eb-844e-e1f5d65e11b2.jpg" alt="Energia Vital" className="img-product-oder"/>
              <div className="d-flex flex-column text-center w-100 align-items-center">
                <span>Energia vital limpiador</span>
                <p className="price px-2">23415</p>
              </div>
              <div>
                <button className="btn-delete" type="button">
                  <img src={iconDelete} alt="eliminar" />
                </button>
              </div>
            </div>
            <div className="card-detail-order px-2 py-3 border">
              <h6>2</h6>
              <img src="https://user-images.githubusercontent.com/60890508/96071187-33e50700-0e67-11eb-9ab7-2cbdafdabd00.jpg" alt="Energia Vital" className="img-product-oder"/>
              <div className="d-flex flex-column text-center w-100 align-items-center">
                <span>Elixir de ojos</span>
                <p className="price px-2">24345</p>
              </div>
              <div>
                <button className="btn-delete" type="button">
                  <img src={iconDelete} alt="eliminar" />
                </button>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between border py-2 px-3">
                <p>Monto de pedido:</p>
                <p className="font-weight-bold">S/ 114.00</p>
              </div>
              <div className="d-flex justify-content-between border py-2 px-3">
                <p>Monto a cobrar:</p>
                <p className="font-weight-bold">S/ 110.00</p>
              </div>
            </div>
            </div>
            <div className="div-btn">
                <button className="btn-form" onClick={prevStep}>
                    <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                    <p className="txt-btn-form">Volver</p>
                </button>
                <button className="btn-form" onClick={()=>{addNewOrder(order);nextStep();}}>
                  <p className="txt-btn-form">Registrar</p>
                  <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                </button>
            </div>
 
        </div>        

        <div className="form-container div-modal-register text-center p-3" hidden={step === 7 ? false : true } >
           <div className="mt-4">
              <img src={checkRegister} className="icon-check" alt="icon check" />
          </div> 
          <div className="modal-register-text mt-4">
            <h5>El pedido de tu cliente se registró satisfactoriamente</h5>
          </div>
          <div className="modal-register-btns mt-4">
            <Link to="/home">
              <button type="button" className="btn-modal">¡OK!</button>
            </Link>
          </div>
        </div>
     </>
    );
  }
}

export default StepsOrder;