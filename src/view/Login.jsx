import React from 'react';


const Login = () => {

  return (
    <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3">
      <div className="d-flex justify-content-center">
        <img className="size-img mt-2" alt="Logo Yanbal" />
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
