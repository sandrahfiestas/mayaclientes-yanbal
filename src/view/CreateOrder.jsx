import React, { useState } from 'react';
import icon2 from '../images/bar/icon2.png';
import back from '../images/bar/bar/back.png';
import { useHistory } from "react-router-dom";
import btnNext from '../images/btn_next.png';

const CreateOrder = () => {
    let history = useHistory();

   
    const changed= (e) => {
        e.preventDefault()
          history.push('/addOrder')
       }

    return (
        <div className="container main">
            <div className="card-header barra">
                <p className="card-title tex-1"><img src={back} />Registro de Pedidos</p><img className="icon" src={icon2} alt="icon2" />
            </div>
            <hr/>
            <div className="card-text bar">Ingresa el nombre o código de producto:.</div>
            <hr/>
            <div className="card-body">
                
                
								
            </div>
						<div className="">
                    <button className="btn btn-primary btn-form">
                        <p className="txt-btn-form">Siguiente</p>
                        <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                    </button>
                </div>
        </div>

    )

}
export default CreateOrder;

