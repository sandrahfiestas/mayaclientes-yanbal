import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import FormClient from '../components/FormClient';
import {addClient, getProducts } from '../controller/firestore';

export class CreateClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPreference:'',
      changeState: true,
      step: 1,
      subCats: [],
      client: {
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
 
  componentDidMount(){
    this.loadPreference();
  }
  stateInput=() => {
    let { changeState } = this.state;
    changeState = !changeState;
    this.setState({ changeState });
  }
  onlyUnique =(value, index, self)=> { 
    return self.indexOf(value) === index;
  }
  addPreferenceText=(e)=>{
    let { newPreference } = this.state;
    newPreference =e.target.value;
    this.setState({ newPreference });
  }

  inputChange = input => e => {
    const { client } = this.state;
    client[input] = e.target.value;
    this.setState({ client: { ...client } });
  };
  loadPreference =()=>{
    getProducts().then((preferences)=>{
      let subCats=[];
      preferences.map((item)=>{ 
        subCats.push(item.sub_cat);
      });
      subCats = subCats.filter(this.onlyUnique);
      
      this.setState({subCats});
    }).catch(()=>{
      console.log('fallo');
    });
  }

  addPreferences= (preference) => {
    const {client} = this.state;
    client.preferences.push(preference);
    this.setState({client: { ...client }});
  }

  
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

 
  addNewClient = (client) => {
    addClient(client);
  }
 
  render() {
      const { client, step, subCats, changeState, newPreference} = this.state;
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
            changeState={changeState}
            client={client}
            newPreference={newPreference}
            onChange={this.onChange}
            addNewClient={this.addNewClient}
            subCats={subCats}
            addPreferences={this.addPreferences}
            stateInput={this.stateInput}
            addPreferenceText={this.addPreferenceText}
            
        />
        </div>
    );
  }
}

export default CreateClient;
