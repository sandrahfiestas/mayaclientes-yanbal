import React, { Component } from 'react';
import {addProducts} from '../controller/firestore';

export class StepOne extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        fetch('../data/products.json')
        .then((response) => {
          try {
            return response.json();
          } catch (e) {
            return Promise.reject(new Error('No se encontraron los datos'));
          }
        })
        .then((datos) => {
            console.log(datos)
        datos.forEach(element=>{
            addProducts(element)
        })
        })
        .catch(() => console.log('No se encontró el archivo'));
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
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default StepOne;
