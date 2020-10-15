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
    // addProducts({
    //   sap: 20011527,
    //   jr: '010103A000',
    //   cod_fam: 1,
    //   fam: 'COSMETICOS',
    //   cod_cat: 1,
    //   cat: 'TRATAMIENTO FACIAL',
    //   cod_sub: 3,
    //   sub_cat: 'HIDRATANTES',
    //   cod_lin: 'A0',
    //   lin: 'HIDRATANTES',
    //   'cod-gama': 0,
    //   gam: 'N.A.',
    //   tex_bre: 'BB CREAM MATT SPF 25 BEIGE-2',
    //   FIELD14: '40',
    //   FIELD15: 'ml',
    //   FIELD16: 67,
    //   FIELD17: 'SENTIVA BB CREAM MATT SPF 25',
    //   dur: 2,
    //   'eda-min': 20,
    //   'eda-max': 110,
    //   gen: 'Todos',
    //   int_1: 'Cubrir imperfecciones',
    //   int_2: 'Hidratación con color',
    //   int_3: 'Grasa',
    //   int_4: 'Brillo',
    //   int_5: '',
    //   int_6: '',
    //   int_7: '',
    //   'int-8': '',
    // });
  };

  return (
    <div className="div-welcome">
      ´
      <button onClick={handleSend}>Send</button>
      <h5 className="welcome-hi">¡Hola, ...!</h5>
      <Link to="/client">
        <button className="btn-options">
          <img src={book} className="icon-book" alt="icon-book" />
          <p className="txt-options">Agregar nuevos clientes</p>
          <img src={next} className="icon-next" alt="icon-next" />
        </button>
      </Link>
      <button className="btn-options">
        <img src={headerOff} className="icon_heart_off" alt="icon_heart_off" />
        <p className="txt-options-off">A ellos les puede gustar</p>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
      <button className="btn-options">
        <img src={productsoff} className="icon_products_off" alt="icon_products_off" />
        <p className="txt-options-off">A tus clientes se les está acabando algunos productos, mira a quienes</p>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
      <button className="btn-options">
        <img src={moneyOff} className="icon_money_off" alt="icon_money_off" />
        <p className="txt-options-off">Hoy toca cobrarle a estos clientes</p>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
      <button className="btn-options">
        <img src={birthdayOff} className="icon_birthday_off" alt="icon_birthday_off" />
        <p className="txt-options-off">Hoy es cumpleaños de algunos clientes. Engríelos</p>
        <img src={nextOff} className="icon_next_off" alt="icon_next_off" />
      </button>
    </div>
  );
}

export default Welcome;
