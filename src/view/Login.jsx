import React, { useState } from "react";
import Logo from "../images/logo.png";
import Vector from "../images/Vector.png";
import {addOrder}  from '../controller/firestore';
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const send = () => {//shorthand
    addOrder({
      correo:email,
      contraseña: password,
      
    })
   
}

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEmail((prevState) => ({
        ...prevState,
        [name]: value,
    }));
console.log(email)
};
const handleChanged = (e) => {
  e.preventDefault();
  const { name, value } = e.target;
  setPassword((prevState) => ({
      ...prevState,
      [name]: value,
  }));
console.log(password)
};

  return (
    <div className="container main">
      <div className="row">
        <div className="col-lg-11 col-md-1 col-12">
          <div className="text-center">
            <img className="img-ts img-fluid" src={Logo} alt="yanbal" />
          </div>
          <br/>
          <form className="text-center">
            <input type="email"  className="form-control my-3 bottom px-0 " placeholder="Correo" required name="user" value={email.user} onChange={handleChange}/>
            <input type="password" className="form-control my-3 bottom px-0 " placeholder="Contraseña" required name="user" value={password.user} onChange={handleChanged}/>
            <br/>
            <div>
              <p className="text-center">Guardar Contraseña</p>
            </div>
            <button className="btn btn-primary login" onClick={send} type="submit">Ingresar</button>
            <br/>
          </form>
          <br/>
          <div>
            <p className="text-center"><img src={Vector} alt=""/>Olvide mi contraseña</p>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Login;
