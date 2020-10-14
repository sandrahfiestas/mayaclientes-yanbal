import React from 'react';
import { Link } from 'react-router-dom';
import book from '../images/icon_book_on.png';
import next from '../images/icon_next_on.png';
import nextOff from '../images/icon_next_off.png';
import headerOff from '../images/icon_heart_off.png';
import productsoff from '../images/icon_products_off.png';
import moneyOff from '../images/icon_money_off.png';
import birthdayOff from '../images/icon_birthday_off.png';

function Welcome() {
  return (
    <div className="div-welcome">
      <h5 className="welcome-hi">¡Hola, ...!</h5>
      <Link to="/register">
        <button type="button" className="btn-options">
          <img src={book} className="icon-book" alt="icon-book" />
          <p className="txt-options">Agregar nuevos clientes</p>
          <img src={next} className="icon-next" alt="icon-next" />
        </button>
      </Link>
      <button type="button" className="btn-options">
        <img src={headerOff} className="icon_heart_off" alt="icon_heart_off" />
        <p className="txt-options-off">A ellos les puede gustar</p>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
      <button type="button" className="btn-options">
        <img src={productsoff} className="icon_products_off" alt="icon_products_off" />
        <p className="txt-options-off">A tus clientes se les está acabando algunos productos, mira a quienes</p>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
      <button type="button" className="btn-options">
        <img src={moneyOff} className="icon_money_off" alt="icon_money_off" />
        <p className="txt-options-off">Hoy toca cobrarle a estos clientes</p>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
      <button type="button" className="btn-options">
        <img src={birthdayOff} className="icon_birthday_off" alt="icon_birthday_off" />
        <p className="txt-options-off">Hoy es cumpleaños de algunos clientes. Engríelos</p>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
    </div>
  );
}

export default Welcome;
