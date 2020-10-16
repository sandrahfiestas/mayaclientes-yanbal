import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import StepsOrder from '../components/StepsOrder';
export class CreateOrder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        step: 1,
        Order: {
          name: '',
          lastName: '',
          email: '',
          phone: '',
          date: new Date(),
          preferences: [],
          description: '',
        }
      };
    };

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
  
   
    // addNewClient = (client) => {
    //   addClient(client);
    // }

    render() {
      const {step} = this.state;
      return (
    
        <div className="">
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
            <Navbar.Brand href="#"> Registro de Cliente</Navbar.Brand>
            </Container>
          </Navbar>
          <StepsOrder
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            step={step}
            
        />
        </div>

      );
    }
  }
  export default CreateOrder;