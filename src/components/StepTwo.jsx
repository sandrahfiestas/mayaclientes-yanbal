import React, { Component } from 'react'
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';

export class StepTwo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { client, inputChange } = this.props;

        return (
            <div className="form-container">
                <div className="App">
                <p className="txt-info-register">Al ingresar su correo y su teléfono podrás contactarlos rápidamente para ofrecerle productos y recordarle sus fechas de pago.</p>
                  <h1 className="mb-5">Datos de contacto</h1>
                </div>

                <div className="form-group form-register">
                    <input type="email" className="form-control input-register" placeholder="correo electrónico" name="email" onChange={inputChange('email')} value={values.email} />
                    <input type="number" className="form-control input-register" placeholder="telefono" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="div-btn btn-dorwn">
                    <div className="">
                        <button className="btn btn-danger btn-form" onClick={this.back}>
                            <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                            <p className="txt-btn-form">Volver</p>
                        </button>


                    </div>
                    <div className="">
                        <button className="btn btn-primary btn-form" onClick={this.continue}>
                            <p className="txt-btn-form">Siguiete</p>
                            <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepTwo;