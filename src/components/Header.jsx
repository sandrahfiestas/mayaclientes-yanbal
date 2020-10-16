import React from 'react';
import logoYanbal from '../images/logo.png';

function Header() {
  return (
    <div className="div-title">
      <img src={logoYanbal} className="logo-yanbal" alt="logo" />
    </div>
  );
}

export default Header;
