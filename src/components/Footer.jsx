import React from 'react';
import home from '../images/icon-home.png';
import client from '../images/icon_client.png';
import profile from '../images/icon_profile.png';

function Footer() {
  return (
    <div className="div-footer">
      <div>
        <img src={home} className="icon-home" alt="icon-home" />
      </div>

      <div>
        <img src={client} className="icon-client" alt="icon-client" />
      </div>

      <div>
        <img src={profile} className="icon-profile" alt="icon-profile" />
      </div>

    </div>
  );
}

export default Footer;
