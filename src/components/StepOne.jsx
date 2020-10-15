import React, { Component } from 'react';



export class StepOne extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <div className="App">
                  <h1 className="mb-5">¿Cómo se llama tu clientx?</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Siguiete</button>
                </div>
            </div>
        )
    }
}
export default StepOne;
