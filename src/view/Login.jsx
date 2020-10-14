import React from "react";
import Logo from "../images/logo.png";


const Login = () => {

  return (
    <div className="container main">
      <div className="d-flex justify-content-center">
        <img className="size-img mt-2" src={Logo} alt="Logo Yanbal" />
      </div>
      <form className="text-center">
        <input type="email" name="email" className="form-control my-3 bottom px-0" placeholder="Correo" required />
        <input type="password" name="pass" className="form-control my-3 bottom px-0" placeholder="Contraseña" required />
        <button className="btn btn-primary" type="submit">Ingresar</button>
      </form>
    </div>
  );
};
export default Login;
