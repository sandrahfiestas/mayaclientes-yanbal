import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThreeI from '../components/StepThreeI';
import StepFour from '../components/StepFour';
import StepFive from '../components/StepFive';
import Success from '../components/Success';
import iconBack from '../images/icon_back.png';
import { addClient } from '../controller/firestore';

export class CreateClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
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
    this.setState({ client: { ...client } });
  };

  prevStep = () => {
    const { client } = this.state;
    client.step = client.step - 1;
    this.setState({ client: { ...client } });
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
    const { client } = this.state;

    switch (client.step) {
      case 1:
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
                      <p className="txt-navi">Registro de Cliente</p>
                    </div>
                    <div>
                      <button className="btn-count"><p className="txt-count">1/5</p></button>
                    </div>
                  </div>
                </Navbar.Brand>
              </Container>
            </Navbar>
            <StepOne
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              client={client}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Navbar expand="lg" variant="light" className="nav-bar">
              <Container>
                <Navbar.Brand href="#">
                  <div className="div-header-reg">
                    <div>
                      <img src={iconBack} className="icon-back" alt="icon-back" />
                    </div>
                    <div>
                      <p className="txt-navi">Registro de Cliente</p>
                    </div>
                    <div>
                      <button className="btn-count"><p className="txt-count">2/5</p></button>
                    </div>
                  </div>
                </Navbar.Brand>
              </Container>
            </Navbar>
            <StepTwo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              client={client}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Navbar expand="lg" variant="light" className="nav-bar">
              <Container>
                <Navbar.Brand href="#">
                  <div className="div-header-reg">
                    <div>
                      <img src={iconBack} className="icon-back" alt="icon-back" />
                    </div>
                    <div>
                      <p className="txt-navi">Registro de Cliente</p>
                    </div>
                    <div>
                      <button className="btn-count"><p className="txt-count">3/5</p></button>
                    </div>
                  </div>
                </Navbar.Brand>
              </Container>
            </Navbar>
            <StepThreeI
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              client={client}
              addNewClient={this.addNewClient}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <Navbar expand="lg" variant="light" className="nav-bar">
              <Container>
                <Navbar.Brand href="#">
                  <div className="div-header-reg">
                    <div>
                      <img src={iconBack} className="icon-back" alt="icon-back" />
                    </div>
                    <div>
                      <p className="txt-navi">Registro de Cliente</p>
                    </div>
                    <div>
                      <button className="btn-count"><p className="txt-count">4/5</p></button>
                    </div>
                  </div>
                </Navbar.Brand>
              </Container>
            </Navbar>
            <StepFour
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
            />
          </div>

        );

      case 5:
        return (
                  <div>
                    <Navbar expand="lg" variant="light" className="nav-bar">
                       <Container>
                       <Navbar.Brand href="#">
                       <div className="div-header-reg">
                           <div>
                             <img src={iconBack} className="icon-back" alt="icon-back" />
                           </div>
                           <div>
                             <p className="txt-navi">Registro de Cliente</p>
                           </div>
                           <div>
                             <button className="btn-count"><p className="txt-count">5/5</p></button>
                           </div>
                         </div>
                       </Navbar.Brand>
                       </Container>
                    </Navbar>
                    <StepFive
                       nextStep={this.nextStep}
                       prevStep={this.prevStep}
                       inputChange={this.inputChange}
                   />
                   <success/>
                  </div>
                  
        );
    }
  }
}

export default CreateClient;

// const defaultData = {
//   name: '',
//   email: '',
//   phone: '',
//   description: '',
//   };
// const steps = [
// { id: "names" },
// { id: "address" },
// { id: "contact" },
// ];

// const CreateClient = () => {
//   const [formData, setformData] = useState(defaultData);
//   const { step, setstep} = useState({
//     steps,
//     initialStep: 0,
//   });


//   return (
//    <div className= 

//   );
// };
// export default CreateClient;
