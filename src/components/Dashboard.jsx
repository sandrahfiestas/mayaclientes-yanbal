import React, { useState } from 'react';
import whatsapp from '../images/whatsapp.png';
import llamada from '../images/llamada.png';



function Dashboard() {

  


   


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
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                 
                        <a href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" className="rounded icon-social"><img src={whatsapp} /></a>
                        <a href="tel:+910469991" className="rounded  icon-social1"><img src={llamada} /></a>
                  
                </div>

                <div className="card">
                    <p className="description-card">A María Santos, podría interesarle estos productos</p>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                   
                        <a className="rounded   icon-social" href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" ><img src={whatsapp} /></a>
                        <a href="tel:+910469991" className="rounded  icon-social1"><img src={llamada} /></a>
                   
              
                </div>
            </div>
        </>
    );
}

export default Dashboard;