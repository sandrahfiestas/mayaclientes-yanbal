import React from 'react';



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
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <div>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <p className="description-card">A María Santos, podría interesarle estos productos</p>
                    <div>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <div>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;