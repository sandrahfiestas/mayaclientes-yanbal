import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import FormClient from '../components/FormClient';
import {addClient, getProducts } from '../controller/firestore';

export class CreateClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      client: {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        date: new Date(),
        description: '',
      }
    };
  };

  onChange=date=>{
    const {client} = this.state;
    client.date = date;
    this.setState({client: { ...client }});
  }
  
  // mostrarFecha = date=>{
  //   const options = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};
  //   alert(date.toLocaleDateString('es-ES', options));
  // }

  nextStep = () => {
    let { step } = this.state;
    step = step + 1;
    this.setState({ step });
  };

  prevStep = () => {
    let { step } = this.state;
    step = step - 1;
    this.setState({ step });
  };

  inputChange = input => e => {
    const { client } = this.state;
    client[input] = e.target.value;
    this.setState({ client: { ...client } });
  };
  addNewClient = (client) => {
    addClient(client);
  }
 
  render() {
      const { client, step} = this.state;
    return (
        <div className="">
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
            <Navbar.Brand href="#"> Registro de Cliente</Navbar.Brand>
            </Container>
          </Navbar>
          <FormClient
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            step={step}
            client={client}
            onChange={this.onChange}
            addNewClient={this.addNewClient}
        />
        </div>
    );
  }
}

export default CreateClient;
