import React, { Component } from 'react';
import icon2 from '../images/bar/icon2.png';
import back from '../images/bar/bar/back.png';



const AddOrder = () => {
    return (
    <div className="card view">
        <div className="card-header barra">
          <p className="card-title tex-1"><img src={back} />Registro de Pedidos</p><img className="icon" src={icon2} alt="icon2"/>
        </div>
        <hr/>
        <div className="card-text bar">Elige como quisieras ingresar este pedido.</div>
        <hr/>
        <div class="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" for="inlineRadio1"><h3>Por monto</h3>
                            <p>ingresa la cantidad total que cobraste por un pedido para seguir esa venta</p></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" for="inlineRadio2"><h3>Por pedido</h3>
                            <p>Ingresa los productos que le vendiste para poder conocelo mejor</p></label>
                        </div>
        <div className="card-body">
        </div>
    </div>

    )

}
export default AddOrder;