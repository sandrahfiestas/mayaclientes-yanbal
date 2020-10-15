import React, { Component }from 'react';
import { Navbar, Container } from 'react-bootstrap';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import Success from '../components/Success';
import iconBack from '../images/icon_back.png';

export class CreateClient extends Component {
  constructor(props){
    super(props);
    this.state={
    step: 1,
    name: '',
    email: '',
    phone: '',
    description: '',
    };
  };

  nextStep = () => {
      const { step } = this.state;
      this.setState({ step: step + 1 });
  };

  prevStep = () => {
      const { step } = this.state;
      this.setState({ step: step - 1 });
  };

  inputChange = input => e => {
      this.setState({
          [input]: e.target.value
      });
  };
//   componentDidMount() {
//     this.loadData();
//   }
  render() {
      const { step } = this.state;
      const { name, email, phone, description } = this.state;
      const values = { name, email, phone, description  };

      switch (step) {
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
                            <button className="btn-count"><p className="txt-count">1/4</p></button>
                          </div>
                        </div>
                      </Navbar.Brand>
                      </Container>
                    </Navbar>
                    <StepOne
                      nextStep={this.nextStep}
                      inputChange={this.inputChange}
                      values={values}
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
                      values={values}
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
                      values={values}
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
