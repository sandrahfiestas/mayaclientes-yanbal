import React, { Component } from 'react'

export class StepThree extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { client, inputChange, addNewClient } = this.props;

        return (
            <div className="form-container">
                <div className="App">
                <h1 className="mb-5">Agregar comentarios o información de cliente</h1>
                </div>
                <div className="form-group">
                  <textarea className="box" placeholder="Ingresa descripción" name="description" onChange={inputChange('description')} value={client.descrption} />
                </div>
    
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Volver</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={()=>addNewClient(client)}>Finalizar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepThree;