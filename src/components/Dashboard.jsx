import whatsapp from '../images/whatsapp.png';
import llamada from '../images/llamada.png';
import React, { useState, useEffect } from 'react';



function Dashboard() {

  
    const [data, setData] = useState([0]);

    //lectura del json
    useEffect(() => {
        fetch('../products.json')
          .then((response) => response.json())
          .then((datos) => {
            setData(datos);
            console.log(datos);
          })
      });

    return (
        <>
         <div className="nav">
              <button className="btn-nav" >
                <a>Clientes</a>
               </button>
                <button className="btn-nav">
                  <a>Cobranzas</a>
                </button>
                <button className="btn-nav">
                  <a>Oportunidades</a>
                </button>
            <div>

                </div>
            </div>

            <div className="div-cards">
                <p className="txt-card">Estos productos podría interesarle a tus clientes.</p>
           
                <div className="card">
                 <p className="description-card">A María Santos, podría interesarle estos productos</p>
                    <div className="div-items">
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071170-2b8ccc00-0e67-11eb-8613-071b328a064b.jpg' alt="imagen" /> 
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071166-2a5b9f00-0e67-11eb-9e17-4432c6b5154d.jpg' alt="imagen" /> 
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071048-fd0ef100-0e66-11eb-9da2-b148efcb2625.jpg' alt="imagen" /> 
                    </div>
                 
                        <a href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" className="rounded icon-social"><img src={whatsapp} /></a>
                        <a href="tel:910469991" className="rounded  icon-social1"><img src={llamada} /></a>
                  
                </div>

                <div className="card">
                 <p className="description-card">A María Santos, podría interesarle estos productos</p>
                    <div className="div-items">
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071139-1f087380-0e67-11eb-92ed-5a20b5ab383e.jpg' alt="imagen" /> 
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071226-46f7d700-0e67-11eb-8106-b8083fcf62cb.jpg' alt="imagen" /> 
                       <img className="img" src='https://user-images.githubusercontent.com/60890508/96071052-fed8b480-0e66-11eb-8464-06ed4c9a3e0a.jpg' alt="imagen" /> 
                    </div>
                   
                        <a className="rounded   icon-social" href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" ><img src={whatsapp} /></a>
                        <a href="tel:+910469991" className="rounded  icon-social1"><img src={llamada} /></a>
     
                </div>

            </div>
        </>
    );
}
export default Dashboard;