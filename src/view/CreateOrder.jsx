import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import StepsOrder from '../components/StepsOrder';
import iconBack from '../images/icon_back.png';
import {addOrder} from '../controller/firestore';
import { Link } from 'react-router-dom';

export class CreateOrder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        step: 1,
        order: {
          name: '',
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
      const { order } = this.state;
      order[input] = e.target.value;
      this.setState({ order: { ...order } });
    };
    onChange=date=>{
      const {order} = this.state;
      order.date = date;
      this.setState({order: { ...order }});
    }
   
    addNewOrder = (order) => {
      addOrder(order);
    }

    render() {
      const {step,order} = this.state;
      return (
    
        <div className="">
          <Navbar expand="lg" variant="light" className="nav-bar">
            <Container>
            <Link to="/home">    
              <Navbar.Brand>
                <div className="div-header-reg">
                    <div>
                      <img src={iconBack} className="icon-back" alt="icon-back" />
                    </div>
                    <div>
                      <p className="txt-navi">Registro de Pedido</p>
                    </div>
                    <div>
                      <button className="btn-count"><p className="txt-count">{step}/5</p></button>
                    </div>
                  </div>
              </Navbar.Brand>
             </Link> 
            </Container>
          </Navbar>
          <StepsOrder
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            step={step}
            addNewOrder={this.addNewOrder}
            onChange={this.onChange}
            order={order}
            
        />
        </div>

      );
    }
  }
  export default CreateOrder;