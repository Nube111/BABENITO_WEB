import React, { useState } from "react";
import "./indexsobre.css";

function SobrePedido(): JSX.Element {
  const [modelo, setModelo] = useState("901");
  const [serie, setSerie] = useState("14-16");
  const [tallas, setTallas] = useState({ "14": 14, "15": 10, "16": 10 });
  const [clienteExistente, setClienteExistente] = useState("");
  const [clienteNuevo, setClienteNuevo] = useState({
    primerNombre: "Pedro",
    primerApellido: "Viera",
    segundoNombre: "Pablo",
    segundoApellido: "Castañeda",
    ruc: "20190388564",
    razonSocial: "Empresa S.A.C",
    dni: "72365296",
    precio: "600",
  });

  const handleTallasChange = (key: string, value: string) => {
    setTallas({ ...tallas, [key]: parseInt(value) || 0 });
  };

  const handleClienteNuevoChange = (key: string, value: string) => {
    setClienteNuevo({ ...clienteNuevo, [key]: value });
  };

  return (
    <div className="container-sobre">
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
        <section className="model-section">
          <div className="model-left">
            <label htmlFor="model-code" className="section-label">
              Elección de modelo
            </label>
            <input
              id="model-code"
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              className="model-input"
            />
            <div className="model-preview">
              <img src="./modelo.jpg" alt="Modelo" className="model-image" />
              <p className="model-title">Modelo {modelo}</p>
              <p className="model-description">Datos esenciales del modelo...</p>
            </div>
          </div>
          <div className="model-right">
            <p className="info-text">
              En caso de no recordar el código del modelo, use el botón de lista
              de modelos para visualizar todos los modelos y sus códigos. Puede
              seleccionar un modelo para autocompletar el código.
            </p>
            <button className="model-list-button">Lista de modelos</button>
          </div>
        </section>
        <section className="order-details">
          <h3 className="section-label">Datos específicos del pedido</h3>
          <div className="form-grid">
            <input
              type="text"
              value={serie}
              onChange={(e) => setSerie(e.target.value)}
              className="order-input"
              placeholder="Serie"
            />
            <button className="search-button">Buscar serie</button>
            <div className="sizes">
              <label className="size-label">Cantidad por tallas:</label>
              {Object.keys(tallas).map((talla) => (
                <input
                  key={talla}
                  type="text"
                  value={tallas[talla]}
                  onChange={(e) => handleTallasChange(talla, e.target.value)}
                  className="size-input"
                />
              ))}
            </div>
          </div>
        </section>
        <section className="client-details">
          <h3 className="section-label">Cliente</h3>
          <div className="form-grid">
            <div className="existing-client">
              <label>Cliente existente:</label>
              <input
                type="text"
                value={clienteExistente}
                onChange={(e) => setClienteExistente(e.target.value)}
                className="client-input"
                placeholder="Nombre del cliente..."
              />
              <button className="search-button">Buscar cliente existente</button>
            </div>
            <div className="new-client">
              <label>Cliente nuevo:</label>
              {Object.keys(clienteNuevo).map((key) => (
                <input
                  key={key}
                  type="text"
                  placeholder={key
                    .split(/(?=[A-Z])/)
                    .join(" ")
                    .toUpperCase()}
                  value={clienteNuevo[key as keyof typeof clienteNuevo]}
                  onChange={(e) =>
                    handleClienteNuevoChange(key, e.target.value)
                  }
                  className="client-input"
                />
              ))}
            </div>
          </div>
        </section>
        <button className="update-button">Actualizar pedido</button>
      </main>
    </div>
  );
}

export default SobrePedido;