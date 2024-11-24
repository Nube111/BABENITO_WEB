import React from "react";
import "./indexsobre.css";


function SobrePedido(): JSX.Element {
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
        <h2 className="breadcrumb">Pedidos &gt; Sobre pedido</h2>
        <section className="form-container">
          <div className="model-selection">
            <h3>Elección de modelo</h3>
            <div className="model-details">
              <input type="text" placeholder="Código del modelo" value="901" />
              <div className="model-info">
                <img
                  src="./modelo.jpg"
                  alt="Modelo"
                  className="model-image"
                />
                <div>
                  <h4>Modelo 901</h4>
                  <p>Datos esenciales del modelo...</p>
                </div>
              </div>
              <p className="info-text">
                En caso de no recordar el código del modelo en la parte derecha
                tenemos un botón de lista de modelos donde podremos visualizar
                todos los modelos y sus códigos, puede seleccionar el modelo
                que se busca y el código se autocompletará. En caso de
                seleccionar el modelo equivocado puede volver a seleccionar el
                botón lista de modelos y volver a elegir.
              </p>
              <button className="model-list-button">Lista de modelos</button>
            </div>
          </div>
          <div className="order-details">
            <h3>Datos específicos del pedido</h3>
            <div className="form-grid">
              <input type="text" placeholder="Serie" value="14-16" />
              <button className="search-button">Buscar serie</button>
              <div className="sizes">
                <label>Cantidad por tallas:</label>
                <input type="text" placeholder="14" value="14" />
                <input type="text" placeholder="15" value="10" />
                <input type="text" placeholder="16" value="10" />
              </div>
            </div>
          </div>
          <div className="client-details">
            <h3>Cliente</h3>
            <div className="form-grid">
              <div className="existing-client">
                <label>Cliente existente:</label>
                <input
                  type="text"
                  placeholder="Nombre del cliente..."
                />
                <button className="search-button">Buscar cliente existente</button>
              </div>
              <div className="new-client">
                <label>Cliente nuevo:</label>
                <input type="text" placeholder="Primer nombre" value="Pedro" />
                <input
                  type="text"
                  placeholder="Primer apellido"
                  value="Viera"
                />
                <input
                  type="text"
                  placeholder="Segundo nombre"
                  value="Pablo"
                />
                <input
                  type="text"
                  placeholder="Segundo apellido"
                  value="Castañeda"
                />
                <input type="text" placeholder="RUC" value="20190388564" />
                <input type="text" placeholder="Razón social" value="Empresa S.A.C" />
                <input type="text" placeholder="DNI" value="72365296" />
                <input type="text" placeholder="Precio" value="600" />
              </div>
            </div>
          </div>
        </section>
        <button className="update-button">Actualizar pedido</button>
      </main>
    </div>
  );
}

export default SobrePedido;