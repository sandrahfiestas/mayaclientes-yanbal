import React from "react";
import Logo from "../images/logo.png";
import Vector from "../images/Vector.png";


const Login = () => {

  return (
    <div className="container main">
      <div className="row">
        <div className="col-lg-11 col-md-1 col-12">
          <div className="text-center">
            <img className="img-ts img-fluid" src={Logo} alt="yanbal" />
          </div>
          <br/>
          <form className="text-center">
            <input type="email" name="email" className="form-control my-3 bottom px-0 " placeholder="Correo" required />
            <input type="password" name="pass" className="form-control my-3 bottom px-0 " placeholder="Contraseña" required />
            <br/>
            <div>
              <p className="text-center">Guardar Contraseña</p>
            </div>
            <button className="btn btn-primary login" type="submit">Ingresar</button>
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
