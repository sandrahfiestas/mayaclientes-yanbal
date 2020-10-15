import React, { Component }from 'react';
import { Navbar, Container } from 'react-bootstrap';
import FormClient from '../components/FormClient';
import {addClient, getProducts } from '../controller/firestore';

export class CreateClient extends Component {
  constructor(props){
    super(props);
    this.state={
    client:{
      step: 1,
      name: '',
      email: '',
      phone: '',
      description: '',
    }
    };
  };

  nextStep = () => {
    const { client } = this.state;
    client.step = client.step + 1;
    this.setState({ client: {...client}});
  };

  prevStep = () => {
    const { client } = this.state;
    client.step = client.step - 1;
    this.setState({ client: {...client}});
  };

  inputChange = input => e => {
    const { client } = this.state;
    client[input]= e.target.value;
    this.setState({ client: {...client}});  
  };
  addNewClient = (client) =>{
    addClient(client);
  }
 
  render() {
      const { client } = this.state;
    return (
        <div className="">
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
            <Navbar.Brand href="#"> Registro de Cliente</Navbar.Brand>
            </Container>
          </Navbar>
          <FormClient
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            client={client}
            addNewClient={this.addNewClient}
        />
        </div>
    );
  }
}

export default CreateClient;
