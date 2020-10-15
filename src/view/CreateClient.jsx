import React, { Component }from 'react';
import { Navbar, Container } from 'react-bootstrap';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import Success from '../components/Success';


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
    
      switch (client.step) {
          case 1:
              return (
                  <div className="">
                    <Navbar expand="lg" variant="light" bg="light">
                      <Container>
                      <Navbar.Brand href="#"> Registro de Cliente</Navbar.Brand>
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
                   <Navbar expand="lg" variant="light" bg="light">
                      <Container>
                      <Navbar.Brand href="#"> Registro de Cliente</Navbar.Brand>
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
                   <Navbar expand="lg" variant="light" bg="light">
                      <Container>
                      <Navbar.Brand href="#"> Registro de Cliente</Navbar.Brand>
                      </Container>
                   </Navbar>
                   <StepThree
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
                  <Success />
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
