import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import book from '../images/icon_book_on.png';
import next from '../images/icon_next_on.png';
// import nextOff from '../images/icon_next_off.png';
import headerOn from '../images/icon_heart_on.png';
import productsOn from '../images/icon_products_on.png';
import moneyOn from '../images/icon_money_on.png';
import birthdayOn from '../images/icon_birthday_on.png';
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
        <img src={productsOn} className="icon_products_off" alt="icon_products_off" />
        <div className="div-txt">
          <p className="txt-title txt-color-on">Se les están acabando  estos productos!</p>
          <p className="txt-p txt-color-normal">Hace tiempo que tus clientes te compraron estos productos.Es tiempo de reponerlos!</p>
        </div>
        <img src={next} className="icon_next" alt="icon_next" />
      </button>

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
          <p className="txt-title txt-color-on">Hoy es cumpleaños de algunos clientes. Engríelos</p>
        </div>
        <img src={next} className="icon_next" alt="icon_next" />
      </button>
    </div>
  );
}

export default Welcome;
