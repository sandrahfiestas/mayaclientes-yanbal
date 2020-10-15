import React, { Component } from 'react'

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
                  <h1 className="mb-5">Datos de contacto</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={client.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={client.phone} />
                </div>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Volver</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Siguiete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepTwo;