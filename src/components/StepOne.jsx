import React, { Component } from 'react';
import btnNext from '../images/btn_next.png';

export class StepOne extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { client, inputChange } = this.props;

        return (
            <div className="form-container">
                <div className="App">
                  <p className="txt-info-register">Registra los datos de tu cliente para poder atenderlo mejor. No olvides escribir correctamente sus datos.</p>
                  <h1 className="mb-5">¿Cómo se llama tu cliente?</h1>
                </div>
                <div className="form-group form-register">
                    <input type="text" className="form-control input-register" placeholder="nombres" name="name" onChange={inputChange('name')} value={values.name} />
                    <input type="text" className="form-control input-register" placeholder="apellidos" name="lastName" />

        
                </div>
                <br />
                <div className="div-btn">
                    <button className="btn btn-primary btn-form" onClick={this.continue}>
                    <p className="txt-btn-form">Siguiente</p>
                    <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                    </button>

                </div>
            </div>

)
}
}
export default StepOne;