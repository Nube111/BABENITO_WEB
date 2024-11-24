import React from "react";
import "./indexcremo.css";

function CrearModelo(): JSX.Element {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">BABENITO</h1>
        <input
          type="text"
          placeholder="Busque pedidos por fecha, estado o código..."
          className="search-bar"
        />
        <div className="menu">
          <button>Modelos ▼</button>
          <button>Clientes</button>
        </div>
      </header>
      <main className="content">
        <h2 className="breadcrumb">Pedidos &gt; Crear pedido</h2>
        <section className="form-container">
          <div className="form-section">
            <h3>Sobre el modelo</h3>
            <div className="form-grid">
              <input type="text" placeholder="Código de modelo" />
              <div className="image-placeholder">
                <span>Modelo "código de modelo"</span>
                <span>Datos esenciales del modelo...</span>
              </div>
              <input type="text" placeholder="Planta" />
              <input type="text" placeholder="Serie" />
              <input type="text" placeholder="Color de cuero" />
              <button className="model-list-button">Lista de modelos</button>
              <input type="text" placeholder="Código de venta" />
              <input type="text" placeholder="Código de cortado" />
            </div>
          </div>
          <div className="form-section">
            <h3>Forro</h3>
            <input type="text" placeholder="Color" />
            <input type="text" placeholder="Material" />
          </div>
          <div className="form-section">
            <h3>Hilo</h3>
            <input type="text" placeholder="Color" />
            <input type="text" placeholder="Número" />
          </div>
          <div className="form-section">
            <h3>Adorno</h3>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Número" />
          </div>
          <div className="form-section">
            <h3>Picadores</h3>
            <input type="text" placeholder="Código" />
            <input type="text" placeholder="Color" />
            <input type="text" placeholder="Descripción" />
          </div>
          <div className="form-section">
            <h3>Apliques</h3>
            <input type="text" placeholder="Código" />
            <input type="text" placeholder="Color" />
            <input type="text" placeholder="Descripción" />
          </div>
        </section>
        <button className="create-button">Crear modelo</button>
      </main>
    </div>
  );
}

export default CrearModelo;
