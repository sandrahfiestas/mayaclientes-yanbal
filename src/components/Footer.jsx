import React from 'react';
import client from '../images/icon_client.png';
import profile from '../images/icon_profile.png';

function Footer() {
  return (
    <div className="div-footer">
      <div>
        <img src={client} className="icon-client" alt="icon-client" />
        {/* <p className="txt-option-footer">Clientes</p> */}
      </div>
      <div>
        <img src={profile} className="icon-profile" alt="icon-profile" />
        {/* <p className="txt-option-footer">Clientes</p> */}
      </div>
    </div>
  )
}

export default Footer;