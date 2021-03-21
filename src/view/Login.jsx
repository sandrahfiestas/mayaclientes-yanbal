import React, { useState } from 'react';
// import firebase from '../controller/firebaseConfig';
import { useHistory } from 'react-router-dom';
import Logo from '../images/logo.png';

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    password: ''
  })


  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  // const newUser = async () => {
  //   await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
  //   history.push('/home')
  // }

  // const login =async () => {
  //   await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
  //   history.push('/home')
  // }

  const sendData = (event) => {
    event.preventDefault();
    
    if (data.email === 'example@mail.com' && data.password === '123456') {
      history.push('/home')
    }
    console.log(data.email, data.password);
  }


  return (
    <div className="container main">
      <div className="row">
          <div className="div-logo">
            <img className="logo" src={Logo} alt="yanbal" />
          </div>
          <form className="text-center" onSubmit={sendData}>
            <input 
              type="email" 
              name="email"
              placeholder="Correo: example@mail.com"  
              className="input-form" 
              autoComplete="off" 
              required 
              onChange={handleInputChange}/><br/>
            <input 
              type="password" 
              name="password"
              placeholder="Contraseña: 123456" 
              className="input-form" 
              autoComplete="off" 
              required 
              onChange={handleInputChange}/>
            <p id="alert" className="alert-form hidden">*Campos vacios o incorrectos <br/>
               Intente ingresando el ejemplo.</p>
            <button className="btn btn-primary btn-login" type="submit">Ingresar</button>
          </form>
      </div>
    </div>
  );
};
export default Login;
