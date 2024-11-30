import React from "react";
import "./indexcrepe.css";
import "./FormularioCrearModelo"; // 

function CrearPedido(): JSX.Element {
  return (
    <div className="crear-pedido-container">
      <header className="crear-pedido-header">
        <h1 className="crear-pedido-logo">BABENITO</h1>
        <input
          type="text"
          placeholder="Busque pedidos por fecha, estado o código..."
          className="crear-pedido-search-bar"
        />
        <div className="crear-pedido-menu">
          <span>Modelos</span>
          <span>Clientes</span>
          <img
            src="./menu-icon.png"
            alt="Menú"
            className="crear-pedido-menu-icon"
          />
        </div>
      </header>
      <main className="crear-pedido-main-content">
        <div className="crear-pedido-breadcrumb">
          <a href="#">Pedidos</a> &gt; <span>Crear Pedido</span>
        </div>
        <section className="crear-pedido-model-section">
          <div className="crear-pedido-model-left">
            <div className="crear-pedido-model-preview">
              <img
                src="./model-placeholder.png"
                alt="Modelo"
                className="crear-pedido-model-image"
              />
              <p className="crear-pedido-model-title">Modelo "código de modelo"</p>
              <p className="crear-pedido-model-description">
                Datos esenciales del modelo...
              </p>
            </div>
          </div>
          <div className="crear-pedido-model-right">
            <input
              type="text"
              placeholder="Planta"
              className="crear-pedido-model-input"
            />
            <input
              type="text"
              placeholder="Serie"
              className="crear-pedido-model-input"
            />
            <input
              type="text"
              placeholder="Color de cuero"
              className="crear-pedido-model-input"
            />
            <input
              type="text"
              placeholder="Código de venta"
              className="crear-pedido-model-input"
            />
            <input
              type="text"
              placeholder="Código de cortada"
              className="crear-pedido-model-input"
            />
          </div>
        </section>
        <section className="crear-pedido-attributes-section">
          <div className="crear-pedido-attribute">
            <label className="crear-pedido-section-label">Forro</label>
            <input type="text" placeholder="Color" className="crear-pedido-model-input" />
            <input type="text" placeholder="Material" className="crear-pedido-model-input" />
          </div>
          <div className="crear-pedido-attribute">
            <label className="crear-pedido-section-label">Hilo</label>
            <input type="text" placeholder="Color" className="crear-pedido-model-input" />
            <input type="text" placeholder="Número" className="crear-pedido-model-input" />
          </div>
          <div className="crear-pedido-attribute">
            <label className="crear-pedido-section-label">Adorno</label>
            <input type="text" placeholder="Nombre" className="crear-pedido-model-input" />
            <input type="text" placeholder="Número" className="crear-pedido-model-input" />
          </div>
          <div className="crear-pedido-attribute">
            <label className="crear-pedido-section-label">Picadores</label>
            <input type="text" placeholder="Código" className="crear-pedido-model-input" />
            <input type="text" placeholder="Color" className="crear-pedido-model-input" />
            <input type="text" placeholder="Descripción" className="crear-pedido-model-input" />
          </div>
          <div className="crear-pedido-attribute">
            <label className="crear-pedido-section-label">Apliques</label>
            <input type="text" placeholder="Código" className="crear-pedido-model-input" />
            <input type="text" placeholder="Color" className="crear-pedido-model-input" />
            <input type="text" placeholder="Descripción" className="crear-pedido-model-input" />
          </div>
        </section>
        <section className="crear-pedido-button-section">
          <button className="crear-pedido-submit-button">Crear Modelo</button>
        </section>
      </main>
    </div>
  );
}

export default CrearPedido;

