import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import book from '../images/icon_book_on.png';
import next from '../images/icon_next_on.png';
import headerOn from '../images/icon_heart_on.png';
import productsOn from '../images/icon_products_on.png';
import moneyOn from '../images/icon_money_on.png';
import birthdayOn from '../images/icon_birthday_on.png';
import { addProducts } from '../controller/firestore';

function Welcome() {
  return (
    <div className="container-component">

      <div className="div-hi">
        <h5 className="welcome-hi">¡Hola!</h5>
        <p className="txt-p space-p txt-color-normal">Mira todo lo que tenemos para ti hoy:</p>
      </div>
      
      <div className="btn-welcome">
      <Link to="/client">
        <button type="button" className="btn-options">
          <img src={book} className="icon-book" alt="icon-book" />
          <div className="div-txt">
            <p className="txt-title txt-color-on">Agregar nuevos clientes</p>
            <p className="txt-p txt-color-normal">Ten la información de tus clientes a la mano y te ayudaremos a ofrecerle más productos</p>
          </div>
          <img src={next} className="icon-next" alt="icon-next" />
        </button>
      </Link>

      <Link to="/order">
        <button type="button" className="btn-options">
          <img src={productsOn} className="icon_products_off" alt="icon_products_off" />
          <div className="div-txt">
            <p className="txt-title txt-color-on">Registra pedidos para tus clientes!</p>
            <p className="txt-p txt-color-normal">Podrás fidelizar a tus clientes tomando nota de todos sus requerimientos</p>
          </div>
          <img src={next} className="icon_next" alt="icon_next" />
        </button>
      </Link>

      <Link to="/oportunity">
        <button type="button" className="btn-options">
          <img src={headerOn} className="icon_heart_off" alt="icon_heart_off" />
          <div className="div-txt">
            <p className="txt-title txt-color-on">A tus clientes les puede gustar</p>
            <p className="txt-p txt-color-normal">Te dejamos algunas ideas de productos y promociones que les pueden interesar</p>
          </div>
          <img src={next} className="icon_next" alt="icon_next" />
        </button>
      </Link>

      <button type="button" className="btn-options">
        <img src={moneyOn} className="icon_money_on" alt="icon_money_off" />
        <div className="div-txt">
          <p className="txt-title txt-color-on">Hoy toca cobrarle a estos clientes</p>
          <p className="txt-p txt-color-normal">Mira la lista de los clientes que deben pagarte y enviales un mensaje de forma facil</p>
        </div>
        <img src={next} className="icon_next" alt="icon_next" />
      </button>

      <button type="button" className="btn-options">
        <img src={birthdayOn} className="icon_birthday_off" alt="icon_birthday_off" />
        <div className="div-txt">
          <p className="txt-title txt-color-on">Hoy es cumpleaños de algunos clientes. ¡Engríelos!</p>
        </div>
        <img src={next} className="icon_next" alt="icon_next" />
      </button>
      </div>

    </div>
  );
}

export default Welcome;
