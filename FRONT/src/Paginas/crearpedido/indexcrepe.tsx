import React from "react";
import "./indexcrepe.css";

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
            src="./menu-icon.png" // Cambia por el ícono de menú real
            alt="Menú"
            className="crear-pedido-menu-icon"
          />
        </div>
      </header>
      <main className="crear-pedido-main-content">
        <div className="crear-pedido-breadcrumb">
          <a href="#">Pedidos</a> &gt; <span>Crear pedido</span>
        </div>
        <section className="crear-pedido-model-section">
          <div className="crear-pedido-model-left">
            <label htmlFor="model-code" className="crear-pedido-section-label">
              Elección de modelo
            </label>
            <input
              id="model-code"
              type="text"
              placeholder="Código de modelo..."
              className="crear-pedido-model-input"
            />
            <div className="crear-pedido-model-preview">
              <img src="./shoes.jpg" alt="Modelo" className="crear-pedido-model-image" />
              <p className="crear-pedido-model-title">Modelo "código de modelo"</p>
              <p className="crear-pedido-model-description">Datos esenciales del modelo...</p>
            </div>
          </div>
          <div className="crear-pedido-model-right">
            <p className="crear-pedido-model-info">
              En caso de no recordar el código del modelo en la parte derecha
              tenemos un botón de lista de modelos donde podremos visualizar
              todos los modelos y sus códigos, puede seleccionar el modelo que
              se busca y el código se autocompletará. En caso de seleccionar el
              modelo equivocado puede volver a seleccionar el botón lista de
            </p>
          </div>
        </section>
        <section className="crear-pedido-attributes-section">
          <div className="crear-pedido-attribute">
            <label htmlFor="forro" className="crear-pedido-section-label">Forro</label>
            <input id="forro" type="text" placeholder="Forro..." className="crear-pedido-model-input" />
            <input id="forro-color" type="text" placeholder="Color del forro..." className="crear-pedido-model-input" />
            <input id="forro-material" type="text" placeholder="Material del forro..." className="crear-pedido-model-input" />
          </div>
          <div className="crear-pedido-attribute">
            <label htmlFor="hilo" className="crear-pedido-section-label">Hilo</label>
            <input id="hilo" type="text" placeholder="Hilo..." className="crear-pedido-model-input" />
            <input id="hilo-color" type="text" placeholder="Color del hilo..." className="crear-pedido-model-input" />
            <input id="hilo-material" type="text" placeholder="Material del hilo..." className="crear-pedido-model-input" />
          </div>
          <div className="crear-pedido-attribute">
            <label htmlFor="adorno" className="crear-pedido-section-label">Adorno</label>
            <input id="adorno" type="text" placeholder="Adorno..." className="crear-pedido-model-input" />
            <input id="adorno-color" type="text" placeholder="Color del adorno..." className="crear-pedido-model-input" />
            <input id="adorno-material" type="text" placeholder="Material del adorno..." className="crear-pedido-model-input" />
          </div>
          <div className="crear-pedido-attribute">
            <label htmlFor="picadores" className="crear-pedido-section-label">Picadores</label>
            <input id="picadores" type="text" placeholder="Picadores..." className="crear-pedido-model-input" />
            <input id="picadores-color" type="text" placeholder="Color de los picadores..." className="crear-pedido-model-input" />
            <input id="picadores-material" type="text" placeholder="Material de los picadores..." className="crear-pedido-model-input" />
          </div>
          <div className="crear-pedido-attribute">
            <label htmlFor="apliques" className="crear-pedido-section-label">Apliques</label>
            <input id="apliques" type="text" placeholder="Apliques..." className="crear-pedido-model-input" />
            <input id="apliques-color" type="text" placeholder="Color de los apliques..." className="crear-pedido-model-input" />
            <input id="apliques-material" type="text" placeholder="Material de los apliques..." className="crear-pedido-model-input" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default CrearPedido;