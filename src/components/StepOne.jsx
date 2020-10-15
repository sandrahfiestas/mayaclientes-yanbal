import React, { Component } from 'react';



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
                  <h1 className="mb-5">¿Cómo se llama tu cliente?</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={client.name} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Siguiente</button>
                </div>
            </div>
        )
    }
}
export default StepOne;
