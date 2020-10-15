import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import book from '../images/icon_book_on.png';
import next from '../images/icon_next_on.png';
import nextOff from '../images/icon_next_off.png';
import headerOff from '../images/icon_heart_off.png';
import productsoff from '../images/icon_products_off.png';
import moneyOff from '../images/icon_money_off.png';
import birthdayOff from '../images/icon_birthday_off.png';
import { addProducts } from '../controller/firestore';

function Welcome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('../products.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => {
      try {
        return response.json();
      } catch (e) {
        return Promise.reject(new Error('No se encontraron los datos'));
      }
    })
      .then((datos) => {
        setData(datos);
      })
      .catch(() => console.log('No se encontró el archivo'));
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    data.forEach((element) => {
      console.log('acá');
      addProducts(element);
    });
  };

  return (
    <div className="div-welcome">

      <button type="button" onClick={handleSend}>Send</button>
      <h5 className="welcome-hi">¡Hola, ...!</h5>
      <p className="txt-p space-p txt-color-normal">Mira todo lo que tenemos para ti hoy:</p>

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

      <button type="button" className="btn-options">
        <img src={headerOff} className="icon_heart_off" alt="icon_heart_off" />
        <div className="div-txt">
          <p className="txt-title txt-color-off">A tus clientes les puede gustar</p>
          <p className="txt-p txt-color-off">Te dejamos algunas ideas de productos y promociones que les pueden interesar</p>
        </div>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>

      <button type="button" className="btn-options">
        <img src={productsoff} className="icon_products_off" alt="icon_products_off" />
        <div className="div-txt">
          <p className="txt-title txt-color-off">Se les están acabando  estos productos!</p>
          <p className="txt-p txt-color-off">Hace tiempo que tus clientes te compraron estos productos.Es tiempo de reponerlos!</p>
        </div>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>

      <button type="button" className="btn-options">
        <img src={moneyOff} className="icon_money_off" alt="icon_money_off" />
        <div className="div-txt">
          <p className="txt-title txt-color-off">Hoy toca cobrarle a estos clientes</p>
          <p className="txt-p txt-color-off">Mira la lista de los clientes que deben pagarte y enviales un mensaje de forma facil</p>
        </div>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>

      <button type="button" className="btn-options">
        <img src={birthdayOff} className="icon_birthday_off" alt="icon_birthday_off" />
        <div className="div-txt">
          <p className="txt-title txt-color-off">Hoy es cumpleaños de algunos clientes. Engríelos</p>
          {/* <p className="txt-p txt-color-off"></p> */}
        </div>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
    </div>
  );
}

export default Welcome;
