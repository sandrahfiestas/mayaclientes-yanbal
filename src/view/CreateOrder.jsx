import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import StepsOrder from '../components/StepsOrder';
import iconBack from '../images/icon_back.png';

export class CreateOrder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        step: 1,
        Order: {
          amountPay: '',
          amountCharge: '',
          date: new Date(),
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
    onChange=date=>{
      const {client} = this.state;
      client.date = date;
      this.setState({client: { ...client }});
    }
   
    // addNewClient = (client) => {
    //   addClient(client);
    // }

    render() {
      const {step,Order} = this.state;
      return (
    
        <div className="">
          <Navbar expand="lg" variant="light" className="nav-bar">
            <Container>    
              <Navbar.Brand href="#">
                <div className="div-header-reg">
                    <div>
                      <img src={iconBack} className="icon-back" alt="icon-back" />
                    </div>
                    <div>
                      <p className="txt-navi">Registro de Pedido</p>
                    </div>
                    <div>
                      <button className="btn-count"><p className="txt-count">2/4</p></button>
                    </div>
                  </div>
              </Navbar.Brand>
            </Container>
          </Navbar>
          <StepsOrder
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            step={step}
            onChange={this.onChange}
            Order={Order}
            
        />
        </div>

      );
    }
  }
  export default CreateOrder;