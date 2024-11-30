import React from "react";
import "./indexcremo.css";

function CrearModelo(): JSX.Element {

    return (
      <div className="container-pedido">
        <header className="header">
          <h1 className="logo">BABENITO</h1>
          <input
            type="text"
            placeholder="Busque pedidos por fecha, estado o código..."
            className="search-bar"
          />
          <div className="menu">
            <span>Modelos</span>
            <span>Clientes</span>
            <img
              src="./menu-icon.png" // Cambia por el ícono de menú real
              alt="Menú"
              className="menu-icon"
            />
          </div>
        </header>
        <main className="main-content">
          <div className="breadcrumb">
            <a href="#">Pedidos</a> &gt; <span>Crear pedido</span>
          </div>
          <section className="model-section">
            <div className="model-left">
              <label htmlFor="model-code" className="section-label">
                Elección de modelo
              </label>
              <input
                id="model-code"
                type="text"
                placeholder="Código de modelo..."
                className="model-input"
              />
              <div className="model-preview">
                <img src="./shoes.jpg" alt="Modelo" className="model-image" />
                <p className="model-title">Modelo "código de modelo"</p>
                <p className="model-description">Datos esenciales del modelo...</p>
              </div>
            </div>
            <div className="model-right">
              <p className="model-info">
                En caso de no recordar el código del modelo en la parte derecha
                tenemos un botón de lista de modelos donde podremos visualizar
                todos los modelos y sus códigos, puede seleccionar el modelo que
                se busca y el código se autocompletará. En caso de seleccionar el
                modelo equivocado puede volver a seleccionar el botón lista de
                modelos y volver a elegir.
              </p>
              <button className="button-secondary">Lista de modelos</button>
            </div>
          </section>
          <section className="order-section">
            <h3 className="section-label">Datos específicos del pedido</h3>
            <div className="order-details">
              <input
                type="text"
                placeholder="Escribir serie..."
                className="order-input"
              />
              <button className="button-primary">Buscar serie</button>
              <div className="sizes">
                <label className="size-label">Cantidad por tallas:</label>
                <input type="text" placeholder="14" className="size-input" />
                <input type="text" placeholder="15" className="size-input" />
                <input type="text" placeholder="16" className="size-input" />
              </div>
            </div>
          </section>
          <section className="client-section">
            <h3 className="section-label">Cliente</h3>
            <div className="client-existing">
              <label htmlFor="existing-client" className="client-label">
                Cliente existente:
              </label>
              <input
                id="existing-client"
                type="text"
                placeholder="Nombre del cliente..."
                className="client-input"
              />
              <button className="button-primary">Buscar cliente existente</button>
            </div>
            <div className="client-new">
              <h4>Cliente nuevo:</h4>
              <div className="client-grid">
                <input type="text" placeholder="Primer nombre" />
                <input type="text" placeholder="Primer apellido" />
                <input type="text" placeholder="RUC" />
                <input type="text" placeholder="DNI" />
                <input type="text" placeholder="Segundo nombre" />
                <input type="text" placeholder="Segundo apellido" />
                <input type="text" placeholder="Razón social" />
                <input type="text" placeholder="Precio" />
              </div>
            </div>
          </section>
          <div className="order-actions">
            <p className="instructions">
              Si completaste todos los datos requeridos, puedes darle a crear
              pedido para finalizar el proceso.
            </p>
            <button className="button-primary create-order-button">
              Crear pedido
            </button>
          </div>
        </main>
      </div>
    );
  }
  
export default CrearModelo;
