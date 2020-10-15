import React, { Component } from 'react'
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';

export class StepFive extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <div className="App">
                <p className="txt-info-register">Agrega su fecha de nacimiento y te recordaremos saludarlos en su cumpleaños, con ideas para llevarles algún obsequio.</p>
                <h1 className="mb-5 text-main">Agregar comentarios o información del cliente</h1>
                </div>
                <div className="form-group form-register">
								<input className="form-control box-des" type="text" placeholder ="Aquí puedes describir mejor a tu cliente" readonly/>
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
                            <p className="txt-btn-form">Enviar</p>
                            <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepFive;