import whatsapp from '../images/whatsapp.png';
import phone_number from '../images/phone_number.png';
import React, { useState, useEffect } from 'react';



function Dashboard() {
  
    const [data, setData] = useState([0]);

    useEffect(() => {
        fetch('../products.json')
          .then((response) => response.json())
          .then((datos) => {
            setData(datos);
            // console.log(datos);
          })
      });

    return (
    <>
      <div className="container-component">
        <p className="txt-card m-0">Estos productos podría interesarle a tus clientes.</p>
        <div className="product-card p-1 mb-4">
          <p className="description-card text-left">A <strong>Lourdes Figueroa</strong>, podría interesarle estos productos</p>
          <div className="d-flex">
            <div className="d-flex w-100">
              <div className="w-100">
                <img src='https://user-images.githubusercontent.com/60890508/96071205-3f383280-0e67-11eb-844e-e1f5d65e11b2.jpg'  className="product-call" />
                <p className="m-2">S/35.50</p>
              </div>
              <div className="w-100">
                <img src='https://user-images.githubusercontent.com/60890508/96071187-33e50700-0e67-11eb-9ab7-2cbdafdabd00.jpg'  className="product-call" />
                <p className="m-2">S/78.50</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <a 
                href="https://wa.me/51935156593/?text=%C2%A1Hola Lourdes! Creo que estos productos podrían interesarte y se adecuarán perfecto a tus preferencias! Y además están con un precio increíble!
                    - Limpiador Energía Vital - S/ 35.50
                    - Elixir de vida ojos - S/ 78.50
                    Coméntame si estás interesada! Feliz de asesorarte 🧡%0A%0A%0A%0A" 
                className="m-2"
              >
                <img src={whatsapp} />
              </a>
              <a href="tel:935156593" className="m-2"><img src={phone_number} /></a>
            </div>
          </div>
        </div>

        <div className="product-card p-1 mb-4">
          <p className="description-card text-left">A <strong>Clarissa León</strong>, podría interesarle estos productos</p>
          <div className="d-flex">
            <div className="d-flex w-100">
              <div className="w-100">
                <img src='https://user-images.githubusercontent.com/60890508/96071117-16b03880-0e67-11eb-80b8-7a7d03dd555e.jpg'  className="product-call" />
                <p className="m-2">S/67</p>
              </div>
              <div className="w-100">
                <img src='https://user-images.githubusercontent.com/60890508/96071249-50813f00-0e67-11eb-93d6-87ca0af5350b.jpg'  className="product-call" />
                <p className="m-2">S/78</p>
              </div>
              <div className="w-100">
                <img src='https://user-images.githubusercontent.com/60890508/96071139-1f087380-0e67-11eb-92ed-5a20b5ab383e.jpg'  className="product-call" />
                <p className="m-2">S/46</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <a 
                href="https://wa.me/51935156593/?text=%C2%A1Hola Clarissa! Creo que estos productos podrían interesarte y se adecuarán perfecto a tus preferencias! Y además están con un precio increíble!
                    - BB Cream Sentiva - S/ 67
                    - Energia Vital Gel - S/ 78
                    - Demaquillador Doble Fase - S/ 46
                    Coméntame si estás interesada! Feliz de asesorarte 🧡%0A%0A%0A%0A" 
                className="m-2"
              >
                <img src={whatsapp} />
              </a>
              <a href="tel:935156593" className="m-2"><img src={phone_number} /></a>
            </div>
          </div>
        </div>

        <div className="product-card p-1 mb-4">
          <p className="description-card text-left">A <strong>Adrián Sanchez</strong>, podría interesarle estos productos</p>
          <div className="d-flex">
            <div className="d-flex w-100">
              <div className="w-100">
                <img src='https://user-images.githubusercontent.com/60890508/96071226-46f7d700-0e67-11eb-8106-b8083fcf62cb.jpg'  className="product-call" />
                <p className="m-2">S/60</p>
              </div>
              <div className="w-100">
                <img src='https://user-images.githubusercontent.com/60890508/96071052-fed8b480-0e66-11eb-8464-06ed4c9a3e0a.jpg'  className="product-call" />
                <p className="m-2">S/27</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <a 
                href="https://wa.me/51935156593/?text=%C2%A1Hola Adrián! Creo que estos productos podrían interesarte y se adecuarán perfecto a tus preferencias! Y además están con un precio increíble!
                    - Mascarilla Facial Sentiva - S/ 60
                    - Crema Concha de Nácar - S/ 27
                    Coméntame si estás interesado! Feliz de asesorarte 🧡%0A%0A%0A%0A" 
                className="m-2"
              >
                <img src={whatsapp} />
              </a>
              <a href="tel:935156593" className="m-2"><img src={phone_number} /></a>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
export default Dashboard;
