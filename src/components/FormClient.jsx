import React, { Component } from 'react';

export class FormClient extends Component {

  render() {
    const { client, inputChange, addNewClient, nextStep, prevStep} = this.props;

    return (
      <>
        <div className="form-container" hidden={client.step === 1 ? false : true }>
          <div className="App">
              <h1 className="mb-5">¿Cómo se llama tu clientx?</h1>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={client.name} />
          </div>
          <br />
          <div className="text-right">
              <button className="btn btn-primary" onClick={nextStep}>Siguiete</button>
          </div>
        </div>

        <div className="form-container" hidden={client.step === 2 ? false : true }>
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
              <button className="btn btn-danger" onClick={prevStep}>Volver</button>
          </div>
          <div className="col-6 text-right">
              <button className="btn btn-primary" onClick={nextStep}>Siguiete</button>
          </div>
        </div>
        </div>

        <div className="form-container" hidden={client.step === 3 ? false : true } >
          <div className="App">
            <h1 className="mb-5">Agregar comentarios o información de cliente</h1>
          </div>
          <div className="form-group">
            <textarea className="box" placeholder="Ingresa descripción" name="description" onChange={inputChange('description')} value={client.descrption} />
          </div>

          <div className="row">
            <div className="col-6">
              <button className="btn btn-danger" onClick={prevStep}>Volver</button>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-primary" onClick={()=>addNewClient(client)}>Finalizar</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FormClient;
