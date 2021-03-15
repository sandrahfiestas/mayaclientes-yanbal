import React from 'react';
import logoYanbal from '../images/logo.png';

function Header() {
  return (
    <div className="container-header">
      <div className="div-logo-yanbal">
        <img src={logoYanbal} className="logo-yanbal" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
