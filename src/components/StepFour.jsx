import React, { Component } from 'react'
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';

export class StepFour extends Component {
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

                <p className="txt-info-register">Elige las preferencias y necesidades de tu cliente y te daremos promociones y sugerencias para ofrecerle nuevos productos.</p>
                <h1 className="mb-5 txt-subtitle">¿Qué tipo de productos prefiere <br></br> tu cliente?</h1>

                </div>
                <div className="form-group form-register div-preferences">
                  {/* <div className="div-preferences"> */}
                      <div className="preference">
                          <button className="btn-preference">Cuidado personal</button>
                          <button className="btn-preference">Hidratantes</button>
                          <button className="btn-preference">Maquillaje</button>
                          <button className="btn-preference">Perfumes</button>
                      </div>
                      <div className="add-preference">
                          <button className="btn-preference">Agregar Preferencias</button>
                      </div>
                  {/* </div> */}
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
                            <p className="txt-btn-form">Siguiente</p>
                            <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default StepFour;